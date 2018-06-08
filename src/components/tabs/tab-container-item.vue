<template>
  <transition :name="transitionName">
    <div class="cube-tab-container-item" v-show="isActive">
      <slot></slot>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-tab-container-item'
  const TRANSITION_NAME = 'cube-tab-transition'

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
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  .cube-tab-container-item
    width: 100%
    font-size: 100%
    background-color: $color-white
    transition: transform .4s cubic-bezier(.86, 0, .07, 1)

  .cube-tab-transition-enter
    transform: translate(100%)

  .cube-tab-transition-enter-to
    transform: translate(0)
    top: 0

  .cube-tab-transition-leave, .cube-tab-transition-leave-active
    position: absolute

  .cube-tab-transition-leave-to
    position: absolute
    top: 0
    transform: translate(-100%)

  .cube-tab-reverse-transition-enter, .cube-tab-transition-leave-to
    transform: translate(-100%)

  .cube-tab-reverse-transition-leave, .cube-tab-reverse-transition-leave-to
    top: 0
    position: absolute
    transform: translate(100%)
</style>
