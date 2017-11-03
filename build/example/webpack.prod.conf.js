var config = require('../../config')
var utils = require('../utils')
var docProdWebpackConfig = require('../document/webpack.prod.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var webpackConfig = Object.assign({}, docProdWebpackConfig, {
  entry: config.demoBuild.entry,
  output: {
    path: config.demoBuild.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  }
})

var index = webpackConfig.plugins.findIndex(function (plugin) {
  return plugin instanceof HtmlWebpackPlugin
})
webpackConfig.plugins.splice(index, 1, new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'example/index.html',
  inject: true,
  minify: {
    removeComments: true,
    collapseWhitespace: true,
    removeAttributeQuotes: true
    // more options:
    // https://github.com/kangax/html-minifier#options-quick-reference
  },
  // necessary to consistently work with multiple chunks via CommonsChunkPlugin
  chunksSortMode: 'dependency'
}))

module.exports = webpackConfig
