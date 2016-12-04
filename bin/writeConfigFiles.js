const path = require("path");
const fs = require("fs");

const examplesDir = path.resolve(__dirname, "../examples");
const outputDir = path.resolve(examplesDir, "../ex-config.js");

fs.readdir(examplesDir, function(err, dirs) {
  if (err) throw err;

  if (!dirs.length) throw new Error("No directories in here...");

  const dirPaths = dirs.map((dir) => path.resolve(examplesDir, dir));
  const isDir = dirPaths.every((dir) => fs.statSync(dir).isDirectory());

  if (!isDir) throw new Error("Please make sure the format of your example is correct.");

  const dirNames = dirPaths.map((dir) => path.parse(dir).name);
  const names = dirNames;
  const jsPaths = dirPaths.map((dir) => checkJsInConfig(dir));
  const keys = dirNames.map((x) => `"${x}":`);
  const pairs = keys.map((key, i) => `\t${key} { \n\t\t "name": "${names[i]}", \n\t\t "js": "${jsPaths[i]}" \n  },\n`);

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
  const jsFiles = fs.readdirSync(dir).filter((file) => path.extname(file) === ".js"); 

  if (!jsFiles.length) throw new Error("There is no js file for this example " + dir);
  return path.resolve(dir, jsFiles[0]);
}
