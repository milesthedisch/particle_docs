const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

// Path to the example template.
const pathToExampleTemplate = path.resolve(__dirname, 
  "../../views/templates/example.handlebars");

/**
 * @name  getJs
 * @description Get the js file and preps it for the dom insertion.
 * @param  {[type]} file [description]
 * @return {[type]}      [description]
 */
function getJs(file) {
  return new Promise(function(resolve, reject) {
    if (!file) {
      return reject("Please provide a js file for your example");
    }

    fs.readFile(file, "utf8", function(err, data) {
      if (err) {
        return reject(`There was an unexpected err ${err}`);
      };

      const js = `<script>\n${data}\n</script>`;
      return resolve({js});
    });
  });
}

/**
 * @name  getHtml
 * @description gets the html from file given.
 * @param  {[type]} file [description]
 * @return {[type]}      [description]
 */
function getHtml(file) {
  return new Promise(function(resolve, reject) {
    if (!file) {
      return resolve("");
    }

    fs.readFile(file, "utf8", function(err, data) {
      if (err) {
        return reject(`There was an unexpected err ${err}`);
      };
      return resolve({html: data});
    });
  });
};

/**
 * @name  compileTemplate
 * @description Uses the example to template to construct the example HTML
 * that will be executed in the iframe.
 * @param  {[type]} ctx [description]
 * @return {[type]}     [description]
 */
function compileTemplate(ctx) {
  return new Promise(function(resolve, reject) {
    // Read in the template and pass in context
    fs.readFile(pathToExampleTemplate, "utf8", function(err, data) {
      if (err) {
        return reject(err);
      }
      // compile the template
      const template = handlebars.compile(data);
      // Pass context into the template
      const html = template(ctx);
      // Send of string to the client so that it can put it in to the srcdoc.
      return resolve(html);
    });
  });
}

module.exports = function({js, css, html, title, particleLib}) {
  return Promise.all([getJs(js), getHtml(html)])
    .then((data) => {
      let js;
      let html;

      if (data.findIndex((jsOrHtml) => Object.keys(jsOrHtml)[0] === "js")) {
        js = data[1].js;
        html = data[0].html;
      }

      js = data[0].js;
      html = data[1].html;

      return {
        html,
        js,
        css,
        title,
        particleLib,
      };
    })
    .then(compileTemplate);
};
