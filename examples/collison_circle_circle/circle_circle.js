const particle = new particleLib.Particle();
const vector = new particleLib.Vector();
const utils = particleLib.Utils;

window.onload = function () {
  window.focus();
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const p1 = particle.create({
    direction: -Math.PI,
    radius: 10,
    magnitude: 10,
    velocity: vector.create(1, 1),
    position: vector.create(w, h/2),
  });

  const p2 = particle.create({
    direction: Math.PI * 2,
    radius: 10,
    magnitude: 10,
    velocity: vector.create(1, 1),
    position: vector.create(0, h/2),
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);

    if (utils.collisionCircle(p1, p2)) {
      p1.set("velocity", vector.create(0, 0));
      p2.set("velocity", vector.create(0, 0));
    }

    p1.update();
    p2.update();

    shapes.circle(
      p1.get("position").get("x"),
      p1.get("position").get("y"),
      p1.get("radius")
    );

    shapes.circle(
      p2.get("position").get("x"),
      p2.get("position").get("y"),
      p2.get("radius")
    );
    rAF(update);
  })();
};
