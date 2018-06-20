<template>
  <transition :name="transitionName">
    <div class="cube-tab-panel" v-show="isActive">
      <slot></slot>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-tab-panel'
  const TRANSITION_NAME = 'cube-tab-panel-transition'

  export default {
    name: COMPONENT_NAME,
    props: {
      label: {
        type: [String, Number],
        required: true
      }
    },
    data () {
      return {
        transitionName: TRANSITION_NAME
      }
    },
    computed: {
      isActive () {
        return this.$parent.value !== undefined && this.$parent.value === this.label
      }
    },
    mounted () {
      this.$parent.addPanel(this)
    },
    destroyed () {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
      this.$parent.removePanel(this)
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  .cube-tab-panel
    width: 100%
    font-size: 100%
    transition: transform .4s cubic-bezier(.86, 0, .07, 1)

  .cube-tab-panel-transition-enter
    transform: translate(100%)

  .cube-tab-panel-transition-enter-to
    transform: translate(0)
    top: 0

  .cube-tab-panel-transition-leave, .cube-tab-panel-transition-leave-active
    position: absolute

  .cube-tab-panel-transition-leave-to
    position: absolute
    top: 0
    transform: translate(-100%)

  .cube-tab-panel-reverse-transition-enter, .cube-tab-panel-transition-leave-to
    transform: translate(-100%)

  .cube-tab-panel-reverse-transition-leave, .cube-tab-panel-reverse-transition-leave-to
    top: 0
    position: absolute
    transform: translate(100%)
</style>
