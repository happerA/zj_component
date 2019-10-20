const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const devConfig = {
  mode: 'development',
  entry: path.join(__dirname, '../example/src/app.js'),
  output: {
    path: path.join(__dirname, '../example/src/'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.min\.css$/,
        loader: ['style-loader', 'css-loader?modules']
      }, 
      {
        test: /\.min\.css$/,
        loader: ['style-loader', 'css-loader?modules']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../example/src/'),
    compress: true,
    port: 3001,
    open: true
  } 
};

module.exports=merge(devConfig, baseConfig)
