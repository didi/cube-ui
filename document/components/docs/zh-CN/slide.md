## Slide

轮播图，提供了常见的`轮播`及 `swipe` 的功能，也是一个基于 `better-scroll` 进行封装的组件。

### 示例

- 基本使用

  考虑到 `cube-slide` 最常用的场景，每个轮播页是一个可跳转链接的图片，所以我们提供的最简便的用法是，通过 `data` 属性传入一个包含图片和跳转链接信息的数组，我们会默认将其渲染成一组超链接图片的轮播图。

  ```html
  <cube-slide :data="items"/>
  ```
  ```javascript
  export default {
    data() {
      return {
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
          }
        ]
      }
    }
  }
  ```

- 自定义内容

  当然我们也支持自定义内容，使用默认插槽和 `cube-slide-item` 就可以自定义每个轮播页的结构。其中，`cube-slide` 元素即整个轮播图组件，`cube-slide-item` 元素则是每一个轮播的页面，其 slot 为该页的内容。

  ```html
  <cube-slide ref="slide" :data="items" @change="changePage">
    <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
      <a :href="item.url">
        <img :src="item.image">
      </a>
    </cube-slide-item>
  </cube-slide>
  ```
  ```javascript
  export default {
    data() {
      return {
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
          }
        ]
      }
    },
    methods: {
      changePage(current) {
        console.log('当前轮播图序号为:' + current)
      },
      clickHandler(item, index) {
        console.log(item, index)
      }
    }
  }
  ```

  虽然你使用了自定义内容以后，我们不会用 `data` 生成默认内容，但依然建议你将数据传入 `data` 属性，因为只有这样，我们组件内部才能帮你自动进行数据监听和重新渲染，否则你可能会需要自己调用 refresh 方法重新渲染，比如这样  `this.$refs.slide.refresh()`。

- 初始索引

  初始化时展示的位置索引值，默认为 0。

  ```html
  <cube-slide :initial-index="1"></cube-slide>
  ```

- 循环播放

  默认开启循环播放，可通过 loop 属性配置。

  ```html
  <cube-slide :loop="false"></cube-slide>
  ```

- 自动播放

  默认开启自动播放，可通过 auto-play 属性配置。

  ```html
  <cube-slide :auto-play="false"></cube-slide>
  ```

- 自动播放的时间间隔

  当开启了自动播放时，还可通过 interval 属性配置时间间隔。

  ```html
  <cube-slide :interval="4000"></cube-slide>
  ```

- 切换页面的滑动阈值

  可通过 `threshold` 属性配置切换页面的滑动阈值，既当滑动的距离超过了页面宽度 × `threshold`时，切换页面。默认值为0.3。

  ```html
  <cube-slide :threshold="0.4"></cube-slide>
  ```

- 切换页面的速度

  默认切换动画耗时为400ms，可通过 `speed` 属性配置。

  ```html
  <cube-slide :speed="200"></cube-slide>
  ```

- 允许纵向滚动

  默认在 Slide 区域的时候，竖向是不能滚动的，如果想要竖向可以滚动，可以设置 `allowVertical` 为 `true`。

  ```html
  <cube-slide :allow-vertical="true"></cube-slide>
  ```

- 修改 dots 内容

  默认是点，可通过插槽修改。

  ```html
  <cube-slide>
    <template slot="dots" slot-scope="props">
      <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots">{{index + 1}}</span>
    </template>
  </cube-slide>
  ```

  作用域插槽提供了所需的当前索引值 `current` 以及长度 `dots`。

- 实时派发滚动的距离<sup>1.10.0</sup>

  ```html
  <cube-slide :options="options" @scroll="scroll"></cube-slide>
  ```

  ```javascript
    export default {
      data() {
        return {
          options: {
            listenScroll: true,
            probeType: 3
          }
        }
      },
      methods: {
        scroll ({x, y}) {
          console.log(x, y)
        }
      }
    }
    ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| data | 用于 side-item 列表渲染的数据，当需要使用内置的默认内容，或者让组件自动监听数据变化重新渲染时，此参数必传 | Array | - | [] |
| initialIndex | 初始索引值 | Number | - | 0 |
| loop | 是否循环播放 | Boolean | true/false | true |
| showDots | 是否显示轮播指示点 | Boolean | true/false | true |
| autoPlay | 是否自动播放 | Boolean | true/false | true |
| interval | 播放间隔 | Number | - | 4000 |
| direction | 轮播方向 | String | horizontal/vertical | horizontal |
| options<sup>1.9.0</sup> | better-scroll 配置项，具体请参考[BS 官方文档](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html) | Object | - | {<br>  momentum: false,<br>  click: true,<br>  observeDOM: false<br>} |
| threshold | 切换页面的滑动阈值 | Number | (0, 1) | 0.3 |
| speed | 切换页面的速度 | Number | - | 400 |
| allowVertical | 是否允许竖向滚动。`即将废弃`，推荐使用 `options` 属性 | Boolean | true/false | false |
| stopPropagation | 是否阻止事件冒泡，可用于解决嵌套同方向slide时会遇到的事件冒泡问题。`即将废弃`，推荐使用 `options` 属性 | Boolean | true/false | false |
| refreshResetCurrent<sup>1.10.10</sup> | 当刷新时是否重置索引 | Boolean | true/false | true |

### 插槽

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| default | 默认内容，由 cube-slide-item 构成 | - |
| dots | dots 内容 | dots: 轮播项长度 <br> current: 当前索引 |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| change | Slide 页面切换时触发 | 当前页面的索引值 |
| scroll<sup>1.10.0</sup> | 滚动中实时派发 | Object {x, y} -滚动位置的坐标值 |
| scroll-end<sup>1.9.0</sup> | 在滚动结束时触发 | 当前页面的索引值 |

### 实例方法

| 方法名 | 说明 |
| - | - |
| refresh | 当轮播图内容删减的时候，可以调用此方法进行更新，重新渲染 |
