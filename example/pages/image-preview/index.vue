<template>
  <cube-page type="image-preview-def" title="ImagePreview">
    <div slot="content">
      <div class="view-wrapper">
        <cube-button-group>
          <cube-button @click="showImagePreview">Show ImagePreview</cube-button>
          <cube-button @click="goTo('multi-images-preview')">Show MultiImagePreview</cube-button>
          <cube-button @click="showCustomImagePreview">Show Custom ImagePreview</cube-button>
        </cube-button-group>
      </div>
      <cube-view></cube-view>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  import CubeButtonGroup from '../../components/cube-button-group.vue'
  import CubeView from 'example/components/cube-view.vue'

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
      showImagePreview() {
        this.$createImagePreview({
          imgs: this.imgs
        }).show()
      },
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
      },
      goTo(subPath) {
        this.$router.push('/image-preview/' + subPath)
      }
    },
    components: {
      CubePage,
      CubeButtonGroup,
      CubeView
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .view-wrapper
    position: fixed
    top: 54px
    left: 0
    bottom: 0
    width: 100%
  .image-preview-custom-header
    padding: 20px
    text-align: center
    color: #fff
    background-color: #000
</style>
