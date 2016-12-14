const common = require("./webpack.common.js");
const webpack = require("webpack");
const extend = require("extend");
const path = require("path");

module.exports = extend(true, {
  entry: [
    "babel-polyfill",
    path.resolve("./public/src/app.js"),
  ],
  progress: true,
}, common);

