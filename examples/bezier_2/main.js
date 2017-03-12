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

  const points = [
    {
      x: utils.randomBetween(200, w - 200),
      y: utils.randomBetween(200, h - 200),
    },
    {
      x: utils.randomBetween(200, w - 200),
      y: utils.randomBetween(200, h - 200),
    },
    {
      x: utils.randomBetween(200, w - 200),
      y: utils.randomBetween(200, h - 200),
    },
  ];

  document.addEventListener("mousemove", throttle(function(e) {
    points.unshift({x: e.clientX, y: e.clientY});
    points.pop();
  }, 50));

  (function render() {
    ctx.clearRect(0, 0, w, h);

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.bezierCurveTo(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
    ctx.stroke();


    for (let i = 0; i < 1; i += 0.01) {
      let point = utils.quadtraticBezierPoint(points[0], points[1], points[2], i);
      ctx.beginPath();
      ctx.arc(point.x, point.y, 10, 0, Math.PI * 2, false);
      ctx.stroke();
    }

    rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
