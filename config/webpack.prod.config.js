const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const MinCssExtractPlugun = require("mini-css-extract-plugin");

const prodConfig = {
  mode: "production",
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    path: path.join(__dirname, '../lib/'),
    filename: 'index.js',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [MinCssExtractPlugun.loader, 'css-loader?modules']
      }, 
    ],
  },
  plugins: [
    new MinCssExtractPlugun({
      filename: "main.min.css"
    })
  ],
  externals: {
    react: {
      root: "React",
      commonjs2: 'react',
      commonjs: 'react',
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: 'react-dom',
      commonjs: "react-dom",
      amd: 'react-dom'
    }
  }
};

module.exports = merge(prodConfig, baseConfig)