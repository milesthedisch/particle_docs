'use strict';
const particle = new particleLib.Particle();
const vector = new particleLib.Vector();

window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");
  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;

  // Center x and Center y
  // are the same as 0,0 on
  // a cartiesian cordinate map.

  const cx = w * .5;
  const cy = h * .5;
  const yRadius = 50;
  const xRadius = 40;
  const numObjects = 100;
  const accel = 0.0002;
  const size = 1;

  const _particles = createObjects(numObjects);
  render();

  function render() {
    ctx.clearRect(0, 0, w, h);
    updateParticles(_particles).forEach(function(p) {
      ctx.beginPath();
      ctx.arc(
        p.get("position").get("x"), 
        p.get("position").get("y"), 
        size, 
        0, 
        Math.PI * 2, 
        false
      );
      ctx.fill();
    });

    rAF(render);
  }

  function createObjects(num) {
    const particles = [];

    for (let i = 0; i < num; i++) {
      particles.push(particle.create({
        velocity: vector.create(0.005, 0.004),
        acceleration: vector.random(0.00002, 0.001),
        position: vector.create(0, h - size),
        angle: vector.random(0, 1000),
        radius: vector.random(w / 4 - size, h / 4 - size),
      }));
    };

    return particles;
  };

  function updateParticles(particles) {
    particles.forEach(function (p) {
      let x = cx + p.get("radius").get("x") * Math.sin(p.get("angle").get("x"));
      let y = cy + p.get("radius").get("y") * Math.sin(p.get("angle").get("y"));
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

