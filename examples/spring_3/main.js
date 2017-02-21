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
  let radius = 10;
  let k = 0.005;
  let springLength = 50;

  const p1 = particle.create({
    x: w * Math.random() + (radius * 2),
    y: h * Math.random() - (radius * 2),
    magnitude: utils.randomBetween(1, 10),
    direction: utils.randomBetween(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: 0.95,
  });

  const p2 = particle.create({
    x: w * Math.random() + (radius * 2),
    y: h * Math.random() - (radius * 2),
    magnitude: utils.randomBetween(1, 10),
    direction: utils.randomBetween(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: 0.96,
  });

  const p3 = particle.create({
    x: w * Math.random() + (radius * 2),
    y: h * Math.random() - (radius * 2),
    magnitude: utils.randomBetween(1, 2),
    direction: utils.randomBetween(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: 0.94,
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    p1.springFromTo(p2, springLength, 0.01);
    p2.springFromTo(p3, springLength, 0.01);
    p3.springFromTo(p1, springLength, 0.01);

    p1.update();
    p2.update();
    p3.update();

    shapes.pCircle(p1);
    shapes.pCircle(p2);
    shapes.pCircle(p3);

    shapes.drawLineXY(p3.state.x, p3.state.y, p1.state.x, p1.state.y);
    shapes.drawLineXY(p2.state.x, p2.state.y, p3.state.x, p3.state.y);
    shapes.drawLineXY(p1.state.x, p1.state.y, p2.state.x, p2.state.y);

    rAF(update);
  })();
};
