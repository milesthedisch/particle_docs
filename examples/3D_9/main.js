window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  
  // Libs
  const _ = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();
  const utils = particleLib.Utils;
  let mvCoord = {
    x: 0,
    y: 0,
  };

  let fl = 300;
  const particleNum = 1000;
  let baseAngle = 3.14;
  let xAngleSpeed = 0;

  // Boundries
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const spheres = [...new Array(particleNum)].map(sphere);

  document.addEventListener("mousemove", (e) => {
    mvCoord = {
      x: e.clientX,
      y: e.clientY,
    };
  }, {passive: true});

  document.addEventListener("mousewheel", (e) => {
    fl += e.movementY/2;
  }, {passive: true});

  function sphere(val, idx) {
    let x = _.randomBetween(-w/2, w/2);
    let y = _.randomBetween(-h/2 - 500, h/2 + 500);
    let sz = _.randomBetween(5, 20);

    return {
      sz,
      y,
      x: Math.cos(idx) * y,
      z: Math.sin(idx) * 300 + 2000,
    };
  }

  function update() {
    const x = utils.map(mvCoord.x, 0, w, -100, 100);
    const y = utils.map(mvCoord.y, 0, h, -100, 100);

    baseAngle += 0.01;
    xAngleSpeed = Math.sin(baseAngle * 3) / 3;

    spheres.forEach((s, idx) => {
      s.y += -baseAngle * xAngleSpeed;
      s.x += baseAngle * xAngleSpeed;
      s.z += Math.sin(baseAngle) * 3;
    });
  }

  function draw() {
    ctx.clearRect(-w/2, -h/2, w, h);
    ctx.fillRect(-w/2, -h/2, w, h, "black");

    ctx.shadowColor = "white";
    ctx.shadowBlur = 10;

    spheres.forEach((s) => {
      ctx.save();
      // Save

      prsp = _.perspective(fl, s.z);
      ctx.globalAlpha = _.map(s.y * prsp, -h, prsp * h, 0, 1);

      ctx.scale(prsp, prsp);
      ctx.translate(s.x, s.y);

      shapes.circle(0, 0, s.sz, "#FFFFFF");

      // Restore
      ctx.restore();
    });
  }

  ctx.translate(w/2, h/2);

  function render() {
    update();
    draw();
    rAF(render);
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
