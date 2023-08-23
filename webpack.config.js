const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildMode = process.env.NODE_ENV || "production";

module.exports = {
  mode: buildMode,
  entry: "./src/index.js",
  output: {
    filename: "../js/main.js",
    path: path.resolve(__dirname, "dist/assets/images"),
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          buildMode !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          //   "resolve-url-loader",
          // Compiles Sass to CSS
          "sass-loader",
          //   MiniCssExtractPlugin,
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "../../index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "../css/main.css",
    }),
  ],
};
