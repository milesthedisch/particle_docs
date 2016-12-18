const iframe = require("iframeManager.js")(document);
const shims = require("shims.js")(document);
const utils = require("dom_helper.js")(document);
const DEFAULT_EXAMPLE = "a1";

document.addEventListener("DOMContentLoaded", function() {
  const hash = window.location.hash;
  const pathname = window.location.pathname;
  const query = window.location.search;
  const textNodes = utils.mapText(".list_container li a");
  const $ = shims.$;

  history.pushState("", "/", pathname);

  switch (pathname) {
  case("/"): {
    console.log("home");
    break;
  }
  case("/examples"): {
    utils.elmDelegator($(".list_container"), "click", function check(elm) {
      return elm.tagName === "A";
    }, function(err, target, evt) {
      if (err) {
        throw err;
      }

      history.sethash(hash);
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
      history.pushState(DEFAULT_EXAMPLE, document.title, pathname + query);
      iframe.loadInIframe(DEFAULT_EXAMPLE);
    }
    break;
  }
  case("/docs"): {
    console.log("docs");
    break;
  }
  case("/maths"): {
    console.log("maths");
    break;
  }
  default: {
    console.log("no route matched 404 :(");
  }
  }
});
