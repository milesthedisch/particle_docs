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

  const target = {};
  const points = [];
  const amount = 10;
  const ease = 0.1;

  for (let i = 0; i < amount; i++) {
    points.push({
      x: 0,
      y: 0,
    });
  };

  document.body.addEventListener("mousemove", function(event) {
    target.x = event.clientX;
    target.y = event.clientY;
  });

  (function render(now) {
    ctx.clearRect(0, 0, w, h);
    const leader = {
      x: target.x || 0,
      y: target.y || 0,
    };

    for (let i = 0; i < amount; i++) {
      let p = points[i];

      p.x += (leader.x - p.x) * ease;
      p.y += (leader.y - p.y) * ease;

      shapes.circle(p.x, p.y, 10);
      leader.x = p.x;
      leader.y = p.y;
    }

    rAF(render);
  })();

  /**
   * easingTween
   * @param  {Number} t time delta
   * @param  {Number} b begining value
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

//# sourceURL=foo
