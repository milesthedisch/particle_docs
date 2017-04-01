const loadExample = require("./exampleLoader.js");
const examplesConfig = require("../../ex-config.js");

// Hard coded references to the particle library.
// The code is in the parent frame.
const particleLib =
"<script>" +
  "window.particleLib = window.particleLib || window.top.particleLib" +
"</script>";

module.exports = function exampleHandler(id, cb) {
  if (!examplesConfig[id]) {
    return cb(`There was no example named ${id}`);
  }

  // Find the config associated with that ID.
  const config = examplesConfig[id];

  config.css = config.css;
  config.html = config.html;
  config.title = config.name;
  config.particleLib = particleLib;

  loadExample(config)
    .then(function(data) {
      return cb(null, data);
    })
    .catch(function(err) {
      return cb(err);
    });
};
