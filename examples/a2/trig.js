window.onload = function () {

  const vec = new particleLib.Vector();
  const vScale = vec.create(1, 1);

  // When using id's the variable is exposed 
  const canvas = a;
  const ctx = a.getContext("2d");
  const w = canvas.width = window.innerWidth;
  const h = canvas.height = window.innerHeight;

  ctx.translate(0, h/2);
  ctx.scale(vScale.state.x, vScale.state.y);

  const µ = (Math.PI * 2) / w;
  const amp = h / 2;
  const phaseShift = 0;

  for (let x = 0; x < w; x += 1) {
    const angle = (x * µ) - phaseShift;
    const y = amp * Math.sin(angle);

    ctx.fillRect(x, y, 5, 5);
  }
};
