<template>
  <ul class="cube-swipe">
    <slot>
      <cube-swipe-item
          ref="swipeItem"
          v-for="(item,index) in data"
          :btns="item.btns"
          :item="item.item"
          :key="index"
          @active="onItemActive(index)"
      >
      </cube-swipe-item>
    </slot>
  </ul>
</template>

<script type="text/ecmascript-6">
  import CubeSwipeItem from './swipe-item.vue'

  const COMPONENT_NAME = 'cube-swipe'

  export default {
    name: COMPONENT_NAME,
    props: {
      data: {
        type: Array,
        default() {
          return {
            item: {},
            btns: []
          }
        }
      }
    },
    created() {
      this.activeIndex = -1
    },
    methods: {
      onItemActive(index) {
        if (index === this.activeIndex) {
          return
        }
        if (this.activeIndex !== -1) {
          const activeItem = this.$refs.swipeItem[this.activeIndex]
          activeItem.shrink()
        }
        this.activeIndex = index
      }
    },
    components: {
      CubeSwipeItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .cube-swipe
    overflow: hidden
</style>
