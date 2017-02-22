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
    x: w* Math.random() + (radius * 2),
    y: h * Math.random() - (radius * 2),
    magnitude: 0,
    direction: 0,
    radius: radius,
    color: "#000000",
    friction: 0.97,
    gravity: 0.9,
  });

  let springPoint = vector.create(w/2, h/2);

  document.addEventListener("mousemove", function(e) {
    springPoint = vector.create(e.clientX, e.clientY);
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    heavyObj.springToPoint(springPoint, springLength, k);
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
