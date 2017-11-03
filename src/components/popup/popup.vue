<template>
  <div class="cube-popup" :class="typeClass" v-show="isVisible">
    <div class="cube-popup-mask" v-show="mask" @click="maskClick">
      <slot name="mask"></slot>
    </div>
    <div class="cube-popup-container" :class="{'cube-popup-center': center}">
      <div class="cube-popup-content" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="cube-popup-content" v-else v-html="content">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import apiMixin from '../../common/mixins/api'
  const COMPONENT_NAME = 'cube-popup'
  const EVENT_MASK_CLICK = 'mask-click'

  export default {
    name: COMPONENT_NAME,
    mixins: [apiMixin],
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
      }
    },
    computed: {
      typeClass() {
        return this.type ? `cube-${this.type}` : ''
      }
    },
    methods: {
      maskClick(e) {
        this.$emit(EVENT_MASK_CLICK, e)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
  .cube-popup
    position: fixed
    left: 0
    right:0
    top: 0
    bottom: 0
    z-index: 100
  .cube-popup-mask, .cube-popup-container
    position: absolute
    width: 100%
    height: 100%
  .cube-popup-mask
    background-color: $popup-mask-bgc
  .cube-popup-container
    transform: translate(100%, 100%)
  .cube-popup-content
    position: absolute
    top: 0
    left: 0
    width: 100%
    box-sizing: border-box
    transform: translate(-100%, -100%)
  .cube-popup-center
    .cube-popup-content
      position: absolute
      top: -50%
      left: -50%
      width: auto
      transform: translate(-50%, -50%)
</style>
