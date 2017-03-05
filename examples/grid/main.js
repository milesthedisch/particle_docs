window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");

  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  let x;
  let y;

  document.addEventListener("mousemove", function(e) {
    x = utils.roundToMultiple(e.clientX, 40);
    y = utils.roundToMultiple(e.clientY, 40);
  });

  (function render() {
    ctx.clearRect(0, 0, w, h);

    shapes.grid(w, h, 40);
    shapes.circle(x, y, 20);

    rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
