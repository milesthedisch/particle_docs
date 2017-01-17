const particle = new particleLib.Particle();
const vector = new particleLib.Vector();
const utils = particleLib.Utils

window.onload = function () {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const p1 = particle.create({
    position: vector.create(w/2, h/2),
    radius: 100,
    color: "#000000",
  });

  const p2 = particle.create({
    radius: 10,
    position: vector.create(w/2, h/2),
    color: "#000000",
  });

  document.addEventListener("mousemove", function(e) {
    let vec = vector.create(e.clientX, e.clientY);
    p2.set("position", vec);
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    if (utils.collisionCircle(p1, p2)) {
      p1.set("color", "#ff0000");
      p2.set("color", "#ff0000");
    } else {
      p1.set("color", "#000000");
      p2.set("color", "#000000");
    }

    shapes.circle(
      p1.get("position").get("x"),
      p1.get("position").get("y"),
      p1.get("radius"),
      p1.get("color")
    );

    shapes.circle(
      p2.get("position").get("x"),
      p2.get("position").get("y"),
      p2.get("radius"),
      p1.get("color")
    );
    rAF(update);
  })();
};
