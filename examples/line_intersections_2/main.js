window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");

  // Libs
  const utils = particleLib.Utils;
  const shapes = new particleLib.Shapes(ctx, document);

  // Boundries
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const p0 = {
    x: 400,
    y: 100,
    radius: 10,
  };

  const p1 = {
    x: 200,
    y: 300,
    radius: 10,
  };

  const p2 = {
    x: 500,
    y: 400,
    radius: 10,
  };

  const p3 = {
    x: 300,
    y: 400,
    radius: 10,
  };

  let clicked;
  let selected;
  let intersect;

  window.addEventListener("mousedown", function(e) {
    const collision = [p0, p1, p2, p3].filter((p) => {
      const state = {state: {x: p.x, y: p.y, radius: p.radius}};
      return utils.collisionCirclePoint(e.clientX, e.clientY, state);
    });

    if (collision.length) {
      selected = collision[0];
    } else {
      selected = null;
    }

    clicked = true;
    intersect = segementIntersection(p0, p1, p2, p3);
  });

  window.addEventListener("mouseup", function() {
    clicked = false;
    selected = false;
    intersect = segementIntersection(p0, p1, p2, p3);
  });

  window.addEventListener("mousemove", function(e) {
    if (clicked && selected) {
      selected.x = e.clientX;
      selected.y = e.clientY;
      intersect = segementIntersection(p0, p1, p2, p3);
    }
  });

  const segementIntersection = (p0, p1, p2, p3) => {
    const A1 = p0.y - p1.y;
    const B1 = p1.x - p0.x;
    // Standard form of a line.
    // Ax + By = C;
    const C1 = A1 * p0.x + B1 * p0.y;

    const A2 = p2.y - p3.y;
    const B2 = p3.x - p2.x;

    const C2 = A2 * p2.x + B2 * p2.y;

    // THe thing on the bottom of the divide symbol.
    // If the left hand and right hand side equal each other
    // that essentially means that the slopes are the same
    // which means theres no intersection.
    const denominator = A1 * B2 - A2 * B1;

    // The lines or colinear or parallel so we should return
    // null as there is no intersectoin.
    if (denominator === 0) {
      return null;
    }

    const xIntercept = (B2 * C1 - B1 * C2) / denominator;
    const yIntercept = (A1 * C2 - A2 * C1) / denominator;

    // Line segments is the intercept in the range of x or y
    // We can deduce this by using the the range of x or y
    // and divding it by the range of the intersection point
    // if is greate than 1 than its outside of the range
    // if its less than 0 its outside of the range.
    const x0Range = (p1.x - p0.x);
    const y0Range = (p1.y - p0.y);
    const x0Val = (xIntercept - p0.x);
    const y0Val = (yIntercept - p0.y);

    const x1Range = (p3.x - p2.x);
    const y1Range = (p3.y - p2.y);
    const x1Val = (xIntercept - p2.x);
    const y1Val = (yIntercept - p2.y);

    const rx0 = x0Val / x0Range;
    const ry0 = y0Val / y0Range;
    const rx1 = x1Val / x1Range;
    const ry1 = y1Val / y1Range;

    const insideLineSegement0 =
      (rx0 >= 0 && rx0 <= 1) || (ry0 >= 0 && ry0 <= 1);

    const insideLineSegement1 =
      (rx1 > 0 && rx1 < 1) || (ry1 > 0 && ry1 < 1);

    if (insideLineSegement0 && insideLineSegement1) {
      return {x: xIntercept, y: yIntercept};
    }

    return false;
  };

  const render = () => {
    ctx.clearRect(0, 0, w, h);

    [p0, p1, p2, p3].forEach((p) => shapes.circle(p.x, p.y, 10));

    ctx.beginPath();

    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.moveTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);

    ctx.stroke();

    if (intersect) {
      shapes.circle(intersect.x, intersect.y, 10, "red");
    }

    rAF(render);
  };

  render();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
