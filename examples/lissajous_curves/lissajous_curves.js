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

  const numObjects = 1000;
  const size = 10;

  const bounds = vector.random(w / 3 - size, h / 3 - size);
  const centerVec = vector.create(w / 2, h / 2);

  const _particles = particle.generator(numObjects, undefined, function(p) {
    return p.create({
      "color": {h: 180*Math.random(), s: 100 * Math.random(), l: 60},
      "position": vector.create(0, 0),
      "direction": 1,
      "size": Math.round(utils.lerp(Math.random(), 0, size)),
      "angle": vector.random(0, 0.3),
      "magnitude": utils.lerp(Math.random(), 0.01, 0.02),
    });
  });

  function updateParticles(particles) {
    particles.forEach(function(p) {
      let x = centerVec.get("x") + bounds.get("x") * Math.sin(p.get("angle").get("x"));
      let y = centerVec.get("y") + bounds.get("y") * Math.sin(p.get("angle").get("y"));
      p.get("position").set("x", x);
      p.get("position").set("y", y);
      p.speed();
      p.get("angle")["+="](p.get("velocity"));
    });
    return particles;
  };

  (function render() {
    ctx.clearRect(0, 0, w, h);
    updateParticles(_particles).forEach(function(p) {
      let c = p.get("color");
      shapes.circle(
        p.get("position").get("x"),
        p.get("position").get("y"),
        p.get("size"),
        "hsl(" +c.h+ "," +c.s+ "%," +c.l+ "%)"
      );
      p.get("color").h += (p.get("velocity").get("x") + p.get("velocity").get("y")) * p.get("size") + 0.1;
    });
    rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};

