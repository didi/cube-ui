<template>
  <div class="cube-scroll-nav-panel">
    <cube-sticky-ele :ele-key="label">
      <h2 class="cube-scroll-nav-panel-title" v-html="title"></h2>
    </cube-sticky-ele>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import CubeStickyEle from '../sticky/sticky-ele.vue'

  const COMPONENT_NAME = 'cube-scroll-nav-panel'

  export default {
    name: COMPONENT_NAME,
    inject: ['scrollNav'],
    props: {
      label: {
        type: [String, Number],
        required: true
      },
      title: {
        type: [String, Number],
        default() {
          /* istanbul ignore next */
          return this.label
        }
      }
    },
    mounted() {
      this.scrollNav.addPanel(this)
    },
    beforeDestroy() {
      this.scrollNav.removePanel(this)
    },
    components: {
      CubeStickyEle
    }
  }
</script>
