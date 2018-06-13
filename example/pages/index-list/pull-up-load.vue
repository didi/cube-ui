<template>
  <cube-page type="index-list" title="IndexList">
    <div slot="content">
      <div class="view-wrapper">
        <div class="index-list-wrapper">
          <cube-index-list
            ref="indexList"
            :data="data"
            :title="title"
            :options="options"
            @select="selectItem"
            @title-click="clickTitle"
            @pulling-up="onPullingUp">
          </cube-index-list>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  import cityData from '../../data/index-list.json'

  export default {
    components: {
      CubePage
    },
    data() {
      return {
        title: 'Current City: BEIJING',
        data: cityData.slice(0, 4),
        options: {
          pullUpLoad: true
        }
      }
    },
    methods: {
      selectItem(item) {
        console.log(item.name)
      },
      clickTitle(title) {
        console.log(title)
      },
      onPullingUp() {
        // Mock async load.
        setTimeout(() => {
          const length = this.data.length
          if (length < cityData.length) {
            // Update data.
            this.data.push(cityData[length])
          }
          // Call forceUpdate after finishing data load.
          this.$refs.indexList.forceUpdate()
        }, 1000)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .view-wrapper
    position: fixed
    top: 54px
    left: 0
    bottom: 0
    width: 100%
    .index-list-wrapper
      height: 98%
      width: 94%
      margin: 0 auto
      overflow: hidden
</style>
