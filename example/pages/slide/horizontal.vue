<template>
  <cube-page type="slide-view" title="Slide" class="option-demo">
    <div slot="content">
      <div ref="slideWrapper" class="slide-container">
        <cube-slide
            ref="slide"
            :data="items"
            :initial-index="initialIndex"
            :loop="loop"
            :auto-play="autoPlay"
            :interval="interval"
            :threshold="threshold"
            :speed="speed"
            :options="options"
            @change="changePage"
            @click="clickPage">
          <template v-if="dotsSlot" slot="dots" slot-scope="props">
            <span class="my-dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots">{{index + 1}}</span>
          </template>
        </cube-slide>
      </div>
      <div class="options">
        <div class="option-list">
          <div class="group">
            <input-option class="item" name="InitialIndex" :value="initialIndex"
                          @update:value="updateInitialIndex"></input-option>
          </div>
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
          <div class="group">
            <switch-option class="item" name="Allow Vertical" :value="allowVertical"
                           @update:value="updateAllowVertical"></switch-option>
          </div>
          <div class="group">
            <switch-option class="item" name="Add Slide Item3" :value="addItem3"
                           @update:value="updateItem3"></switch-option>
          </div>
          <div class="group">
            <switch-option class="item" name="Dots Slot" :value="dotsSlot"
                           @update:value="updateDotsSlot"></switch-option>
          </div>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  import SwitchOption from '../../components/switch-option'
  import InputOption from '../../components/input-option'

  const item3 = {
    url: 'http://www.didichuxing.com/',
    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
  }
  export default{
    data() {
      return {
        items: [
          {
            // url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
          }, {
            // url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          }
        ],
        loop: true,
        autoPlay: true,
        interval: 4000,
        threshold: 0.3,
        speed: 400,
        allowVertical: false,
        initialIndex: 1,
        dotsSlot: false,
        addItem3: false
      }
    },
    computed: {
      options() {
        return {
          eventPassthrough: this.allowVertical ? 'vertical' : ''
        }
      }
    },
    watch: {
      addItem3(newV) {
        if (newV) {
          this.items.push(item3)
        } else {
          this.items.pop()
        }
      }
    },
    methods: {
      changePage(current) {
        console.log('当前轮播图序号为:' + current)
      },
      clickPage(item, index) {
        console.log(item, index)
      },
      updateItem3(val) {
        this.addItem3 = val
      },
      updateLoop(val) {
        this.loop = val
      },
      updateDotsSlot(val) {
        this.dotsSlot = val
      },
      updateAutoPlay(val) {
        this.autoPlay = val
      },
      updateInterval(val) {
        val = +val
        if (val) {
          this.interval = val
        }
      },
      updateThreshold(val) {
        val = +val
        if (val) {
          this.threshold = val
        }
      },
      updateSpeed(val) {
        val = +val
        if (val) {
          this.speed = val
        }
      },
      updateAllowVertical(val) {
        this.allowVertical = val
      },
      updateInitialIndex(val) {
        if (val) {
          this.initialIndex = +val
        }
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
    height: 75px
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
