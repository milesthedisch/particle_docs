"use strict";

window.onload = function() {
  const rAF = window.requestAnimationFrame;
  // When using id's the variable is exposed
  const canvas = a;
  const ctx = a.getContext("2d");

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  let cx = w * .5;
  let cy = h * .5;
  let angle = 0;
  let dx;
  let dy;

  render();

  function render () {
    ctx.clearRect(0, 0, w, h);

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);

    ctx.beginPath();
    // This is the arrow -> //
    ctx.moveTo(20, 0);
    ctx.lineTo(-20, 0);
    ctx.moveTo(20, 0);
    ctx.lineTo(10, -10);
    ctx.moveTo(20, 0);
    ctx.lineTo(10, 10);
    ctx.stroke();

    ctx.restore();
    rAF(render);
  }


  document.addEventListener("mousemove", function(event) {
    dx = event.clientX - cx;
    dy = event.clientY - cy;
    angle = Math.atan2(dy, dx);
  });

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
