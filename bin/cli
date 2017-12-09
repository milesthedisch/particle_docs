#!/usr/bin/env node

/* eslint max-len: 0*/

const handlebars = require("handlebars");
const docopt = require("docopt");
const fs = require("fs-extra");
const path = require("path");

const usage = `
Usage: cli create <name> [<libs>...]
`;
const options = docopt.docopt(usage);

const paths = {
  template: path.join(__dirname, "../views/templates/example.js.handlebars"),
  exampleDir: path.join(__dirname, "../examples/"),
};

const exampleFile = fs.readFileSync(paths.template, "utf8");
const jsTemplate = handlebars.compile(exampleFile);
const exampleName = path.join(paths.exampleDir, options["<name>"]);

handlebars.registerHelper("lib", function() {
  if (this.toString() === "Utils") {
    return `const ${this.toLowerCase()} = particleLib.${this};`;
  }

  if (this.toString() === "Shapes") {
    return `const ${this.toLowerCase()} = new particleLib.${this}(ctx, document);`;
  }

  if (this.toString() === "YAT") {
    return `const clock = particleLib.Clock;\n\tconst tween = particleLib.${this}.init({ clock });`;
  }

  return `const ${this.toLowerCase()} = new particleLib.${this}();`;
});

const createExample = async (_path) => {
  const filePath = path.join(_path, "/main.js");

  let libs;
  if (!options["<libs>"].length) {
    libs = ["Utils", "Vector", "Shapes", "Particle", "YAT"];
  }

  const data = jsTemplate(libs);

  await fs.outputFile(filePath, data);
};

const exampleExists = async (file) => {
  try {
    const dirs = await fs.readdir(paths.exampleDir);
    return dirs.indexOf(file) > -1;
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

(async () => {
  const exsists = await exampleExists(options["<name>"]);

  if (exsists) {
    console.error("Example already exsits");
    process.exit(1);
  }

  try {
    await createExample(exampleName);
    console.log(`Success!\nYour files has been written -> ${exampleName}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
