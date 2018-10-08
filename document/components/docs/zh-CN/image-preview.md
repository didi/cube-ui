## ImagePreview

> 1.10.0 新增

图片预览，支持切换、放大缩小等能力。

__注：__ 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 [create-api](#/zh-CN/docs/create-api)。

### 示例

如下示例相关代码在[这里](https://github.com/didi/cube-ui/tree/master/example/pages/image-preview)。

- 默认使用

  ```html
  <cube-button @click="showImagePreview">Show ImagePreview</cube-button>
  ```

  ```js
  export default {
    data() {
      return {
        imgs: [
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg'
        ]
      }
    },
    methods: {
      showImagePreview() {
        this.$createImagePreview({
          imgs: this.imgs
        }).show()
      }
    }
  }
  ```

  只需要提供 `imgs` 图片地址列表就可以了。

- 多图场景

  ```html
  <div class="imgs-container">
    <img
      :src="img"
      v-for="(img, index) in imgs"
      :key="img"
      @click="handleImgsClick(index)">
  </div>
  ```

  ```js
  export default {
    data() {
      return {
        initialIndex: 0,
        imgs: [
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg'
        ]
      }
    },
    methods: {
      handleImgsClick(index) {
        this.initialIndex = index
        const params = {
          $props: {
            imgs: this.imgs,
            initialIndex: 'initialIndex', // 响应式数据的key名
            loop: false
          },
          $events: {
            change: (i) => {
              // 必须更新 initialIndex
              this.initialIndex = i
            }
          }
        }
        this.$createImagePreview({ ...params }).show()
      }
    }
  }
  ```

  大多数应用场景都是多图点击之后，实例化 image-preview 组件，展示的图片是每次被点击的图片。

- 自定义使用

  ```html
  <cube-button @click="showCustomImagePreview">Show Custom ImagePreview</cube-button>
  ```

  ```js
  export default {
    data() {
      return {
        customIndex: 1,
        imgs: [
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
          'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg'
        ]
      }
    },
    methods: {
      showCustomImagePreview() {
        this.$createImagePreview({
          imgs: this.imgs,
          initialIndex: this.customIndex,
          loop: false,
          speed: 500,
          onChange: (i) => {
            this.customIndex = i
          },
          onHide: () => {
            console.log('hide')
          }
        }, (h) => {
          return h('div', {
            class: {
              'image-preview-custom-header': true
            },
            slot: 'header'
          }, this.customIndex + 1)
        }).show()
      }
    }
  }
  ```

  我们可通过插槽定义自己的其他自定义需求，通过传入 Prop 重新定义图片预览行为。

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| imgs | 图片地址列表 | Array | - | [] |
| initial-index | 初始索引 | Number | - | 0 |
| loop | 是否可循环 | Boolean | true/false | true |
| speed | 轮播速度，单位 ms | Number | - | 400 |
| zIndex<sup>1.10.11</sup> | 样式 z-index 的值 | Number | - | 100 |
| preventDefault<sup>1.10.16</sup> | 是否阻止默认行为，因底层使用 BetterScroll 实现 | Boolean | true/false | true |

### 插槽

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| header | 顶部 header 内容 | current: 当前索引 |
| footer | 底部 footer 内容 | current: 当前索引 |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| change | 查看图片索引改变 | 当前索引值 |
| hide | 隐藏 | - |
