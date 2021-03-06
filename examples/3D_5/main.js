window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  
  // Libs
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();  

  // Boundries //
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  // Radius //
  const radius = w/3;
  const zOffset = 500;
  const circles = createCircles(500);
  const focalLength = 300;

  let baseAngle = 0;
  let angleVelocity = 0;
  let delta = 0;
  let yOffset = 0;

  // Subscribe to values //
  let y = 0;

  // Add Listeners //
  document.addEventListener("mousemove", function(e) {
    y = e.clientY;
    delta = utils.map(y, 0, h, -10, 10);
  });

  function createCircles(num) {
    let circles = [];

    for (let i = 0; i < num; i++) {
      let c = {
        x: 0,
        y: 3000 - 5000 / num * i,
        z: 0,
        angle: 0.2 * i,
      };

      c.x = Math.cos(c.angle) * radius;
      c.z = zOffset + Math.sin(c.angle) * radius;
      circles[i] = c;
    }

    return circles;
  }

  function update() {
    baseAngle += (delta * 0.005);

    for (let i = 0; i < circles.length; i++) {
      let c = circles[i];

      yOffset = i * i / 40000;

      ctx.save();
      perspective = focalLength / (focalLength + c.z);
      ctx.scale(perspective, perspective);
      ctx.translate(c.x, c.y);
      shapes.circle(c.x, c.y, 20);
      ctx.restore();

      if (c.y < w/8 + 1) {
        c.y += delta + yOffset;
      } 

      if (c.y > w/8 - 1) {
        c.y -= (delta + yOffset);
      }

      c.z = zOffset + Math.sin(c.angle + baseAngle) * radius;
      c.x = Math.cos(c.angle + baseAngle) * radius;  
    } 
  }

  ctx.translate(w/2, h/2);

  (function render() {
    ctx.clearRect(-w/2, -h/2, w, h);
    update();
    rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
