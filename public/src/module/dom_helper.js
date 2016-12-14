/**
 * isElement checks if a element is a DOM node.
 * @param  {Object}  obj
 * @return {Boolean}
 */
var isElement = function isElm(obj) {
  return obj instanceof HTMLElement;
};

/**
 * mapText takes an elment list and return a array of textNodes.
 * @param  {DOMElememt} elm   DOMElememt
 * @return {Array}            Array
 */
var mapText = function mapText(elm) {
  var elmList = $$(elm, document);
  var textNodes = [];

  /*
    We need to use a for `of` loop here cause its a NodeList and not an
    array.
  */
  for (item of elmList) {
    textNodes.push(item.text);
  }

  return textNodes;
};

/**
 * elmDelegator delegate items
 * @param  {DOMElement} elm         The parent element of the delegates.
 * @param  {Function}   checkTarget Boolean to check which elements to delegate to.
 * @param  {Function}   callback    A callback that is passed a error as its first
 *                                     argugmet and second argument as the delegate.
 */
var elmDelegator = function elmDelegator(elm, checkTarget, callback) {
  if (!isElement(elm)) throw new Error(elm + " needs to be a element.");
  if (elm.length) throw new Error(elm + " needs to be element list");

  elm.addEventListener("click", function(e) {
    e.preventDefault();

    if (checkTarget(e.target)) {
      return callback(null, e.target);
    }

    return callback(new Error("No target matched"));
  });
};
