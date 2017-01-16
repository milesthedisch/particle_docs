window.onload = function () {
  const particle = new particleLib.Particle();
  const vector = new particleLib.Vector();

  // When using id's the variable is exposed 
  const canvas = a;
  const rAF = window.requestAnimationFrame;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  // const friction = vector.create(0.15, 0);
  const _friction = vector.create(0.97, 0.97);

  const p = particle.create({
    position: vector.create(w/2, h/2),
    magnitude: 10,
    direction: Math.PI * Math.random() * 2,
    radius: 10,
    friction: vector.create(0.96, 0.96),
  });

  function update(delta) {
    ctx.clearRect(0, 0, w, h);

    /****************************/
    /*  This is to expensive 6  */
    /*  trig calls for friction */
    /****************************/

    // friction.setAngle((p.get("velocity")).getAngle());
    // if (p.get("velocity").getLength() >= friction.getLength()) {
    //   (p.get("velocity"))["-="](friction);  
    // } else {
    //   p.get("velocity").setLength(0);
    // }

    /**************/
    /* easier way */
    /**************/

    // (p.get("velocity"))["*="](_friction);

    p.update();
    shapes.circle(
      p.get("position").get("x"),
      p.get("position").get("y"),
      p.get("radius")
    );
    rAF(update);
  }

  update();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
