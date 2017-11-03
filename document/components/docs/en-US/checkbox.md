## Checkbox

`Checkbox` component. You can set the state, pass on special class and set the position of the checkbox's icon.

### Example

- Basic usage

```html
<cube-checkbox v-model="checked">
  Checkbox
</cube-checkbox>
```

If selected, the value of `checked` is `true`.

- Disabled state

```html
<cube-checkbox v-model="checked" :disabled="true">
  Disabled Checkbox
</cube-checkbox>
```

Set `disabled` to `true` to turn into the disabled state.

- Position of the checkbox icon

```html
<cube-checkbox v-model="checked" position="right">
  Position Checkbox
</cube-checkbox>
```

If setting `position` to `'right'`, the position of the checkbox's icon is on the right.

- Change the value of model

```html
<cube-checkbox v-model="checked" label="labelValue">
  Set label Checkbox
</cube-checkbox>
```

If `label` is setted, and when the checkbox is selected, the value of `checked` is `'labelValue'`. When not selected, the value is `false`; Therefore, in circumstances of single checkbox, better not set `label`.

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| disabled | whether disabled | Boolean | true/false | false |
| position | position | String | left/right | left |
| label | if selected, then map the value to v-model | Boolean/String | - | '' |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| input | triggers when the selecting state changes | the value of label if setted or boolean value which represents whether selected |

