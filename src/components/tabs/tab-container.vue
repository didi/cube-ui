<template>
  <div class="cube-tab-container">
    <slot>
      <cube-tab-container-item
        ref="containerItem"
        v-for="(item, index) in data"
        :label="item.label"
        :key="index">
        {{item.label}}
      </cube-tab-container-item>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  import { findIndex } from '../../common/helpers/util'

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
        const containerItems = this.$refs.containerItem
        let labels = []
        let label
        if (slots) {
          slots.forEach((vnode) => {
            label = vnode.componentOptions.propsData && vnode.componentOptions.propsData.label
            if (label) labels.push(label)
          })
        } else if (containerItems) {
          containerItems.forEach((item) => {
            labels.push(item.label)
          })
        }
        return labels
      },
      _compare (former, latter) {
        return former > latter
      },
      _setTransitionName (transitionName) {
        const slots = this.$slots.default
        const containerItems = this.$refs.containerItem
        if (slots) {
          slots.forEach((vnode) => {
            vnode.componentInstance.transitionName = transitionName
          })
        } else if (containerItems) {
          containerItems.forEach((instance) => {
            instance.transitionName = transitionName
          })
        }
      }
    },
    watch: {
      value (newV, oldV) {
        const labels = this._collectLabels()
        /* istanbul ignore if */
        if (!labels.length) return
        const newIndex = findIndex(labels, (label) => label === newV)
        const oldIndex = findIndex(labels, (label) => label === oldV)
        this.$nextTick(() => {
          const transitionName = this._compare(newIndex, oldIndex) ? TRANSITION_REVERSE_NAME : TRANSITION_NAME
          this._setTransitionName(transitionName)
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
