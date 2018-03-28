<template>
  <div class="cube-drawer" @click="drawerClick">
    <slot>
      <cube-drawer-panel
        v-for="(panel, index) in data"
        :key="index"
        :index="index"
        :data="panel"
        @change="changeHandler(index, activeItems, item)" />
    </slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import CubeDrawerPanel from './drawer-panel.vue'
  import apiMixin from '../../common/mixins/api'

  const COMPONENT_NAME = 'cube-drawer'
  const EVENT_CHANGE = 'change'
  const EVENT_CANCEL = 'cancel'

  export default {
    name: COMPONENT_NAME,
    mixins: [apiMixin],
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      selectedIndex: {
        type: Array,
        default() {
          return []
        }
      },
      multiple: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        selectedVal: []
      }
    },
    watch: {
    },
    methods: {
      changeHandler(index, activeItems) {
        this.selectedVal[index] = activeItems
        this.$emit(EVENT_CHANGE, activeItems)
      },
      drawerClick() {
        this.hide()
        this.$emit(EVENT_CANCEL)
      }
    },
    components: {
      CubeDrawerPanel
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-drawer
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
</style>
