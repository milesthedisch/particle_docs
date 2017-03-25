window.onload = function() {
  const vector = new particleLib.Vector();

  // When using id's the variable is exposed
  const canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);
  const i = 0;

  // Make the canvas a full portrait.
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  let startPoint = vector.create(w/2, h/2);

  document.addEventListener("mousemove", function(e) {
    startPoint = vector.create(e.clientX, e.clientY);
    ctx.clearRect(0, 0, w, h);  
  });

  function update(lineTo) {
    // Make sure the maximum range of the vectors is the edges of the screen.
    shapes.drawLineVec(startPoint, vector.random(-1000, 1000));
  }

  (function animate(i) {
    update(vector.randomBetween(0, w, 0, h));
    window.requestAnimationFrame(animate);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
