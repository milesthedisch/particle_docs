const common = require("./webpack.common.js");
const webpack = require("webpack");
const extend = require("extend");
const path = require("path");

module.exports = extend(true, {
  entry: [
    "whatwg-fetch",
    path.resolve("./public/src/app.js"),
  ],
  progress: true,
  devtool: "#inline-source-map",
}, common);

