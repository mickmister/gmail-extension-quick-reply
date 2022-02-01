'use strict';

const webpack = require('webpack');

const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    content: './src/content.js',
    pageWorld: '@inboxsdk/core/pageWorld.js',
    background: '@inboxsdk/core/background.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "static" },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.APP_ID': JSON.stringify(process.env.APP_ID),
      'process.env.EMAIL_BODY': JSON.stringify(process.env.EMAIL_BODY),
      'process.env.EMAIL_SIGNATURE': JSON.stringify(process.env.EMAIL_SIGNATURE),
    }),
  ],
};
