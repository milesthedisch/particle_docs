
window.onload = function () {
  const particle = new particleLib.Particle();
  const vector = new particleLib.Vector();
  const util = particleLib.Utils;

  // When using id's the variable is exposed //
  const canvas = a;
  const rAF = window.requestAnimationFrame;
  const ctx = a.getContext("2d");

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const sun = particle.create({
    position: vector.create(w / 2, h / 2),
  });

  const planet = particle.create({
    position: vector.create(w / 4, h / 4),
    direction: -Math.PI / 2,
    magnitude: 5,
  });

  const jupiter = particle.create({
    position: vector.create(w / 4, h / 2),
    magnitude: 7,
    direction: -Math.PI / 2,
  });

  sun.set("mass", 4000);
  planet.set("mass", 10);
  jupiter.set("mass", 50);

  update();

  function update() {
    ctx.clearRect(0, 0, w, h);

    planet.gravitateTo(sun);
    jupiter.gravitateTo(sun);
    jupiter.update();
    planet.update();

    ctx.beginPath();
    ctx.fillStyle = "#ffff00";
    ctx.arc(sun.get("position").get("x"), sun.get("position").get("y"), 20, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#00ffff";
    ctx.arc(planet.get("position").get("x"), planet.get("position").get("y"), 5, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#0000ff";
    ctx.arc(jupiter.get("position").get("x"), jupiter.get("position").get("y"), 10, 0, Math.PI * 2, false);
    ctx.fill();

    rAF(update);
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
