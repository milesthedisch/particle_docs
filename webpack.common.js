const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "./build/css/[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development",
  publicPath: "./public",
});

module.exports = {
  bail: true,
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src/module"),
    ],
    alias: {
      particle_library: require.resolve("particle_library"),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public/build/js"),
    publicPath: "./public",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMaps: process.env.NODE_ENV === "development",
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMaps: process.env.NODE_ENV === "development",
              },
            },
          ],
          // use style-loader in development
          fallback: "style-loader",
        }),
      },
      // We create the file-loader first to make sure the fonts are
      // resolved when the sass loader is parsing the sass.
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: "file-loader",
        options: {
          name: "files/[name].[ext]",
          publicPath: "./public",
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("./public/css/[name].bundle.css"),
  ],
};
