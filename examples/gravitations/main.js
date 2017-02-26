window.onload = function () {
  const particle = new particleLib.Particle();
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();

  // When using id's the variable is exposed 
  const canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);

  const rAF = window.requestAnimationFrame;
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const p = particle.create({
    x: w/2,
    y: h/2,
    magnitude: 10,
    direction: Math.PI * Math.random() * 2,
    width: 2,
    height: 2,
    friction,
    gravitations: []
  });

  function update(delta) {
    ctx.clearRect(0, 0, w, h);

    p.update();
    shapes.pRect(p);
    rAF(update);
  }

  update();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
