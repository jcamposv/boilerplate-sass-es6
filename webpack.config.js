const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
  entry: {
    app : './app/index.js',
    vendor : './app/js/vendor.js'
  },
  output: {
   path: path.resolve(__dirname, 'dist'),
   filename: '[name].bundle.js'
 },
  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
          test: /\.scss$/,
          use: extractSass.extract({
            use: [{
              loader: "css-loader"
            }, {
              loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
          })
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin()
  ]
};
