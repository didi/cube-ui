## Textarea

> 1.5.0 新增

多行输入框组件，支持使用`v-model`对数据双向绑定，根据是否有内容、是否聚焦有折叠、展开两种状态。

### 示例

- 基本用法

  使用`v-model`对输入内容双向绑定。

  ```html
  <cube-textarea v-model="value"></cube-textarea>
  ```

  ```javascript
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
  ```

- 配置计数标识

  ```html
  <cube-textarea v-model="value" indicator="indicator"></cube-textarea>
  ```
  ```js
  export default {
    data() {
      return {
        indicator: {
          negative: true,
          remain: true
        }
      }
    }
  }
  ```

  如果 `indicator` 的值为 `false`，则不显示计数标识，如果为 `true`，则等同于 `{remain: true, negative: true}`，而如果是对象，则可通过 `remain` 和 `negative` 分别控制是否显示剩余字数（如果为 `false` 则显示输入字数）和是否允许负值。

- 多项配置

  支持原生组件的配置。

  ```html
  <cube-textarea
    v-model="value"
    :placeholder="placeholder"
    :maxlength="maxlength"
    :readonly="readonly"
    :disabled="disabled"
    :autofocus="autofocus"
  ></cube-textarea>
  ```
  ```javascript
  export default {
    data() {
      return {
        value: '',
        placeholder: '请输入内容',
        readonly: true,
        maxlength: 100,
        disabled: true,
        autofocus: true
      }
    }
  }
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| v-model | 绑定的值 | String | - | 空 |
| disabled | 禁用状态 | Boolean | true/false | false |
| readonly | 只读状态 | Boolean | true/false | false |
| maxlength | 最大输入长度 | Number | - | 60 |
| placeholder | 占位文本 | String | - | 空 |
| autofocus | 自动对焦 | Boolean | true/false | false |
| indicator<sup>1.10.0</sup> | 计数标识配置 | Boolean/Object | true/false/{} | true |
| autoExpand<sup>1.12.0</sup> | 如果为 true 且默认有内容的话，会默认展开 | Boolean | true/false | false |

- indicator 子配置项

  如果 `indicator` 的值为 `false`，则不显示计数标识，如果为 `true` 则等同于配置 `{remain: true, negative: true}`。如果是对象，则：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | - | - | - | - | - |
  | remain | 是否控制显示剩余字数，如果为 `false` 则代表显示输入字数 | Boolean | true/false | true |
  | negative | 当 `remain` 为 true 时有效，是否允许出现负值 | Boolean | true/false | true |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| focus | 输入框聚焦后触发此事件，如果禁用状态，则不触发 | e - 事件对象 |
| blur | 输入框失焦后触发此事件 | e - 事件对象 |
| input | 绑定值变化时触发 | 更新后的绑定值 |

### 实例方法

| 方法名 | 说明 |
| - | - |
| focus<sup>1.12.10+</sup> | 获得焦点 |
| blur<sup>1.12.10+</sup> | 离焦 |
