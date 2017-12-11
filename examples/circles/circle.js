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
  const radius = 200;

  let cx = w/2;
  let cy = h/2;

  const objRadius = 3;
  const circleRadius = 100;
  const numObjects = 1000;
  const slice = 2 * Math.PI / numObjects;

  const particles = Particle.generate(numObjects).map((p, i) => {
    const direction = i * slice;
    const newState = {
      x: cx,
      y: cy,
      direction,
      radius: objRadius,
      magnitude: 4,
      color: "rgba(0,0,0,0.02)",
    };

    return Particle.create(newState);
  });

  let µDelta = 0.1;

  (function animate() {
    µDelta += 0.1;
    let Ω = Math.abs(Math.sin(µDelta));
    // let π = Math.cos(µDelta) / 10 + 0.02;

    particles.forEach(function(particle, i) {
      particle.state.color = `rgba(0, 0, 0, ${0.02 /* π */})`;

      particle.state.x += Math.cos(Math.pow(µDelta, 2)/2) / 2;
      particle.state.y += Math.cos(Math.pow(µDelta, 2)/2) / 2;

      const length = Math.hypot(particle.state.vx, particle.state.vy);
      particle.state.vx = Math.cos(particle.state.direction) * length;
      particle.state.vy = Math.sin(particle.state.direction) * length;

      particle.state.direction += 0.01;

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
