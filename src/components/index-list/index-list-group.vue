<template>
  <div ref="listGroup" class="cube-index-list-group">
    <h2 class="cube-index-list-anchor">{{group.name}}</h2>
    <ul>
      <slot>
        <li
            class="cube-index-list-item border-bottom-1px"
            v-for="item in group.items"
            @touchstart="addActiveCls"
            @touchend="removeActiveCls"
            @click="selectItem(item)">
          {{item.name}}
        </li>
      </slot>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    addClass,
    removeClass
  } from '../../common/helpers/dom'

  const COMPONENT_NAME = 'cube-index-list-group'
  const ACTIVE_CLS = 'cube-index-list-item_active'

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
      addActiveCls(e) {
        addClass(e.currentTarget, ACTIVE_CLS)
      },
      removeActiveCls(e) {
        removeClass(e.currentTarget, ACTIVE_CLS)
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
