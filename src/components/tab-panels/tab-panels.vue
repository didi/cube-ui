<template>
  <div class="cube-tab-panels">
    <slot>
      <cube-tab-panel
        ref="panel"
        v-for="(item, index) in data"
        :label="item.label"
        :key="index">
        {{item.label}}
      </cube-tab-panel>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  import TabPanel from './tab-panel.vue'

  const COMPONENT_NAME = 'cube-tab-panels'

  const TRANSITION_NAME = 'cube-tab-panel-transition'
  const TRANSITION_REVERSE_NAME = 'cube-tab-panel-reverse-transition'

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
    data () {
      return {
        panels: []
      }
    },
    methods: {
      addPanel (childVm) {
        this.panels.push(childVm)
      },
      removePanel (childVm) {
        const index = this.panels.indexOf(childVm)
        if (index > -1) this.panels.splice(index, 1)
      },
      _collectLabels () {
        let labels = []
        if (this.panels.length > 0) {
          labels = this.panels.map(panel => panel.label)
        }
        return labels
      },
      _compare (former, latter) {
        return former > latter
      },
      _setTransitionName (transitionName) {
        this.panels.forEach((panel) => {
          panel.transitionName = transitionName
        })
      }
    },
    watch: {
      value (newV, oldV) {
        const labels = this._collectLabels()
        /* istanbul ignore if */
        if (!labels.length) return
        const newIndex = labels.indexOf(newV)
        const oldIndex = labels.indexOf(oldV)
        this.$nextTick(() => {
          const transitionName = this._compare(newIndex, oldIndex) ? TRANSITION_REVERSE_NAME : TRANSITION_NAME
          this._setTransitionName(transitionName)
        })
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
    font-size: 100%
    color: $tab-light-grey
</style>
