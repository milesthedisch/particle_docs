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
  let k = utils.randomBetween(0.1, 0.9);

  const heavyObj = particle.create({
    x: w*Math.random() + (radius * 2),
    y: h*Math.random() - (radius * 2),
    magnitude: utils.randomBetween(0, 100),
    direction: utils.randomBetween(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: utils.randomBetween(0.9, 0.99),
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

    heavyObj.springToPoint(springPoint, k, 0);
    heavyObj.update();

    shapes.circle(springPoint.get("x"), springPoint.get("y"));
    shapes.pCircle(heavyObj);
    shapes.drawLineXY(
      heavyObj.state.x, heavyObj.state.y,
      springPoint.state.x, springPoint.state.y
    );

    rAF(update);
  })();
};
