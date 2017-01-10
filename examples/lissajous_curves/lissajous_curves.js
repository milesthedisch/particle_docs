'use strict';
const particle = new particleLib.Particle();
const vector = new particleLib.Vector();
const utils = particleLib.Utils;

window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;

  // Center x and Center y
  // are the same as 0,0 on
  // a cartiesian cordinate map.

  const numObjects = 100;
  const size = 5;

  const bounds = vector.random(w / 3 - size, h / 3 - size);
  const centerVec = vector.create(w / 2, h / 2);

  const _particles = createObjects(numObjects);

  (function render() {
    ctx.clearRect(0, 0, w, h);
    updateParticles(_particles).forEach(function(p) {
      let c = p.get("color");
      ctx.beginPath();
      ctx.fillStyle = "hsl(" +c.h+ "," +c.s+ "%," +c.l+ "%)";
      ctx.arc(
        p.get("position").get("x"),
        p.get("position").get("y"),
        p.get("size"),
        0,
        Math.PI * 2,
        false
      );
      ctx.fill();
      p.get("color").h += 1.5;
    });

    
    rAF(render);
  })();

  function createObjects(num) {
    const particles = [];

    for (let i = 0; i < num; i++) {
      particles.push(particle.create({
        color: {h: 360*Math.random(), s: 100, l: 60},
        velocity: vector.create(0.00005, 0.00004),
        acceleration: vector.random(0, 0),
        position: vector.create(0, 0),
        direction: 1,
        size: Math.round(utils.lerp(Math.random(), 2, size)),
        angle: vector.random(0, 0.1),
        magnitude: utils.lerp(Math.random(), 0.01, 0.02),
      }));
    };

    return particles;
  };

  function updateParticles(particles) {
    particles.forEach(function(p) {
      let x = centerVec.get("x") + bounds.get("x") * Math.sin(p.get("angle").get("x"));
      let y = centerVec.get("y") + bounds.get("y") * Math.sin(p.get("angle").get("y"));
      p.get("position").set("x", x);
      p.get("position").set("y", y);
      p.accelerate(p.get("acceleration"));
      p.get("angle")["+="](p.get("velocity"));
    });
    return particles;
  };

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};

