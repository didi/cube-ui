<template>
  <div class="cube-tab"
       :class="{'cube-tab_active': isActive}"
       @click="handleClick"
  >
    <slot name="icon">
      <i :class="icon"></i>
    </slot>
    <slot>{{label}}</slot>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-tab'

  const EVENT_CLICK = 'click'
  const EVENT_INPUT = 'input'
  const EVENT_CHANGE = 'change'

  export default {
    name: COMPONENT_NAME,
    props: {
      label: {
        type: [String, Number],
        required: true
      },
      icon: {
        type: String,
        value: ''
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
        return this.$parent.value === this.label
      }
    },
    methods: {
      handleClick (item) {
        const eventsStack = [EVENT_INPUT, EVENT_CLICK, EVENT_CHANGE]
        eventsStack.forEach((event) => {
          this.$parent.trigger(event, this.label)
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"

  .cube-tab
    flex: 1
    padding: 7px 0
    color: $tab-color
    text-align: center
    &.cube-tab_active
      color: $tab-label-active
    > i
      display: inline-block
</style>
