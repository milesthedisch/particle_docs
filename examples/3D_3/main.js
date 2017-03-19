window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");

  // Libs
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();

  // Boundries
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const fl = 300;
  const cards = [];
  const numCards = 7;
  const centerZ = 1000;
  const radius = 1000;

  let baseAngle = 0;
  let rotationSpeed = 0.01;

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
  (function render() {
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

      ctx.translate(-card.image.width / 2, -card.image.height / 2);
      ctx.drawImage(card.image, 0, 0);

      ctx.restore();

      card.x = Math.cos(card.angle + baseAngle) * radius;
      card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
    });

    rAF(render);
  })();

  /****** ANIMATE ******/

  function createImage(id) {
    const dimension = utils.randomBetween(300, 400);
    const imageEl = document.createElement("img");
    imageEl.src = `http://fillmurray.com/${dimension}/${dimension}`;
    imageEl.setAttribute("id", `pic${id}`);
    return imageEl;
  }

  function zsort(squareA, squareB) {
    return squareB.z - squareA.z;
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
