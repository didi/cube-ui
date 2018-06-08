<template>
  <div class="cube-tab-nav-item"
       :class="{ active: isActive, inline: $parent.inline }"
       @click="handleClick"
  >
    <div v-if="$slots.icon"
         class="cube-tab-nav-item-icon"
         :class="{'add-margin-bottom' : $slots.default && !$parent.inline}">
      <slot name="icon"></slot>
    </div>
    <div class="cube-tab-nav-item-label">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-tab-nav-item'

  const EVENT_INPUT = 'input'
  const EVENT_CLICK = 'tab-click'

  export default {
    name: COMPONENT_NAME,
    props: {
      label: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      isActive () {
        return this.$parent.value !== undefined && this.$parent.value === this.label
      }
    },
    methods: {
      handleClick () {
        /* istanbul ignore if */
        if (this.label === undefined) return
        const eventsStack = [EVENT_INPUT, EVENT_CLICK]
        eventsStack.forEach((event) => {
          this.$parent.$emit(event, this.label)
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"
  .cube-tab-nav-item
    flex 1
    padding 7px 0
    font-size: 100%
    color $color-grey
    text-align center
    &.inline
      display flex
      align-content center
      justify-content center
    &.active
      color $color-dark-orange
    .cube-tab-nav-item-icon
      &.add-margin-bottom
        margin-bottom 2px
      > i
        display: inline-block
        font-size 100%
</style>
