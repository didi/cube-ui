<template>
  <div class="cube-index-list-group">
    <h2 class="cube-index-list-anchor">{{group.name}}</h2>
    <ul>
      <slot>
        <cube-index-list-item v-for="(item, index) in group.items" :key="index" :item="item" @select="selectItem"></cube-index-list-item>
      </slot>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-index-list-group'
  const EVENT_SELECT = 'select'

  export default {
    name: COMPONENT_NAME,
    props: {
      group: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      selectItem(item) {
        this.$emit(EVENT_SELECT, item)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cube-index-list-anchor
    padding: 16px 16px 10px 16px
    line-height: 1
    font-size: $fontsize-medium
    color: $index-list-anchor-color
    background: $index-list-anchor-bgc
</style>
