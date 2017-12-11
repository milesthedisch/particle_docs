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

  const p1 = Particle.create({
    x: w/2,
    y: h/2,
    radius: 100,
    color: "#000000",
  });

  const p2 = Particle.create({
    radius: 1,
  });

  document.addEventListener("mousemove", function(e) {
    p2.state.x = e.clientX + -10;
    p2.state.y = e.clientY + -10;
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    if (utils.collisionCirclePoint(p2.state.x, p2.state.y, p1)) {
      p1.state.color = "#ff0000";
    } else {
      p1.state.color = "#000000";
    }

    shapes.pCircle(p1);
    shapes.pCircle(p2);
    rAF(update);
  })();
};
