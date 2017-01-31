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
  let k = 0.15;
  let springLength = 50;

  const p1 = particle.create({
    position: vector.create(w * Math.random() + (radius * 2), h * Math.random() - (radius * 2)),
    magnitude: utils.randomRange(0, 2),
    direction: utils.randomRange(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: vector.create(0.92, 0.92),
    gravity: vector.create(0, 0.6),
  });

  const p2 = paticle.create({
    position: vector.create(w* Math.random() + (radius * 2), h * Math.random() - (radius * 2)),
    magnitude: utils.randomRange(0, 2),
    direction: utils.randomRange(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: vector.create(0.92, 0.92),
    gravity: vector.create(0, 0.6),
  });

  document.addEventListener("mousemove", function(e) {
    springPoint = vector.create(e.clientX, e.clientY);
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    let distance = springPoint["-"](heavyObj.get("position"));
        distance.setLength(distance.getLength() - springLength);

    const springForce = distance["*"](vector.create(k, k));

    heavyObj.accelerate(springForce);
    heavyObj.update();

    shapes.pCircle(p1);
    shapes.pCircle(p2);
    shapes.drawLineVec(p1.get("position"), p2.get("position"));
    rAF(update);
  })();
};
