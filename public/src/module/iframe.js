/**
 * [writeFrame description]
 * @param  {[type]} parent [description]
 * @param  {[type]} frame  [description]
 * @return {[type]}        [description]
 */
const writeFrame = function writeFrame(parent, frame) {
  if (!isElement(parent)) {
    throw new Error(parent + " this parent isn't a DOM element.");
  }
  return parent.appendChild(iframe);
};

/**
 * [getFrame description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
const getFrame = function getFrame(name) {
  if (!name) return $("iframe[data-example]");
  return $("iframe[data-example^=" + name + "]");
};

/**
 * [injectSrc description]
 * @param  {[type]} src   [description]
 * @param  {[type]} frame [description]
 * @return {[type]}       [description]
 */
const injectSrc = function injectSrc(src, frame) {
  frame.srcdoc = src;
  return frame;
};

/**
 * [createFrame description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
const createFrame = function createFrame(name) {
  if (!name || typeof name !== "string") {
    throw new Error(name + " Not a valid name for a id.");
  }

  const iframe = document.createElement("iframe");

  iframe.setAttribute("allow-same-origin", true);
  iframe.setAttribute("allow-scripts", true);
  iframe.setAttribute("allowfullscreen", true);
  iframe.setAttribute("class", "frame_example");
  iframe.setAttribute("data-example", name);

  return iframe;
};

/**
 * [loadInIframe description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
const loadInIframe = function loadInIframe(name) {
  const frame = createFrame(name);

  // If the example already exsists dont do anything.
  if (!exampleExists(name)) {
    // If we are the first frame in the document.
    if (FIRST_IFRAME) {
      // Toggle the state and remove old src and inject new src.
      FIRST_IFRAME = !FIRST_IFRAME;
      removeFrameSrc(name);
      return fetchExample(name).then((src) => injectSrc(src, frame));
    }

    // If we are not the first frame of the document do this regular stuff.
    return fetchExample(name)
      .then((src) => injectSrc(src, frame))
      .then((newFrame) => writeFrame(newFrame))
      .catch((err) => err);
  }

  return false;
};

/**
 * [removeFrameSrc description]
 * @param  {[type]} target [description]
 * @return {[type]}        [description]
 */
const removeFrameSrc = function removeFrameSrc(target) {
  if (!target) throw new Error("Please provide a target");
  if (!isElement(target)) {
    return getFrame(target).srcDoc = "";
  }
  return target.srcDoc = "";
};

module.exports = {
  loadInIframe,
  getFrame,
  writeFrame,
  createFrame,
  injectSrc,
  removeFrameSrc,
};
