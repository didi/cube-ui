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
        this.$parent.$parent.itemClickHandler(item, this.index)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-drawer-item
    padding: 0 20px
    height: 50px
    line-height: 50px
    white-space: nowrap
    overflow: hidden
    font-size: 15px
    &::after
      left: 20px
    &:last-child
      &::after
        display: none
    &:first-child
      &::after
        display: block
  .cube-drawer-item_active
    background: $drawer-item-active-bgc
</style>
