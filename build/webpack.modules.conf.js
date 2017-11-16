var path = require('path')
var fs = require('fs')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

var modules = {}
var cPath = path.join(__dirname, '../src/modules')
var files = fs.readdirSync(cPath)
if (files) {
  files.forEach(function (name) {
    var p = path.join(cPath, name)
    if (fs.statSync(p).isDirectory()) {
      modules[name] = p
    }
  })
}

var webpackConfig = merge(baseWebpackConfig, {
  entry: modules,
  module: {
    rules: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('[name]/index.js'),
    library: 'cube',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('[name]/style.css'))
  ]
})

module.exports = webpackConfig
