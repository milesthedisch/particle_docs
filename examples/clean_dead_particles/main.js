window.onload = function () {

  // When using id's the variable is exposed 
  const particle = new particleLib.Particle();
  const vector = new particleLib.Vector();
  const utils = particleLib.Utils;

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

  const particles = particle.generator(pAmount, {}, function(opts, i, create) {
    const r = Number((Math.random() * 10).toFixed(0));
    const newState = {
      x: w / 2,
      y: h / 2,
      magnitude: Number((1 * Math.random()).toFixed(2)),
      direction: Math.random() * Math.PI * 2,
      width: r,
      height: r, 
      // radius: Math.random() * 10,
    };
    create(newState);
  });

  document.body.insertAdjacentHTML("afterBegin", "<span>" + particles.length + "</span>");

  (function update() {
    ctx.clearRect(0, 0, w, h);
    const target = document.querySelector("span");
    target.innerText = particles.length;
    for (let i = 0; i < particles.length; i += 1) {
      particles[i].update();
      shapes.pRect(particles[i]);
    }

    if (particles.length) {
      removeDeadParticle();
    }
    rAF(update);
  })();

  function removeDeadParticle () {
    for (let i = particles.length - 1; i >= 0; i -= 1) {
      let p = particles[i];

      checkBounds(p);
      if (checkBounds(p)) {
        particles.splice(i, 1);
      }
    }
  }

  function checkBounds(p) {

    /* For a rect */
    return !(
      utils.inRange(
        p.state.x + p.state.width,
        bound.endX + p.state.width,
        bound.startX - p.state.width
      )
        &&
      utils.inRange(
        p.state.y + p.state.height,
        bound.endY + p.state.height,
        bound.startY - p.state.height
      )
    );

    /*
      For a circle

      return(
        p.state.x - p.state.radius > bound.endX ||
        p.state.x + p.state.radius < bound.startX ||
        p.state.y - p.state.radius > bound.endY ||
        p.state.y + p.state.radius < bound.startY
      );
    */
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
