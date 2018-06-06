<template>
  <cube-page type="image-preview-def" title="ImagePreview">
    <div slot="content">
      <div class="view-wrapper">
        <cube-button @click="showImagePreview">Show ImagePreview</cube-button>
        <cube-image-preview :imgs="imgs" ref="imagePreview" />
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'

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
        this.$refs.imagePreview.show()
      }
    },
    components: {
      CubePage
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
</style>
