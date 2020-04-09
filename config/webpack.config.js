/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { resolve } = require("path")
const babelConfig = require("./babel.config")
const { isDocker } = require("./utils")

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
  devtool: "cheap-module-eval-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: resolve("./build"),
    compress: true,
    port: 8080,
    hot: true,
    open: !isDocker,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "public/index.html" }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: babelConfig,
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.((pn|jp)g|gif|woff2?|ttf|eot|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
}
