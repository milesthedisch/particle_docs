var FIRST_IFRAME = true;

/* eslint no-var: 0, max-len: 0 */
(function IIFE(window, document) {
  var DEFAULT_EXAMPLE = "@1";

  /* shims */
  window.$ = function qs(selector, baseNode) {
    return document.querySelector(selector, baseNode);
  };

  window.$$ = function qsAll(selector, baseNode) {
    return document.querySelectorAll(selector, baseNode);
  };
  /* shims */

  /**
   * [fetchExample description]
   * @param  {[type]} id [description]
   * @return {[type]}    [description]
   */
  var fetchExample = function fetchExample(id) {
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
   * [injectSrc description]
   * @param  {[type]} src   [description]
   * @param  {[type]} frame [description]
   * @return {[type]}       [description]
   */
  var injectSrc = function injectSrc(src, frame) {
    frame.srcdoc = src;
    return frame;
  };

  /**
   * [createFrame description]
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  var createFrame = function createFrame(name) {
    if (!name || typeof name !== "string") {
      throw new Error(name + " Not a valid name for a id.");
    }

    var iframe = document.createElement("iframe");

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
  var loadInIframe = function loadInIframe(name) {
    var frame = createFrame(name);
    debugger;
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
   * [exampleExists description]
   * @param  {[type]} example [description]
   * @return {[type]}         [description]
   */
  var exampleExists = function exampleExists(example) {
    if (!example) return false;

    var id;

    try {
      id = getFrame(example)
        .attributes["data-value"]
        .nodeValue;  
    } catch (e) {
      if (e) {
        id = false;  
      }
    }

    return id === example;
  };

  /**
   * [writeFrame description]
   * @param  {[type]} parent [description]
   * @param  {[type]} frame  [description]
   * @return {[type]}        [description]
   */
  var writeFrame = function writeFrame(parent, frame) {
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
  var getFrame = function getFrame(name) {
    if (!name) return $("iframe[data-example]");
    return $("iframe[data-example^=" + name + "]");
  };

  /**
   * isElement checks if a element is a DOM node.
   * @param  {Object}  obj
   * @return {Boolean}
   */
  var isElement = function isElm(obj) {
    return obj instanceof HTMLElement;
  };

  /**
   * mapText takes an elment list and return a array of textNodes.
   * @param  {DOMElememt} elm   DOMElememt
   * @return {Array}            Array
   */
  var mapText = function mapText(elm) {
    var elmList = $$(elm, document);
    var textNodes = [];

    /*
      We need to use a for `of` loop here cause its a NodeList and not an
      array.
    */
    for (item of elmList) {
      textNodes.push(item.text);
    }

    return textNodes;
  };

  /**
   * setHash of URL
   * @param {String} hash
   */
  var setHash = function setHash(hash) {
    window.location.hash = hash || "";
  };

  /**
   * elmDelegator delegate items
   * @param  {DOMElement} elm         The parent element of the delegates.
   * @param  {Function}   checkTarget Boolean to check which elements to delegate to.
   * @param  {Function}   callback    A callback that is passed a error as its first
   *                                     argugmet and second argument as the delegate.
   */
  var elmDelegator = function elmDelegator(elm, checkTarget, callback) {
    if (!isElement(elm)) throw new Error(elm + " needs to be a element.");
    if (elm.length) throw new Error(elm + " needs to be element list");

    elm.addEventListener("click", function(e) {
      e.preventDefault();

      if (checkTarget(e.target)) {
        return callback(null, e.target);
      }

      return callback(new Error("No target matched"));
    });
  };

  /**
   * [removeFrameSrc description]
   * @param  {[type]} elm [description]
   * @return {[type]}     [description]
   */
  var removeFrameSrc = function removeFrameSrc(target) {
    if (!target) throw new Error("Please provide a target");
    if (!isElement(target)) {
      return getFrame(target).srcDoc = "";
    }
    return target.srcDoc = "";
  };

  document.addEventListener("DOMContentLoaded", function() {
    var hash = window.location.hash;
    var textNodes = mapText(".list_container li a");

    elmDelegator($(".list_container"), function check(elm) {
      return elm.tagName === "A";
    }, function(err, target) {
      if (err) {
        throw err;
      }

      validFrameName();
      setHash(hash);
      loadInIframe(target.text);
    });

    // If theres a page fragment load the right example.
    if (hash.length) {
      var hashQuery = hash.substr(1);

      if (textNodes.indexOf(hashQuery) > -1) {
        loadInIframe(hashQuery);
      }
    }

    // Default to the an example if theres no hash.
    setHash(DEFAULT_EXAMPLE);
    loadInIframe(DEFAULT_EXAMPLE);
  });
})(window || this, window.document || document);
