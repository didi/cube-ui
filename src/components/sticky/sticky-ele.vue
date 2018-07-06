<template>
  <div class="cube-sticky-ele">
    <div class="cube-sticky-content">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-sticky-ele'

  export default {
    name: COMPONENT_NAME,
    inject: ['sticky'],
    props: {
      eleKey: {
        type: [Number, String]
      }
    },
    mounted() {
      this.sticky.addEle(this)
    },
    methods: {
      refresh() {
        const el = this.$el
        if (el.firstElementChild) {
          el.style.height = ''
          el.style.height = `${el.offsetHeight}px`
        }
      }
    },
    beforeDestroy() {
      this.sticky.removeEle(this)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cube-sticky-ele
    position: relative
</style>
