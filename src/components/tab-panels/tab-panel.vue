<template>
  <div class="cube-tab-panel">
    <slot>
    </slot>
  </div>
</template>
<script>
  const COMPONENT_NAME = 'cube-tab-panel'

  export default {
    name: COMPONENT_NAME,
    props: {
      label: {
        type: [String, Number],
        required: true
      },
      value: {
        type: [String, Number],
        default(props) {
          return props.label
        }
      }
    },
    mounted () {
      this.$parent.addPanel(this)
    },
    destroyed () {
      this.$parent.removePanel(this)
    }
  }
</script>
<style lang="stylus" >
  .cube-tab-panel
    width: 100%
    flex: 1 0 auto
</style>
