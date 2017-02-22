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
  let springLength = 1000;

 
  const sun = particle.create({
    x: w * 0.5,
    y: 100,
    magnitude: utils.randomBetween(1, 10),
    direction: utils.randomBetween(0, Math.PI * 2),
    radius: radius,
    color: "#000000",
    friction: 0.94,
  });

  const pArray = particle.generator(50, {}, function(opts, i, create) {
    create({
      x: (w/2) * Math.random() + (radius * 2),
      y: (h/2) * Math.random() - (radius * 2),
      magnitude: utils.randomBetween(0.01, 0.02),
      direction: utils.randomBetween(0, 0.2),
      radius: radius,
      color: "#000000",
      friction: 0.95,
      gravity: 0.9,
    });
  });

  window.addEventListener("mousemove", function(e) {
    sun.state.x = e.clientX; 
    sun.state.y = e.clientY;
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    for (var i = pArray.length - 1; i >= 0; i--) {
      let p = pArray[i];
      p.springFromTo(sun, 200, k);
      shapes.drawLineXY(p.state.x, p.state.y, sun.state.x, sun.state.y);
      for (var j = pArray.length - 1; j >= 0; j--) {
        let p2 = pArray[j];
        if (i != j) {
          p.springFromTo(p2, springLength, k);
          shapes.drawLineXY(p.state.x, p.state.y, p2.state.x, p2.state.y);
        }
      }

      p.update();
      // sun.state.x = sunx; 
      // sun.state.y = suny;
      shapes.pCircle(p);
      shapes.pCircle(sun);
    }

    rAF(update);
  })();
};
