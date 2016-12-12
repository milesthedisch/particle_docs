const path = require("path");
module.exports = {
  resolveLoader: {
    root: path.join(__dirname, "node_modules"),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015"],
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public/build/js"),
  },
  watch: true,
};
