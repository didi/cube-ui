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
<script>
  const COMPONENT_NAME = 'cube-tab'

  export default {
    name: COMPONENT_NAME,
    props: {
      label: {
        type: [String, Number],
        required: true
      },
      modelValue: {
        type: [String, Number],
        default(props) {
          return props.label
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
        return this.$parent.modelValue === this.modelValue
      }
    },
    methods: {
      handleClick (item) {
        this.$parent.trigger(this.modelValue)
      }
    }
  }
</script>
<style lang="stylus">
  @require "../../common/stylus/variable.styl"

  .cube-tab
    flex: 1
    padding: 7px 0
    color: $tab-color
    text-align: center

  .cube-tab_active
    color: $tab-active-color
</style>
