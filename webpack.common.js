const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const alias = {};
try {
  alias.particle_library = require.resolve("particle_library");
} catch (e) {
  // particle_library is a local dependency that may not be present
}

module.exports = {
  bail: true,
  entry: path.resolve("./src/app.js"),
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src/module"),
    ],
    alias,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./public/build/js"),
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                silenceDeprecations: ["import"],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "../css/fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/[name].css",
    }),
  ],
};
