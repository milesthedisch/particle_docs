'use strict';
const particle = new particleLib.Particle();
const vector = new particleLib.Vector();
const utils = particleLib.Utils;

window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);
  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;

  // Center x and Center y
  // are the same as 0,0 on
  // a cartiesian cordinate map.

  const numObjects = 500;
  const size = 10;

  const bounds = vector.random(w / 3 - size, h / 3 - size);
  const centerVec = vector.create(w / 2, h / 2);

  const _particles = particle.generator(numObjects, {}, function(opts, i, create) {
    create({
      color: {h: 180*Math.random(), s: 100 * Math.random(), l: 60},
      x: centerVec.get("x"),
      y: centerVec.get("y"),
      direction: utils.lerp(Math.random(), 0.96, 1),
      size: Math.round(utils.lerp(Math.random(), 0, size)),
      ax: utils.randomBetween(0, 0.01),
      ay: utils.randomBetween(0, 0.01 ),
      magnitude: utils.lerp(Math.random(), 0.01, 0.02),
    });
  });

  function updateParticles(particles) {
    particles.forEach(function(p) {
      p.state.x = centerVec.get("x") + bounds.get("x") * Math.sin(p.state.ax);
      p.state.y = centerVec.get("y") + bounds.get("y") * Math.sin(p.state.ay);
      p.updatePos();
      p.state.ax += p.state.vx;
      p.state.ay += p.state.vy;
    });
    return particles;
  };

  (function render() {
    ctx.clearRect(0, 0, w, h);
    updateParticles(_particles).forEach(function(p) {
      // const p = _particles[0];
      let c = p.state.color;

      shapes.circle(
        p.state.x,
        p.state.y,
        p.state.size,
        "hsl(" +c.h+ "," +c.s+ "%," +c.l+ "%)"
      );

      p.state.color.h += (p.state.vx + p.state.vy) * p.state.size + 0.1;
    });
    rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};

