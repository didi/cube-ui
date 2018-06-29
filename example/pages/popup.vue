<template>
  <cube-page type="popup-view" title="popup">
    <template slot="content">
      <div>
        <cube-popup type="my-popup" v-model="visible1">My Popup Content 1</cube-popup>
        <cube-button @click="showPopup(1)">Show Popup</cube-button>
      </div>
      <div>
        <cube-popup type="my-popup" v-model="visible2" :mask="false">My Popup Content 2</cube-popup>
        <cube-button @click="showPopup(2)">Show Popup - no mask</cube-button>
      </div>
      <div>
        <cube-popup type="my-popup" v-model="visible3" :mask="false" content="<i>My Popup Content 3</i>" ref="myPopup3"></cube-popup>
        <cube-button @click="showPopup(3)">Show Popup - with content</cube-button>
      </div>
      <div>
        <cube-popup type="my-popup" v-model="visible4" :position="position" :mask-closable="true" ref="myPopup4">My Popup Content 4</cube-popup>
        <cube-button @click="showPopup(4)">top/right/bottom/left/center</cube-button>
      </div>
      <div>
        <cube-extend-popup content="click here hide" ref="extendPopup"></cube-extend-popup>
        <cube-button @click="$refs.extendPopup.show()">Show Extend Popup</cube-button>
      </div>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import CubePage from '../components/cube-page.vue'
  import CubeExtendPopup from '../components/extend-popup.vue'

  const positions = ['top', 'right', 'bottom', 'left', 'center']
  let cur = 0
  export default {
    data() {
      return {
        type: 'popup-dialog',
        mask: true,
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
        position: ''
      }
    },
    methods: {
      showPopup(i) {
        if (i === 4) {
          this.position = positions[cur++]
          if (cur === positions.length) {
            cur = 0
          }
        }
        this['visible' + i] = true
        setTimeout(() => {
          this['visible' + i] = false
        }, 2000)
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
