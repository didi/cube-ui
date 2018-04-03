<template>
  <div class="home-example">
    <div class="example-main">
      <back />
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
  import Back from '../back/back.vue'
  export default {
    data() {
      return {
        baseUrl
      }
    },
    mounted() {
      window.scrollTo(0, 0)
    },
    components: {
      Display,
      Back
    }
  }
</script>
<style lang="stylus">
  .home-example
    position: relative
    text-align: center
    .example-main
      display: flex
      align-items: center
      justify-content: center
      // width: 348px
      // margin: auto
      padding: 50px 0
      // overflow: hidden
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
      img
        width: 280px
        height: 280px
      .online-link, img
        display: block
        margin-bottom: 20px
    .page-display
      .display-wrapper
        margin: auto
        transform: none
        top: auto
</style>
