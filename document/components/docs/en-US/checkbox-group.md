## CheckboxGroup

`CheckboxGroup` is a group of checkboxs, which is used to select a group of options. It has vertical and horizontal styles.

### Example

- Vertical order

  Default is vertical order style.

  ```html
  <cube-checkbox-group v-model="checkList" :options="options" />
  ```
  ```js
  export default {
    data() {
      return {
        checkList: ['1', '4'],
        options: [
          '1',
          '2',
          {
            label: '3',
            value: '3',
            disabled: true
          },
          {
            label: '4',
            value: '4',
            disabled: true
          }
        ]
      }
    }
  }
  ```

  The value of `checkList` is an array, which represents the set of the values of `value` in selected checkboxs.

- Horizontal order

  You can set `horizontal` to change the style to horizontal order.

  ```html
  <cube-checkbox-group v-model="checkList" :options="options" :horizontal="true" />
  ```

- Use slot

  ```html
  <cube-checkbox-group v-model="checkList">
    <cube-checkbox option="1"><i>Checkbox 1</i></cube-checkbox>
    <cube-checkbox option="2"><i>Checkbox 2</i></cube-checkbox>
    <cube-checkbox :option="{value: '3', disabled: true}"><i>Disabled Checkbox</i></cube-checkbox>
    <cube-checkbox :option="{value: '4', disabled: true}"><i>Disabled & Checked Checkbox</i></cube-checkbox>
  </cube-checkbox-group>
  ```

  Use `cube-checkbox`, [cube-checkbox doc](#/en-US/docs/checkbox).

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| horizontal | whether in horizontal order | Boolean | true/false | false |
| options | array of checkbox options | Array | - | - |

* `options` sub configuration

| Attribute | Description | Type  |
| - | - | - |
| label | label content | String |
| value | checkbox item value | String/Number |
| disabled | whether disabled | Boolean |

Note: each `options` item can be an string value, now both the`label` and `value` values are the string value.
