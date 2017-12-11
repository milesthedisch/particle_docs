window.onload = function() {
  const particle = new particleLib.Particle();
  const vector = new particleLib.Vector();
  // When using id's the variable is exposed
  const rAF = window.requestAnimationFrame;

  let canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);

  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;
  const p = Particle.create({
    x: w/2,
    y: h/2,
    magnitude: 10,
    direction: Math.random() * Math.PI * 2,
  });

  p.state.radius = 100;

  const bound = {
    startX: 0,
    endX: w,
    startY: 0,
    endY: h,
  };

  update();

  function update() {
    ctx.clearRect(0, 0, w, h);
    p.update();

    shapes.circle(p.state.x, p.state.y, p.state.radius);

    if(p.state.x - p.state.radius > bound.endX) {
      p.state.x = bound.startX - p.state.radius;
    }

    if(p.state.x + p.state.radius < 0) {
      p.state.x = bound.endX + p.state.radius;
    }

    if(p.state.y - p.state.radius > bound.endY) {
      p.state.y = bound.startY - p.state.radius;
    }

    if(p.state.y + p.state.radius < bound.startY) {
      p.state.y = bound.endY + p.state.radius;
    }

    rAF(update);
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
