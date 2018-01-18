## Radio

Radio component. You could set the options and the position of the radio's icon.

### Example

- Basic usage

  ```html
  <cube-radio v-model="selected" :options="options" />
  ```
  ```js
  export default {
    data() {
      return {
        selected: '',
        options: ['Option1', 'Option2']
      }
    }
  }
  ```

  The value of `options` is an array. The default `selected` value is  `''`, which means no option will be selected by defaut. If you clicked one radio option, the `selected` will be set as the value of this option.

- Configure the label, value, disabled state of options and the position of icon.

  ```html
  <cube-radio v-model="selected2" :options="options2" position="right" />
  ```
  ```js
  export default {
    data() {
      return {
        selected2: '3',
        options2: [
          {
            label: 'Option1',
            value: '1'
          },
          {
            label: 'Option2',
            value: '2'
          },
          {
            label: 'Option3',
            value: '3',
            disabled: true
          }
        ]
      }
    }
  }
  ```

  The `options` value can be an array which has some object items. You can set `label` and `value` in each item, and use `disabled` to configure whether the radio item's state is disabled.

  If the `position` is set as `'right'`, the radio's icon will be posited at the right of the label.

- Horizontal order

  ```html
  <cube-radio v-model="selected3" :options="options3" :horizontal="true" />
  ```
  ```js
  export default {
    data() {
      return {
        selected3: '3',
        options3: [
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          },
          {
            label: '3',
            value: '3',
            disabled: true
          }
        ]
      }
    }
  }
  ```

  You can use `horizontal` to configure the style to horizontal layout.

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| options | the array of radio options | Array | - | - |
| position | icon position | String | left/right | left |
| horizontal | whether use horizontal layout | Boolean | true/false | false |

* `options` sub configuration

| Attribute | Description | Type  |
| - | - | - |
| label | the text of label | String |
| value | the value of radio item | String/Number |
| disabled | whether the item is disabled | Boolean |

Note: Each item of `options` can be an string, Which means both the `label` and `value` will be set as this string.
