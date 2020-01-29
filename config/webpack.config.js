/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { resolve } = require("path")
const babelConfig = require("./babel.config")

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
  mode,
  entry: "./src/index.tsx",
  output: {
    path: resolve("./build"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: resolve("./build"),
    compress: true,
    port: 8080,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "public/index.html" }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: "babel-loader",
            options: babelConfig,
          },
        ],
      },
    ],
  },
}
