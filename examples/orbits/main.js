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

  const SUN = 10000;
  const PLANET = 1600;
  const JUPITER = 400;

  const sun = particle.create({
    x: w/2,
    y: h/2,
    color: "#ffff00",
    radius: SUN * 0.005,
    mass: SUN,
  });

  const planet = particle.create({
    x: w/5,
    y: h/4,
    direction: -Math.PI / 2,
    magnitude: 5,
    color: "#00ffff",
    radius: PLANET * 0.005,
    mass: PLANET,
  });

  const jupiter = particle.create({
    x: w/3,
    y: h/2,
    magnitude: 7,
    direction: -Math.PI / 2,
    color: "#0000ff",
    radius: JUPITER * 0.005,
    mass: JUPITER,
  });

  const masses = [jupiter, planet];

  function gravitateToSun(planets) {
    for (let i = 0; i < planets.length; i++) {
      planets[i].gravitateTo(sun);

      for (let j = 0; j < planets.length; j++) {
        if (i != j) {
          planets[j].gravitateTo(planets[i]);
          planets[i].gravitateTo(planets[j]);
        }
      }

      planets[i].update();
      shapes.pCircle(planets[i]);
    }
  }

  (function update() {
    ctx.clearRect(0, 0, w, h);
    gravitateToSun(masses);
    shapes.pCircle(sun);
    rAF(update);
  })();

  document.addEventListener("click", function(e) {
    const m = utils.randomBetween(1000, 5000);
    const newPlanet = particle.create({
      x: e.clientX,
      y: e.clientY,
      direction: Math.random() * (Math.PI),
      magnitude: utils.randomBetween(3, 5),
      color: "#00ffff",
      mass: m,
      radius: m * 0.005,
    });
    masses.push(newPlanet);
  });

  window.focus();
  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
