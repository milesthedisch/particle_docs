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

  const origin = {
    x: w/2,
    y: h/2,
  };
  const target = {};
  const change = {};
  const duration = 1000;
  let then;

  document.body.addEventListener("click", function(event) {
    target.x = event.clientX;
    target.y = event.clientY;
    change.x = target.x - origin.x;
    change.y = target.y - origin.y;
    then = performance.now();
    render(performance.now());
  });

  shapes.circle(origin.x, origin.y, 10);

  function render(now) {
    ctx.clearRect(0, 0, w, h);
    var elapsedTime = now - then;
    if (elapsedTime < duration) {
      var x = easingTween(elapsedTime, origin.x, change.x, duration);
      var y = easingTween(elapsedTime, origin.y, change.y, duration);
      shapes.circle(x, y, 10);
      rAF(render);
    } else {
      shapes.circle(target.x, target.y, 10);
      origin.x = target.x;
      origin.y = target.y;
    }
  }

  /**
   * easingTween
   * @param  {Number} t time delta
   * @param  {Number} b start value
   * @param  {Number} c change in value
   * @param  {Number} d duration
   * @return {Number} A value in between the start and the end value at a given timestamp
   *                  over the duration.
   */
  function easingTween(t, b, c, d) {
    return c * t / d + b;
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
