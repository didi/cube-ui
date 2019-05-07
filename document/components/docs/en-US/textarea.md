## Textarea

> New in 1.5.0+

Multi-line input box components. You can use the `v-model` directive to create two-way data bindings. The component expands or fold according to whether there is content, whether it is focused.

### Example

- Basic usage

  You can use the `v-model` directive to create two-way data bindings.

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


- Config indicator

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

  If `indicator` is `false` then the indicator element will not be visible.

  If `indicator` is `true`, the config equals `{remain: true, negative: true}`.

  If `indicator` is an object, you can use `remain` and `negative` to control whether show the remaining count(if `remain` is `false` means show the textarea value length) and whether allow remaining number is negative.

- Multiple configurations

  Support the native attributes of the textarea element.

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
        placeholder: 'please type here',
        readonly: true,
        maxlength: 100,
        disabled: true,
        autofocus: true
      }
    }
  }
  ```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| v-model | bound value | String | - | empty |
| disabled | disabled status | Boolean | true/false | false |
| readonly | readonly status | Boolean | true/false | false |
| maxlength | maxlength of input | Number | - | 60 |
| placeholder | placeholder of input | String | - | empty |
| autofocus | autofocus status | Boolean | true/false | false |
| indicator<sup>1.10.0</sup> | indicator config | Boolean/Object | true/false/{} | true |
| autoExpand<sup>1.12.0</sup> | If `autoExpand` is true and have initial value, the textarea will be auto expanded | Boolean | true/false | false |

- indicator sub configuration

  If `indicator` is `false` then the indicator element will not be visible.

  If `indicator` is `true`, the config equals `{remain: true, negative: true}`.

  If `indicator` is an object:

  | Attribute | Description | Type | Accepted Values | Default |
  | - | - | - | - | - |
  | remain | whether show the remaining count, if this value is `false` means show the textarea value length | Boolean | true/false | true |
  | negative | avaliable when `remain` is true, this value control whether allow remaining number is negative | Boolean | true/false | true |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| focus | This event is triggered after the textarea box is focused. If Textarea is disabled, it will not be triggered | e - event |
| blur | This event is triggered after the textarea box blur | e - event |
| input | The event is triggered when the binding value changes | The updated value |

### Instance methods

| Method name | Description |
| - | - |
| focus<sup>1.12.10+</sup> | Focus element |
| blur<sup>1.12.10+</sup> | Blur element |

