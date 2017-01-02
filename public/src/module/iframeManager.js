  const FIRST_IFRAME = true;

module.exports = function iframeHandler(document) {
  document = document || this.document;

  const domHelper = require("./dom_helper")(document);
  const shims = require("./shims")(document);

  const $ = shims.$;
  const $$ = shims.$$;
  
  let firstState = FIRST_IFRAME;

  /**
   * [fetchExample description]
   * @param  {[type]} id [description]
   * @return {[type]}    [description]
   */
  const fetchExample = function fetchExample(id) {
    return fetch("/examples/" + id)
    .then(function(response) {
      return response.text().then(function(txt) {
        return txt;
      });
    })
    .catch(function(err) {
      console.error(new Error(err));
    });
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
   * [exampleExists description]
   * @param  {[type]} example [description]
   * @return {[type]}         [description]
   */
  const exampleExists = function exampleExists(example) {
    if (!example) return false;

    let id;

    try {
      id = getFrame(example)
        .attributes["data-value"]
        .nodeValue;
    } catch (e) {
      if (e) {
        id = false;
      }
    } finally {
      return id === example;
    }
  };

  /**
   * [loadInIframe description]
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  const loadInIframe = function loadInIframe(id) {
    // If the example already exsists dont do anything.
    if (!exampleExists(id)) {
      // If we are not the first frame in the document.
      if (!firstState) {

        console.log("Example doesn't exsist but we are the next iframe.")
        // Toggle the state and remove old src and inject new src.
        const existingFrame = getFrame();
        removeFrameSrc(existingFrame);
        return fetchExample(id)
          .then((src) => injectSrc(src, existingFrame))
          .catch((err) => console.error(err));
      }

      console.log("Example doesn't exsist but we are the first iframe ever.")

      // Toggle the state.
      firstState = !firstState;
      // Create the frame
      const firstFrame = createFrame(id);
      const parentDiv = $(".wrapper__frame");
      // If we are not the first frame of the document do this regular stuff.
      return fetchExample(id)
        .then((src) => injectSrc(src, firstFrame))
        .then((newFrame) => writeFrame(parentDiv, newFrame))
        .catch((err) => console.error(err));
    }

    console.log("Example exsists not doing anything..");

    return false;
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
