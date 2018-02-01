<template>
  <cube-page type="picker-view" title="Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showPcPicker">PC Picker</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import PcPicker from 'example/components/pc-picker/pc-picker.vue'
  import { data1, data2 } from 'example/data/picker'
  import Vue from 'vue'
  import createAPI from '@/modules/create-api'

  createAPI(Vue, PcPicker, ['select', 'cancel'], false)

  export default {
    mounted() {
      this.pcPicker = this.$createPcPicker({
        data: [data1, data2],
        // selectedIndex: [10, 20, 59],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showPcPicker() {
        this.pcPicker.show()
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandle() {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>
