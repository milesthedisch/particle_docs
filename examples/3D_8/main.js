window.onload = function() {
  window.focus(); 
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  const fl = 300;
  const points = [];
  let needsUpdate = true;

  // Model of a cube.
  points[0] = {x: -500, y: -500, z: 1000};
  points[1] = {x: 500, y: -500, z: 1000};
  points[2] = {x: 500, y: -500, z: 500};
  points[3] = {x: -500, y: -500, z: 500};
  points[4] = {x: -500, y: 500, z: 1000};
  points[5] = {x: 500, y: 500, z: 1000};
  points[6] = {x: 500, y: 500, z: 500};
  points[7] = {x: -500, y: 500, z: 500};

  // Libs
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();

  // Boundries
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const translateBox = translatePoints(points);

  document.body.addEventListener("keydown", function(event) {
    switch(event.keyCode) {
    case 37: // left
      translateBox(-20, 0, 0);
      break;
    case 38: // up
      if (event.shiftKey) {
        translateBox(0, 0, 20);
      } else {
        translateBox(0, -20, 0);
      }
      break;
    case 39: // right
      translateBox(20, 0, 0);
      break;
    case 40: // down
      if (event.shiftKey) {
        translateBox(0, 0, -20);
      } else {
        translateBox(0, 20, 0);
      }
      break;
    }
  });

  ctx.translate(w/2, h/2);

  (function render() {
    if (needsUpdate) {
      ctx.clearRect(-w/2, -h/2, w, h);
      project(points);
      drawModelSquare(points);
    }
    rAF(render);
  })();

  function drawModelSquare(points) {
    let p = points.map(function(point) {
      return {x: point.sx, y: point.sy};
    });

    shapes.drawLinePoints(p[0], p[1], p[2], p[3], p[0]);
    shapes.drawLinePoints(p[0], p[4]);
    shapes.drawLinePoints(p[1], p[5]);
    shapes.drawLinePoints(p[2], p[6]);
    shapes.drawLinePoints(p[3], p[7]);
    shapes.drawLinePoints(p[4], p[5], p[6], p[7], p[4]);
  }

  function translatePoints(ps) {
    return function translateModel(x, y, z) {
      for (let i = 0; i < ps.length; i++) {
        points[i].x += x;
        points[i].y += y;
        points[i].z += z;
      }
      needsUpdate = true;
    };
  };

  function project(points) {
    for (let i = 0; i < points.length; i++) {
      let p = points[i];
      scale = fl / (fl + p.z);

      p.sx = scale * p.x;
      p.sy = scale * p.y;
    }
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
