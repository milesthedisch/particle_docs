window.onload = function () {

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
        position: vector.create(cx, cy + 500),
        velocity: vector.create(0, -2),
      }));
    }
  }

  function rocketUp(particles) {
    particles.forEach(function(p) {
      p.accelerate(rocket);
      p.update();
    });
  }

  function explode(particles) {
    particles.forEach(function(p) {
      p = particles[i];
      p.velocity.setLength(Math.random() * 4 + 4);
      p.velocity.setAngle(Math.random() * Math.PI * 2);
      p.position = vector.create(cx, Math.random() * 10 + 48);
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
      ctx.arc(p.position.getX(), p.position.getY(), 5, 0, Math.PI * 2, false);
      ctx.fill();
    });
  }

  update();

  function update(dt) {
    ctx.clearRect(0, 0, w, h);

    if (!boom) {
      rocketUp(particles);
    }

    if (particles[0].position.getY() > 44 && !boom) {
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
