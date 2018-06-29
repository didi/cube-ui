<template>
  <div class="cube-tab-panel">
    <slot>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-tab-panel'

  export default {
    name: COMPONENT_NAME,
    props: {
      label: {
        type: [String, Number],
        required: true
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
<style lang="stylus" rel="stylesheet/stylus">
  .cube-tab-panel
    width: 100%
    flex: 1 0 auto
</style>
