window.onload = function () {
  const vector = new particleLib.Vector();
  const particle = new particleLib.Particle();
  const utils = particleLib.Utils;

  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  let numParticles = 1000;
  let particles = [];
  let rocket = vector.create(0, -0.15);
  let gravity = vector.create(0, 0.2);
  let boom = false;

  const cx = w / 2;
  const cy = h / 2;

  function rocketUp(particles) {
    particles.forEach(function(p) {
      p.accelerate(rocket);
      p.get("position")["+="](p.get("velocity"));
    });
  }

  function explode(particles) {
    particles.forEach(function(p) {
      p.get("velocity").setLength(Math.random() * 5 + 2);
      p.get("velocity").setAngle(Math.random() * Math.PI * 2);
    });
  }

  function fall(particles) {
    particles.forEach(function(p) {
      p.set("radius", p.get("radius") * 0.95 + 0.001);
      p.update();
    });
  }

  function draw(particles) {
    particles.forEach(function(p) {
      shapes.pCircle(p);
    });
  }

  function fireworks(particles) {
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
  }

  function generate() {
    return particle.generator(numParticles, {gravity: vector.create(0, 0.2)}, function(p) {
      p.set("position", vector.create(cx, cy + 200));
      p.set("velocity", vector.create(0, -2));
      p.set("radius", utils.lerp(Math.random(), 2, 4));
      p.set("color", "#000000");
      return p;
    });
  }

  particles = generate();
  update();

  var frame = 0;

  function update(dt) {
    frame++;

    ctx.clearRect(0, 0, w, h);

    if (frame % 150 == 0) {
      boom = false;
      particles = generate();
    }

    fireworks(particles);  
    draw(particles);
    rAF(update);
  };
};
