<template>
  <cube-page type="slide-view" title="Slide" class="option-demo">
    <div slot="content">
      <div class="options">
        <div class="title">Options</div>
        <div class="option-list">
          <div class="group">
            <switch-option class="item" name="Loop" :value="loop"
                           @update:value="updateLoop"></switch-option>
          </div>
        </div>
      </div>
      <div ref="slideWrapper" class="slide-container">
        <cube-slide v-if="ifSlide" ref="slide" @change="changePage" :loop="loop">
          <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
            <a :href="item.url">
              <img :src="item.image">
            </a>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import CubePage from '../components/cube-page.vue'
  import SwitchOption from '../components/switch-option/switch-option.vue'
  import InputOption from '../components/input-option/input-option.vue'
  import SelectOption from '../components/select-option/select-option.vue'

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
        loop: true,
        ifSlide: true
      }
    },
    watch: {
//      scrollbarObj: {
//        handler() {
//          this.rebuildScroll()
//        },
//        deep: true
//      },
      loop() {
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
      }
    },
    components: {
      CubePage,
      SwitchOption,
      InputOption,
      SelectOption
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slide-container
    transform: translateZ(0px)
    border-radius: 2px
    overflow: hidden
    box-shadow: 0 2px 9px #ddd
</style>
