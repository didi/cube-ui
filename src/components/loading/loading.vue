<template>
  <div class="cube-loading">
    <img ref='loading' src="./loading.gif" :style="style">
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-loading'

  export default {
    name: COMPONENT_NAME,
    props: {
      size: {
        type: Number,
        default: 24
      }
    },
    computed: {
      style() {
        const value = `${this.size}px`
        return {
          width: value,
          height: value
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cube-loading
    img
      display: block
</style>
