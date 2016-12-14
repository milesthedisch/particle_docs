const path = require("path");
const fs = require("fs");

const examplesDir = path.resolve(__dirname, "../examples");
const outputDir = path.resolve(examplesDir, "../ex-config.js");

fs.readdir(examplesDir, function(err, dirs) {
  if (err) throw err;

  if (!dirs.length) throw new Error("No directories in here...");

  const validDirs = dirs
    // Get full paths
    .map((dir) =>
      path.resolve(examplesDir, dir))
    // Filter out dot files and make sure every paths is directory
    .filter((dir) =>
      !/\./.test(dir) && fs.statSync(dir).isDirectory())
    // Check every directory name to see if its a valid slug/css name.
    .map((dir) => {
      // Parse the name from the path
      const dirName = path.parse(dir).name;
      // Validate it.
      const result = isValidCssName(dirName);

      // Check if it was success.
      if (result[1]) {
        return dir;
      }

      console.error(
        new Error(`${result[0]} is not a valid name for an example.`)
      );
      process.exit(1);
    });

  // Extract all the name
  const dirNames = validDirs.map((dir) => path.parse(dir).name);
  // Extract all the js file paths.
  const jsPaths = validDirs.map((dir) => checkJsInConfig(dir));

  // Create a object with the name and js file path.
  const keys = dirNames.map((x) => `"${x}"`);
  const pairs = keys.map((key, i) => (
  `\t${key}: { 
    "name": "${dirNames[i]}", 
    "js": "${jsPaths[i]}"
  },\n`
  ));

  fs.writeFileSync(outputDir, `module.exports = { \t\n${ pairs.join("") } }`);
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

  if (!jsFiles.length) {
    throw new Error(
      `There is no js file for this example ${dir}`
    );
  }

  return path.resolve(dir, jsFiles[0]);
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
