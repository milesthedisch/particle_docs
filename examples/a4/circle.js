"use strict";

window.onload = function() {
  const rAF = window.requestAnimationFrame;
  // When using id's the constiable is exposed
  const canvas = a;
  const ctx = a.getContext("2d");
  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;

  const particle = new particleLib.Particle();
  const vec = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);

  const cx = w * .5;
  const cy = h * .5;
  const objRadius = 2;
  const radius = cy - objRadius;
  const numObjects = 10;
  const slice = 2 * Math.PI / numObjects;

  let x;
  let y;

  const arr = [];
  for (let i = 0; i < numObjects; i += 1) {
    arr.push(particle.create({
      velocity: i * slice,
      position: vec.create(),
    }));
  }

  let µ = 0.01;
  (function animate() {
    ctx.clearRect(0, 0, w, h);
    µ += 0.05;

    arr.forEach(function(particle) {
      x = cx + Math.sin(µ) * 10 + Math.cos(particle.get("velocity") + µ) * (radius);
      y = cy + Math.cos(µ) * 10 + Math.sin(particle.get("velocity") + µ) * (radius);

      particle.get("position").set("x", x);
      particle.get("position").set("y", y);

      shapes.circle(x, y, objRadius, 0, Math.PI * 2, false);
    });
    rAF(animate);
  })();


      // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
