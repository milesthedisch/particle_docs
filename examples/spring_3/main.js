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
    magnitude: utils.randomRange(1, 2),
    direction: utils.randomRange(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: vector.create(0.95, 0.95),
  });

  const p2 = particle.create({
    position: vector.create(w* Math.random() + (radius * 2), h * Math.random() - (radius * 2)),
    magnitude: utils.randomRange(1, 2),
    direction: utils.randomRange(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: vector.create(0.95, 0.95),
  });

  const p3 = particle.create({
    position: vector.create(w* Math.random() + (radius * 2), h * Math.random() - (radius * 2)),
    magnitude: utils.randomRange(1, 2),
    direction: utils.randomRange(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: vector.create(0.95, 0.95),
  });

  document.addEventListener("mousemove", function(e) {
    springPoint = vector.create(e.clientX, e.clientY);
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    spring(p1, p2, springLength);
    spring(p2, p3, springLength);
    spring(p3, p1, springLength);

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

  function spring(p1, p0, offset) {
    var distance = p0.get("position")["-"](p1.get("position"));
    distance.setLength(distance.getLength() - offset);

    var springForce = distance.multiply(vector.create(k, k));
    p1.get("velocity")["+="](springForce);
    p2.get("velocity")["-="](springForce);
  };
};
