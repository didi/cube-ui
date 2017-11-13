## Quick start

### Install

```shell
$ npm install cube-ui --save
```

### Usage

It is recommended to use [babel-plugin-transform-modules](https://www.npmjs.com/package/babel-plugin-transform-modules),which helps you import component modules and corresponding styles more elegantly.

Before use, the plugin needs some configuration. Modify .babelrc:

- webpack 1.x
  ```json
  {
    "plugins": ["transform-modules", {
      "cube-ui": {
        "transform": "cube-ui/lib/${member}",
        "kebabCase": true,
        "style": true
      }
    }]
  }
  ```
- webpack 2+
  ```json
  {
    "plugins": ["transform-modules", {
      "cube-ui": {
        "transform": "cube-ui/src/modules/${member}",
        "kebabCase": true
      }
    }]
  }
  ```

  > [why distinguishs the version of webpack?](#/en-US/docs/post-compile)

If not using babel-plugin-transform-modules, you need to import corresponding style files by hand.

#### Fully import

Commonly in the entry file:

```javascript
import Vue from 'vue'
import Cube from 'cube-ui'

Vue.use(Cube)
```

#### Import on demand

```javascript
import { Button } from 'cube-ui'
```

You can choose to register globally or partially:

```js
// register globally
Vue.use(Button)

// or register partially
// in certain somponents
{
  components: {
    CubeButton: Button
  }
}
```
All the components that can be imported on demand are listed below:

```js
import {
  Button,
  Checkbox,
  Loading,
  Tip,
  Toast,
  Picker,
  TimePicker,
  Dialog,
  ActionSheet,
  Scroll,
  Slide,
  IndexList
} from 'cube-ui'
```

#### Examples

```html
<template>
  <cube-button @click="showDialog">show dialog</cube-button>
</template>

<script>
  export default {
    methods: {
      showDialog() {
        this.$createDialog({
          type: 'alert',
          title: 'Alert',
          content: 'dialog content'
        }).show()
      }
    }
  }
</script>
```
