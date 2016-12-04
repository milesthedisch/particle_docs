const exampleLoader = require("./exampleLoader.js");
const examplesConfig = require("../../ex-config.js");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

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

  // Stub these out for now.
  config.css = "<style></style>";
  config.title = "Fake title";

  // Based on the config read in the associated
  // js file.
  exampleLoader(config, function(err, contextObj) {
    if (err) cb(err);

    // Abstract all the nesaccary data.
    const ctx = {
      js: contextObj.js,
      title: contextObj.title,
      css: contextObj.css,
    };

    const templatePath = path.resolve(__dirname, "../../views/templates/example.handlebars");
    // Read in the template and pass in context
    fs.readFile(templatePath, "utf8", function(err, data) {
      if (err) return cb(err);
      const template = handlebars.compile(data);
      const html = template(ctx);
      cb(null, html);
    });
    // // compile the template
    // .then((data) => handlebars.compile(data))
    // // Pass context into the template
    // .then((template) => template(ctx))
    // // Send of string to the client so that it can put it in to the srcdoc.
    // .then((string) => res.send(string));
  });
};
