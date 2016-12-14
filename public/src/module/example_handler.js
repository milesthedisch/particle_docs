/**
 * [fetchExample description]
 * @param  {[type]} id [description]
 * @return {[type]}    [description]
 */
const fetchExample = function fetchExample(id) {
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

/**
 * [exampleExists description]
 * @param  {[type]} example [description]
 * @return {[type]}         [description]
 */
const exampleExists = function exampleExists(example) {
  if (!example) return false;

  let id;

  try {
    id = getFrame(example)
      .attributes["data-value"]
      .nodeValue;
  } catch (e) {
    if (e) {
      id = false;
    }
  } finally {
    return id === example;
  }
};
