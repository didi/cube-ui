## Tip

提示，用于弹出提示气泡框。

### 示例

- 基础使用

  通过在 `Tip` 组件上添加 `ref` 属性，获得对于组件的引用，然后调用 `Tip` 组件向外暴露出来的 `show`、`hide` 方法来控制组件的显示或隐藏。
  ```html
  <cube-button
    :inline="true"
    :outline="true"
    :primary="true"
    @click="$refs.tip.show()">Show tip</cube-button>
  <cube-tip ref="tip" direction="bottom" style="left:123px;top:-50px;">Tip</cube-tip>
  ```

- 小三角和气泡框的位置

  通过 `direction` 属性配置小三角的方向，一般情况下需要通过 `style` 改变气泡框的位置；一般来说，小三角的方向是与气泡框的位置相反的。

  ```html
  <p class="tip-eg">
    <span>cube-ui</span>
    <cube-tip
        ref="tip2"
        :direction="direction"
        :style="tipStyle"
        @close="close"
        @click="clickHandler">
      <div>Awesome!</div>
    </cube-tip>
  </p>
  <cube-button @click="showTip('bottom')">top</cube-button>
  <cube-button @click="showTip('top')">bottom</cube-button>
  <cube-button @click="showTip('right')">left</cube-button>
  <cube-button @click="showTip('left')">right</cube-button>
  ```
  ```javascript
  export default {
    data() {
      return {
        direction: '',
        tipStyle: ''
      }
    },
    methods: {
      showTip(direction) {
        this.direction = direction
        this.$refs.tip2.show()

        switch (direction) {
          case 'top':
            this.tipStyle = 'left: 100px; top: 30px;'
            break
          case 'bottom':
            this.tipStyle = 'left: 100px; top: -50px;'
            break
          case 'left':
            this.tipStyle = 'left: 200px; top: -10px;'
            break
          case 'right':
            this.tipStyle = 'left: 2px; top: -10px;'
            break
        }
      },
      close() {
        console.log('click close button')
      },
      clickHandler() {
        console.log('click tip area')
      }
    }
  }
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| direction | 小三角的方向 | String | top/bottom/left/right | left |
| offsetLeft | 小三角至 Tip 框左边距离 | Number/String | - | 0 |
| offsetTop | 小三角至 Tip 框顶部距离 | Number/String | - | 0 |
| offsetRight | 小三角至 Tip 框右边距离 | Number/String | - | 0 |
| offsetBottom | 小三角至 Tip 框底部距离 | Number/String | - | 0 |

其中 `offsetLeft`、`offsetTop`、`offsetRight`、`offsetBottom` 的值如果是数字，那么单位就是像素，如果说是字符串，则认为是设置的百分比。

### 事件

| 参数 | 说明 | 参数 |
| - | - | - |
| close | 点击 Tip 的关闭按钮 | - |
| click | 点击 Tip 的提示内容部分 | - |
