<template>
  <div class="cube-radio-group" :class="_groupClass" :data-horz="horizontal">
    <slot>
      <cube-radio
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        :position="position"
        :horizontal="horizontal"
        v-model="radioValue">
      </cube-radio>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-radio-group'

  const EVENT_INPUT = 'input'

  export default {
    name: COMPONENT_NAME,
    props: {
      value: String,
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
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-radio-group[data-horz="true"]
    display: flex
    padding-left: 0
    border-1px($radio-group-horizontal-bdc, 2px)
    border-radius: 2px
</style>
