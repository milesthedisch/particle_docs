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
  resolve: {
    alias: {
      "particles$": path.resolve("./node_modules/particle_library"),
    },
    root: [
      path.resolve("src/module"),
      path.resolve("src/vendor"),
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public/build/js"),
  },
  bail: true,
};
