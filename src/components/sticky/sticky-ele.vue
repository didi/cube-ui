<template>
  <div class="cube-sticky-ele">
    <div class="cube-sticky-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
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

<style lang="stylus" >
  .cube-sticky-ele
    position: relative
</style>
