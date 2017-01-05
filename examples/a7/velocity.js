const particle = new particleLib.Particle();
const vector = new particleLib.Vector();

window.onload = function () {
  
  const rAF = window.requestAnimationFrame;
  const canvas = a;
  const ctx = a.getContext("2d");

  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;

  let cx = w / 2;
  let cy = h / 2;
  let particles = [];
  let numParticles = 100;

  for (let i = 0; i < numParticles; i += 1) {
    particles.push(
      particle.create({
        position: vector.create(cx, cy),
        acceleration: vector.create(Math.random() * 4 + 1),
        velocity: vector.create(0, 0),
        angle: Math.random() * Math.PI * 2,
      })
    );
  }

  console.log(particles);
  update();

  function update() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < numParticles; i += 1) {
      var p = particles[i];
      p.update();
      ctx.beginPath();
      ctx.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
      ctx.fill();
    }
      
    rAF(update);
  }

}
