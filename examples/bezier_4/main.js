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

  function pointGenerator(amount) {
    const points = [];
    for (let i = 0; i < amount; i++) {
      points.push({
        x: utils.randomBetween(0, w),
        y: utils.randomBetween(0, h),
      });
    }
    return points;
  }

  function render() {
    const points = pointGenerator(4);
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(function(p) {
      ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();

    ctx.strokeStyle = "black";
    ctx.shadowColor = "green";
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(function(p) {
      utils.multiCurve(points, ctx);
    });
    ctx.stroke();

    ctx.strokeStyle = "blue";
    ctx.shadowColor = "purple";
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    ctx.bezierCurveTo(points[1].x, points[1].y, points[2].x, points[2].y, points[3].x, points[3].y);
    ctx.stroke();
  };

  render();

  // If the window resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    render();
  };
};
