
window.onload = function() {
  const particle = new particleLib.Particle();

  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);

  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;

  const cx = w / 2;
  const cy = h / 2;

  const p = particle.create({
    x: cx,
    y: cy,
    radius: 10,
    magnitude: 1,
  });

  let ax = 0.5;
  let ay = 0.01;

  update();

  function update() {
    ctx.clearRect(0, 0, w, h);
    p.accelerate(ax, ay);
    p.update();

    shapes.pCircle(p);

    ay += 0.001;
    ax -= 0.02;
    rAF(update);
  }
};
