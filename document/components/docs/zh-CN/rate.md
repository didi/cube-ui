## Rate

> 1.5.0 新增

评分组件。你可以自定义星星个数，可以禁用交互，以用作评价展示，可以通过插槽自定义星星样式。

### 示例

- 基本用法

  使用 v-model 对评分值双向绑定。

  ```html
  <cube-rate v-model="value"></cube-rate>
  ```

  ```javascript
  export default {
    data() {
      return {
        value: 3
      }
    }
  }
  ```

- 多项配置

  例如，使用`disabled`使评分组件只读，使用`max`自定义评分等级，使用 `justify` 决定是否自动适应容器宽度。

  ```html
  <cube-rate v-model="value" :disabled="disabled" :max="max" :justify="justify"></cube-rate>
  ```

  ```javascript
  export default {
    data() {
      return {
        disabled: false,
        max: 5,
        value: 3,
        justify: false
      }
    }
  }
  ```

- 自定义星星样式

  需要使用`cube-rate-item`组件，并且对自定义的星星元素定义两种样式——普通和活跃（在`.cube-rate-item.active`类之下）。

  ```html
  <cube-rate v-model="value">
    <cube-rate-item v-for="n in max" :key="n" :value="value" :index="n">
      <!-- 定制星星示例 -->
      <div class="rate-item"></div>
    </cube-rate-item>
  </cube-rate>
  ```

  ```javascript
  export default {
    data() {
      return {
        value: 3
      }
    }
  }
  ```

  ```css
  .rate-item
    width: 100%
    height: 100%
    background-size: 100%
    background-color: grey
  .cube-rate-item.active
    .rate-item
      background-color: orange
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| v-model | 绑定的评分值 | Number | - | 0 |
| max | 星星个数 | Number | - | 5 |
| disabled | 禁用状态 | Boolean | true/false | false |
| justify | 是否自适应容器宽度（通过在星星之间增加空隙） | Boolean | true/false | false |

### 插槽

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| default | 默认是 cube-rate-item 组件 | - |

### cube-rate-item 的插槽

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| default | 自定义星星元素 | - |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| input | 手指从 rate item 移开时触发（当设置了 disabled 属性时，该事件不触发） | 当前移开的 rate item 的值 |
