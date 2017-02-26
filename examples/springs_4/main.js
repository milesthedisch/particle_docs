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

  let k = utils.randomBetween(0.01, 0.5);
  let springLength = 50;

  const spring1 = {
    point: vector.create(w * .5, h * .5),
    spring: k,
    offset: springLength,
  };

  const spring2 = {
    point: vector.create(w * .5 + 100, h * .5),
    spring: k,
    offset: springLength,
  };

  const heavyObj = particle.create({
    x: w * Math.random() + (radius * 2),
    y: h * Math.random() - (radius * 2),
    magnitude: 0,
    direction: 0,
    radius: radius,
    color: "#000000",
    friction: utils.randomBetween(0.94, 0.99),
    gravity: utils.randomBetween(0, 0.9),
  });

  heavyObj.addSpring(spring1);
  heavyObj.addSpring(spring2);

  document.addEventListener("mousemove", function(e) {
    spring1.point = vector.create(e.clientX, e.clientY);
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    heavyObj.update();

    shapes.circle(spring1.point.get("x"), spring1.point.get("y"));
    shapes.pCircle(heavyObj);

    shapes.drawLineXY(
      heavyObj.state.x, heavyObj.state.y,
      spring1.point.get("x"), spring1.point.get("y")
    );

    shapes.drawLineXY(
      heavyObj.state.x, heavyObj.state.y,
      spring2.point.get("x"), spring2.point.get("y")
    );

    rAF(update);
  })();
};
