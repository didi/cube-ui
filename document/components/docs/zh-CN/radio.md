## Radio 单选框组

> 1.4.0 新增

单选框组，可设置单选框组内容，样式等。

### 示例

- 基本用法

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

  `options` 为选项数组，默认不选中任何的选项，点击其中一个，则对应的 `selected` 的值就为选中项的值。

- 设置 value，禁用状态，图标样式

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

  `options` 的值可以是对象组成的数组，默认可以设置 `label` 和 `value` 分别代表的是显示文案和单选框的值，如果对象中包含了 `disabled` 为 `true` 的值，那么此单选框就处于禁用状态。

  设置 `position` 为 `'right'`，则单选框图标位置在右边。设置 `hollow-style` 为 `true` 则使用镂空样式。

- 水平排列

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

  可通过设置 `horizontal` 为 `true` 改变样式为水平排列。

- 使用默认插槽

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

- 自定义列数<sup>1.12.28</sup>

  可通过设计 `colNum` 控制一行中有几列，colNum 小于1时，按1处理
  ```html
  <cube-radio-group v-model="selected5" :options="options5" :col-num="colNum" />
  ```

  ```js
  export default {
    data() {
      return {
        selected5: '6',
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

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| options | 选项数组 | Array | - | - |
| position | 图标位置 | String | left/right | left |
| horizontal | 是否水平排列 | Boolean | true/false | false |
| colNum<sup>1.12.28</sup> | 一行有几列 | Number | - | 1 |
| hollowStyle | 是否是镂空样式的 | Boolean | true/false | false |

* `options` 子配置项

| 参数 | 说明 | 类型 |
| - | - | - |
| label | 单选框显示文字 | String |
| value | 单选框的值 | String/Number |
| disabled | 单选框是否被禁用 | Boolean |

注：如果 `options` 中的项为字符串也是可以的，此时默认 `label` 和 `value` 的值都为该字符串的值。

### cube-radio Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| option | 选项配置 | Object/String | - | - |
| position | 图标位置 | String | left/right | left |
| hollow-style | 是否是镂空样式的 | Boolean | true/false | false |

* `option` 子配置项

| 参数 | 说明 | 类型 |
| - | - | - |
| label | 单选框显示文字 | String |
| value | 单选框的值 | String/Number |
| disabled | 单选框是否被禁用 | Boolean |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| input | 绑定值变化时触发 | 选中的单选框value值 |
