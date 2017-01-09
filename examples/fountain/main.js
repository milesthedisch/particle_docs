window.onload = function () {
  const particle = new particleLib.Particle();
  const vector = new particleLib.Vector();
  

  // When using id's the variable is exposed 
  const canvas = a;
  const rAF = window.requestAnimationFrame;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);
  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;
  const pAmount = 100;

  let now;
  let then;
  let tick = 1;

  const bound = {
    startX: 0,
    endX: w,
    startY: 0,
    endY: h,
  };

  const particles = [];

  for (let i = 0; i < pAmount; i += 1) {
    let p = particle.create({
      position: vector.create(w / 2, h, (5 + 8 * Math.random()).toFixed(2)), 
      direction: -Math.PI / 2 + (Math.random() * .2 - .1), 
      magnitude: 0.1,
      gravity: vector.create(0, 0.1),
    });
    p.set("radius", Math.random() * 10 + 5);
    particles.push(p);
  }

  update();

  function update(delta) {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i += 1) {
      let p = particles[i];
      p.update();
      shapes.circle(p.get("position").get("x"), p.get("position").get("y"), p.get("radius"));
      if (p.get("position").get("y") - p.get("radius") > bound.endY) {
        p.get("position").set("x", w / 2);
        p.get("position").set("y", h);
        p.get("velocity").setLength((5 + 8 * Math.random()).toFixed(2));
        p.get("velocity").setAngle(-Math.PI / 2 + (Math.random() * .2 - .1));
      }
    }

    rAF(update);
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
