<template>
  <div class="cube-drawer" @click="drawerClick" v-show="isVisible">
    <div class="cube-drawer-main" :style="slideStyle" @click.stop @transitionend="transitionend">
      <div class="cube-drawer-title" v-show="$slots.title || title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="cube-drawer-panels" @transitionend.stop>
        <slot>
          <cube-drawer-panel
            v-for="(panel, index) in data"
            :key="index"
            :index="index"
            :data="panel" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { prefixStyle } from '../../common/helpers/dom'
  import CubeDrawerPanel from './drawer-panel.vue'
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'

  const COMPONENT_NAME = 'cube-drawer'
  const EVENT_CHANGE = 'change'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'

  const transform = prefixStyle('transform')

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin],
    props: {
      title: {
        type: String,
        default: ''
      },
      data: {
        type: Array,
        default() {
          /* istanbul ignore next */
          return []
        }
      },
      selectedIndex: {
        type: Array,
        default() {
          /* istanbul ignore next */
          return []
        }
      }
    },
    data() {
      return {
        index: -1,
        selectedVal: [],
        selectedText: [],
        selected: [...this.selectedIndex],
        slideStyle: {
          [transform]: 'translate3d(0, 0, 0)'
        }
      }
    },
    watch: {
      selectedIndex(newVal) {
        this.selected = [...newVal]
      },
      index(newIndex, oldIndex) {
        this.showPanel()
        if (newIndex < oldIndex) {
          this.hidePanel()
        }
      }
    },
    created() {
      this.panels = []
    },
    methods: {
      show() {
        if (this.isVisible) {
          return
        }
        this.isVisible = true

        let len = this.data.length
        for (let i = 0; i < len; i++) {
          this.index = i
          if (this.selected[i] < 0 || this.selected[i] === undefined) {
            if (i > 0) {
              const lastIndex = i - 1
              const index = this.selected[lastIndex]
              this.changeHandler(lastIndex, this.data[lastIndex][index], index)
            }
            break
          }
        }
        this.computedStyle()
      },
      hide() {
        this.slideStyle[transform] = 'translate3d(0, 0, 0)'
        this.shouldHide = true
      },
      addPanel(panel) {
        this.panels.push(panel)
      },
      removePanel(panel) {
        const i = this.panels.indexOf(panel)
        this.panels.splice(i, 1)
      },
      transitionend() {
        if (this.shouldHide) {
          this.isVisible = false
          this.shouldHide = false
        }
      },
      refill(panelIndex, data, index) {
        this.$set(this.data, panelIndex, data)
        this.index = panelIndex
        this.selected = this.selected.slice(0, panelIndex)
        this.selectedVal = this.selectedVal.slice(0, panelIndex)
        this.selectedText = this.selectedText.slice(0, panelIndex)
        if (index >= 0) {
          this.$set(this.selected, panelIndex, index)
          this.changeHandler(panelIndex, this.data[panelIndex][index], index)
        }
      },
      showPanel() {
        const index = this.index
        let i = 0
        while (i <= index) {
          this.panels[i].show()
          i++
        }
        this.computedStyle()
      },
      hidePanel() {
        const len = this.data.length
        let i = this.index + 1
        while (i < len) {
          this.panels[i].hide()
          i++
        }
      },
      computedStyle() {
        this.$nextTick(() => {
          let allWidth = 0
          let i = 0
          const index = this.index
          while (i <= index) {
            const el = this.panels[i].$el
            allWidth += el.offsetWidth
            const elStyle = window.getComputedStyle(el)
            allWidth += parseInt(elStyle.marginLeft)
            allWidth += parseInt(elStyle.marginRight)
            i++
          }
          this.slideStyle[transform] = `translate3d(-${allWidth}px, 0, 0)`
        })
      },
      changeHandler(panelIndex, item, index) {
        if (typeof item === 'string') {
          this.selectedVal[panelIndex] = item
          this.selectedText[panelIndex] = item
        } else {
          this.selectedVal[panelIndex] = item.value
          this.selectedText[panelIndex] = item.text
        }
        this.$set(this.selected, panelIndex, index)
        if (panelIndex === (this.data.length - 1)) {
          // last column
          this.$emit(EVENT_SELECT, this.selectedVal, this.selected, this.selectedText)
          this.hide()
        } else {
          this.$emit(EVENT_CHANGE, panelIndex, item, this.selectedVal, this.selected, this.selectedText)
        }
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
    z-index: 5
    top: 0
    right: 0
    bottom: 0
    left: 0
    overflow: hidden
    color: $drawer-color
  .cube-drawer-main
    position: absolute
    top: 0
    left: 100%
    bottom: 0
    max-width: 90%
    display: flex
    flex-direction: column
    overflow: hidden
    transform: translate3d(0, 0, 0)
    transition: transform .3s ease-in-out
    box-shadow: -2px 0 2px rgba(0, 0, 0, .2)
  .cube-drawer-title
    position: relative
    padding: 0 20px
    height: 50px
    line-height: 50px
    border-bottom: 1px solid $drawer-title-bdc
    font-size: $fontsize-large
    background-color: $drawer-title-bgc
  .cube-drawer-panels
    display: flex
    flex: 1
</style>
