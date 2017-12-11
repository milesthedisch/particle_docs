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

  const springPoint = {
    point: vector.create(w/2, h/2),
    offset: utils.randomBetween(10, 200),
    spring: utils.randomBetween(0.05, 0.2),
  };

  const heavyObj = Particle.create({
    x: w * Math.random() + (radius * 2),
    y: h * Math.random() - (radius * 2),
    magnitude: utils.randomBetween(10, 100),
    direction: utils.randomBetween(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: utils.randomBetween(0.94, 0.99),
    gravity: utils.randomBetween(0.6, 0.9),
  });

  heavyObj.addSpring(springPoint);

  document.addEventListener("mousemove", function(e) {
    springPoint.point = vector.create(e.clientX, e.clientY);
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    heavyObj.update();

    shapes.circle(springPoint.point.get("x"), springPoint.point.get("y"));
    shapes.pCircle(heavyObj);
    shapes.drawLineXY(
      heavyObj.state.x, heavyObj.state.y,
      springPoint.point.get("x"), springPoint.point.get("y")
    );

    rAF(update);
  })();
};
