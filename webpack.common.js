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
    root: [
      path.resolve("src/module"),
      path.resolve("src/vendor"),
      path.resolve("node_modules"),
    ],
    particleLibrary: require.resolve("particle_library"),
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public/build/js"),
  },
  bail: true,
};
