<template>
  <li
    class="cube-drawer-item border-bottom-1px"
    :class="itemClass"
    @click="clickItem(item)"
  >
    <slot>
      {{item.text || item}}
    </slot>
  </li>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-drawer-item'
  const EVENT_CLICK = 'click'

  export default {
    name: COMPONENT_NAME,
    props: {
      item: {
        type: [String, Object],
        default: ''
      },
      index: {
        type: Number,
        default: -1
      }
    },
    computed: {
      itemClass() {
        return this.$parent.$parent.selectedIndex === this.index ? 'cube-drawer-item_active' : ''
      }
    },
    methods: {
      clickItem(item) {
        this.$emit(EVENT_CLICK, item, this.index)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-drawer-item
    padding: 15px
    white-space: nowrap
    overflow: hidden
    font-size: $fontsize-large
  .cube-drawer-item_active
    background: $index-list-item-active-bgc
</style>
