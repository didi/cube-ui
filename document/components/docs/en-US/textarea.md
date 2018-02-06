## Textarea

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

### Event

| Event Name | Description | Parameters |
| - | - | - |
| focus | This event is triggered after the textarea box is focused. If Textarea is disabled, it will not be triggered | e - event |
| blur | This event is triggered after the textarea box blur | e - event |
