## Input

> New in 1.5.0+

Input component. You can use the `v-model` directive to create two-way data bindings and use a clear button to clear the content.

### Example

- Basic usage

  You can use the `v-model` directive to create two-way data bindings

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

  Support the native attributes of the input element. In addition you can use the `clearable` attribute to toggle the clear button, use `pwdEye` to toggle password eye button and password filed's visibility.

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
        placeholder: 'please type here...',
        type: 'password',
        readonly: true,
        maxlength: 100,
        disabled: true,
        autofocus: true,
        autocomplete: true,
        clearable: false,
        /*
         * if set to false then the password eye is invisible
         * if set to true then the password eye is visible
           and the password content is visible
         * if set to an object `{ open: false }` then the password eye is visible
           but the password content is invisible, the `open` can be used to
           control the password content's visibility
         */
        eye: true // the password eye is visible and the password content is visible or not
      }
    }
  }
  ```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| type | type of input | String | text/number/password/date | text |
| v-model | bound value | String | - | empty |
| disabled | disabled status | Boolean | true/false | false |
| readonly | readonly status | Boolean | true/false | false |
| maxlength | maxlength of input | Number | - | 60 |
| placeholder | placeholder of input | String | - | empty |
| autofocus | autofocus status | Boolean | true/false | false |
| autocomplete | autocomplete status | Boolean | true/false | false |
| clearable | whether to show clear button | Boolean | true/false | false |
| eye | If set to false then the password eye is invisible, if true, equal to `{open: true, reverse: false}`, Object form mean using the password eye. The `open` control the password eye open or close, `reverse` control whether the password content visibility is reverse with the password eye open or not. | Boolean/Object | true/false/{open: `true/false`} | false |

### Slot

| Slot Name | Description |
| - | - |
| prepend | prepend content |
| append | append content |

### Event

| Event Name | Description | Parameters |
| - | - | - |
| focus | This event is triggered after the input box is focused. If input is disabled, it will not be triggered | e - event |
| blur | This event is triggered after the input box blur | e - event |
