/* eslint no-var: 0 */
(function IIFE(window, document) {
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

  var injectSrc = function (src, frame) {

  };

  var renderFrame = function () {

  };

  var createFrame = function () {

  };

  document.addEventListener("DOMContentLoaded", function() {
    var hash = window.location.hash;
    var listOfExamples = $$(".list_container li a", document);
    var exampleNames = [];

    // We need to use a for of loop here cause its a NodeList and not an array.
    for (list of listOfExamples) {
      exampleNames.push(list.text);
    }

    if (hash.length) {
      var hashQuery = hash.substr(1);

      if (exampleNames.indexOf(hashQuery) > -1) {
        fetchExample(hashQuery).then();
      }
    }

    fetchExample("@1")
    .then((res) => console.log(res))
    .catch((err) => console.error(new Error(err)));
  });
})(window);
