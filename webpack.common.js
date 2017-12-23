const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    path: path.join(__dirname, "public/build/js"),
  },
  module: {
    rules: [
      {
        test: /\.sass$|\.scss$/,
        exclude: /(node_modules|bower_components)/,
        include: /src\//,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        }),
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, "./src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("./public/css/main.css"),
  ],
};
