let path = require('path');

let webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'podium-sdk.js',
    library: 'podiumSdk'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["env", "stage-2"],
          plugins: ["istanbul"]
        }
      }
    ]
  },
  externals: {
    axios: 'axios',
    store: 'store',
  },
  stats: {
    colors: true
  }
};
