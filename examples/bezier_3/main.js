window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");

  // Libs
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const ps = [
    {
      x: utils.randomBetween(100, w - 100),
      y: utils.randomBetween(100, h - 100),
    },
    {
      x: utils.randomBetween(100, w - 100),
      y: utils.randomBetween(100, h - 100),
    },
    {
      x: utils.randomBetween(100, w - 100),
      y: utils.randomBetween(100, h - 100),
    },
  ];

  // Control point math to have the arc go through the control point instead of
  // around it.

  const cp = {
    x: ps[1].x * 2 - (ps[0].x + ps[2].x) / 2,
    y: ps[2].y * 2 - (ps[0].y + ps[2].y) / 2,
  };

  function connectTheDots(dots) {
    for (let i = 0; i < dots.length; i++) {
      let x = dots[i].x;
      let y = dots[i].y;

      shapes.circle(x, y, 2);

      if (i === 0) {
        continue;
      }

      let lx = dots[i-1].x;
      let ly = dots[i-1].y;

      shapes.drawLineXY(lx, ly, x, y, "#00ff00");
    }
  }

  (function render() {
    ctx.clearRect(0, 0, w, h);
    connectTheDots(ps);

    for (let i = 0; i < 1; i += 0.02) {
      let d = utils.quadraticBezierPoint(ps[0], cp, ps[2], i);
      ctx.beginPath();
      ctx.arc(d.x, d.y, 10, 0, Math.PI * 2, false);
      ctx.stroke();
    }

    for (let i = 0; i < 1; i += 0.02) {
      let d = utils.quadraticBezierPoint(ps[0], ps[1], ps[2], i);
      ctx.beginPath();
      ctx.arc(d.x, d.y, 10, 0, Math.PI * 2, false);
      ctx.stroke();
    }

    // rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
