// 'use strict';
const utils = particleLib.Utils;
window.onload = function() {
  // When using id's the variable is exposed
  let canvas = a;
  let rAF = window.requestAnimationFrame;
  let ctx = a.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  let points = [52, 81, 62, 24, 87, 22, 36, 82, 94, 81, 10, 79, 53, 61, 9, 94, 52, 64, 85, 60];
  let min = Math.min.apply(null, points);
  let max = Math.max.apply(null, points);
  let normalizedPoints = points.map(function(num) {
    return utils.normalize(num, max, min);
  });
  let pointsLength = points.length;

  function update() {
    ctx.beginPath();
    for (let i = 0; i < pointsLength; i++) {
        // Pecentage of the screen width for each point.
        // We divide the pointsLength by the width to get
        // an average for each point width. Then we multiply it
        // incrementally to get the next one.
      let x = width / (pointsLength - 1) * i;

        // For each normalized value we multiply
        // the height to get the actual y but then we
        // need to minus by height to reverse the y axis
        // because canvas coordinates are reveresed.
      let y = (height - height / 8) - ((height / 2 + 100) * normalizedPoints[i]);

      if (i == 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.stroke();
  }

  update();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    update();
  };
};

