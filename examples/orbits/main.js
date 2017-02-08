// 
window.onload = function () {
  const particle = new particleLib.Particle();
  const vector = new particleLib.Vector();
  const utils = particleLib.Utils;

  // When using id's the variable is exposed //
  const canvas = a;
  const rAF = window.requestAnimationFrame;
  const ctx = a.getContext("2d");

  const shapes = new particleLib.Shapes(ctx, document);

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const sun = particle.create({
    position: vector.create(w / 2, h / 2),
    color: "#ffff00",
    radius: 50,
  });

  const planet = particle.create({
    position: vector.create(w / 3, h / 4),
    direction: -Math.PI / 2,
    magnitude: 5,
    color: "#00ffff",
    radius: 2,
  });

  const jupiter = particle.create({
    position: vector.create(w / 3, h / 2),
    magnitude: 7,
    direction: -Math.PI / 2,
    color: "#0000ff",
    radius: 10,
  });

  sun.set("mass", 4000);
  planet.set("mass", 10);
  jupiter.set("mass", 50);

  update();

  function update() {
    ctx.clearRect(0, 0, w, h);

    planet.gravitateTo(sun);
    jupiter.gravitateTo(sun);
    // console.log(planet);
    jupiter.update();
    planet.update();
    // sun.update();

    shapes.pCircle(sun);
    shapes.pCircle(jupiter);
    shapes.pCircle(planet);

    rAF(update);
  }

  document.addEventListener("click", function() {
    console.log("click");
  });

  window.focus();
  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
