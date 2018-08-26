## 后编译

后编译指的是应用依赖的 NPM 包并不需要在发布前编译，而是随着应用编译打包的时候一块编译。

_注：_ 关于后编译更详细内容可参阅 [webpack 应用编译优化之路](https://github.com/DDFE/DDFE-blog/issues/23)

### 背景

使用 webpack + babel 开发应用越来越多，而且一般都是通过 NPM 进行包管理的，这样依赖包越来越多，这些依赖包也是使用的 ES2015+ 开发的，所以每个依赖包都需要编译才能发布，这样编译后代码中往往后包含很多编译代码，所以为了消除这部分冗余，推荐大家使用后编译。

### 优缺点

优点：

- 公共的依赖可以实现共用，只此一份，重要的是只编译一次，建议通过 peerDependencies 管理依赖。
- babel 转换 API（例如 babel-plugin-transform-runtime 或者 babel-polyfill）部分的代码只有一份。
- 不用每个依赖包都需要配置编译打包环节，甚至可以直接源码级别发布。

缺点：

- 主应用的 babel 配置需要能兼容依赖包的 babel 配置。
- 依赖包不能使用 alias、不能方便的使用 DefinePlugin（可以经过一次简单编译，但是不做 babel 处理）。
- 应用编译时间会变长。

### 约定

考虑到有些应用会使用后编译，有些则只能使用编译好的依赖包，为了“争夺”入口，cube-ui 做了均衡，约定：

> package.json 的 main 字段指向的就是编译后入口，而 module 字段指向的就是源码入口。

_关于 [pkg.module](https://github.com/rollup/rollup/wiki/pkg.module)_

这样，如果应用使用的是 webpack 2+，则默认走后编译，而如果使用的 webpack 1.x 则默认使用的是编译后内容；当然，这部分可以通过 webpack 的 alias 配置达到和版本无关效果。

### webpack 配置使用

后编译的场景是极有可能产生嵌套的情况，而且对于每个依赖包而言应该自己管理自身需要后编译的依赖；为了解决这个问题，可以使用 [webpack-post-compile-plugin](https://www.npmjs.com/package/webpack-post-compile-plugin)，你只需要在你的 NPM 包自身的 package.json 中声明 `postCompile: true` 或者你的应用的 package.json 中通过 compileDependencies 来指定自身需要后编译依赖的包名。

一个应用示例配置：

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

如果你能控制你应用的所有的依赖包，直接在每个依赖包的 package.json 中设置 `postCompile: true` 即可：

```js
{
  "name": "your-one-pkg",
  // ...
  "postCompile": true
  // ...
}
```

或者你也可以在应用的 package.json 中增加 compileDependencies：

```json
// package.json
{
  // ...
  "compileDependencies": ["A", "B"]
  // ...
}
```

如果说 A 还依赖 C 的话，只需要在 A 的 package.json 中指定 compileDependencies 即可：

```json
// A package.json
{
  // ...
  "compileDependencies": ["C"]
  // ...
}
```
