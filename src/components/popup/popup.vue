<template>
  <div class="cube-popup" :style="{'z-index': zIndex}" :class="rootClass" v-show="isVisible">
    <div class="cube-popup-mask" @touchmove.prevent @click="maskClick">
      <slot name="mask"></slot>
    </div>
    <div class="cube-popup-container" @touchmove.prevent :class="containerClass">
      <div class="cube-popup-content" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="cube-popup-content" v-else v-html="content">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'
  const COMPONENT_NAME = 'cube-popup'
  const EVENT_MASK_CLICK = 'mask-click'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin],
    props: {
      type: {
        type: String,
        default: ''
      },
      mask: {
        type: Boolean,
        default: true
      },
      content: {
        type: String,
        default: ''
      },
      center: {
        type: Boolean,
        default: true
      },
      position: {
        type: String,
        default: ''
      }
    },
    computed: {
      rootClass() {
        const cls = {
          'cube-popup_mask': this.mask
        }
        if (this.type) {
          cls[`cube-${this.type}`] = true
        }
        return cls
      },
      containerClass() {
        const center = this.center
        const position = this.position
        if (position) {
          return {
            [`cube-popup-${position}`]: true
          }
        }
        if (center) {
          return {
            'cube-popup-center': true
          }
        }
      }
    },
    methods: {
      maskClick(e) {
        this.$emit(EVENT_MASK_CLICK, e)
        if (this.maskClosable) {
          this.hide()
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  .cube-popup
    position: fixed
    left: 0
    right:0
    top: 0
    bottom: 0
    z-index: 100
    pointer-events: none
  .cube-popup_mask
    pointer-events: auto
    .cube-popup-mask
      display: block
  .cube-popup-mask, .cube-popup-container
    position: absolute
    width: 100%
    height: 100%
  .cube-popup-mask
    display: none
    overflow: hidden
    background-color: $popup-mask-bgc
    opacity: $popup-mask-opacity
    pointer-events: auto
    // fix some android webview opacity render bug
    &::before
      content: "."
      display: block
      width: 1px
      height: 1px
      background-color: rgba(0, 0, 0, .1)
      margin-left: -10px
  .cube-popup-container
    transform: translate(100%, 100%)
  .cube-popup-content
    position: absolute
    top: 0
    left: 0
    width: 100%
    box-sizing: border-box
    transform: translate(-100%, -100%)
    pointer-events: auto
  .cube-popup-center,
  .cube-popup-right,
  .cube-popup-left
    .cube-popup-content
      top: -50%
      left: -50%
      width: auto
      max-width: 100%
      transform: translate(0, 0)
  .cube-popup-right,
  .cube-popup-left
    .cube-popup-content
      height: 100%
      top: -100%
  .cube-popup-center
      .cube-popup-content
        transform: translate(-50%, -50%)
  .cube-popup-top
    .cube-popup-content
      top: -100%
      left: -100%
      transform: translate(0, 0)
  .cube-popup-right
    .cube-popup-content
      top: -100%
      right: 100%
  .cube-popup-left
    .cube-popup-content
      left: -100%
</style>
