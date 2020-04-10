# cube-ui [![Build Status](https://travis-ci.org/didi/cube-ui.svg?branch=master)](https://travis-ci.org/didi/cube-ui?branch=master) [![codecov.io](http://codecov.io/github/didi/cube-ui/coverage.svg?branch=master)](http://codecov.io/github/didi/cube-ui?branch=master)

> A fantastic mobile ui lib implement by Vue.

### 导航

- [首页](https://didi.github.io/cube-ui/)
- [文档](https://didi.github.io/cube-ui/#/zh-CN/docs)
- [示例](https://didi.github.io/cube-ui/example/)

  ![示例二维码](./assets/example-qr.png)

- [应用教程](https://github.com/cube-ui/cube-application-guide)

### 新项目？

推荐使用基于 [vue-cli](https://github.com/vuejs/vue-cli) 的 [CLI 工具](https://github.com/cube-ui/cube-template) 来初始化配置和代码：

```shell
$ vue init cube-ui/cube-template projectname
```

### 安装

```shell
npm install cube-ui --save
```

### 使用

```js
import Vue from 'vue'
import Cube from 'cube-ui'

Vue.use(Cube)
```

#### 按需使用

```js
import Vue from 'vue'
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button,
  ActionSheet
} from 'cube-ui'

Vue.use(Button)
Vue.use(ActionSheet)
```

注：上述使用依赖插件 [babel-plugin-transform-modules](https://www.npmjs.com/package/babel-plugin-transform-modules)，详细内容请看 [开始文档](https://didi.github.io/cube-ui/#/zh-CN/docs/quick-start)

### Development

```shell
git clone git@github.com:didi/cube-ui.git
cd cube-ui
npm install
npm run dev
# or run document development
npm run doc-dev
```

### Changelog

详细日志请看[发布日志](https://github.com/didi/cube-ui/releases)。

### 滴滴开源项目

- [Mpx](https://github.com/didi/mpx): 一款致力于提高小程序开发体验的增强型小程序框架，通过Mpx，我们能够以最先进的web开发体验来开发生产性能深度优化的小程序。
- [Chameleon](https://github.com/didi/chameleon)/kəˈmiːlɪən/: 简写CML，中文意思变色龙，意味着就像变色龙一样能适应不同环境的跨端整体解决方案，达到真正意义上"一套代码，多端运行"的终极目标。
- [mand-mobile](https://github.com/didi/mand-mobile): 基于Vue.js实现的面向金融场景的移动端UI组件库。
- [DoraemonKit](https://github.com/didi/DoraemonKit)/'dɔ:ra:'emɔn/: 简称DoKit，一款功能齐全的客户端（ iOS 、Android、微信小程序 ）研发助手，你值得拥有。
- [Booster](https://github.com/didi/booster): 一款专门为移动应用设计的易用、轻量级且可扩展的质量优化框架，其目标主要是为了解决随着 APP 复杂度的提升而带来的性能、稳定性、包体积等一系列质量问题。
- [更多项目](https://github.com/didi/)
