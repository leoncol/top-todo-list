// webpack.common.js

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
        app: "./src/index.js",
	lists: "./src/lists.js",
        },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
   watchFiles:["./src/template.html","./src/styles.css", "./src/lists.html"]
  },
  plugins: [
  new HtmlWebpackPlugin({
   template:"./src/template.html",
   chunks: ['app'],
    }),
  new HtmlWebpackPlugin({
   template:"./src/lists.html",
   filename: "lists.html",
   chunks: ['lists'],
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

