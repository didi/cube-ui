<template>
  <div class="home-example">
    <a :href="baseUrl" class="online-link">Online Example</a>
    <img src="https://raw.githubusercontent.com/didichuxing/cube-ui/master/assets/example-qr.png?token=ACBfUmDS85HOeaGQI49yS9qYyJOd0joSks5aCQpvwA%3D%3D">
    <display></display>
  </div>
</template>

<script>
  import { baseUrl } from '../../common/js/utils'
  import Display from '../display/display.vue'
  export default {
    data() {
      return {
        baseUrl
      }
    },
    components: {
      Display
    }
  }
</script>
<style lang="stylus">
  .home-example
    position: relative
    width: 348px
    margin: 50px auto
    overflow: hidden
    text-align: center
    .online-link, img
      display: inline-block
      margin-bottom: 20px
    .page-display
      .display-wrapper
        position: static
        transform: none
</style>
