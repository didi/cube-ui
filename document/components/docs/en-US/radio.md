## Radio

> New in 1.4.0+

Radio component. You could set the options and the position of the radio's icon.

### Example

- Basic usage

  ```html
  <cube-radio-group v-model="selected" :options="options" />
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

- Configure the label, value, disabled state of options and icon style.

  ```html
  <cube-radio-group v-model="selected2" :options="options2" position="right" :hollow-style="true" />
  ```
  ```js
  export default {
    data() {
      return {
        selected2: 3,
        options2: [
          {
            label: 'Option1',
            value: 1
          },
          {
            label: 'Option2',
            value: 2
          },
          {
            label: 'Option3',
            value: 3,
            disabled: true
          }
        ]
      }
    }
  }
  ```

  The `options` value can be an array which has some object items. You can set `label` and `value` in each item, and use `disabled` to configure whether the radio item's state is disabled.

  If the `position` is set as `'right'`, the radio's icon will be posited at the right of the label. Set `hollow-style=true` to use hollow-out style.

- Horizontal order

  ```html
  <cube-radio-group v-model="selected3" :options="options3" :horizontal="true" />
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

- Use slot

  ```html
  <cube-radio-group>
    <cube-radio
      v-for="(option, index) in options4"
      :key="index"
      :option="option"
      v-model="selected4">
      <img :src="option.src" />
    </cube-radio>
  </cube-radio-group>
  ```

  ```js
  export default {
    data() {
      return {
        selected4: '1',
        options4: [
          {
            label: '1',
            value: '1',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'
          },
          {
            label: '2',
            value: '2',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'
          },
          {
            label: '3',
            value: '3',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg',
            disabled: true
          }
        ]
      }
    }
  }
  ```


- Set column number<sup>1.12.28</sup>

  You can use `colNum` to control the display columns
  ```html
  <cube-radio-group v-model="selected5" :options="options5" :col-num="colNum" />
  ```

  ```js
  export default {
    data() {
      return {
        selected5: '2',
        options5: [
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
          },
          {
            label: '4',
            value: '4'
          },
          {
            label: '5',
            value: '5'
          },
          {
            label: '6',
            value: '6',
            disabled: true
          },
          {
            label: '7',
            value: '7'
          },
          {
            label: '8',
            value: '8'
          }
        ],
        colNum: 3
      }
    }
  }
  ```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| options | the array of radio options | Array | - | - |
| position | icon position | String | left/right | left |
| colNum<sup>1.12.28</sup> | column number | Number | - | 1 |
| horizontal | whether use horizontal layout | Boolean | true/false | false |
| hollowStyle | whether is hollow-out style | Boolean | true/false | false |

* `options` sub configuration

| Attribute | Description | Type  |
| - | - | - |
| label | the text of label | String |
| value | the value of radio item | String/Number |
| disabled | whether the radio item is disabled | Boolean |

Note: Each item of `options` can be an string, Which means both the `label` and `value` will be set as this string.

### cube-radio Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| option | option value | Object/String | - | - |
| position | icon position | String | left/right | left |
| hollow-style | whether is hollow-out style | Boolean | true/false | false |

* `option` sub configuration

| Attribute | Description | Type  |
| - | - | - |
| label | the text of label | String |
| value | the value of radio item | String/Number |
| disabled | whether the radio item is disabled | Boolean |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| input | triggers when the binding value changes | the value of the chosen radio |
