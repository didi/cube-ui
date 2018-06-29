<template>
  <cube-page type="scroll-nav-bar" title="ScrollNavBar">
    <div slot="content">
      <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler" />
      <div class="side-container">
        <cube-scroll-nav-bar
          direction="vertical"
          :current="current"
          :labels="labels"
          :txts="txts"
          @change="changeHandler">
          <i slot-scope="props">{{props.txt}}</i>
        </cube-scroll-nav-bar>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        current: '快车',
        labels: [
          '快车',
          '小巴',
          '专车',
          '顺风车',
          '代驾',
          '公交',
          '自驾租车',
          '豪华车',
          '二手车',
          '出租车'
        ],
        txts: [
          '1快车',
          '2小巴',
          '3专车',
          '4顺风车',
          '5代驾',
          '6公交',
          '7自驾租车',
          '8豪华车',
          '9二手车',
          '10出租车'
        ]
      }
    },
    methods: {
      changeHandler(cur) {
        this.current = cur
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.side-container
  height: 300px
  margin-top: 20px
</style>
