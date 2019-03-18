<template>
  <div
    class="cube-tab"
    :class="{'cube-tab_active': isActive}"
    @click="handleClick">
    <slot name="icon">
      <i :class="icon"></i>
    </slot>
    <slot>
      <div v-html="label"></div>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-tab'

  export default {
    name: COMPONENT_NAME,
    props: {
      label: {
        type: [String, Number],
        required: true
      },
      value: {
        type: [String, Number],
        default() {
          return this.label
        }
      },
      icon: {
        type: String,
        default: ''
      }
    },
    mounted () {
      this.$parent.addTab(this)
    },
    destroyed () {
      this.$parent.removeTab(this)
    },
    computed: {
      isActive () {
        return this.$parent.value === this.value
      }
    },
    methods: {
      handleClick (item) {
        this.$parent.trigger(this.value)
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

  .cube-tab_active
    color: $tab-active-color
</style>
