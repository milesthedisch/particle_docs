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
  let diffVector;
  let delta;

  for (let i = 0; i < numParticles; i += 1) {
    particles.push(
      particle.create({
        position: vector.create(cx, cy),
        velocity: vector.create(0, 0),
        magnitude: Math.random() * 1,
        direction: Math.random() * Math.PI * 4,
        radius: Math.random() * 5 + 1,
        color: "hsl("+ 360*Math.random() +",100%,50%)",
      })
    );
  }

  update();

  function update() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < numParticles; i += 1) {
      let p = particles[i];

      p.update();
      ctx.beginPath();
      ctx.fillStyle = p.get("color");
      ctx.arc(p.get("position").get("x"), p.get("position").get("y"), p.get("radius"), 0, Math.PI * 2, false);
      ctx.fill();
    }
      
    rAF(update);
  }

}
