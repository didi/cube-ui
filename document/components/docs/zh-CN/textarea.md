## Textarea

> 1.5.0 新增

多行输入框组件，支持使用`v-model`对数据双向绑定，根据是否有内容、是否聚焦有折叠、展开两种状态。

### 示例

- 基本用法

  使用`v-model`对输入内容双向绑定。

  ```html
  <cube-textarea v-model="value" ></cube-textarea>
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

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| focus | 输入框聚焦后触发此事件，如果禁用状态，则不触发 | e - 事件对象 |
| blur | 输入框失焦后触发此事件 | e - 事件对象 |
