## Slide

轮播图，提供了常见的`轮播`及`swipe`的功能，也是一个基于`better-scroll`进行封装的组件。

### 示例

- 基本使用

  `cube-slide`元素即整个轮播图组件，`cube-slide-item`元素则是每一个轮播的页面，其 slot 为该页的内容。

  ```html
  <cube-slide @change="changePage">
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

  可通过`threshold`属性配置切换页面的滑动阈值，既当滑动的距离超过了页面宽度 × `threshold`时，切换页面。默认值为0.3。

  ```html
  <cube-slide :threshold="0.4"></cube-slide>
  ```

- 切换页面的速度

  默认切换动画耗时为400ms，可通过`speed`属性配置。

  ```html
  <cube-slide :speed="200"></cube-slide>
  ```

- 允许纵向滚动

  默认在 Slide 区域的时候，竖向是不能滚动的，如果想要竖向可以滚动，可以设置 `allowVertical` 为 `true`。

  ```html
  <cube-slide :allow-vertical="true"></cube-slide>
  ```

- refresh 方法

  当新增或者删除 Slide Item 项或者修改 Slide 配置的时候，可以调用实例的 refresh 方法更新 Slide。

  ```html
  <cube-slide ref="slide">
    <cube-slide-item v-for="(item, index) in items" :key="index">
      <a :href="item.url">
        <img :src="item.image">
      </a>
    </cube-slide-item>
  </cube-slide>
  ```
  ```js
  const item3 = {
    url: 'http://www.didichuxing.com/',
    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
  }
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
          }
        ]
      }
    },
    mounted() {
      setTimeout(() => {
        this.items.push(item3)
        this.$refs.slide.refresh()
      }, 2000)
    }
  }
  ```

  延迟 2 秒钟后新增一个 Slide Item，新增完成后需要调用 refresh 方法更新。

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

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| initialIndex | 初始索引值 | Number | - | 0 |
| loop | 是否循环播放 | Boolean | true/false | true |
| autoPlay | 是否自动播放 | Boolean | true/false | true |
| interval | 播放间隔 | Number | - | 4000 |
| threshold | 切换页面的滑动阈值 | Number | (0, 1) | 0.3 |
| speed | 切换页面的速度 | Number | - | 400 |
| allowVertical | 是否允许竖向滚动 | Boolean | true/false | false |

### 插槽

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| default | 默认内容，由 cube-slide-item 构成 | - |
| dots | dots 内容 | dots: 轮播项长度 <br> current: 当前索引 |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| change | Slide 当前展示项发生改变时触发 | 当前展示项的索引值 |

### 实例方法

| 方法名 | 说明 |
| - | - |
| refresh | 当轮播图内容删减的时候，可以调用此方法进行更新 |
