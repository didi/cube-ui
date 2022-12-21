<template>
  <cube-popup type="extend-popup" ref="popup">
    <div class="cube-extend-popup-content" @click="hide">
      <slot>{{content}}</slot>
    </div>
 </cube-popup>
</template>
<script>
  const COMPONENT_NAME = 'cube-extend-popup'
  export default {
    name: COMPONENT_NAME,
    props: {
      content: {
        type: String
      }
    },
    methods: {
      show() {
        this.$refs.popup.show()
      },
      hide() {
        this.$refs.popup.hide()
        this.$emit('hide')
      }
    }
  }
</script>
<style lang="stylus" >
  .cube-extend-popup
    .cube-extend-popup-content
      padding: 20px
      color: #fff
      background-color: rgba(0, 0, 0, .8)
</style>
