const particle = new particleLib.Particle();
const vector = new particleLib.Vector();
const utils = particleLib.Utils;

window.onload = function () {
  
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);

  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;

  let cx = w / 2;
  let cy = h / 2;

  console.log(utils.randomRange(-0.1, 0.1));
  const particles = particle.generator(1000, {}, function map(opts, i, create) {
    const newState = {
      x: cx,
      y: cy,
      vx: 0,
      vy: 0,
      friction: 0.999,
      gravity: utils.lerp(Math.random(), -0.001, 0.001),
      magnitude: Math.random() * 2,
      direction: Math.random() * Math.PI * 4,
      radius: Math.random() * 10 + 5,
      color: "hsl("+ 360*Math.random() +",100%,50%)",
    };
    create(newState);
  });

  (function update() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.update();
      shapes.pCircle(p);
    }
    rAF(update);
  })();
};
