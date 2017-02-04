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
  let k = 0.01;
  let springLength = 50;

  const heavyObj = particle.create({
    position: vector.create(w* Math.random() + (radius * 2), h * Math.random() - (radius * 2)),
    magnitude: 0,
    direction: 0,
    radius: radius,
    color: "#000000",
    friction: vector.create(0.92, 0.92),
    gravity: vector.create(0, 0.6),
  });

  let springPoint = vector.create(w/2, h/2);

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

    shapes.circle(springPoint.get("x"), springPoint.get("y"));
    shapes.pCircle(heavyObj);
    shapes.drawLineVec(heavyObj.get("position"), springPoint);
    rAF(update);
  })();
};
