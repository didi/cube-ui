<template>
  <cube-page type="picker-view" title="Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showPicker">Picker</cube-button>
        <cube-button @click="showMutiPicker">Multi-column Picker</cube-button>
        <cube-button @click="showAliasPicker">Use alias</cube-button>
        <cube-button @click="showSetDataPicker">Use setData</cube-button>
        <cube-button @click="showUpdatePropsPicker">Use $updateProps</cube-button>
        <cube-button @click="showSubtitlePicker">Use subtitle</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import { data1, data2, data3 } from 'example/data/picker'

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

      this.updatePropsPicker = this.$createPicker({
        title: 'Use $updateProps',
        data: [data1],
        selectedIndex: [0],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.subtitlePicker = this.$createPicker({
        title: 'Picker',
        subtitle: 'subtitle',
        data: [data1],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showPicker() {
        this.picker.show()
      },
      showMutiPicker() {
        this.mutiPicker.show()
      },
      showAliasPicker() {
        this.aliasPicker.show()
      },
      showSetDataPicker() {
        this.setDataPicker.setData([data1, data2, data3], [1, 2, 3])
        this.setDataPicker.show()
      },
      showUpdatePropsPicker() {
        this.updatePropsPicker.show()
        setTimeout(() => {
          this.updatePropsPicker.$updateProps({
            title: 'Updated',
            data: [data1, data2, data3],
            selectedIndex: [1, 2, 3]
          })
        }, 1000)
      },
      showSubtitlePicker() {
        this.subtitlePicker.show()
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
