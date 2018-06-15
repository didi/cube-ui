<template>
  <div class="cube-sticky-ele">
    <div class="cube-sticky-content">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import parentMixinCreator from '../../common/mixins/parent'

  const COMPONENT_NAME = 'cube-sticky-ele'

  export default {
    name: COMPONENT_NAME,
    mixins: [parentMixinCreator('isSticky', 'sticky')],
    props: {
      eleKey: {
        type: [Number, String]
      }
    },
    mounted() {
      this.sticky.addEle(this)
      this.refresh()
    },
    methods: {
      refresh() {
        const el = this.$el
        if (el.firstElementChild) {
          el.style.height = ''
          el.style.height = `${el.offsetHeight}px`
        }
      },
      getSticky() {
        let p = this.$parent
        while (p) {
          if (p.isSticky) {
            return p
          }
          p = p.$parent
        }
        return null
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
