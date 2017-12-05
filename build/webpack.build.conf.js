const path = require('path');
const config = require('../config')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, config.build.assetsRoot),
    filename: 'index.js',
    library: 'podiumSdk'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'stage-2'],
          plugins: ['istanbul']
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
