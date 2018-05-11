// https://github.com/shelljs/shelljs
require('shelljs/global')
var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV)
}

var path = require('path')
var utils = require('./utils')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var webpackModulesConfig = require('./webpack.modules.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
// cp('-R', 'static/*', assetsPath)

function buildPack(webpackConfig, cb, spinnerText) {
  var spinner = ora(spinnerText || 'building for uncompressed files...')
  spinner.start()
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) {
      throw err
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
    cb && cb()
  })
}

function fullBuild(cb) {
  // build index.js
  buildPack(webpackConfig, function () {

    // build cube.min.js
    webpackConfig.output.filename = utils.assetsPath('[name].min.js')
    webpackConfig.output.chunkFilename = '[name].min.js'
    webpackConfig.plugins.splice(1, 1, 
      new webpack.DefinePlugin({
        'process.env': config.build.env
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin(utils.assetsPath('[name].min.css')),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    )
    buildPack(webpackConfig, function () {
      cb && cb()
    }, 'building for cube.min.js')
  }, 'building for index.js')
}

function modulesBuild() {
  // build ${module}/index.js
  buildPack(webpackModulesConfig, function () {

    // build ${module}/${module}.min.js
    webpackModulesConfig.output.filename = utils.assetsPath('[name]/[name].min.js')
    webpackModulesConfig.output.chunkFilename = '[name]/[name].min.js'
    webpackModulesConfig.plugins.splice(1, 1,
      new webpack.DefinePlugin({
        'process.env': config.build.env
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin(utils.assetsPath('[name]/[name].min.css')),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    )
    buildPack(webpackModulesConfig, null, 'building for ${module}/${module}.min.js')
  }, 'building for ${module}/index.js')
}

fullBuild(modulesBuild)
