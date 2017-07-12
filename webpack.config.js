const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  devServer: {
    port: 3001,
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      filename: 'index.html',
      template: 'app/index.ejs'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 30000,
          name: '[name]-[hash].[ext]'
        }
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          minetype: 'application/font-woff'
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss|css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|main.js)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
