window.onload = function () {

  const particle = new particleLib.Particle();
  const vector = new particleLib.Vector();
  // When using id's the variable is exposed 
  const rAF = window.requestAnimationFrame;

  let canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);

  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;
  const p = particle.create({
    position: vector.create(w / 2, h / 2),
    magnitude: 10,
    direction: Math.random() * Math.PI * 2,
  });

  p.set("radius", 100);

  const bound = {
    startX: 0,
    endX: w,
    startY: 0,
    endY: h,
  };

  update();

  function update() {
    ctx.clearRect(0, 0, w, h);
    p.update();

    shapes.circle(p.get("position").get("x"), p.get("position").get("y"), p.get("radius"));

    if(p.get("position").get("x") - p.get("radius") > bound.endX) {
      p.get("position").set("x", bound.startX-p.get("radius"));
    }

    if(p.get("position").get("x") + p.get("radius") < 0) {
      p.get("position").set("x", bound.endX + p.get("radius"));
    }

    if(p.get("position").get("y") - p.get("radius") > bound.endY) {
      p.get("position").set("y", bound.startY-p.get("radius"));
    }

    if(p.get("position").get("y") + p.get("radius") < bound.startY) {
      p.get("position").set("y", bound.endY + p.get("radius"));
    }

    rAF(update);
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
