<template>
  <cube-page type="popup-view" title="popup">
    <template slot="content">
      <div>
        <cube-popup type="my-popup" ref="myPopup">My Popup Content 1</cube-popup>
        <cube-button @click="showPopup('myPopup')">Show Popup</cube-button>
      </div>
      <div>
        <cube-popup type="my-popup" :mask="false" ref="myPopup2">My Popup Content 2</cube-popup>
        <cube-button @click="showPopup('myPopup2')">Show Popup - no mask</cube-button>
      </div>
      <div>
        <cube-popup type="my-popup" :mask="false" content="<i>My Popup Content 3</i>" ref="myPopup3"></cube-popup>
        <cube-button @click="showPopup('myPopup3')">Show Popup - with content</cube-button>
      </div>
      <div>
        <cube-popup type="my-popup" :center="false" ref="myPopup4">My Popup Content 4</cube-popup>
        <cube-button @click="showPopup('myPopup4')">Show Popup - bottom</cube-button>
      </div>
      <div>
        <cube-extend-popup content="lala" ref="extendPopup"></cube-extend-popup>
        <cube-button @click="$refs.extendPopup.show()">Show Extend Popup</cube-button>
      </div>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import CubePage from '../components/cube-page.vue'
  import CubeExtendPopup from '../components/extend-popup.vue'

  export default {
    data() {
      return {
        type: 'popup-dialog',
        mask: true
      }
    },
    methods: {
      showPopup(refId) {
        const component = this.$refs[refId]
        component.show()
        setTimeout(() => {
          component.hide()
        }, 1000)
      }
    },
    components: {
      CubeButtonGroup,
      CubePage,
      CubeExtendPopup
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .popup-view
    .content
      >
        div
          margin: 10px 0
  .cube-my-popup
    .cube-popup-center
      .cube-popup-content
        padding: 20px
    .cube-popup-content
      padding: 80px 20px
      color: #fff
      background-color: rgba(0, 0, 0, .8)
  .cube-extend-popup
    .cube-extend-popup-content
      padding: 20px
      color: #fff
      background-color: rgba(0, 0, 0, .8)
</style>
