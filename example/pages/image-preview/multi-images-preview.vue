<template>
  <cube-page type="multi-images-preview" title="MultiImagesPreview">
    <div slot="content">
      <div class="view-wrapper">
        <div class="tips">Click Image</div>
        <div class="imgs-container">
          <img :src="img" v-for="(img, index) in imgs" :key="img" @click="handleImgsClick(index)">
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'

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
            initialIndex: 'initialIndex',
            loop: false
          },
          $events: {
            change: (i) => {
              this.initialIndex = i
            }
          }
        }
        this.$createImagePreview({ ...params }).show()
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
    .imgs-container
      margin-top 50px
      > img
        max-width: 100px
        height: 67px
        margin: 0 10px 16px 10px
        border-radius: 4px
    .tips
      margin-top 50px
      text-align center
      font-size 30px
      color #222
</style>
