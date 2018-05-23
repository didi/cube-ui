<template>
  <div class="cube-radio-group" :class="_groupClass" :data-horz="horizontal">
    <slot>
      <cube-radio
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        :position="position"
        :hollow-style="hollowStyle"
        v-model="radioValue">
      </cube-radio>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  import CubeRadio from './radio.vue'
  const COMPONENT_NAME = 'cube-radio-group'

  const EVENT_INPUT = 'input'

  export default {
    name: COMPONENT_NAME,
    props: {
      value: [String, Number],
      options: {
        type: Array,
        default() {
          return []
        }
      },
      position: {
        type: String,
        default: 'left'
      },
      horizontal: {
        type: Boolean,
        default: false
      },
      hollowStyle: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        radioValue: this.value
      }
    },
    watch: {
      value(newV) {
        this.radioValue = newV
      },
      radioValue(newV) {
        this.$emit(EVENT_INPUT, newV)
      }
    },
    computed: {
      _groupClass() {
        if (!this.horizontal) {
          return 'border-top-1px border-bottom-1px'
        }
      }
    },
    components: {
      CubeRadio
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-radio-group
    z-index: 1
    overflow: hidden
    background-color: $radio-group-bgc
    .cube-radio
      &:last-child
        .cube-radio-wrap
          border-none()
  .cube-radio-group[data-horz="true"]
    display: flex
    padding-left: 0
    border-1px($radio-group-horizontal-bdc, 2px)
    border-radius: 2px
    .cube-radio
      flex-fix()
      text-align: center
      padding-left: 10px
      padding-right: 10px
      &:after
        border-color: $radio-group-horizontal-bdc
      &:last-child
        border-none()
      &:last-child
        border-none()
      &[data-pos="right"]
        .cube-radio-ui
          position: relative
          margin-left: .42em
          order: 1
        .cube-radio-label
          margin-right: 0
    .cube-radio-wrap
      justify-content: center
</style>
