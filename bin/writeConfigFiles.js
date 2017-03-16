const path = require("path");
const fs = require("fs");

const examplesDir = path.resolve(__dirname, "../examples");
const outputDir = path.resolve(examplesDir, "../ex-config.js");

fs.readdir(examplesDir, function(err, dirs) {
  if (err) throw err;

  if (!dirs.length) throw new Error("No directories in here...");

  const validDirs = dirs
    .filter((dir) =>
      !/\./.test(dir) && 
      fs.statSync(path.resolve(dir, examplesDir)).isDirectory()
    )
    .map((dir) => {
      const _path = path.resolve(examplesDir, dir);
      const dirName = path.parse(_path).name;
      const result = isValidCssName(dirName); // Miles explain this please...

      // Check if it was success.
      if (result[1]) {
        const key = path.parse(_path).name;
        const html = !!checkHtmlInConfig(_path) ?
          `"${checkHtmlInConfig(_path)}"` : null;

        return `\t"${key}": { 
          "name": "${key}",
          "js": "${checkJsInConfig(_path)}",
          "html": ${html}
        },\n`;
      }

      throw new Error(`${result[0]} is not a valid name for an example.`);
    });

  fs.writeFileSync(outputDir, `module.exports = { \t\n${ validDirs.join("") } }`);
});

/**
 * checkJsInConfig
 * Check the js file in the example directory.
 * If it dosent exsist throw and error
 * If it does exsist return the path that its in.
 * @param  {String} dir directory
 * @return {String}     a file path
 */
function checkJsInConfig(dir) {
  const jsFiles =
    fs.readdirSync(dir)
      .filter((file) => path.extname(file) === ".js");

  if (jsFiles.length > 0) {
    return path.resolve(dir, jsFiles[0]);
  }

  throw new Error(
    `There is no js file for this example ${dir}`
  );
}

/**
 * @name checkJsInConfig
 * @param  {Array} dir
 * @return {Path|null}
 */
function checkHtmlInConfig(dir) {
  const jsFiles =
    fs.readdirSync(dir)
      .filter((file) => path.extname(file) === ".html");

  if (jsFiles.length > 0) {
    return path.resolve(dir, jsFiles[0]);
  }

  return null;
}

/**
 * isValidCssName
 * @param  {String}  name
 * @return {Boolean}
 */
function isValidCssName(name) {
  const valid = /-?[_a-zA-Z]+[_a-zA-Z0-9-]*/.test(name);

  if (!valid) {
    return [name];
  }

  return [null, true];
};
