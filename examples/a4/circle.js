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
    arr.push(
      particle.create({
        direction: i * slice,
        magnitude: 100,
        radius: objRadius,
      })
    );
  }

  arr.forEach(function(particle) {
    const position = particle.get("position");
    const velocity = particle.get("velocity");

    position["+="](velocity);
    position["+="](centerVec);

    shapes.circle(
      position.get("x"),
      position.get("y"),
      particle.get("radius"),
      0,
      Math.PI * 2,
      false
    );
  });

  // let µ = 0.01;
  // (function animate() {
  //   ctx.clearRect(0, 0, w, h);
  //   µ += 0.05;

  //   arr.forEach(function(particle) {
  //     x = cx + Math.sin(µ) * 10 + Math.cos(particle.get("direction") + µ) * (radius);
  //     y = cy + Math.cos(µ) * 10 + Math.sin(particle.get("direction") + µ) * (radius);

  //     particle.get("position").set("x", x);
  //     particle.get("position").set("y", y);

  //     shapes.circle(x, y, objRadius, 0, Math.PI * 2, false);
  //   });
  //   rAF(animate);
  // })();


      // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
