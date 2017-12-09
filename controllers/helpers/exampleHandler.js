const fs = require("fs-extra");
const {resolve} = require("path");
const loadExample = require("./exampleLoader.js");

// Hard coded references to the particle library.
// The code is in the parent frame.
const particleLib =
"<script>" +
  "window.particleLib = window.particleLib || window.top.particleLib" +
"</script>";

const EXAMPLES_PATH = resolve(__dirname, "../../examples");

const isExtension = (ext) => (file) => file.match(new RegExp(`\\.${ext}$`));

module.exports = async function exampleHandler(id) {
  const pathToExample = resolve(EXAMPLES_PATH, id);
  const exsists = await fs.pathExists(pathToExample);

  if (!exsists) {
    throw new Error(`There was no example named ${id}`);
  }

  // Find the config associated with that ID.
  const files = await fs.readdir(pathToExample);
  const filePaths = files.map((file) => resolve(EXAMPLES_PATH, file));

  const config = {
    js: filePaths.find(isExtension("js")),
    css: filePaths.find(isExtension("css")),
    html: filePaths.find(isExtension("html")),
    title: id,
    particleLib: particleLib,
  };

  loadExample(config)
    .then(function(data) {
      return cb(null, data);
    })
    .catch(function(err) {
      return cb(err);
    });
};
