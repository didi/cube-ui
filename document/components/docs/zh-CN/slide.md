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
          }, {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          }, {
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
      clickHandle(item, index) {
        console.log(item, index)
      }
    }
  }
  ```

- 循环播放

  默认开启循环播放，可通过 loop 属性配置。

  ```html
  <cube-slide></cube-slide>
  <cube-slide :loop="false"></cube-slide>
  ```

- 自动播放

  默认开启自动播放，可通过 auto-play 属性配置。

  ```html
  <cube-slide></cube-slide>
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

- 切换页面的速度

  默认切换动画耗时为400ms，可通过`speed`属性配置。

  ```html
  <cube-slide :speed="200"></cube-slide>
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| loop | 是否循环播放 | Boolean | true/false | true |
| autoPlay | 是否自动播放 | Boolean | true/false | true |
| interval | 播放间隔 | Number | - | 4000 |
| threshold | 切换页面的滑动阈值 | Number | (0, 1) | 0.3 |
| speed | 切换页面的速度 | Number | - | 400 |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| change | Slide 当前展示项发生改变时触发 | 当前展示项的索引值 |
