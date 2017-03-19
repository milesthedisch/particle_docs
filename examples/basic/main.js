"use strict";

window.onload = function() {
  const particle = new particleLib.Particle();
  const rAF = window.requestAnimationFrame;

  // When using id's the variable is exposed
  const canvas = a;
  const ctx = a.getContext("2d");
  const shapes = new particleLib.Shapes(ctx, document);

  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;

  let cx = w * .5;
  let cy = h * .5;
  let angle = 0;

  const baseAlpha = 0.1;
  const amplitude = 0.2;
  const speed = 0.01;

  const p = particle.create({
    radius: 100,
    color: `rgba(0, 0, 0, ${baseAlpha})`,
    x: cx,
    y: cy,
  });

  (function render() {
    ctx.clearRect(0, 0, w, h);

    let alpha = Math.abs(0.6 + Math.asin(angle) * angle / 2);

    p.state.radius = Math.abs(10 + Math.sin(angle) * (angle * 10));
    p.state.color = `rgba(0, 0, 0, ${alpha})`;

    shapes.pCircle(p);

    angle += speed;
    rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};

