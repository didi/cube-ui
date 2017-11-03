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
  export default {
    props: {
      baseUrl: {
        type: String,
        default: 'http://localhost:8081/#/'
      }
    },
    data () {
      return {
        hash: '/'
      }
    },
    computed: {
      ifrSrc () {
        return `${this.baseUrl}${this.hash}`
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
      height: 750px
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
