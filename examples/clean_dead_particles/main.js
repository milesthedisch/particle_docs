window.onload = function () {

  // When using id's the variable is exposed 
  const particle = new particleLib.Particle();
  const vector = new particleLib.Vector();

  const canvas = a;
  const rAF = window.requestAnimationFrame;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);

  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;
  const pAmount = 1000;

  const bound = {
    startX: 0,
    endX: w,
    startY: 0,
    endY: h,
  };

  const particles = [];

  for (let i = 0; i < pAmount; i += 1) {
    let p = particle.create({
      position: vector.create(w / 2, h / 2),
      magnitude: (2 * Math.random()).toFixed(2),
      direction: Math.random() * Math.PI * 2,
    });
    p.set("radius", Math.random() * 10);
    particles.push(p);
  }

  update();

  function update() {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i += 1) {
      particles[i].update();
      shapes.circle(particles[i].get("position").get("x"), particles[i].get("position").get("y"), particles[i].get("radius"));
    }

    removeDeadParticle();
    rAF(update);
  }

  function removeDeadParticle () {
    for (let i = particles.length - 1; i >= 0; i -= 1) {
      let p = particles[i];

      if (checkOutOfBounds(p)) {
        particles.splice(i, 1);
      }
    }
  }

  function checkOutOfBounds(p) { 
    return(
      p.get("position").get("x") - p.get("radius") > bound.endX ||
      p.get("position").get("x") + p.get("radius") < bound.startX ||
      p.get("position").get("y") - p.get("radius") > bound.endY ||
      p.get("position").get("y") + p.get("radius") < bound.startY
    );
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
