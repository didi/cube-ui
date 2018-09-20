<template>
  <cube-page type="toast-view" title="Toast">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showToastTime">Toast - time 1s</cube-button>
        <cube-button @click="showToastTime0">Toast - time 0</cube-button>
        <cube-button @click="showToastMask">Toast- with mask</cube-button>
        <cube-button @click="showToastType">Toast - type</cube-button>
        <cube-button @click="showToastTxtOnly">Toast - txt only</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import CubePage from '../components/cube-page.vue'

  export default {
    methods: {
      showToastTime() {
        this.toast = this.$createToast({
          time: 1000,
          txt: 'Toast time 1s',
          onTimeout: () => {
            console.log('timeout')
          }
        })
        this.toast.show()
      },
      showToastTime0() {
        this.toast = this.$createToast({
          time: 0,
          txt: 'Toast time 0'
        })
        this.toast.show()
        setTimeout(() => {
          this.toast.hide()
        }, 2000)
      },
      showToastMask() {
        this.toast = this.$createToast({
          txt: 'Loading...',
          mask: true
        })
        this.toast.show()
      },
      showToastType() {
        this.toast = this.$createToast({
          txt: 'Correct',
          type: 'correct'
        })
        this.toast.show()
      },
      showToastTxtOnly() {
        this.toast = this.$createToast({
          txt: 'Plain txt',
          type: 'txt'
        })
        this.toast.show()
      }
    },
    components: {
      CubeButtonGroup,
      CubePage
    }
  }
</script>
