const particle = new particleLib.Particle();
const vector = new particleLib.Vector();
const utils = particleLib.Utils;

window.onload = function() {
  window.focus();
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const p1 = particle.create({
    direction: -Math.PI,
    radius: 10,
    magnitude: 4,
    vx: 1,
    vy: 1,
    x: w,
    y: h/2,
  });

  const p2 = particle.create({
    direction: Math.PI * 2,
    radius: 10,
    magnitude: 4,
    vx: 1,
    vy: 1,
    x: 0,
    y: h/2,
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    if (utils.collisionCircle(p1, p2)) {
      p1.state.vx = 0;
      p1.state.vy = 0;
      p2.state.vx = 0;
      p2.state.vy = 0;
    }

    p1.update();
    p2.update();

    shapes.pCircle(p1);
    shapes.pCircle(p2);

    rAF(update);
  })();
};
