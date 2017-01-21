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

  const p1 = particle.create({
    position: vector.create(w/2 - 100, h/2 - 50),
    width: 100,
    height: 50,
    color: "#000000",
  });

  const p2 = particle.create({
    position: vector.create(0, 0),
    width: 100,
    height: 50,
    color: "#000000",
  });

  document.addEventListener("mousemove", function(e) {
    p2.set("position", vector.create(e.clientX, e.clientY));
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    if (utils.collisionRect(p1, p2)) {
      p1.set("color", "#ff0000");
      p2.set("color", "#ff0000");
    } else {
      p1.set("color", "#000000");
      p2.set("color", "#000000");
    }

    shapes.pRect(p1);
    shapes.pRect(p2);
    rAF(update);
  })();
};
