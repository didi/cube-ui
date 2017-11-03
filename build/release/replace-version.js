var fs = require('fs')
var path = require('path')
var pkg = require('../../package.json')
var version = pkg.version

var mainPath = path.resolve(__dirname, '../../src/index.js')
var content = fs.readFileSync(mainPath).toString()

content = content.replace('__VERSION__', '\'' + version + '\'')

fs.writeFileSync(mainPath, content)
