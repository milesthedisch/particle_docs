'use strict';

window.onload = function () {

  const rAF = window.requestAnimationFrame;
  // When using id's the constiable is exposed 
  const canvas = a;
  const ctx = a.getContext("2d");
  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;

  const particle = particleLib.Particle;

  const cx = w * .5;
  const cy = h * .5;
  const objRadius = 10;
  const radius = cy - objRadius;

  const numObjects = 20;
  const slice = 2 * Math.PI / numObjects;
  let x; 
  let y;

  const arr = [];
  for (let i = 0; i < numObjects; i++) {
    arr.push(new Particle());
  }
      
  arr
  .map(function (x) { return x * slice})
  .forEach(function(angle) {
    x = cx + Math.cos(angle) * radius;
    y = cy + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fill();
  });
  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

}

