const fs = require("fs-extra");
const path = require("path");
const handlebars = require("handlebars");

// Path to the example template.
const pathToExampleTemplate = path.resolve(__dirname,
  "../../views/templates/example.handlebars");

/**
 * @name  getFile
 * @description Get the js file and preps it for the dom insertion.
 * @param  {String} file
 * @param  {String} type
 * @return {String}
 */
async function getFile(file, type) {
  if (!file) {
    return "";
  }

  try {
    const data = await fs.readFile(file, "utf8");

    if (type === "js") {
      return `<script>\n${data}\n//# sourceURL=dynamic.js</script>`;
    }

    return data;
  } catch (e) {
    throw new Error(`There was an unexpected err ${err}`);
  }
};

/**
 * @name  compileTemplate
 * @description Uses the example to template to construct the example HTML
 * that will be executed in the iframe.
 * @param  {[type]} ctx
 * @return {[type]}     [description]
 */
async function compileTemplate(ctx) {
  // Read in the template and pass in context
  const data = await fs.readFile(pathToExampleTemplate, "utf8");
  // compile the template
  const template = handlebars.compile(data);
  // Pass context into the template
  const html = template(ctx);

  return html;
}

module.exports = async function({js, css, html, title, particleLib}) {
  const [htmlData, jsData, cssData] = await Promise.all([
    getFile(js, "js"),
    getFile(html, "html"),
    getFile(css, "css"),
  ]);

  console.log(jsData);

  const context = {
    html: htmlData,
    js: jsData,
    css: cssData,
    title,
    particleLib,
  };

  const htmlPayload = await compileTemplate(context);

  return htmlPayload;
};
