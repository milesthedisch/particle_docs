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
    id: 1,
    state: {
      x: 700,
      y: 300,
      radius: 10,
    },
  };

  const p1 = {
    id: 2,
    state: {
      x: 100,
      y: 700,
      radius: 10,
    },
  };

  const p2 = {
    id: 3,
    state: {
      x: 500,
      y: 500,
      radius: 10,
    },
  };

  const p3 = {
    id: 4,
    state: {
      x: 500,
      y: 200,
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
  });

  function pointOfIntersection(p0, p1, p2, p3) {
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
    const denominator = A1 * B2 - A2 * B1;

    const x = (B2 * C1 - B1 * C2) / denominator;
    const y = (A1 * C2 - A2 * C1) / denominator;

    shapes.circle(x, y, 3, "red");
    return {x, y};
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

    pointOfIntersection(p0, p1, p2, p3);
    rAF(render);
  }

  setTimeout(function() {
    render();  
  }, 100);

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    render();
  };
};
