window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  
  // Libs
  const _ = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();

  const fl = 300;
  const particleNum = 1000;
  let baseAngle = 3.14;

  // Boundries
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;


  const spheres = [...new Array(particleNum)].map(sphere);

  function sphere(val, idx) {
    let x = _.randomBetween(-w/2, w/2);
    let y = _.randomBetween(-h/2, h/2);

    return {
      y,
      x: Math.cos(baseAngle) * x,
      z: Math.sin(baseAngle + idx) * 300 + 1000,
    };
  }

  console.log(spheres);
  function draw() {
    spheres.forEach((s) => {
      ctx.save();
      // Save

      ctx.globalAlpha = _.map(-s.y, -h/2, h/2, 0.2, 1);
      prsp = _.perspective(fl, s.z);

      ctx.scale(prsp, prsp);
      ctx.translate(s.x, s.y);

      shapes.circle(0, 0, 10);

      // Restore
      ctx.restore();
    });
  }

  function update() {
    baseAngle += 0.01;
    spheres.forEach((s, idx) => {
      s.y += 0.1;
      s.x += Math.cos(baseAngle);
      s.z += Math.sin(baseAngle);
    });
  }

  ctx.translate(w/2, h/2);

  function render() {
    ctx.clearRect(-w/2, -h/2, w, h);
    update();
    draw();
    rAF(render);
  }

  render();
  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
