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

  const ease = 0.1;
  let easing = true;

  document.addEventListener("mousemove", function(event) {
    target.x = event.x;
    target.y = event.y;

    if (!easing) {
      render();
    }
  });

  function render() {
    ctx.clearRect(0, 0, w, h);
    shapes.circle(point.x, point.y, 10);
    easing = utils.easeTo(ease, point, target);
    console.log("rendering");
    if (easing) {
      console.log("stop rendering, distance is too small to be performant to render");
      rAF(render);
    }
  }

  render();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
