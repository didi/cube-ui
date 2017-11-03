var config = require('../../config')
var devWebpackConfig = require('../webpack.dev.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var entry = config.docDev.entry
// add hot-reload related code to entry chunks
Object.keys(entry).forEach(function (name) {
  entry[name] = ['./build/dev-client'].concat(entry[name])
})

var docDevWebpackConfig = Object.assign({}, devWebpackConfig)
var index = docDevWebpackConfig.plugins.findIndex(function (plugin) {
  return plugin instanceof HtmlWebpackPlugin
})
docDevWebpackConfig.plugins.splice(index, 1, new HtmlWebpackPlugin({
  filename: 'index.html',
  template: config.docDev.template,
  inject: true
}))

docDevWebpackConfig.entry = entry

module.exports = docDevWebpackConfig
