window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  
  // Libs
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();
  const yat = particleLib.YAT.init({ clock: particleLib.Clock });
  
  // Boundries
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const p0 = {
    x: 300,
    y: 300,
  };

  const p1 = {
    x: 300,
    y: 700,
  };

  const p2 = {
    x: 200,
    y: 500,
  };

  const p3 = {
    x: 700,
    y: 200,
  };

  function pointOfIntersection(p0, p1, p2, p3) {
    const A1 = p0.y - p1.y;
    const B1 = p1.x - p0.x;
    // Standard form of a line.
    // Ax + By = C;
    const C1 = A1 * p0.x + B1 * p0.y;

    const A2 = p2.y - p3.y;
    const B2 = p3.x - p2.x;
    // Standard form of a line.
    // Ax + By = C;
    const C2 = A2 * p2.x + B2 * p2.y;

    // THe thing on the bottom of the divide symbol.
    const denominator = A1 * B2 - A2 * B1;

    const x = (B2 * C1 - B1 * C2) / denominator;
    const y = (A1 * C2 - A2 * C1) / denominator;

    shapes.circle(x, y, 10, "red");
    return {x, y};
  }

  function render() {
    // ctx.clearRect(0, 0, w, h);

    ctx.beginPath();

    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.moveTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);

    ctx.stroke();

    shapes.circle(100, 100, 10, "red");

    // pointOfIntersection(p0, p1, p2, p3);
    // rAF(render);
  }

  setTimeout(function() {
    render();  
  }, 100);

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
