window.onload = function() {
  const particle = new particleLib.Particle();
  const vector = new particleLib.Vector();
  const utils = particleLib.Utils;


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

  const particles = Particle.generate(pAmount).map(() =>
    Particle.create({
      x: w / 2,
      y: h,
      direction: -Math.PI / 2 + (Math.random() * .2 - .1),
      magnitude: 0.1,
      gravity: 0.1,
      radius: Math.random() * 10 + 5,
    })
  );

  update();

  function update(delta) {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particles.length; i += 1) {
      let p = particles[i];
      p.update();
      shapes.pCircle(p);
      if (p.state.y - p.state.radius > bound.endY) {
        p.state.x = w / 2;
        p.state.y = h;

        const rLength = 5 + 8 * Math.random();
        const vL = utils.setLength(rLength, p.state.vx, p.state.vy);
        p.state.vx = vL[0];
        p.state.vy = vL[1];

        const rAngle = -Math.PI/2 + (Math.random()*.2-.1);
        const vA = utils.setAngle(rAngle, p.state.vx, p.state.vy);
        p.state.vx = vA[0];
        p.state.vy = vA[1];
      }
    }

    rAF(update);
  }

  // If the window  resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
