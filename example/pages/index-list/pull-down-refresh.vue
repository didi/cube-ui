<template>
  <cube-page type="index-list" title="IndexList">
    <div slot="content">
      <div class="view-wrapper">
        <div class="index-list-wrapper">
          <cube-index-list
            ref="indexList"
            :data="data"
            :title="title"
            :pullDownRefresh="pullDownRefresh"
            @select="selectItem"
            @title-click="clickTitle"
            @pulling-down="onPullingDown">
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
        data: cityData,
        pullDownRefresh: {
          stop: 55
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
      onPullingDown() {
        // Mock async load.
        setTimeout(() => {
          if (Math.random() < 0.5) {
            // If have new data, just update the data property.
            this.data[1].items.push(...cityData[1].items)
          } else {
            // If no new data, you need use the method forceUpdate to tell us the load is done.
            this.$refs.indexList.forceUpdate()
          }
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
