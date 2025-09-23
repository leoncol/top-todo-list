// webpack.config.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
   watchFiles:["./src/template.html","./src/styles.css", "./src/lists.html"]
  },
  plugins: [
  new HtmlWebpackPlugin({
   template: path.resolve(__dirname, "src","index.html", "lists.html"),
    }),
    ],
   module: {
     rules: [
      {
       test: /\.css$/i,
       use: ["style-loader", "css-loader"],
      },
     {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
     },
     {
      test: /\.html$/i,
      loader: "html-loader",
      },
  ],
 },
};

