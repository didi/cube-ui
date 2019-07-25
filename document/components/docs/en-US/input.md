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

- Control max length

  You can control the value's max length like this:

  ```html
  <cube-input v-model="value"></cube-input>
  ```

  ```javascript
  export default {
    data() {
      return {
        value: ''
      }
    },
    watch: {
      value(newV) {
        if (newV.length > 10) {
          newV = newV.slice(0, 10)
          this.$nextTick(() => {
            this.value = newV
          })
        }
      }
    }
  }
  ```

- Clearable config

  You can use the `clearable` attribute to toggle the clear button.

  Before 1.11.0, the `clearable` value only can be a Boolean value.

  After 1.11.0 the `clearable` value can be a Boolean or an Object value.

  ```html
  <cube-input
    v-model="value"
    :clearable="clearable"
  ></cube-input>
  ```
  ```javascript
  export default {
    data() {
      return {
        value: '',
        clearable: {
          visible: true,
          blurHidden: true
        }
      }
    }
  }
  ```

- Eye config

  You can use `pwdEye` to toggle password eye button and password filed's visibility.

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
        eye: {
          open: true,
          reverse: false
        }
      }
    }
  }
  ```

  As you can see, this component also support the native attributes of the Input element.

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
| clearable | whether to show clear button, after 1.11.0 you can alse use object config like `{visible: true, blurHidden: true}`, the `visible` is used to control the visibility and the `blurHidden` is used to control whether hidden after blur.  | Boolean/Object<sup>1.11.0+</sup> | true/false | false |
| eye | If set to false then the password eye is invisible, if true, equal to `{open: true, reverse: false}`, Object form mean using the password eye. The `open` control the password eye open or close, `reverse` control whether the password content visibility is reverse with the password eye open or not. | Boolean/Object | true/false/{open: `true/false`} | false |

### Slot

| Slot Name | Description |
| - | - |
| prepend | prepend content |
| append | append content |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| focus | This event is triggered after the input box is focused. If input is disabled, it will not be triggered | e - event |
| blur | This event is triggered after the input box blur | e - event |
| change | The event is triggered after the binding value is changed and the input box is blur | e - event |
| input | The event is triggered when the binding value is changed | The updated value |

### Instance methods

| Method name | Description |
| - | - |
| focus<sup>1.12.10+</sup> | Focus element |
| blur<sup>1.12.10+</sup> | Blur element |
