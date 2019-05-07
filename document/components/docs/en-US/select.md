## Select

> New in 1.5.0+

Select component.

__Notice:__ Cause this component depend on Picker component, and Picker used create-api, so you should read [create-api](#/en-US/docs/create-api) first.

### Example

- Basic usage

  Basically, you need to use `options` to define each option and the selected value will bind on `v-model`.

  ```html
  <cube-select
    v-model="value"
    :options="options">
  </cube-select>
  ```
  ```js
  export default {
    data() {
      return {
        options: [2013, 2014, 2015, 2016, 2017, 2018],
        value: 2016
      }
    }
  }
  ```

- Configs and Events

  Select supports the configs of picker title, placeholder, whether auto pop, disabled. And if the selected value is changed when selected, it will emit the event `change`.

  ```html
  <cube-select
    v-model="value"
    :title="title"
    :options="options"
    :placeholder="placeholder"
    :auto-pop="autoPop"
    :disabled="disabled"
    cancelTxt="Cancel"
    confirmTxt="Confirm"
    @change="change">
  </cube-select>
  ```
  ```js
  export default {
    data() {
      return {
        options: [2013, 2014, 2015, 2016, 2017, 2018],
        value: 2016,
        title: 'Entry time',
        placeholder: 'Please choose entry time',
        autoPop: false,
        disabled: false
      }
    },
    methods: {
      change(value, index, text) {
        console.log('change', value, index, text)
      }
    }
  }
  ```

  There is one thing you may need notice. the `change` event won't change when you directly set the value of `v-model`, it only emit when the change is caused by select. If you want to listen the change of `v-model`, just watch it.

### Props

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| options | options | Array | - | [] |
| v-model | the selected value | Any | - | - |
| placeholder | placeholder | String | - | '请选择' |
| autoPop | whether auto pop picker | Boolean | true/false | false |
| disabled | whether disabled | Boolean | true/false | false |
| title | the title of picker | String | - | '请选择' |
| cancelTxt | the cancel text of picker | String | - | '取消' |
| confirmTxt | the confirm text of picker | String | - | '确认' |

- `options ` sub configuration

| Attribute | Description | Type | Accepted Values | Example |
| - | - | - | - | - |
| value | value of the option | Any | - | - |
| text | text of the option | String | - | - |

If an option is not an object, such as 2014，we will transform it to { value: 2014, text: 2014 }.

### Events

| Event Name | Description | Parameters 1 | Parameters 2 | Parameters 3 |
| - | - | - | - | - |
| input | when the selected value changed by select | the selected value | - | - |
| change | when the selected value changed by select | the selected value | the selected index | the selected text |
| picker-show | when Picker show | - | - | - |
| picker-hide | when Picker hide | - | - | - |