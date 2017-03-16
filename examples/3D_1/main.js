window.onload = function() {
  // Needed //
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");

  // Boundries //
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  // Focal length //
  const fl = 300;

  // Position of Shape in 3D space //
  const shapePos = {
    x: 500,
    y: 300,
    z: 500,
  };


  // Libs //
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();

  ctx.clearRect(-w/2, -h/2, w/2, h/2);

  // Move the context to the center of the screen.
  ctx.translate(w/2, h/2);

  // Perspective fomulae that gives us the coordinate based on the perspective //
  // focalLength / (focalLength + distance) //
  var perspective = fl / (fl + shapePos.z);
  ctx.translate(shapePos.x * perspective, shapePos.y * perspective);
  ctx.scale(perspective, perspective);
  ctx.fillRect(-100, -100, 200, 200);

  (function render() {
   

    rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
