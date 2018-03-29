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

### ToDo

- 更多组件

- 主题支持

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
