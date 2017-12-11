window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  
  // Libs
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();
  
  // Boundries
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  let v = vector.create(w/6, h/6); 
  const point = {
    x: w/6,
    y: h/6,
  };

  let delta = 0.1;
  ctx.translate(w/2, h/2);

  (function render() {
    ctx.clearRect(-w/2, -h/2, w, h);
    shapes.circle(v.get("x"), v.get("y"), 10, "red");
    v.rotateBy(delta);
    rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

    ctx.translate(w/2, h/2);
    ctx.clearRect(-w/2, -h/2, w, h);
  };
};
