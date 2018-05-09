## Input

> 1.5.0 新增

输入框组件。支持使用`v-model`对数据双向绑定，支持一键清空内容。

### 示例

- 基本用法

  使用`v-model`对输入内容双向绑定。

  ```html
  <cube-input v-model="value" ></cube-input>
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

  支持原生组件的大部分配置，另外可通过`clearable`切换清空按钮以及`eye`设置密码眼睛。

  ```html
  <cube-input
    v-model="value"
    :placeholder="placeholder"
    :type="type"
    :maxlength="maxlength"
    :readonly="readonly"
    :disabled="disabled"
    :autofocus="autofocus"
    :autocomplete="autocomplete"
    :clearable="clearable"
    :eye="eye"
  ></cube-input>
  ```
  ```javascript
  export default {
    data() {
      return {
        value: '',
        placeholder: '请输入内容',
        type: 'password',
        readonly: true,
        maxlength: 100,
        disabled: true,
        autofocus: true,
        autocomplete: true,
        clearable: false,
        /*
         * 眼睛可见，且密码可见
         * 如果为 false 则眼睛不可见，密码不可见
         * 如果想要眼睛可见但是密码不可见，则配置为对象 { open: false }
         */
        eye: true
      }
    }
  }
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | input类型 | String | text/number/password/date | text |
| v-model | 绑定的值 | String | - | 空 |
| disabled | 禁用状态 | Boolean | true/false | false |
| readonly | 只读状态 | Boolean | true/false | false |
| maxlength | 最大输入长度 | Number | - | 60 |
| placeholder | 占位文本 | String | - | 空 |
| autofocus | 自动对焦 | Boolean | true/false | false |
| autocomplete | 自动补全 | Boolean | true/false | false |
| clearable | 是否使用清空按钮 | Boolean | true/false | false |
| eye | 默认 false，密码眼睛不可见；如果是 true ，则相当于配置为对象 `{ open: true, reverse: false }`。对象形式表示使用密码眼睛。其中 `open` 控制眼睛张开还是闭合。`reverse` 控制密码可见和眼睛开闭是否相反。 | Boolean/Object | true/false/{open: true/false, reverse: true/false} | false |

### 插槽

| 名字 | 说明 |
| - | - |
| prepend | 前置内容 |
| append | 后置内容 |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| focus | 输入框聚焦后触发此事件，如果禁用状态，则不触发 | e - 事件对象 |
| blur | 输入框失焦后触发此事件 | e - 事件对象 |
