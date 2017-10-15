window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const cAF = window.cancelAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");

  // Libs
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const Particle = particleLib.Particle;
  const particle = new Particle();


  // Boundries
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const fl = 300;
  const cards = [];
  const numCards = 7;
  const centerZ = 1000;
  const radius = 1000;
  const start = new Date();
  const slice = Math.PI * 2 / numCards;

  const particles =
    Particle.generate(
      numCards,
      {},
      function(opts, i, create) {
        create({
          x: Math.cos(slice * i) * 30,
          y: Math.sin(slice * i) * 30,
          radius: Math.sqrt(i) * 2,
        });
      }
    );

  // Loading Spinner //
  var spinnerFrame;
  var counter = 0; 

  let baseAngle = 0;
  let rotationSpeed = 0.01;

  // Add event listeners //
  document.addEventListener("mousemove", function(e) {
    rotationSpeed = utils.map(e.clientX, 0, w, -w/2 / 10000, w / 10000);
  });

  for (let i = 0; i < numCards; i += 1) {
    let card = {
      y: 0,
      angle: Math.PI * 2 / numCards * i,
      image: createImage(i),
    };

    card.x = Math.cos(card.angle + baseAngle) * radius;
    card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
    cards.push(card);
  }

  ctx.translate(w/2, h/2);

  /****** ANIMATE ******/
  function update() {
    baseAngle += rotationSpeed;

    cards.sort(zsort);

    // Clear the whole canvas //
    ctx.clearRect(-w/2, -h/2, w, h);

    cards.forEach(function(card) {
      // Perspective fomulae that gives us the coordinate based on the perspective //
      // The more the distance the smaller the object will be drawn. //
      // focalLength / (focalLength + distance) //
      let perspective = fl / (fl + card.z);

      ctx.save();
      ctx.scale(perspective, perspective);
      ctx.translate(card.x, card.y);

      // Move the context so when we draw the image the center of the image
      // will align with the actual coordinates of the square.
      ctx.translate(-card.image.width / 2, -card.image.height / 2);
      ctx.drawImage(card.image, 0, 0);

      ctx.restore();

      card.x = Math.cos(card.angle + baseAngle) * radius;
      card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
    });

    rAF(update);
  };

  /****** ANIMATE ******/
  function createImage(id) {
    const dimension = utils.randomBetween(300, 400);
    const imageEl = document.createElement("img");
    imageEl.src = `http://fillmurray.com/${dimension}/${dimension}`;
    imageEl.setAttribute("id", `pic${id}`);
    imageEl.addEventListener("load", incrementCounter, false);
    return imageEl;
  }

  function zsort(squareA, squareB) {
    return squareB.z - squareA.z;
  }

  (function spinner(delta) {
    ctx.save();
    ctx.clearRect(-w/2, -h/2, w, h);
    let val = parseInt(((new Date() - start) / 1000) * numCards) / numCards;
    ctx.rotate(Math.PI * 2 * val);

    particles.forEach(function(p, i) {
      p.update();
      p.state.color = `rgba(0,0,0,${Math.sqrt(i) * 0.5})`;
      shapes.pCircle(p);
    });

    ctx.restore();
    spinnerFrame = rAF(spinner);
  })();

  function incrementCounter() {
    console.log(counter);
    counter++;
    if (counter === numCards) {
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
