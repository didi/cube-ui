<template>
  <cube-page type="slide-view" title="Slide" class="option-demo">
    <div slot="content">
      <div ref="slideWrapper" class="slide-container">
        <cube-slide
          v-if="ifSlide"
          ref="slide"
          :loop="loop"
          :auto-play="autoPlay"
          :interval="interval"
          :threshold="threshold"
          :speed="speed"
          @change="changePage">
          <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
            <a :href="item.url">
              <img :src="item.image">
            </a>
          </cube-slide-item>
        </cube-slide>
      </div>
      <div class="options">
        <div class="option-list">
          <div class="group">
            <switch-option class="item" name="Loop" :value="loop"
                           @update:value="updateLoop"></switch-option>
          </div>
          <div class="group">
            <switch-option class="item" name="Auto Play" :value="autoPlay"
                           @update:value="updateAutoPlay"></switch-option>
            <input-option v-if="autoPlay" class="item sub first last" name="interval" :value="interval"
                           @update:value="updateInterval"></input-option>
          </div>
          <div class="group">
            <input-option class="item" name="Threshold" :value="threshold"
                           @update:value="updateThreshold"></input-option>
          </div>
          <div class="group">
            <input-option class="item" name="Speed" :value="speed"
                           @update:value="updateSpeed"></input-option>
          </div>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import CubePage from '../components/cube-page.vue'
  import SwitchOption from '../components/switch-option'
  import InputOption from '../components/input-option'

  export default{
    data() {
      return {
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
          }, {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          }, {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
          }
        ],
        ifSlide: true,
        loop: true,
        autoPlay: true,
        interval: 4000,
        threshold: 0.3,
        speed: 400
      }
    },
    watch: {
      loop() {
        this.rebuildSlide()
      },
      autoPlay() {
        this.rebuildSlide()
      },
      interval() {
        this.rebuildSlide()
      },
      threshold() {
        this.rebuildSlide()
      },
      speed() {
        this.rebuildSlide()
      }
    },
    methods: {
      changePage(current) {
        console.log('当前轮播图序号为:' + current)
      },
      clickHandler(item, index) {
        console.log(item, index)
      },
      rebuildSlide() {
        this.ifSlide = false
        Vue.nextTick(() => {
          this.ifSlide = true
        })
      },
      updateLoop(val) {
        this.loop = val
      },
      updateAutoPlay(val) {
        this.autoPlay = val
      },
      updateInterval(val) {
        this.interval = val
      },
      updateThreshold(val) {
        this.threshold = val
      },
      updateSpeed(val) {
        this.speed = val
      }
    },
    components: {
      CubePage,
      SwitchOption,
      InputOption
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slide-container
    height: 64px
    margin-bottom: 15px
    transform: translateZ(0px)
    border-radius: 2px
    overflow: hidden
    box-shadow: 0 2px 9px #ddd
</style>
