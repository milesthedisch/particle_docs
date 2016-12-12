const common = require("./webpack.common.js");
const webpack = require("webpack");
const extend = require("extend");
const path = require("path");

module.exports = extend(true, {
  entry: [
    "babel-polyfill",
    "webpack-dev-server/client?http://localhost:4000", // Needed for hot reloading
    "webpack/hot/only-dev-server", // See above
    path.resolve("./public/src/app.js"),
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  progress: true,
}, common);

