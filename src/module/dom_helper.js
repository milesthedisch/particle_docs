module.exports = function (document) {
  document = document || this.document;

  const shims = require("shims")(document);
  const $$ = shims.$$;

  /**
   * isElement checks if a element is a DOM node.
   * @param  {Object}  obj
   * @return {Boolean}
   */
  const isElement = (obj) => obj instanceof HTMLElement;

  /**
   * mapText takes an elment list and return a array of textNodes.
   * @param  {DOMElememt} elm   DOMElememt
   * @return {Array}            Array
   */
  const mapToText = function mapText(elm) {
    const elmList = $$(elm, document);
    const textNodes = [];

    /*
      We need to use a for `of` loop here cause its a NodeList and not an
      array.
    */
    for (let item of elmList) {
      textNodes.push(item.text);
    }

    return textNodes;
  };

  /**
   * elmDelegator delegate items
   * @param  {DOMElement} elm The parent element of the delegates.
   * @param  {String} event Boolean to check which elements to delegate to.
   * @return {Function}
   * Curried function that takes a checkTarget function and a callback.
   */
  const elmDelegator = function elmDelegator(elm, event) {
    if (!isElement(elm)) throw new Error(elm + " needs to be a element.");
    if (elm.length) throw new Error(elm + " needs to be element list");

    return function(checkTarget, callback) {
      elm.addEventListener(event, function(e) {
        e.preventDefault();

        if (checkTarget(e.target)) {
          return callback(null, e.target, e);
        }

        return callback(new Error("No target matched"));
      });
    };
  };

  return {elmDelegator, mapToText, isElement};
};

