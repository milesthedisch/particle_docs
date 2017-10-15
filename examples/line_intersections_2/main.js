window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  
  // Libs
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();
  const clock = particleLib.Clock;
	const tween = particleLib.YAT.init({ clock });
  
  // Boundries
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const p0 = {
    state: {
      x: 400,
      y: 100,
      radius: 10,
    },
  };

  const p1 = {
    state: {
      x: 200,
      y: 300,
      radius: 10,
    },
  };

  const p2 = {
    state: {
      x: 500,
      y: 400,
      radius: 10,
    },
  };

  const p3 = {
    state: {
      x: 300,
      y: 400,
      radius: 10,
    },
  };


  let x;
  let y;
  let clicked;
  let selected;

  window.addEventListener("mousedown", function(e) {
    const collision = [p0, p1, p2, p3].filter((p) =>
      utils.collisionCirclePoint(e.clientX, e.clientY, p));

    console.log(collision);
    if (collision.length) {
      selected = collision[0];
    } else {
      selected = null;
    }

    clicked = true;
  });

  window.addEventListener("mouseup", function() {
    clicked = false;
    selected = false;
  });

  window.addEventListener("mousemove", function(e) {
    console.log(clicked, selected);
    if (clicked && selected) {
      selected.state.x = e.clientX;
      selected.state.y = e.clientY;
    }

    render();
  });

  function segementIntersection(p0, p1, p2, p3) {
    const A1 = p0.state.y - p1.state.y;
    const B1 = p1.state.x - p0.state.x;
    // Standard form of a line.
    // Ax + By = C;
    const C1 = A1 * p0.state.x + B1 * p0.state.y;

    const A2 = p2.state.y - p3.state.y;
    const B2 = p3.state.x - p2.state.x;

    // Standard form of a line.
    // Ax + By = C;
    const C2 = A2 * p2.state.x + B2 * p2.state.y;

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

    console.log(xIntercept);
    console.log(yIntercept);

    // Line segments is the intercept in the range of x or y
    // We can deduce this by using the the range of x or y
    // and divding it by the range of the intersection point 
    rx0 = (xIntercept - p0.state.x) / (p0.state.x - p1.state.x);
    ry0 = (yIntercept - p0.state.y) / (p0.state.y - p1.state.y);

    rx1 = (xIntercept - p2.state.x) / (p3.state.x - p2.state.x);
    ry1 = (yIntercept - p2.state.x) / (p3.state.y - p2.state.y);

    console.log(rx0, ry0);
    if ((rx0 > 0 && rx0 < 1) && (ry0 > 0 && ry0 < 1)) {
      shapes.circle(xIntercept, yIntercept, 10, "red");
      return {x, y}; 
    }


  }

  function render() {
    ctx.clearRect(0, 0, w, h);

    [p0, p1, p2, p3].forEach((p) => shapes.pCircle(p));

    ctx.beginPath();

    ctx.moveTo(p0.state.x, p0.state.y);
    ctx.lineTo(p1.state.x, p1.state.y);
    ctx.moveTo(p2.state.x, p2.state.y);
    ctx.lineTo(p3.state.x, p3.state.y);

    ctx.stroke();

    segementIntersection(p0, p1, p2, p3);
  
    // rAF(render);
  };

  render();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
