window.onload = function () {
  const vector = new particleLib.Vector();
  const particle = new particleLib.Particle();
  const utils = particleLib.Utils;

  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  let numParticles = 50;
  let particles = [];
  let rocket = vector.create(0, -0.15);
  let gravity = vector.create(0, 0.3);
  let boom;

  const cx = w / 2;
  const cy = h / 2;

  function generateParticles(numParticles) {
    for (let i = 0; i < numParticles; i++) {
      particles.push(particle.create({
        position: vector.create(cx, cy + 200),
        velocity: vector.create(0, -2),
        radius: utils.lerp(Math.random(), 2, 4),
      }));
    }
  }

  function rocketUp(particles) {
    particles.forEach(function(p) {
      p.accelerate(rocket);
      p.get("position")["+="](p.get("velocity"));
    });
  }

  function explode(particles) {
    particles.forEach(function(p) {
      p.get("velocity").setLength(Math.random() * 6 + 1);
      p.get("velocity").setAngle(Math.random() * Math.PI * 6);
      p.get("position")["+="](p.get("velocity"));
    });
  }

  function fall(particles) {
    particles.forEach(function(p) {
      p.accelerate(gravity);
      p.update();
    });
  }

  function draw(particles) {
    particles.forEach(function(p) {
      ctx.beginPath();
      ctx.arc(p.get("position").get("x"), p.get("position").get("y"), p.get("radius"), 0, Math.PI * 2, false);
      ctx.fill();
    });
  }

  generateParticles(numParticles);
  update();

  function update(dt) {
    ctx.clearRect(0, 0, w, h);

    if (!boom) {
      rocketUp(particles);
    }

    if (particles[0].get("position").get("y") < (w / 4) && !boom) {
      boom = true;
      explode(particles);
    }

    if (boom) {
      fall(particles);
    }

    draw(particles);
    rAF(update);
  };
};
