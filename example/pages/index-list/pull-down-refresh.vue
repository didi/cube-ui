<template>
  <cube-page type="index-list" title="IndexList">
    <template #content>
      <div class="view-wrapper">
        <div class="index-list-wrapper">
          <cube-index-list
            ref="indexList"
            :data="data"
            :title="title"
            :options="options"
            @select="selectItem"
            @title-click="clickTitle"
            @pulling-down="onPullingDown">
          </cube-index-list>
        </div>
      </div>
    </template>
  </cube-page>
</template>

<script>
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
        options: {
          pullDownRefresh: {
            stop: 55
          }
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
          // Update data.
          this.data[1].items.push(...cityData[1].items)
          // Call forceUpdate after finishing data load.
          this.$refs.indexList.forceUpdate(true)
        }, 1000)
      }
    }
  }
</script>

<style lang="stylus">
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
