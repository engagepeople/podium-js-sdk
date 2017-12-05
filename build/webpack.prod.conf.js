'use strict'
// const path = require('path')
// const utils = require('./utils')
// const webpack = require('webpack')
// const config = require('../config')
// const merge = require('webpack-merge')
// const baseWebpackConfig = require('./webpack.base.conf')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
console.log('=-=-=-==-=-=-==-=-HERE=-==-=-=-==-=-=-==-=-=-==-=-=-==-=-=-=')

// This is the webpack config used for unit tests.
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: '"production"'}
    })
  ]
})

module.exports = webpackConfig
