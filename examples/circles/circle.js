"use strict";

window.onload = function() {
  const rAF = window.requestAnimationFrame;
  // When using id's the constiable is exposed
  const canvas = a;
  const ctx = a.getContext("2d");
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const particle = new particleLib.Particle();
  const shapes = new particleLib.Shapes(ctx, document);

  let cx = w/2;
  let cy = h/2;

  const objRadius = 3;
  const circleRadius = 100;
  const numObjects = 10;
  const slice = 2 * Math.PI / numObjects;

  const particles = particle.generator(numObjects, undefined, function(opts, i, create) {
    const direction = i * slice;
    const newState = {
      x: (Math.cos(direction) * 1) + cx,
      y: (Math.sin(direction) * 1) + cy,
      direction,
      radius: objRadius,
      magnitude: 1,
    };

    return create(newState);
  });

  let µ = 0.01;
  let µDelta = 0.1;

  (function animate() {
    // ctx.clearRect(0, 0, w, h);

    µDelta += 0.1;

    particles.forEach(function(particle) {
      console.log(particle);
      particle.state.x += Math.sin(µDelta);
      particle.state.y += Math.sin(µDelta);

      particle.state.direction += µ;

      // Set angle of velocity vector
      const length = Math.hypot(particle.state.vx, particle.state.vy);
      particle.state.vx = Math.cos(particle.state.direction) * length;
      particle.state.vy = Math.sin(particle.state.direction) * length;

      particle.update();
      shapes.pCircle(particle);
    });

    rAF(animate);
  })();


      // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
