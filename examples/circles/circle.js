"use strict";

window.onload = function() {
  const rAF = window.requestAnimationFrame;
  // When using id's the constiable is exposed
  const canvas = a;
  const ctx = a.getContext("2d");
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const particle = new particleLib.Particle();
  const vec = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);

  const centerVec = vec.create(w * .5, h * .5);
  const objRadius = 2;
  const radius = centerVec.get("x") - objRadius;
  const numObjects = 10;
  const slice = 2 * Math.PI / numObjects;
  const arr = [];
  for (let i = 0; i < numObjects; i += 1) {

    // Center are the particles //
    let position = vec.create();
    position["+="](centerVec);

    arr.push(
      particle.create({
        // Each slice is slice of Math.PI //
        direction: i * slice,
        // How far its from the center //
        magnitude: 1,
        // Radius fo the particles drawn //
        radius: objRadius,
        position: position,
      })
    );
  }

  let µ = 0.01;
  let µDelta = 0.1;

  (function animate() {
    // ctx.clearRect(0, 0, w, h);

    µDelta += 0.1;

    arr.forEach(function(particle) {
      let position = particle.get("position").addTo(vec.create(Math.sin(µDelta), Math.sin(µDelta)));
      let velocity = particle.get("velocity");
      let directionDelta = particle.get("direction") + µ;

      particle.set("direction", directionDelta);
      velocity.setAngle(directionDelta);
      particle.get("position")["+="](velocity);

      shapes.circle(
        particle.get("position").get("x"),
        particle.get("position").get("y"),
        particle.get("radius"),
        0,
        Math.PI * 2,
        false
      );
    });

    rAF(animate);
  })();


      // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
