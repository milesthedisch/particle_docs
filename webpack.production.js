const common = require("./webpack.common.js");
const webpack = require("webpack");
const extend = require("extend");
const path = require("path");


module.exports = extend(true, {
  entry: path.resolve("./src/app.js"),
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
    }),
  ],
}, common);

