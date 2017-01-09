'use strict';

window.onload = function () {

  const rAF = window.requestAnimationFrame;

  // When using id's the variable is exposed 
  const canvas = a;
  const ctx = a.getContext("2d");
  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;

  let cx = w * .5;
  let cy = h * .5;
  let radius = 100;
  let baseAlpha = 0.1;
  let offset = 0.9;
  let speed = 0.01;
  let angle = 0;
  let i = 0;
  let j = 0;

  render();

  function render() {

    let alpha = Math.abs(0 + Math.sin(angle) * offset);
    i += 0.1;
    j += 0.2;
    radius = Math.abs(10 + Math.sin(j) * 10 + i);

    ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2, false);
    ctx.fill();

    speed = speed / 1;
    angle += speed;

    rAF(render);
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };

};

