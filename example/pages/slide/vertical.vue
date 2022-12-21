<template>
  <cube-page type="slide-view" title="Slide" class="option-demo">
    <div slot="content">
      <div class="slide-container-v">
        <cube-slide
          :data="items"
          :loop="loop"
          :showDots="false"
          direction="vertical"
          @change="change">
        </cube-slide>
      </div>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from '../../components/cube-page.vue'

  export default {
    data() {
      return {
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: 'https://dpubstatic.udache.com/static/dpubimg/C9lKs8y0E6/IMG_4014.jpg'
          }, {
            url: 'http://www.didichuxing.com/',
            image: 'https://dpubstatic.udache.com/static/dpubimg/hD6agmm2ov/IMG_4012.jpg'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: 'https://dpubstatic.udache.com/static/dpubimg/twV-VvZOA9/IMG_4011.jpg'
          }, {
            url: 'http://www.didichuxing.com/',
            image: 'https://dpubstatic.udache.com/static/dpubimg/eR_MahwRUT/IMG_4010.jpg'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: 'https://dpubstatic.udache.com/static/dpubimg/R3tKHhdZuK/IMG_4009.jpg'
          }
        ],
        loop: true
      }
    },
    methods: {
      change(current) {
        console.log('当前轮播图序号为:' + current)
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" >
.slide-view
  .slide-container-v
    height: 265px
    margin-bottom: 15px
    transform: translateZ(0px)
    border-radius: 2px
    overflow: hidden
    box-shadow: 0 2px 9px #ddd
    .cube-slide-dots
      .my-dot
        height: auto
        font-size: 12px
        background: none
        &.active
          color: #fc9153
  .cube-slide-item > a > img
    width: 100%
    height: auto
</style>
