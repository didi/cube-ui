<template>
  <cube-page type="picker-view" title="Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showPicker">Picker</cube-button>
        <cube-button @click="showPickerMuti">Multi-column Picker</cube-button>
        <cube-button @click="showPickerSetData">Use SetData</cube-button>
        <cube-button @click="showPickerAlias">Use Alias</cube-button>
        <cube-button @click="showNormalTimePicker">Normal Time Picker</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import NormalTimePicker from 'example/components/normal-time-picker.vue'
  import { data1, data2, data3 } from 'example/data/picker'
  import Vue from 'vue'
  import createAPI from '@/modules/create-api'

  createAPI(Vue, NormalTimePicker, ['select', 'cancel'], false)

  export default {
    mounted() {
      this.picker = this.$createPicker({
        title: 'Picker',
        data: [data1],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.mutiPicker = this.$createPicker({
        title: 'Multi-column Picker',
        data: [data1, data2, data3],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.setDataPicker = this.$createPicker({
        title: 'Use SetData',
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.aliasPicker = this.$createPicker({
        title: 'Use Alias',
        data: [[{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }]],
        alias: {
          value: 'id',
          text: 'name'
        },
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.normalTimePicker = this.$createNormalTimePicker({
        selectedIndex: [10, 20, 59],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showPicker() {
        this.picker.show()
      },
      showPickerMuti() {
        this.mutiPicker.show()
      },
      showPickerSetData() {
        this.setDataPicker.setData([data1, data2, data3], [1, 2, 3])
        this.setDataPicker.show()
      },
      showPickerAlias() {
        this.aliasPicker.show()
      },
      showNormalTimePicker() {
        this.normalTimePicker.show()
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
