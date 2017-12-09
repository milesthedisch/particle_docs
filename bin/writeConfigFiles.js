/* eslint valid-jsdoc: 0 */
const path = require("path");
const fs = require("fs");

const examplesDir = path.resolve(__dirname, "../examples");
const outputDir = path.resolve(examplesDir, "../ex-config.js");

(async () => {

});

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
      if (result) {
        const key = path.parse(_path).name;

        const html = htmlInDir(_path) ?
          `"${htmlInDir(_path)}"` : null;

        const css = cssInDir(_path) ?
          `"${cssInDir(_path)}"` : null;

        const js = jsInDir(_path) ?
          `"${jsInDir(_path)}"` : null;

        return `\t"${key}": { 
          "name": "${key}",
          "js": ${js},
          "css": ${css},
          "html": ${html}
        },\n`;
      }

      throw new Error(`${result[0]} is not a valid name for an example.`);
    });

  fs.writeFileSync(outputDir, `module.exports = { \t\n${ validDirs.join("") } }`);
});

/**
 * @name readDir
 * @alias fs.readDirSync
 * @type {String => String}
 */
const readDir =
  (dir) => fs.readdirSync(dir);

/**
 * @name extension
 * @description Takes a string and prepends a '.'
 * @type {String => String}
 */
const extension =
  (string) => "." + string;

/**
 * @name isExtensionType
 * @description Tells you wether that files is the
 * extension type given.
 * @type {String => String => Boolean}
 */
const isExtensionType =
  (type) =>
    (file) => path.extname(file) === extension(type);

/**
 * @name filterExtInDir
 * @description Take a directory and return the files
 * that match the extension give.
 * @type {String, String => Array<String>}
 */
const filterExtInDir =
  (ext, dir) => readDir(dir).filter(isExtensionType(ext));

/**
 * @name resolveFromDir
 * @type {String => String => Path}
 */
const resolveFromDir =
  (dir) =>
    (_path) => path.resolve(dir, _path);

/**
  * isValidCssName
  * @param  {String}  name
  * @return {Boolean}
*/
const isValidCssName =
  (name) => /-?[_a-zA-Z]+[_a-zA-Z0-9-]*/.test(name);

/**
 * @name filterDirForExt
 * @description Checks fo extension in the directory.
 * If it finds the one return the first one it finds.
 * @param  {String} dir
 * @param  {String} ext
 * @return {String}
 */
const filterDirForExt =
  (ext) =>
    (dir) => {
      const files = filterExtInDir(ext, dir);

      if (files.length > 0) {
        return resolveFromDir(dir)(files[0]);
      }

      return false;
    };

const jsInDir = filterDirForExt("js");
const cssInDir = filterDirForExt("css");
const htmlInDir = filterDirForExt("html");
