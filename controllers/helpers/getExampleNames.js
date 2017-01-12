/**
 * Gets the example names and returns an array.
 * @param  {Object} config Config object.
 * @return {Array}         an Array of names.
 */
module.exports = (config) => {
  return Object.keys(config).map((x) => config[x].name);
};
