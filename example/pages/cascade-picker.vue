<template>
  <cube-page type="picker-view" title="Cascade Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showCascadePicker">Cascade Picker</cube-button>
        <cube-button @click="showCityPicker">City Picker</cube-button>
        <cube-button @click="showDatePicker">Date Picker</cube-button>
        <cube-button @click="showSetDataPicker">Set Data</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import DatePicker from 'example/components/date-picker.vue'
  import Vue from 'vue'
  import createAPI from '@/modules/create-api'
  import { provinceList, cityList, areaList } from 'example/data/area'
  import { cascadeData } from 'example/data/cascade'

  createAPI(Vue, DatePicker, ['select', 'cancel'], false)

  const cityData = provinceList
  cityData.forEach(province => {
    province.children = cityList[province.value]
    province.children.forEach(city => {
      city.children = areaList[city.value]
    })
  })

  export default {
    mounted() {
      this.cascadePicker = this.$createCascadePicker({
        title: 'Cascade Picker',
        data: cascadeData,
        selectedIndex: [0, 1, 0],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle,
        onChange: () => {
          console.log('change')
        }
      })

      this.cityPicker = this.$createCascadePicker({
        title: 'City Picker',
        data: cityData,
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.datePicker = this.$createDatePicker({
        min: [2008, 8, 8],
        max: [2020, 10, 20],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.setDataPicker = this.$createCascadePicker({
        title: 'Set Data',
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showCascadePicker() {
        this.cascadePicker.show()
      },
      showCityPicker() {
        this.cityPicker.show()
      },
      showDatePicker() {
        this.datePicker.show()
      },
      showSetDataPicker() {
        this.setDataPicker.setData(cascadeData)
        this.setDataPicker.show()
        setTimeout(() => {
          this.setDataPicker.setData(cityData, [1, 1, 0])
        }, 1000)
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
