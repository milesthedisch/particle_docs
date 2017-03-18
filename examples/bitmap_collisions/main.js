window.onload = function() {
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const context = a.getContext("2d");
  const targetCanvas = target;
  const targetContext = targetCanvas.getContext("2d");

  // Libs
  const utils = particleLib.Utils;
  const vector = new particleLib.Vector();
  const shapes = new particleLib.Shapes(context, document);
  const targetShapes = new particleLib.Shapes(targetContext, document);
  const particle = new particleLib.Particle();

  // Boundries
  let w = canvas.width = targetCanvas.width = window.innerWidth;
  let h = canvas.height = targetCanvas.height = window.innerHeight;

  p = particle.create({x: 0, y: h/2, magnitude: 6, direction: 0, radius: 4, gravity: 0.005});
  targetShapes.circle(w/2, h/2, 100);

  function reset(heading) {
    p.state.x = 0;
    p.state.y = h/2;
    p.setHeading(utils.lerp(Math.random(), -Math.PI / 40, Math.PI / 40));
  }

  function render() {
    context.clearRect(0, 0, w, h);
    p.update();
    shapes.pCircle(p);

    const imageData = targetContext.getImageData(p.state.x, p.state.y, 1, 1);

    // Particle hit detection //
    if (imageData.data[3] > 0) {
      targetContext.globalCompositeOperation = "destination-out";
      targetShapes.circle(p.state.x, p.state.y, 20);
      reset();
    } else if (p.state.x > w) {
      reset();
    }

    rAF(render);
  };

  render();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = targetCanvas.width = window.innerWidth;
    h = canvas.height = targetCanvas.height = window.innerHeight;
  };
};
