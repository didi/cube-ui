<template>
  <cube-page type="tip-view" title="Tip">
    <div slot="content">
      <p class="tip-eg">
        <cube-button
          :inline="true"
          :outline="true"
          :primary="true"
          @click="$refs.tip.show()">Show tip</cube-button>
        <cube-tip ref="tip" direction="bottom" style="left:115px;top:-50px;">Tip</cube-tip>
      </p>
      <p class="tip-eg">
        <cube-button
            :inline="true"
            :outline="true"
            :primary="true"
            @click="showTip('bottom')">cube-ui</cube-button>
        <cube-tip
            ref="tip2"
            :direction="direction"
            :style="tipStyle"
            @close="close"
            @click="clickHandler">
          <div>Awesome!</div>
        </cube-tip>
      </p>
      <cube-button @click="showTip('bottom')">top</cube-button>
      <cube-button @click="showTip('top')">bottom</cube-button>
      <cube-button @click="showTip('right')">left</cube-button>
      <cube-button @click="showTip('left')">right</cube-button>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        direction: '',
        tipStyle: ''
      }
    },
    methods: {
      showTip(direction) {
        this.direction = direction
        this.$refs.tip2.show()

        switch (direction) {
          case 'bottom':
            this.tipStyle = 'left: 96px; top: -50px;'
            break
          case 'top':
            this.tipStyle = 'left: 96px; top: 40px;'
            break
          case 'right':
            this.tipStyle = 'left: -2px; top: -5px;'
            break
          case 'left':
            this.tipStyle = 'left: 190px; top: -5px;'
            break
        }
      },
      close() {
        console.log('click close button')
      },
      clickHandler() {
        console.log('click tip area')
      }
    },
    components: {
      CubeButtonGroup,
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tip-view
    .tip-eg
      position: relative
      width: 300px
      margin: 70px auto
      text-align: center
    .cube-btn
      margin-bottom: 10px
</style>
