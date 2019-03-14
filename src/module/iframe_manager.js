const FIRST_IFRAME = true;

module.exports = function iframeHandler(document) {
  document = document || this.document;

  const domHelper = require("dom_helper")(document);
  const shims = require("shims")(document);

  const $ = shims.$;
  const $$ = shims.$$;

  let firstState = FIRST_IFRAME;

  const checkStatus = (res) => {
    const status = res.status;

    if (status >= 200 && status < 400) {
      return res;
    }

    console.log(`Bad status: ${status}`);
    throw res.statusText;
  };

  /**
   * [fetchExample description]
   * @param  {[type]} id [description]
   * @return {[type]}    [description]
   */
  const fetchExample = function fetchExample(id) {
    return fetch("/examples/" + id)
      .then(checkStatus)
      .then((res) => res.text());
  };


  /**
   * [writeFrame description]
   * @param  {[type]} parent [description]
   * @param  {[type]} frame  [description]
   * @return {[type]}        [description]
   */
  const writeFrame = function writeFrame(parent, frame) {
    if (!domHelper.isElement(parent) || !domHelper.isElement(frame)) {
      throw new Error(parent + " this parent isn't a DOM element.");
    }
    return parent.appendChild(frame);
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
   * [removeFrameSrc description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  const removeFrameSrc = function removeFrameSrc(target) {
    if (!target) throw new Error("Please provide a target");

    if (!domHelper.isElement(target)) {
      return getFrame(target).srcDoc = "";
    }
    return target.srcDoc = "";
  };

  /**
   * exampleExists - check if example exsists
   * @param  {String} example
   * @return {Boolean}
   */
  const exampleExists = function exampleExists(example) {
    if (!example) return false;

    let id;

    try {
      id = getFrame(example)
        .attributes["data-example"]
        .nodeValue;

      return id === example;
    } catch (e) {
      return false;
    }
  };

  /**
   * loadInIframe
   * @param  {String} id
   * @return {Promise}
   */
  const loadInIframe = function loadInIframe(id) {
    const existingFrame = getFrame();

    if (exampleExists(id)) {
      return false;
    }
  
    if (firstState) {
      // Toggle the state.
      firstState = !firstState;
      // Create the frame
      const firstFrame = createFrame(id);
      const parentDiv = $(".wrapper__frame");
      // If we are not the first frame of the document do this regular stuff.
      return fetchExample(id)
        .then((src) => injectSrc(src, firstFrame))
        .then((newFrame) => writeFrame(parentDiv, newFrame))
        .catch(errorDialog);
    }

    if (!existingFrame) {
      return;
    }

    // Toggle the state and remove old src and inject new src.
    removeFrameSrc(existingFrame);
    existingFrame.setAttribute("data-example", id);
    return fetchExample(id)
      .then((src) => injectSrc(src, existingFrame))
      .catch(errorDialog);
  };

  const errorDialog = function(err) {
    if ($(".dialog_error").textContent !== err) {
      $(".dialog_error").style.display = "block";
      $(".dialog_error").insertAdjacentText("afterBegin", err);
    }
  };

  return {
    removeFrameSrc,
    writeFrame,
    getFrame,
    injectSrc,
    createFrame,
    loadInIframe,
  };
};
