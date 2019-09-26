## Checker

Checker is more flexible selection component, you can alse customize the layout.

### Example

- Basic usage

  ```html
  <cube-checker
    v-model="checkerValue"
    :options="options" />
  ```
  ```js
  export default {
    data() {
      return {
        checkerValue: [],
        options: [
          {
            value: 1,
            text: 'red'
          },
          {
            value: 2,
            text: 'yellow'
          },
          {
            value: 3,
            text: 'blue'
          },
          {
            value: 4,
            text: 'green'
          }
        ]
      }
    }
  }
  ```
  The value of `options` is an array. The default `checkerValue` value is  `''`,
  If you clicked one option, the `checkerValue` will be set as the value of this option.

- radio

  ```html
  <cube-checker
    v-model="checkerValue"
    :options="options"
    type="radio" />
  ```
  ```js
  export default {
    data() {
      return {
        checkerValue: '',
        options: [
          {
            value: 0,
            text: 'AAAAA'
          },
          {
            value: 1,
            text: 'BBBBB'
          }
        ]
      }
    }
  }
  ```
  If the `type` is set to `'radio'`, the checker will be a radio type.
  The default type is a `'checkbox'`.

- Use slot

  You can use slot to implement custom layout.

  ```html
  <cube-checker
    v-model="checkerList"
    :options="options"
    type="radio">
    <cube-checker-item
      v-for="item in options"
      :key="item.value"
      :option="item">
      <span class="orange"><i class="cubeic-alert"></i>{{item.text}}</span>
    </cube-checker-item>
  </cube-checker>
  ```
  ```js
  export default {
    data() {
      return {
        checkerList: [],
        options: [
          {
            value: 0,
            text: 'AAAAA'
          },
          {
            value: 1,
            text: 'BBBBB'
          }
        ]
      }
    }
  }
  ```


- Use min & max prop

  You can use `min` and `max` prop but the `type` must set to `'checkbox'`.

  `max` set the max number of checked items, `min` set the min number of checked items.


  ```html
  <cube-checker
    v-model="checkerList"
    :options="options"
    :min="1"
    :max="2"/>
  ```
  ```js
  export default {
    data() {
      return {
        checkerList: [3],
        options: [
          {
            value: 1,
            text: 'red'
          },
          {
            value: 2,
            text: 'yellow'
          },
          {
            value: 3,
            text: 'blue'
          },
          {
            value: 4,
            text: 'green'
          }
        ]
      }
    }
  }
  ```


- disabled state <sup>1.12.19</sup>

  use `disabled`  to set disabled state


  ```html
  <cube-checker
    v-model="checkerList"
    :options="options"/>
  ```
  ```js
  export default {
    data() {
      return {
        checkerList: [2],
        options: [
          {
            value: 1,
            text: 'first',
            disabled: true
          },
          {
            value: 2,
            text: 'second',
            disabled: true
          },
          {
            value: 3,
            text: 'third'
          }
        ]
      }
    }
  }
  ```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| options | a collection of configuration items | Array | - | - |
| type | the type of checker | String | checkbox/radio | checkbox |
| min | the min number | Number | - | 0 |
| max | the max number | Number | - | options length |

* options sub configuration

| Attribute | Description | Type  |
| - | - | - |
| value | the value of checker item | String/Number |
| text | the text of checker item | String |
| disabled<sup>1.12.19</sup> | disabled state of checker item | Boolean |

### CubeCheckerItem Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| option | item configuration object | Object | - | - |

* option sub configuration

| Attribute | Description | Type  |
| - | - | - |
| value | the value of checker item | String/Number |
| text | the text of checker item | String |
| disabled<sup>1.12.19</sup> | disabled state of checker item | Boolean |
