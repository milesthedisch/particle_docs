window.onload = function () {

  const vec = new particleLib.Vector();
  const vScale = vec.create(1, 1);
  const vSine = vec.create(1, 1);

  // When using id's the variable is exposed 
  const canvas = a;
  const ctx = a.getContext("2d");
  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;
  const dotRadius = 2;

  ctx.translate(0, h/2);
  ctx.scale(vScale.state.x, vScale.state.y);

  const µ = (Math.PI * 2) / w;
  const amp = h / 2 - dotRadius;
  const phaseShift = 0;
  const Ω = 0.01;

  let x = vSine.get("x");
  let y = vSine.get("y");

  for (x; x < w - dotRadius; x += 2) {
    let angle = (x * µ) - phaseShift;
    y = amp * Math.sin(angle);

    ctx.fillRect(x, y, dotRadius, dotRadius);
  }
};
