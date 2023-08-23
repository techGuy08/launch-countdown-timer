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
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          buildMode !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
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
      filename: "../css/main.css",
    }),
  ],
};
