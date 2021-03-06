window.onload = function() {
  const particle = new particleLib.Particle();
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();

  // When using id's the variable is exposed
  const canvas = a;
  const rAF = window.requestAnimationFrame;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  // const friction = 0.15;
  const friction = 0.97;

  const p = Particle.create({
    x: w/2,
    y: h/2,
    magnitude: 10,
    direction: Math.PI * Math.random() * 2,
    width: 2,
    height: 2,
    friction,
  });

  let i = 0;
  function update(delta) {
    // ctx.clearRect(0, 0, w, h);

    /** **************************/
    /*  This is to expensive 6  */
    /*  trig calls for friction */
    /** **************************/

    // friction.setAngle((p.get("velocity")).getAngle());
    // if (p.get("velocity").getLength() >= friction.getLength()) {
    //   (p.get("velocity"))["-="](friction);
    // } else {
    //   p.get("velocity").setLength(0);
    // }

    /** ************/
    /* easier way */
    /** ************/

    // (p.get("velocity"))["*="](_friction);

    // Increase the angle every frame.
    const vA = utils.setAngle(i += 0.001, p.state.vx, p.state.vy);
    p.state.vx = vA[0];
    p.state.vy = vA[1];

    p.update();
    shapes.pRect(p);
    rAF(update);
  }

  update();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
