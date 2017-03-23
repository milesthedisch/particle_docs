window.onload = function() {
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
  let rocketX = 0;
  let rocketY = -0.15;
  let boom = false;

  const cx = w / 2;
  const cy = h / 2;

  function rocketUp(particles) {
    particles.forEach(function(p) {
      p.accelerate(rocketX, rocketY);
      p.updatePos();
    });
  }

  function explode(particles) {
    particles.forEach(function(p) {
      const vL = utils.setLength(Math.random() * 10 + 2, p.state.vx, p.state.vy);
      p.state.vx = vL[0];
      p.state.vy = vL[1];

      const vA = utils.setAngle(Math.random() * Math.PI * 2, p.state.vx, p.state.vy);
      p.state.vx = vA[0];
      p.state.vy = vA[1];
    });
  }

  function fall(particles) {
    particles.forEach(function(p) {
      p.state.width = (p.state.width * 0.95 + 0.001);
      p.state.height = p.state.width;
      p.update(0.98);
    });
  }

  function draw(particles) {
    particles.forEach(function(p) {
      shapes.pRect(p);
    });
  }

  function fireworks(particles) {
    if (!boom) {
      rocketUp(particles);
    }

    if (particles[0].state.y < (h / 8) && !boom) {
      boom = true;
      explode(particles);
    }

    if (boom) {
      fall(particles);
    }
  }

  function generate(numParticles, delta) {
    return particle.generator(numParticles, {
      gravity: 0.2,
      x: cx,
      y: cy + 200,
      vy: -2,
      color: "#000000",
    }, function(ops, i, create) {
      const r = utils.randomBetween(2, delta);
      const newState = Object.assign({}, ops, {
        width: r,
        height: r,
      });

      create(newState);
    });
  }

  particles = generate(numParticles, utils.randomBetween(5, 10));
  update();

  var frame = 0;

  function update(dt) {
    frame++;

    ctx.clearRect(0, 0, w, h);

    if (frame % 150 === 0) {
      boom = false;
      particles = generate(numParticles, utils.randomBetween(5, 10));
    }

    fireworks(particles);
    draw(particles);
    rAF(update);
  };
};
