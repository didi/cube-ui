import '../../types'
import Vue from 'vue'

console.log(Vue)
const root = new Vue()

const imgs = [
  'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',
  'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
  'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg',
  'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0m3ufuj21hc0zkqbj.jpg'
]
let imagePreview
let customIndex = 3
function showImagePreview() {
  imagePreview = root.$createImagePreview({
    imgs: imgs,
    initialIndex: customIndex,
    loop: true,
    speed: 500,
    zIndex: 12,
    preventDefault: false,
    onChange: (i: number) => {
      customIndex = i
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
    }, (customIndex + 1).toString())
  })
  imagePreview.show()
}
showImagePreview()

function showPropsImagePreview() {
  imagePreview = root.$createImagePreview({
    $props: {
      imgs: imgs,
      'initial-index': customIndex,
      loop: false,
      speed: 500,
      zIndex: 12,
      preventDefault: true
    },
    $events: {
      change: (i: number) => {
        customIndex = i
      },
      hide: () => {
        console.log('hide')
      }
    }
  }, (h) => {
    return h('div', {
      class: {
        'image-preview-custom-header': true
      },
      slot: 'header'
    }, (customIndex + 1).toString())
  })
  imagePreview.show()
}
showPropsImagePreview()