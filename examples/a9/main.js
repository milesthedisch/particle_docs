'use strict';

window.onload = function () {
  const particle = new particleLib.Particle();
  const vector = new particleLib.Vector();

  // When using id's the variable is exposed 
  var canvas = a;
  var rAF = window.requestAnimationFrame;
  var ctx = a.getContext("2d");
  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;
  var ship = particle.create({
    position: vector.create(w/2, h/2),
  }),
  thrust = vector.create(0, 0),
  angle = 0,
  turningLeft = false,
  turningRight = false,
  thrusting = false;

  document.body.addEventListener("keydown", function (event) {

    console.log(event.keyCode);

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

  document.body.addEventListener("keyup", function (event) {

    console.log(event.keyCode);

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

    thrust.setAngle(angle);

    if (thrusting) {
      thrust.setLength(0.1);
    } else {
      thrust.setLength(-0.0002);
    }

    ship.accelerate(thrust);
    ship.update();

    ctx.save();
    ctx.translate(ship.get("position").get("x"), ship.get("position").get("y"));
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
    if (ship.get("position").get("x") > w) {
      ship.get("position").set("x", 0);
    }

    if (ship.get("position").get("x") < 0) {
      ship.get("position").set("x", w);
    }

    if (ship.get("position").get("y") > h) {
      ship.get("position").set("y", 0);
    }

    if (ship.get("position").get("y") < 0) {
      ship.get("position").set("y", h);
    }

    rAF(update);
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
