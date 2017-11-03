## CheckboxGroup

`CheckboxGroup` is a group of checkboxs, which is used to select a group of options. It has vertical and horizontal styles.

### Example

- Vertical order

Default is vertical order style.

```html
<cube-checkbox-group v-model="checkList">
  <cube-checkbox label="1">
    Checkbox 1
  </cube-checkbox>
  <cube-checkbox label="2">
    Checkbox 2
  </cube-checkbox>
  <cube-checkbox label="3" :disabled="true">
    Disabled Checkbox
  </cube-checkbox>
  <cube-checkbox label="4" :disabled="true">
    Disabled & Checked Checkbox
  </cube-checkbox>
</cube-checkbox-group>
```


The value of `checkList` is an array, which represents the set of the values of `label` in selected checkboxs.

- Horizontal order

You can set `horizontal` to change the style to horizontal order.

```html
<cube-checkbox-group v-model="checkList" :horizontal="true">
  <cube-checkbox label="1">1</cube-checkbox>
  <cube-checkbox label="2">2</cube-checkbox>
  <cube-checkbox label="3" :disabled="true">3</cube-checkbox>
  <cube-checkbox label="4" :disabled="true">4</cube-checkbox>
</cube-checkbox-group>
```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| horizontal | whether in horizontal order | Boolean | true/false | false |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| input | triggers when the selecting state in the group changes | the set of values of selected checkboxs, which type is Array |
