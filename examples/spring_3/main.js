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
    position: vector.create(w * Math.random() + (radius * 2), h * Math.random() - (radius * 2)),
    magnitude: utils.randomBetween(1, 10),
    direction: utils.randomBetween(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: vector.create(0.95, 0.95),
  });

  const p2 = particle.create({
    position: vector.create(w* Math.random() + (radius * 2), h * Math.random() - (radius * 2)),
    magnitude: utils.randomBetween(1, 10),
    direction: utils.randomBetween(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: vector.create(0.96, 0.96),
  });

  const p3 = particle.create({
    position: vector.create(w* Math.random() + (radius * 2), h * Math.random() - (radius * 2)),
    magnitude: utils.randomBetween(1, 2),
    direction: utils.randomBetween(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: vector.create(0.94, 0.94),
  });

  document.addEventListener("mousemove", function(e) {
    springPoint = vector.create(e.clientX, e.clientY);
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

    shapes.drawLineVec(p3.get("position"), p1.get("position"));
    shapes.drawLineVec(p2.get("position"), p3.get("position"));
    shapes.drawLineVec(p1.get("position"), p2.get("position"));

    rAF(update);
  })();
};
