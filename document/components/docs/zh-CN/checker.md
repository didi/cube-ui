## Checker

Checker 是更加灵活的选择组件，可以自定义需要的布局样式。

### 示例

- 默认

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
  如果选中了，则 `checkerValue` 的值就为 `value`。

  设置 `option`，当选中某一项的时候，`checkerValue` 的值就是 `'optionValue'`，当未选中的时候，`checkerValue` 的值就是 `''`。

- 单选

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

  可通过设置 `type` ，若为 `'radio'` 则是单选，若为 `'checkbox'` 则是多选。

- 自定义结构

  可通过默认插槽插入 CubeCheckerItem 实现自定义每项的结构。

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


- 个数限制

  `max` 设置最多可选个数，多选时可用。

  `min` 设置最少可选个数，多选时可用。


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

- 不可点击状态<sup>1.12.19</sup>

  `disabled` 设置禁用状态。


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

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| options | 配置项集合 | Array | - | - |
| type | 选项类型 | String | checkbox/radio | checkbox |
| min | 最少可选个数 | Number | - | 0 |
| max | 最多可选个数 | Number | - | options 的长度 |

* options 子配置项

| 参数 | 说明 | 类型 |
| - | - | - |
| value | 选项的值 | String/Number |
| text | 选项的文本 | String |
| disabled<sup>1.12.19</sup> | 选项是否被禁用 | Boolean |

### CubeCheckerItem Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| option | 单个配置项 | Object | - | - |

* option 子配置项

| 参数 | 说明 | 类型 |
| - | - | - |
| value | 选项的值 | String/Number |
| text | 选项的文本 | String |
| disabled<sup>1.12.19</sup> | 选项是否被禁用 | Boolean |
