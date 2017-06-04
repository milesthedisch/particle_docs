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
    fps: 10,
  });

  const t1 = YAT.create({
    obj: {
      x: 10,
      y: 10,
    },
    props: {
      x: 100,
      y: 100,
    },
    duration: 10000,
  });

  YAT._clock.on("render", function render() {
    ctx.font = "20px serif";
    ctx.clearRect(0, 0, w, h);
    ctx.fillText(`${JSON.stringify(YAT.tweens[0].state)}`, 30, 30);
    shapes.circle(t1.state.x, t1.state.y, 20);
  });


  YAT.startAll();
  setTimeout(function() {
    t1.delay(1000);
  }, 2000);

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
