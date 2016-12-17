const iframe = require("iframeManager.js")(document);
const shims = require("shims.js")(document);
const utils = require("dom_helper.js")(document);
const DEFAULT_EXAMPLE = "a1";
 
/**
 * setHash set hash of url bar
 * @param {String} hash
 */
function setHash(hash) {
  window.location.hash = hash || "";
};

document.addEventListener("DOMContentLoaded", function() {
  const hash = window.location.hash;
  const textNodes = utils.mapText(".list_container li a");
  const $ = shims.$;

  utils.elmDelegator($(".list_container"), "click", function check(elm) {
    return elm.tagName === "A";
  }, function(err, target, evt) {
    if (err) {
      throw err;
    }

    setHash(hash);
    iframe.loadInIframe(target.text);
  });

  // If theres a page fragment load the right example.
  if (hash.length) {
    const hashQuery = hash.substr(1);

    if (textNodes.indexOf(hashQuery) > -1) {
      iframe.loadInIframe(hashQuery);
    }
  } 

  if (hash.length < 1) {
    // Default to the an example if theres no hash.
    setHash(DEFAULT_EXAMPLE);
    iframe.loadInIframe(DEFAULT_EXAMPLE);
  }
});
