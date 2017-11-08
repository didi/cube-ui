<template>
  <div class="page-display">
    <div class="display-wrapper">
      <section class="mofang-demo">
        <iframe :src="ifrSrc" frameborder="0" width="100%" height="100%"></iframe>
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
    },
    methods: {

    }
  }
</script>

<style lang="stylus">
  @import "~@/common/stylus/variable.styl"

  .page-display
    position: relative
    .display-wrapper
      position: absolute
      width: 348px
      height: 756px
      top: 61%
      left: 50%
      transform: translate(-50%, -50%)
      background: url("./phone.png") no-repeat
      background-size: cover
      .mofang-demo
        position: absolute
        top: 104px
        left: 14px
        right: 14px
        height: 550px
        border-radius: 4px
        background-color: $color-white
</style>
