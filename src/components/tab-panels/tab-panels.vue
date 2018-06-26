<template>
  <div class="cube-tab-panels" ref="panels">
    <div class="cube-tab-panels-group" ref="panelsGroup">
      <slot>
        <cube-tab-panel
          v-for="(item, index) in data"
          :label="item.label"
          :key="item.label">
        </cube-tab-panel>
      </slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import TabPanel from './tab-panel.vue'
  import { findIndex } from '../../common/helpers/util'
  import { prefixStyle } from '../../common/helpers/dom'

  const TRANSFORM = prefixStyle('transform')

  const COMPONENT_NAME = 'cube-tab-panels'

  export default {
    name: COMPONENT_NAME,
    props: {
      value: {
        type: [String, Number]
      },
      data: {
        type: Array,
        default () {
          return []
        }
      }
    },
    created () {
      this.panels = []
    },
    mounted () {
      this._initPanelsWidth()
      this._move(this.value)
    },
    methods: {
      _initPanelsWidth () {
        const panelsGroup = this.$refs.panelsGroup
        const panelWidth = this.$refs.panels.clientWidth
        let totalWidth = panelWidth * this.panels.length
        panelsGroup.style.width = `${totalWidth}px`
        this.panels.forEach((panel) => {
          panel.$el.style.width = `${panelWidth}px`
        })
      },
      _move(label) {
        const curIndex = findIndex(this.panels, panel => panel.label === label)
        const panelsGroup = this.$refs.panelsGroup
        const panel = this.$refs.panels
        const distance = -(curIndex * panel.clientWidth)
        panelsGroup.style[TRANSFORM] = `translateX(${distance}px)`
      },
      addPanel (panel) {
        this.panels.push(panel)
      },
      removePanel (panel) {
        const index = this.panels.indexOf(panel)
        if (index > -1) this.panels.splice(index, 1)
      }
    },
    watch: {
      value (newV) {
        this._move(newV)
      }
    },
    components: { TabPanel }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"

  .cube-tab-panels
    position: relative
    overflow: hidden

  .cube-tab-panels-group
    transition: all .4s cubic-bezier(.86,0,.07,1)
    &::after
      content: ''
      display: block
      clear: both
</style>
