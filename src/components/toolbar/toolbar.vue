<template>
  <div class="cube-toolbar">
    <div class="cube-toolbar-position">
      <div class="cube-toolbar-mod">
        <ul class="cube-toolbar-action-group more" v-if="moreActions" v-show="showMore" @click="moreBarClick">
          <cube-toolbar-item v-for="(action, index) in moreActions" :key="index" :action="action" :hasDown="index === (moreActions.length - 1)"></cube-toolbar-item>
        </ul>

        <ul class="cube-toolbar-action-group">
          <cube-toolbar-item v-for="(action, index) in basicActions" :key="index" :action="action"></cube-toolbar-item>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import CubeToolbarItem from './toolbar-item.vue'

  const COMPONENT_NAME = 'cube-toolbar'
  const EVENT_MORE_CLICK = 'more-click'

  export default {
    name: COMPONENT_NAME,
    components: {
      CubeToolbarItem
    },
    props: {
      actions: {
        type: Array,
        default() {
          return []
        }
      },
      moreActions: {
        type: Array
      }
    },
    data() {
      return {
        showMore: false
      }
    },
    computed: {
      basicActions() {
        const basicActions = this.actions.slice()
        this.moreActions && basicActions.push({
          icon: 'cubeic-more',
          clickHandler: () => {
            this.showMore = !this.showMore
            this.$emit(EVENT_MORE_CLICK, this.showMore)
          }
        })
        return basicActions
      }
    },
    methods: {
      moreBarClick() {
        this.showMore = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-toolbar
    position: fixed
    left: $toolbar-spacing
    right: $toolbar-spacing
    bottom: $toolbar-spacing
    safe-area-mixin(bottom, bottom)
    z-index: 2

  .cube-toolbar-action-group
    display: flex
    border-radius: 2px
    box-shadow: 0 1px 6px rgba(0, 0, 0, .24)
    background-color: $toolbar-bgc
    overflow: hidden
    box-sizing: border-box
    height: $toolbar-height
    &.more
      margin-bottom: $toolbar-spacing
</style>
