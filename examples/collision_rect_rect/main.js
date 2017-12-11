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
    x: w/2 - 50,
    y: h/2 - 25,
    width: 100,
    height: 50,
    color: "#000000",
  });

  const p2 = Particle.create({
    x: 0,
    y: 0,
    width: 100,
    height: 50,
    color: "#000000",
  });

  document.addEventListener("mousemove", function(e) {
    p2.state.x = e.clientX;
    p2.state.y = e.clientY;
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    if (utils.collisionRect(p1, p2)) {
      p1.state.color = "#ff0000";
      p2.state.color = "#ff0000";
    } else {
      p1.state.color = "#000000";
      p2.state.color = "#000000";
    }

    shapes.pRect(p1);
    shapes.pRect(p2);

    rAF(update);
  })();
};
