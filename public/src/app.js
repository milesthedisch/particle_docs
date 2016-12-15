const FIRST_IFRAME = true;
const DEFAULT_EXAMPLE = "@1";
const iframe = require("./module/iframe");
const example_handler = require("./module/example_handler");
const shims = require("./module/shims")(document);
const utils = require("./module/dom_handler")(document);


function setHash(hash) {
  window.location.hash = hash || "";
};

document.addEventListener("DOMContentLoaded", function() {
  const hash = window.location.hash;
  const textNodes = mapText(".list_container li a");

  utils.elmDelegator($(".list_container"), function check(elm) {
    return elm.tagName === "A";
  }, function(err, target) {
    if (err) {
      throw err;
    }

    iframe.validFrameName();
    setHash(hash);
    iframe.loadInIframe(target.text);
  });

  // If theres a page fragment load the right example.
  if (hash.length) {
    const hashQuery = hash.substr(1);

    if (textNodes.indexOf(hashQuery) > -1) {
      loadInIframe(hashQuery);
    }
  }

  // Default to the an example if theres no hash.
  setHash(DEFAULT_EXAMPLE);
  loadInIframe(DEFAULT_EXAMPLE);
});
