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

  const point = {
    x: utils.randomBetween(w/4, w),
    y: utils.randomBetween(0, h),
  };

  const target = {
    x: 0,
    y: h/2,
  };

  let ease = 0.1;

  const pointVec = vector.randomBetween(w/4, w, 0, h);
  const targetVec = vector.create(0, h/2);
  const easeVec = vector.create(0.1, 0.1);

  document.addEventListener("mousemove", function(event) {
    target.x = event.x;
    target.y = event.y;
  });

  (function render() {
    ctx.clearRect(0, 0, w, h);
    shapes.circle(point.x, point.y, 10);
    shapes.circle(pointVec.get("x"), pointVec.get("y"), 10, "red");

    let dVec = targetVec["-"](pointVec);
    let vVec = dVec["*"](easeVec);
    pointVec["+="](vVec);

    let dx = target.x - point.x;
    let dy = target.y - point.y;

    let vx = dx * ease;
    let vy = dy * ease;

    point.x += vx;
    point.y += vy;

    rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
