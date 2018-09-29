## Post-compile

Post-compile means the NPM packages don't need to be compiled before published, and they will be compiled along with the application's compiling.

> Notes: For more detailed content about post-compile, see [webpack 应用编译优化之路](https://github.com/DDFE/DDFE-blog/issues/23).

### Background

More and more applications are developed with webpack + babel, and commonly use NPM to manage packages. With the growing of the number of package dependencies which are also developed with ES2015+ and need to be compiled before published, the final compiled code usually contains a lot of compiling code. Therefore, to eliminate the redundancy, we recommend post-compile.

### Pros and cons

Pros:

- Common dependencies can be shared and only need to be compiled once.
- Only one copy of babel-plugin-transform-runtime or babel-polyfill code.
- The NPM packages don't need to be compiled before published.

Cons:

- The application's babel configuration needs to be compatible with  the NPM packages' babel configuration.
- The NPM packages can't use alias and DefinePlugin (you can use them and compiled before published but don't need to use babel).
- The application's compiling time will be longer.

### Rules

Considering some applications can not use post-compile, cube-ui used the rule:

> The main field in package.json is the compiled entry point and the module field is the source entry point.

_About [pkg.module](https://github.com/rollup/rollup/wiki/pkg.module)_

Post-compile is used by default if you use webpack 2+. Of course, you can use the webpack alias configuration to change the default behavior.

### webpack demo

The [webpack-post-compile-plugin](https://www.npmjs.com/package/webpack-post-compile-plugin) is used to resolve the nested post-compile NPM packages.

An example of your application webpack configuration:

```js
// webpack.config.js
var PostCompilePlugin = require('webpack-post-compile-plugin')

module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src')
        ]
      },
      // ...
    ]
  },
  // ...
  plugins: [
    new PostCompilePlugin()
  ]
}
```

And if you can control all the packages which you want to post compile, you can just add postCompile: true to the packages package.json:

```js
{
  "name": "your-one-pkg",
  // ...
  "postCompile": true
  // ...
}
```

Or you can add compileDependencies to your application package.json:

```js
// package.json
{
  // ...
  "compileDependencies": ["A", "B"]
  // ...
}
```

If `A` package have a dependency on `C` which is needed to be post compiled, just add `compileDependencies` to `A`'s  package.json:

```json
// A package.json
{
  // ...
  "compileDependencies": ["C"]
  // ...
}
```
