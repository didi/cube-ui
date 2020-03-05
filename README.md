
# cube-ui [![Build Status](https://travis-ci.org/didi/cube-ui.svg?branch=master)](https://travis-ci.org/didi/cube-ui?branch=master) [![codecov.io](http://codecov.io/github/didi/cube-ui/coverage.svg?branch=master)](http://codecov.io/github/didi/cube-ui?branch=master) [![downloads](https://img.shields.io/npm/dm/cube-ui.svg)](https://www.npmjs.com/package/cube-ui)

> A fantastic mobile ui lib implement by Vue.

### Links

- [Home](https://didi.github.io/cube-ui/)
- [Docs](https://didi.github.io/cube-ui/#/en-US/docs)
- [Example](https://didi.github.io/cube-ui/example/)

  ![Example QR](./assets/example-qr.png)

- [Application Guide](https://github.com/cube-ui/cube-application-guide)

### Communication

![QQ Community QR](./assets/cube-qq-QR.jpg)

### New cube-ui project ?

Recommend use the [CLI tools](https://github.com/cube-ui/cube-template) base on [vue-cli](https://github.com/vuejs/vue-cli) to init the config and base code:

```shell
$ vue init cube-ui/cube-template projectname
```

### Install

```shell
npm install cube-ui --save
```

### Usage

```js
import Vue from 'vue'
import Cube from 'cube-ui'

Vue.use(Cube)
```

#### Use modularized cube-ui

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

For more information, please refer to [Quick Start](https://didi.github.io/cube-ui/#/en-US/docs/quick-start)


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

Detailed changes for each release are documented in the [release notes](https://github.com/didi/cube-ui/releases).

### DiDi Open Sources

- [Mpx](https://github.com/didi/mpx): An enhanced miniprogram framework with data reactivity and deep optimizition.
- [Chameleon](https://github.com/didi/chameleon)/kəˈmiːlɪən/: Unify all platforms(Web/Weex/Mini program) with MVVM. Focus on Write Once Run AnyWhere.
- [mand-mobile](https://github.com/didi/mand-mobile): A mobile UI toolkit, based on Vue.js 2, designed for financial scenarios.
- [DoraemonKit](https://github.com/didi/DoraemonKit)/'dɔ:ra:'emɔn/: A full-featured App (iOS & Android) development assistant. You deserve it.
- [Booster](https://github.com/didi/booster): An easy-to-use, lightweight, powerful and extensible quality optimization toolkit designed specially for mobile applications.
- [More repos](https://github.com/didi/)
