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

  const t1 = YAT.create({
    obj: {
      x: 100,
      y: 100,
    },
    props: {
      x: 500,
      y: 500,
    },
    duration: 5000,
    easing: "easeInOutQuad",
  });

  const t2 = YAT.create({
    obj: {
      x: w/2,
      y: h/2,
    },
    props: {
      x: w,
      y: h,
    },
    duration: 5000,
    easing: "easeInOutQuad",
  });

  YAT._clock.on("render", function render() {
    ctx.font = "20px serif";
    ctx.clearRect(0, 0, w, h);

    YAT.tweens.forEach(function(t, i) {
      ctx.fillText(`${JSON.stringify(t.state)}`, w/3, 30 + i * 20);
      shapes.circle(t.state.x, t.state.y, 20);
    });
  });


  YAT.startAll();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
