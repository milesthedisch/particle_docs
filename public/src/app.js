var FIRST_IFRAME = true;

/* eslint no-var: 0, max-len: 0 */
module.exports = (function IIFE(window, document) {
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
   * setHash of URL
   * @param {String} hash
   */
  var setHash = function setHash(hash) {
    window.location.hash = hash || "";
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
