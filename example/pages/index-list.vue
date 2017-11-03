<template>
  <cube-page type="index-list"
               title="IndexList">
    <div slot="content">
      <div class="split"></div>
      <div class="view-wrapper">
        <div class="index-list-wrapper">
          <cube-index-list :data="cityData" :title="title" @select="selectItem" @title-click="clickTitle"></cube-index-list>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import cityData from '../data/index-list.json'

  export default {
    components: {
      CubePage
    },
    data() {
      return {
        title: 'Current City: BEIJING',
        cityData: cityData
      }
    },
    methods: {
      selectItem(item) {
        console.log(item.name)
      },
      clickTitle(title) {
        console.log(title)
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .split
    position: relative
    z-index: 10
    width: 100%
    height: 10px
    margin-top: -10px
    background: #efeff4

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

</style>
