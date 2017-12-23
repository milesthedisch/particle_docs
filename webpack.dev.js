const common = require("./webpack.common.js");
const extend = require("extend");
const path = require("path");

module.exports = extend(true, {
  entry: path.resolve("./src/app.js"),
  devtool: "source-map",
  watch: true,
}, common);

