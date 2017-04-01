const iframe = require("iframeManager.js")(document);
const shims = require("shims.js")(document);
const utils = require("dom_helper.js")(document);
const particleLib = require("particles");
debugger;
const DEFAULT_EXAMPLE = "random_vectors";

const sethash = (fragment) => {
  return window.location.hash = fragment || "";
};

document.addEventListener("DOMContentLoaded", function() {
  window.particleLib = particleLib;
  const hash = window.location.hash;
  const pathname = window.location.pathname;
  const textNodes = utils.mapToText(".list-examples li a");
  const $ = shims.$;

  if (textNodes.length === 0) {
    throw new Error("Theres no textNodes to check against.");
  }

  switch (pathname) {
  case("/"): {
    console.log("home");
    break;
  }
  case("/examples"): {
    const onClickOfList = utils.elmDelegator($(".list-examples"), "click");
    const isAnchor = (elm) => elm.tagName === "A";

    onClickOfList(isAnchor, function(err, target, evt) {
      if (err) throw err;

      sethash(target.text);
      iframe.loadInIframe(target.text);
    });

    // If theres a page fragment load the right example.
    if (hash.length) {
      const hashQuery = hash.substr(1);

      if (textNodes.indexOf(hashQuery) > -1) {
        iframe.loadInIframe(hashQuery);
      }
    }

   // Default to the an example if theres no hash.
    if (hash.length < 1) {
      sethash(DEFAULT_EXAMPLE);
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
