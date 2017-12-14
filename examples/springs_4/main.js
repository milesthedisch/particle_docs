window.onload = function() {
  window.focus();
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);
  const vec = new Vector();

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  let radius = 10;

  let k = Utils.randomBetween(0.01, 0.5);
  let springLength = 50;

  const spring1 = {
    point: vec.create(w * .5, h * .5),
    spring: k,
    offset: springLength,
  };

  const spring2 = {
    point: vec.create(w * .5 + 100, h * .5),
    spring: k,
    offset: springLength,
  };

  const heavyObj = Particle.create({
    x: w * Math.random() + (radius * 2),
    y: h * Math.random() - (radius * 2),
    magnitude: 0,
    direction: 0,
    radius: radius,
    color: "#000000",
    friction: Utils.randomBetween(0.94, 0.99),
    gravity: Utils.randomBetween(0, 0.9),
  });

  heavyObj.addSpring(spring1);
  heavyObj.addSpring(spring2);

  document.addEventListener("mousemove", function(e) {
    heavyObj.state.springs[0].point = vec.create(e.clientX, e.clientY);
  });

  document.addEventListener("click", function(e) {
    const newSpring = {
      point: vec.create(e.clientX + 1, e.clientY + 1),
      spring: Utils.randomBetween(0.01, 0.5),
      offset: springLength,
    };

    heavyObj.addSpring(newSpring);
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    heavyObj.update();
    heavyObj.state.color = `hsl(${heavyObj.state.springs.length * 20}, 100%, 50%)`;
    shapes.pCircle(heavyObj);

    heavyObj.state.springs.forEach(function(spring) {
      shapes.circle(spring.point.get("x"), spring.point.get("y"), 4);

      shapes.drawLineXY(
        heavyObj.state.x, heavyObj.state.y,
        spring.point.get("x"), spring.point.get("y"),
        heavyObj.state.color
      );
    });

    rAF(update);
  })();
};
