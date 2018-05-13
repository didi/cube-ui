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

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'

  export default{
    data() {
      return {
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3978382133,2176310874&fm=27&gp=0.jpg'
          }, {
            url: 'http://www.didichuxing.com/',
            image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3780304411,1076045325&fm=15&gp=0.jpg'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=56274798,4163877688&fm=27&gp=0.jpg'
          }, {
            url: 'http://www.didichuxing.com/',
            image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3124201171,3290669243&fm=15&gp=0.jpg'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1309802367,1770965841&fm=27&gp=0.jpg'
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

<style lang="stylus" rel="stylesheet/stylus">
  .slide-container-v
    height: 380px
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
</style>
