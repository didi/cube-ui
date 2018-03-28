<template>
  <li
    class="cube-drawer-item border-bottom-1px"
    :class="itemClass"
    @click="clickItem(item)"
  >
    <slot>
      {{item || item.text}}
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
        type: Object,
        default() {
          return {}
        }
      },
      index: {
        type: Number,
        default: -1
      }
    },
    computed: {
      itemClass() {
        return this.$parent.selectedIndex.indexOf(this.index) >= 0 ? 'cube-drawer-item_active' : ''
      }
    },
    methods: {
      clickItem(item) {
        this.$emit(EVENT_CLICK, item)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-drawer-item
    height: 40px
    line-height: 40px
    font-size: $fontsize-large-x
    padding-left: 15px
  .cube-drawer-item_active
    background: $index-list-item-active-bgc
</style>
