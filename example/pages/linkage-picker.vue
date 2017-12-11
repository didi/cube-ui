<template>
  <cube-page type="picker-view" title="Linkage Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showLinkagePicker">Linkage Picker</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'

  export default {
    mounted() {
      this.linkagePicker = this.$createLinkagePicker({
        title: 'Linkage Picker',
        data: this.linkageData,
        onChange: () => {
          console.log('change')
        },
        onSelect: () => {
          console.log('select')
        },
        onCancel: () => {
          console.log('cancel')
        }
      })
    },
    methods: {
      showLinkagePicker() {
        this.linkagePicker.show()
      }
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>
