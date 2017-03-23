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

  var catGifUrls;
  const numberOfCards = 20;

  // Move to center //
  ctx.translate(w/2, h/2);

  (function render() {
    ctx.clearRect(0, 0, w, h);
    rAF(render);
  })();

  function createObjects(num) {
    if (!!+num) {
      throw new Error("Please provide a number.");
    }

    for (let obj = 0; i < num; i++) {
       
    }
  };

  function fetchCats(url) {
    return fetch(url)
      .then(checkStatus)
      .then(toJSON)
      .then(getCatGifs)
      .catch(function(err) {
        console.error("couldn't fetch cats", err);
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
    catGifUrls = gifData.data.slice(0, numberOfCards)
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
