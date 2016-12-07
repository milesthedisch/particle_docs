/* eslint no-var: 0 */
(function IIFE(window, document) {
  var DEFAULT_EXAMPLE = "@1";

  window.$ = function qs(selector, baseNode) {
    return document.querySelector(selector, baseNode);
  };

  window.$$ = function qsAll(selector, baseNode) {
    return document.querySelectorAll(selector, baseNode);
  };

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

  var injectSrc = function injectSrc(src, frame) {
    frame.srcdoc = src;
    return frame;
  };

  var renderFrame = function renderFrame(iframe) {
    return document.querySelector(".frame_container").appendChild(iframe);
  };

  var createFrame = function createFrame(name) {
    if (!name || typeof name !== "string") {
      throw new Error("Not a valid name for a id.");
    }

    const iframe = document.createElement("iframe");

    iframe.setAttribute("allow-same-origin", true);
    iframe.setAttribute("allow-scripts", true);
    iframe.setAttribute("allowfullscreen", true);
    iframe.setAttribute("class", "frame_example");
    iframe.setAttribute("id", name);

    return iframe;
  };

  var loadInIframe = function loadInIframe(name) {
    const frame = createFrame(name);

    return fetchExample(name)
    .then((src) => injectSrc(src, frame))
    .then((newFrame) => renderFrame(newFrame));
  };

  var delegateListItems = function delegateListItems(elm, callback) {
    elm.addEventListener("click", function(e) {
      e.preventDefault();
      console.log(e.target);
      if (e.target.tagName = "A") {
        return callback(null, e.target.text);
      }

      return callback(new Error("No target matched"));
    });
  };

  var mapText = function mapText(elm) {
    var elmList = $$(elm, document);
    var textNodes = [];

    // We need to use a for `of` loop here cause its a NodeList and not an array.
    for (item of elmList) {
      textNodes.push(item.text);
    }

    return textNodes;
  };

  var setHash = function setHash(hash) {
    window.location.hash = hash || "";
  };

  // Initalise the application.
  document.addEventListener("DOMContentLoaded", function() {
    var hash = window.location.hash;
    var textNodes = mapText(".list_container li a");

    delegateListItems($(".list_container"), function(err, target) {
      if (err) {
        throw err;
      }

      setHash(hash);
      loadInIframe(target);
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
