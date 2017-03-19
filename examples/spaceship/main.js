"use strict";
window.onload = function() {
  window.document.body.insertAdjacentHTML(
    "beforeBegin",
    "<div style=\"position: fixed; top: 20%; left: 50%; color: rgba(150,0,0,0.8)\">" +
      "Use the arrow keys" +
    "</div>"
  );

  window.focus();
  const particle = new particleLib.Particle();
  const vector = new particleLib.Vector();
  const utils = particleLib.Utils;

  // When using id's the variable is exposed
  const canvas = a;
  const rAF = window.requestAnimationFrame;
  const ctx = a.getContext("2d");

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const ship = particle.create({
    x: w/2,
    y: h/2,
    ax: 0,
    ay: 0,
    friction: 0.9,
  });

  let angle = 0;
  let turningLeft = false;
  let turningRight = false;
  let thrusting = false;

  document.body.addEventListener("keydown", function(event) {
    switch(event.keyCode) {
    case 38:
      thrusting = true;
      break;
    case 37:
      turningLeft = true;
      break;
    case 39:
      turningRight = true;
      break;
    default:
      break;
    }
  });

  document.body.addEventListener("keyup", function(event) {
    switch(event.keyCode) {
    case 38:
      thrusting = false;
      break;
    case 37:
      turningLeft = false;
      break;
    case 39:
      turningRight = false;
      break;
    default:
      break;
    }
  });

  update();

  function update() {
    ctx.clearRect(0, 0, w, h);

    if (turningRight) {
      angle -= 0.05;
    }

    if (turningLeft) {
      angle += 0.05;
    }

    const aV = utils.setAngle(angle, ship.state.vx, ship.state.vy);
    ship.state.ax = aV[0];
    ship.state.ay = aV[1];

    if (thrusting) {
      const lV = utils.setLength(0.5, ship.state.ax, ship.state.ay);
      ship.state.ax = lV[0];
      ship.state.ay = lV[1];
    } else {
      const lV = utils.setLength(0, ship.state.ax, ship.state.ay);
      ship.state.ax = lV[0];
      ship.state.ay = lV[1];
    }

    ship.accelerate(ship.state.ax, ship.state.ay);
    ship.updatePos();

    ctx.save();
    ctx.translate(ship.state.x, ship.state.y);
    ctx.rotate(angle);

    ctx.beginPath();
    ctx.moveTo(10, 0);
    ctx.lineTo(-10, -7);
    ctx.lineTo(-10, 7);
    ctx.lineTo(10, 0);

    if (thrusting) {
      ctx.moveTo(-10, 0);
      ctx.lineTo(-18, 0);
    }

    ctx.stroke();
    ctx.restore();

    // Boundries //
    if (ship.state.x > w) {
      ship.state.x = 0;
    }

    if (ship.state.x < 0) {
      ship.state.x = w;
    }

    if (ship.state.y > h) {
      ship.state.y = 0;
    }

    if (ship.state.y < 0) {
      ship.state.y = h;
    }

    rAF(update);
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
