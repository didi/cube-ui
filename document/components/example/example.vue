<template>
  <div class="home-example">
    <div class="example-main">
      <display></display>
      <div class="example-desc">
        <a :href="baseUrl" class="online-link">Online Example</a>
        <img src="./example-QR.png">
      </div>
    </div>
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
    text-align: center
    &::before
      content: ""
      position: relative
      z-index: 5
      display: block
      width: 100%
      height: 1px
      margin-top: -1px
      box-shadow: 0 1px 2px rgba(0, 0, 0, .15)
    .example-main
      display: flex
      align-items: center
      justify-content: center
      // width: 348px
      // margin: auto
      padding: 50px 0
      overflow: hidden
      @media screen and (max-width: 960px)
        width: 330px
        flex-wrap: wrap
        margin: auto
        .example-desc
          order: -1
          width: 280px
          margin: 0 auto 30px
    .example-desc
      margin-left: 100px
    .online-link, img
      display: block
      margin-bottom: 20px
    img
      width: 280px
      height: 280px
    .page-display
      .display-wrapper
        margin: auto
        transform: none
        top: auto
</style>
