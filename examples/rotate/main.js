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

  let vectorA = vector.create(5, 3);

  context.translate(w/2, h/2);

  (function render() {
    ctx.clearRect(0, 0, w, h);
    rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
