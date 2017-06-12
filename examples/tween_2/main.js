window.onload = function() {
  const canvas = a;
  const ctx = a.getContext("2d");

  // Libs
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(ctx, document);
  const particle = new particleLib.Particle();

  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const YAT = particleLib.YAT.init({
    clock: particleLib.Clock,
  });

  function generateTweens(num, YAT) {
    for (let i = 0; i < num; i++) {
      YAT.create({
        obj: {
          x: Math.cos(i) * 500,
          y: Math.sin(i) * 500,
        },
        props: {
          x: w/2,
          y: h/2,
        },
        color: randomColor(),
        duration: 5000,
        easing: "easeInOutQuad",
      });
    }
  }

  function randomRGBHex() {
    return Math.round(Math.random() * 255 + 50).toString(16);
  }

  function randomColor() {
   return ["R", "G", "B"].reduce(function(prev, next, i) {
      if (!i) {
        return "#" + randomRGBHex();  
      }
      return prev + randomRGBHex();
    }, 0);
  }

  generateTweens(1000, YAT);

  console.log(YAT.tweens);
  YAT._clock.on("render", function render() {
    ctx.font = "20px serif";
    ctx.clearRect(0, 0, w, h);

    YAT.tweens.forEach(function(t, i) {
      // ctx.fillText(`${JSON.stringify(t.state)}`, w/3, 30 + i * 20);
      shapes.circle(t.state.x, t.state.y, 20, t.state.color);
    });
  });


  YAT.startAll();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
