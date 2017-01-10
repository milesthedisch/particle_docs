/* shims */
module.exports = function shims(document) {
  document = document || this.document;

  const $ = function qs(selector, baseNode) {
    return document.querySelector(selector, baseNode);
  };

  const $$ = function qsAll(selector, baseNode) {
    return document.querySelectorAll(selector, baseNode);
  };

  return {$, $$};
};
/* shims */
