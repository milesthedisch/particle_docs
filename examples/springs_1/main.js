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

  // k is the coeffiecent of fricition //
  let k = 0.1;

  const heavyObj = particle.create({
    position: vector.create(w*Math.random() + (radius * 2), h*Math.random() - (radius * 2)),
    magnitude: 0,
    direction: 0,
    radius: radius,
    color: "#000000",
    friction: vector.create(0.9, 0.9),
  });

  // Set the spring point in the center of the screen. //
  let springPoint = vector.create(w/2, h/2);

  // Make the spring follow the mouse pointer. //
  document.addEventListener("mousemove", function(e) {
    springPoint = vector.create(e.clientX, e.clientY);
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    /*
      The distance of between the point and the heavy object mulitplied
      the coeffient vector will give be the acceleration of the object.
      This will make the acceleration vector decrease over distance to the point.
      In other words, the closer the object is the slower it will
      accelerate and the futher its is the faster it will accelerate.
     */

    const distance = springPoint["-"](heavyObj.get("position"));
    const springForce = distance["*"](vector.create(k, k));

    heavyObj.accelerate(springForce);
    heavyObj.update();

    shapes.circle(springPoint.get("x"), springPoint.get("y"));
    shapes.pCircle(heavyObj);
    shapes.drawLineVec(heavyObj.get("position"), springPoint);
    rAF(update);
  })();
};
