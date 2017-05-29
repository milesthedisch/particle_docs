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
      x: 1000,
      y: 1000,
    },
  });

  YAT._clock.on("render", function render() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillText(`${JSON.stringify(YAT.tweens[0].state)}`, 200, 200);
    shapes.circle(YAT.tweens[0].state.x, YAT.tweens[0].state.y);
  });

  YAT.startAll();


  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
