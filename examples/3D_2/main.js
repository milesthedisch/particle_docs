window.onload = function() {
  // Needed //
  const rAF = window.requestAnimationFrame;
  const cAF = window.cancelAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");

  // Libs //
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const Particle = particleLib.Particle;
  const particle = new Particle();

  // Boundries //
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  let squares = [];
  let counter = 0;
  let ran = false;
  let spinnerFrame;

  // Focal length //
  const fl = 300;
  const numsquares = 100;
  const start = new Date();
  const numParticles = 11;
  const slice = Math.PI * 2 / numParticles;

  const particles =
    Particle.generate(
      numParticles,
      {},
      function(opts, i, create) {
        create({
          x: Math.cos(slice * i) * 30,
          y: Math.sin(slice * i) * 30,
          radius: Math.sqrt(i) * 2,
        });
      }
    );

  for(let i = 0; i < numsquares; i++) {
    let square = {
      x: utils.randomBetween(-1000, 1000),
      y: utils.randomBetween(-1000, 1000),
      z: utils.randomBetween(0, 10000),
      image: document.createElement("img"),
    };

    let dimension = utils.randomBetween(300, 600);
    square.image.src = `http://fillmurray.com/${dimension}/${dimension}`;
    square.image.addEventListener("load", incrementCounter, false );

    squares.push(square);
  }

  function update() {
    squares.sort(zsort);

    if (!ran) {
      // Move the context to the center of the screen.
      // Which is are vanshing point.
      ctx.translate(w/2, h/2);
      ran = true;
    }

    ctx.save();
    // Clear the whole canvas //
    ctx.clearRect(-w/2, -h/2, w, h);

    squares.forEach(function(square) {
      ctx.save();
      // Perspective fomulae that gives us the coordinate based on the perspective //
      // The more the distance the smaller the object will be drawn. //
      // focalLength / (focalLength + distance) //
      let perspective = fl / (fl + square.z);

      ctx.scale(perspective, perspective);
      ctx.translate(square.x, square.y);

      ctx.translate(-square.image.width / 2, -square.image.height / 2);
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#330033";
      ctx.drawImage(square.image, 0, 0);

      ctx.restore();

      square.z -= 10;
      if(square.z <= 0) {
        square.z = 0;
        squares.splice(squares.indexOf(square) - 1, squares.indexOf(square));
      }
    });

    ctx.restore();

    rAF(update);
  }

  (function spinner(delta) {
    ctx.save();
    ctx.clearRect(0, 0, w, h);
    ctx.translate(w/2, h/2);
    let val = parseInt(((new Date() - start) / 1000) * numParticles) / numParticles;
    ctx.rotate(Math.PI * 2 * val);

    particles.forEach(function(p, i) {
      p.update();
      p.state.color = `rgba(0,0,0,${Math.sqrt(i) * 0.5})`;
      shapes.pCircle(p);
    });

    ctx.restore();
    spinnerFrame = rAF(spinner);
  })();

  function zsort(squareA, squareB) {
    return squareB.z - squareA.z;
  }

  function incrementCounter() {
    counter++;
    if (counter === numsquares) {
      cAF(spinnerFrame);
      return update();
    }
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
