window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");

  // Libs
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);

  // Boundries
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  (function render() {
    v1 = vector.randomBetween(0, w, 0, h);
    v2 = vector.randomBetween(0, w, 0, h);

    if (particleLib.Vector.vectorIntersect(v1, v2)) {
      shapes.drawLineVec(v1, v2);
    }

    rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
