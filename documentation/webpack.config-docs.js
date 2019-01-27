const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const icons = require('../scripts/utils/icons');

module.exports = {
  entry: './documentation/index.js',
  output: {
    path: path.resolve(process.cwd(), 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './documentation/docs.html',
      title: 'VK Icons',
      hash: true
    }),
    new webpack.DefinePlugin({
      icons: JSON.stringify(icons.iconsMap())
    })
  ],
  mode: 'production',
};
