/* shims */
module.exports = function shims(document) {
  document = document || this.document;

  const $ = function qs(...args) {
    return document.querySelector(...args);
  };

  const $$ = function qsAll(...args) {
    return document.querySelectorAll(...args);
  };

  return {$, $$};
};
/* shims */
