<template>
  <div class="cube-tab"
       :class="{ active: isActive, inline: $parent.inline }"
       @click="handleClick"
  >
    <div v-if="$slots.icon"
         class="cube-tab-icon"
         :class="{'add-margin-bottom' : $slots.default && !$parent.inline}">
      <slot name="icon"></slot>
    </div>
    <div class="cube-tab-label">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-tab'

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
    mounted () {
      this.$parent.addTab(this)
    },
    destroyed () {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
      this.$parent.removeTab(this)
    },
    computed: {
      isActive () {
        return this.$parent.value !== undefined && this.$parent.value === this.label
      }
    },
    methods: {
      handleClick () {
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
  .cube-tab
    flex: 1
    padding: 7px 0
    font-size: 100%
    color: $tab-grey
    text-align: center
    &.inline
      display: flex
      align-content: center
      justify-content: center
    &.active
      color: $tab-active
    .cube-tab-icon
      &.add-margin-bottom
        margin-bottom: 2px
      > i
        display: inline-block
        font-size 100%
</style>
