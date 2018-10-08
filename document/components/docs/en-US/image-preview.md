## ImagePreview

> New in 1.10.0+

Image preview. Support swipe, zoomin zoomout.

__Notice:__ Cause this component used create-api, so you should read [create-api](#/en-US/docs/create-api) first.

### Example

The following demo code is [here](https://github.com/didi/cube-ui/tree/master/example/pages/image-preview).

- Default usage

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
        if (!this.imagePreview) {
          this.imagePreview = this.$createImagePreview({
            imgs: this.imgs
          })
        }
        this.imagePreview.show()
      }
    }
  }
  ```

  You can create a basic ImagePreview by setting `imgs` prop.

- Custom usage

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
        if (!this.customImagePreview) {
          this.customImagePreview = this.$createImagePreview({
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
          })
        }
        this.customImagePreview.show()
      }
    }
  }
  ```

  You can set other props to config ImagePreview. And you can use render function to define slots content.

- Multi images

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
            initialIndex: 'initialIndex', // name of reactive key in data
            loop: false
          },
          $events: {
            change: (i) => {
              // You must update initialIndex
              this.initialIndex = i
            }
          }
        }
        this.$createImagePreview({ ...params }).show()
      }
    }
  }
  ```

  The image-preview component is instantiated in multi-images scenarios, and the displayed image is the image that is clicked each time.

### Props

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| imgs | image urls | Array | - | [] |
| initial-index | initial index | Number | - | 0 |
| loop | whether to loop swipe | Boolean | true/false | true |
| speed | speed of switching pages, ms | Number | - | 400 |
| zIndex<sup>1.10.11</sup> | the value of the style z-index | Number | - | 100 |
| preventDefault<sup>1.10.16</sup> | BetterScroll `preventDefault` option | Boolean | true/false | true |

### Slots

| Name | Description | Scope Parameters |
| - | - | - |
| header | header content | current: active index |
| footer | footer content | current: active index |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| change | triggers when current index changes | current active index |
| hide | triggers when hide | - |
