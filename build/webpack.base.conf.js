var path = require('path')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var utils = require('./utils')
var webpack = require('webpack')
var version = require('../package.json').version

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const srcAndExampleAndTestAndDocument = [resolve('src'), resolve('example'), resolve('test'), resolve('document')]

module.exports = {
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue2': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: srcAndExampleAndTestAndDocument,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: srcAndExampleAndTestAndDocument
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        include: srcAndExampleAndTestAndDocument,
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        include: srcAndExampleAndTestAndDocument.concat([resolve('assets')]),
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.md$/,
        include: resolve('document'),
        loader: 'vue-markdown-loader',
        options: {
          preventExtract: true
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(version)
    })
  ]
}
