window.onload = function() {
  const particle = new particleLib.Particle();
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();

  // When using id's the variable is exposed
  const canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);

  const rAF = window.requestAnimationFrame;
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const m1 = {
    state: {
      mass: 3200,
      x: 720,
      y: 50,
    },
  };

  const m2 = {
    state: {
      mass: 3000,
      x: 350,
      y: 290,
    },
  };

  const emitter = {
    x: 50,
    y: 50,
    radius: 5,
  };

  const particles = Particle.generate(100).map(() => {
    const newState = {
      magnitude: utils.lerp(Math.random(), 8, 9),
      mass: 10,
      direction: utils.lerp(Math.random(), Math.PI / 20, Math.PI / 19),
      friction: 0.9999,
      masses: [m1, m2],
      x: emitter.x,
      y: emitter.y,
      radius: emitter.radius,
    };
    return Particle.create(newState);
  });

  (function update(delta) {
    ctx.clearRect(0, 0, w, h);

    for(let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.update();

      if (p.state.x > w ||
          p.state.x < 0 ||
          p.state.y > h ||
          p.state.y < 0) {
        p.state.x = emitter.x;
        p.state.y = emitter.y;
        p.setHeading(utils.lerp(Math.random(), 0, Math.PI / 20));
      }

      shapes.pCircle(p);
    }

    shapes.circle(m1.state.x, m1.state.y, 10);
    shapes.circle(m2.state.x, m2.state.y, 10);
    rAF(update);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
