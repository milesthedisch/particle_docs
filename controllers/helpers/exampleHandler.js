const loadExample = require("./exampleLoader.js");
const examplesConfig = require("../../ex-config.js");

// Hard coded references to the particle library.
// The code is in the parent frame.
const particleLib =
"<script>" +
  "window.particleLib = window.particleLib || window.top.particleLib" +
"</script>";

module.exports = function exampleHandler(id, cb) {
  try {
    examplesConfig[id];
  } catch (err) {
    if (err) {
      cb(`There was an unexpected error: [[ ${err} ]]`);
    }
    if (example === undefined) {
      cb(`There was no example named ${id}`);
    }
  }

  // Find the config associated with that ID.
  const config = examplesConfig[id];

  config.css = config.css;
  config.html = config.html;
  config.title = config.name;
  config.particleLib = particleLib;

  loadExample(config)
    .then(function(data) {
      cb(null, data);
    })
    .catch(function(err) {
      cb(err);
    });
};
