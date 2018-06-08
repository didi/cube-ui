<template>
  <div class="cube-tab-container">
    <slot>
      <cube-tab-container-item
        v-for="(item, index) in data"
        :label="item.label"
        :key="index">
        {{item.label}}
      </cube-tab-container-item>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-tab-container'

  const TRANSITION_NAME = 'cube-tab-transition'
  const TRANSITION_REVERSE_NAME = 'cube-tab-reverse-transition'

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
    methods: {
      _collectLabels () {
        const slots = this.$slots.default
        let labels = []
        let label
        if (slots) {
          slots.forEach((vnode) => {
            label = vnode.componentOptions.propsData && vnode.componentOptions.propsData.label
            if (label) labels.push(label)
          })
        }
        return labels
      },
      _compare (former, latter) {
        return former > latter
      },
      _setTransitionName (slots, transitionName) {
        slots.forEach((vnode) => {
          vnode.componentInstance.transitionName = transitionName
        })
      }
    },
    watch: {
      value (newV, oldV) {
        const labels = this._collectLabels()
        const slots = this.$slots.default
        if (!labels.length) return
        const newIndex = labels.findIndex(label => label === newV)
        const oldIndex = labels.findIndex(label => label === oldV)
        this.$nextTick(() => {
          const transitionName = this._compare(newIndex, oldIndex) ? TRANSITION_REVERSE_NAME : TRANSITION_NAME
          this._setTransitionName(slots, transitionName)
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  .cube-tab-container
    position: relative
    overflow: hidden
    font-size: 100%
    color: $color-light-grey
    background-color: $color-white
</style>
