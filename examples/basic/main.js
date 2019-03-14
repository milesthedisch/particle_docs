"use strict";

window.onload = function() {

  const Particle = particleLib.Particle;
  const particle = new Particle();
  const rAF = window.requestAnimationFrame;

  const canvas = a;
  const ctx = a.getContext("2d");
  const shape = new particleLib.Shapes(ctx, document);

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  let cx = w * .5;
  let cy = h * .5;
  let angle = 0; 
  let speed = 0.01;
  let acceleration = 0.00001;

  const p = Particle.create({
    radius: 100,
    color: `rgba(0, 0, 0, 1)`,
    x: cx,
    y: cy,
  });

  (function render() {
    speed += Math.tan(acceleration);
    angle += speed;

    let rad = Math.sin(angle);
    let absRad = Math.abs(rad);

    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = `rgba(0, 0, 255, ${absRad * -absRad + 0.2})`;
    ctx.fillRect(0, 0, w, h);
    

    p.state.radius = rad * (rad * 100) + 50;
    p.state.color = `rgba(0, 0, 255, ${absRad * absRad + 0.8})`;

    shape.pCircle(p);


    rAF(render);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    cx = w * 0.5;
    cy = h * 0.5;
    p.state.x = cx;
    p.state.y = cy;
  };
};

