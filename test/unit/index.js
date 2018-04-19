import Vue from 'vue'
import 'basic-mouse-event-polyfill-phantomjs'
import 'phantomjs-polyfill-find-index'

window.Promise = window.Promise || Promise

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except src/index.js and src/module.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../src', true, /^\.\/\w+\/.+$/)
srcContext.keys().forEach(srcContext)
