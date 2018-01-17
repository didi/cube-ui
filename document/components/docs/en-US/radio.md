## Radio

Radio component. You can set the options, set the position of the radio's icon.

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

  The value of `options` is an array. The default `selected` value is  `''`, so there are no option is selected by defaut. If you clicked one radio option, then the `selected` is the option's value.

- Set value, disabled state and position of the icon

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

  The `options` value can be an array which have some object items. You can set `label` and `value` in each item, and if setting `disabled` to `true`, then the radio item's state is disabled.

  If setting `position` to `'right'`, the position of the radio's icon is on the right.

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

  You can set `horizontal` to change the style to horizontal order.

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| options | array of radio options | Array | - | - |
| position | icon position | String | left/right | left |
| horizontal | whether in horizontal order | Boolean | true/false | false |

* `options` sub configuration

| Attribute | Description | Type  |
| - | - | - |
| label | label content | String |
| value | radio item value | String/Number |
| disabled | whether disabled | Boolean |

Note: each `options` item can be an string value, now both the`label` and `value` values are the string value.
