<template>
  <cube-page type="scroll" title="Scroll">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="goTo('default')"><span class="scroll-example">1. Default</span></cube-button>
        <cube-button @click="goTo('horizontal')"><span class="scroll-example">2. Horizontal</span></cube-button>
        <cube-button @click="goTo('config')"><span class="scroll-example">3. Customized</span></cube-button>
        <cube-button @click="goTo('jd')"><span class="scroll-example">4. JD</span></cube-button>
        <cube-button @click="goTo('toutiao')"><span class="scroll-example">5. Toutiao</span></cube-button>
        <cube-button @click="goTo('v-scrolls')"><span class="scroll-example">6. Vertical scrolls</span></cube-button>
        <cube-button @click="goTo('h-scrolls')"><span class="scroll-example">7. Horizontal scrolls</span></cube-button>
        <!-- <cube-button @click="goTo('textarea')"><span class="scroll-example">8. Textarea</span></cube-button> -->
      </cube-button-group>
      <cube-view></cube-view>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import CubeView from 'example/components/cube-view.vue'

  export default {
    components: {
      CubePage,
      CubeButtonGroup,
      CubeView
    },
    methods: {
      goTo(subPath) {
        this.$router.push('/scroll/' + subPath)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .scroll-example
    display: inline-block
    width: 100px
    margin: auto
    text-align: left
</style>
