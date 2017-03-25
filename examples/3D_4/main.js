const CATS = "http://api.giphy.com/v1/gifs/search\?q\=transparent+cat\&api_key\=dc6zaTOxFJmzC";

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

  const numOfObjects = 20;
  const baseZ = 1000;
  const baseAngle = 0;
  const radius = 2000;
  const focalLength = 200;

  let angleVeloctiy = 0.01;

  fetchCats()
    .then(createObjects)
    .catch(function(err){ console.error(err) });

  function init(objects) {

    // Move to center //
    ctx.translate(w/2, h/2);

    (function render() {
      ctx.clearRect(-w/2, -h/2, w/2, h/2);

      for (let i = 0; i < objects.length; i++) {
        let o = objects[i];

        ctx.save();
        perspective = focalLength / focalLength + o.z;
        ctx.scale(perspective, perspective);
        ctx.translate(o.x, o.y);
        ctx.translate(o.image.width / 2, -o.image.width / 2);
        ctx.restore();
      }

      rAF(render);
    })();
  }

  function createObjects(catGifs) {
    let cats = [];

    for (let i = 0; i < catGifs.length; i++) {
      cats[i] = {
        angle: (Math.PI * 2 / catGifs.length) * i,
        x: Math.cos(catz[i] + baseAngle) * radius,
        z: (Math.sin(catz[i] + baseAngle) * radius) + centerZ,
        image: document.createElement("image"),
      };

      cats[i].image.src = catGifs[i];
    }

    return cats;
  }

  function fetchCats() {
    return fetch(CATS)
      .then(checkStatus)
      .then(toJSON)
      .then(getCatGifs)
      .catch(function(err) {
        document.write("Sorry please connect to the internet.");
        throw err;
      });
  }

  function toJSON(data) {
    if (data) {
      return data.json();
    }

    throw new Error(`No Data :(. Heres the res: ${data}`);
  }

  function checkStatus(res) {
    if (res.status < 300 && res.status >= 200) {
      return res;
    }

    throw new Error(`Bad response ${res.status} \n ${res}`);
  }

  function getCatGifs(gifData) {
    return gifData.data.slice(0, numOfObjects)
      .map(function(d) {
        return d.images.preview_gif === undefined ?
          "" :
          d.images.preview_gif.url;
      });
  };

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
