const common = require("./webpack.common.js");
const extend = require("extend");
const path = require("path");

module.exports = extend(true, {
  entry: [
    "whatwg-fetch",
    path.resolve("./src/app.js"),
  ],
  progress: true,
  devtool: "#inline-source-map",
}, common);

