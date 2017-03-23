window.onload = function() {
  // Needed //
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");

  // Libs //
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();

  // Boundries //
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  // Focal length //
  const fl = 30;

  let squares = [];
  const numsquares = 1000;

  for(let i = 0; i < numsquares; i++) {
    squares[i] = {
      x: utils.randomBetween(-1000, 1000),
      y: utils.randomBetween(-1000, 1000),
      z: utils.randomBetween(0, 10000),
    };
  }

  // Move the context to the center of the screen.
  // Which is are vanshing point.
  ctx.translate(w/2, h/2);
  let i = 1;

  update();

  function update() {
    i += 0.01;
    // Clear the whole canvas //
    ctx.clearRect(-w/2, -h/2, w, h);
    console.log(i);
    squares.forEach(function(shape) {
      ctx.save();
      // Perspective fomulae that gives us the coordinate based on the perspective //
      // focalLength / (focalLength + distance) //
      let perspective = fl / (fl + shape.z);

      ctx.translate(shape.x * perspective, shape.y * perspective);
      ctx.scale(perspective, perspective);
      ctx.fillRect(-100, -100, 200, 200);
      ctx.restore();

      shape.z -= i;
      if(shape.z < 0) {
        shape.z = 10000;
      }
    });

    rAF(update);
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
