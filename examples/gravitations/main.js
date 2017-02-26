window.onload = function () {
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
      mass: 10000,
      x: h / 3,
      y: w / 3,
    },
  };

  const m2 = {
    state: {
      mass: 10000,
      x: h,
      y: w / 3,
    },
  };

  const p = particle.create({
    x: w/2,
    y: h/2,
    magnitude: 10,
    mass: 100,
    direction: utils.randomBetween(0, Math.PI * 2),
    radius: 2,
    friction: 0.98,
    gravitations: [],
  });

  p.addMass(m1);
  p.addMass(m2);

  console.log(p);
  (function update(delta) {
    ctx.clearRect(0, 0, w, h);

    p.update();

    shapes.pCircle(p);
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
