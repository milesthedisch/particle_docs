window.onload = function() {
  const vector = new particleLib.Vector();

  // When using id's the variable is exposed
  const canvas = a;
  const ctx = a.getContext("2d");

  // Make the canvas a full portrait.
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  function update () {
    // Make sure the maximum range of the vectors is the edges of the screen.
    const vecWidth = vector.random(0, w);
    const vecHeight = vector.random(0, h);

    ctx.beginPath();
    ctx.moveTo(vecWidth.state.x, vecHeight.state.x);
    ctx.lineTo(vecWidth.state.y, vecHeight.state.y);
    ctx.stroke();
  }

  let i=0;

  (function animate() {
    update();
    console.log("animating", "" + (i++));
    window.requestAnimationFrame(animate);
  })();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  };
};
