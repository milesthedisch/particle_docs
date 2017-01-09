
window.onload = function () {
  var particle = new particleLib.Particle();
  var vector = new particleLib.Vector();

  var rAF = window.requestAnimationFrame;
  var canvas = a;
  var ctx = a.getContext("2d");

  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;

  var cx = w / 2,
      cy = h / 2,
      p = particle.create();
      accel = vector.create(0.02, 0.001);

  update();

  function update() {
    ctx.clearRect(0, 0, w, h);
    p.accelerate(accel);
    p.get("position")["+="](p.get("velocity"));

    ctx.beginPath();
    ctx.arc(p.get("position").get("x"), p.get("position").get("y"), 10, 0, Math.PI * 2, false);
    ctx.fill();
      
    requestAnimationFrame(update);

  }

}
