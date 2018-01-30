## Input

Input component. Compared with the native input element, this component supports data binding using v-model and has a clear button.

### 示例

- Basic usage

Use v-model to bind the data bidirectionally

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

- Multiple configurations

Support most of the attributes of the input element. In addition you can configure the useClear attribute to toggle the clear button.

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
  :useClear="useClear"
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
      useClear: false
    }
  }
}
```

### Props配置

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| type | type of input | String | text/number/password/date | text |
| v-model | bound value | String | - | 空 |
| disabled | disabled status | Boolean | true/false | false |
| readonly | readonly status | Boolean | true/false | false |
| maxlength | maxlength of input | Number | - | 60 |
| placeholder | placeholder of input | String | - | 空 |
| autofocus | autofocus status | Boolean | true/false | false |
| autocomplete | autocomplete status | Boolean | true/false | false |
| useClear | whether to show clear button | Boolean | true/false | true |

### 事件

| Event Name | Description | Parameters |
| - | - | - |
| focus | This event is triggered after the input box is focused. If input is disabled, it will not be triggered | e - event |
| blur | This event is triggered after the input box is out of focus | e - event |
