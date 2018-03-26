<template>
  <div class="page-display">
    <div class="display-wrapper">
      <section class="mofang-demo">
        <iframe :src="ifrSrc" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>
      </section>
    </div>
  </div>
</template>

<script>
  import { baseUrl } from '../../common/js/utils'
  export default {
    data () {
      return {
        hash: '/'
      }
    },
    computed: {
      ifrSrc () {
        return `${baseUrl}${this.hash}`
      }
    },
    watch: {
      '$route': {
        handler (to, from) {
          const index = to.path.indexOf('/docs/')
          this.hash = to.path.substr(index + 6)
        },
        immediate: true
      }
    }
  }
</script>

<style lang="stylus">
  @require "~@/common/stylus/variable.styl"

  .page-display
    position: relative
    .display-wrapper
      position: relative 
      width: 330px
      height: 645px
      top: 50%
      transform: translate(0, -50%)
      background: url("./iphoneX.png") no-repeat
      background-size: cover
      margin: 0 45px
      .mofang-demo
        position: absolute
        top: 64px
        left: 22px
        width: 286px
        bottom: 36px
        overflow: hidden
        border-radius: 0 0 35px 35px
        background-color: #edf0f4
        iframe
          // safari shit
          width: 286px!important
</style>
