<template>
  <cube-page type="picker-view" title="Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showPicker">Picker</cube-button>
        <cube-button @click="showPickerMuti">Multi-column Picker</cube-button>
        <cube-button @click="showPickerLinkage">Linkage Picker</cube-button>
        <cube-button @click="showPickerSetData">Use SetData</cube-button>
        <cube-button @click="showDatePicker">Date Picker</cube-button>
        <cube-button @click="showNormalTimePicker">Normal Time Picker</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import DatePicker from 'example/components/date-picker.vue'
  import NormalTimePicker from 'example/components/normal-time-picker.vue'
  import { provinceList, cityList, areaList } from 'example/data/area'
  import { data1, data2, data3 } from 'example/data/picker'
  import Vue from 'vue'
  import createAPI from '@/modules/create-api'

  createAPI(Vue, DatePicker, ['select', 'cancel'], false)
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
      this.linkagePicker = this.$createPicker({
        title: 'Linkage Picker',
        data: this.linkageData,
        onChange: (i, newIndex) => {
          if (newIndex !== this.tempIndex[i]) {
            for (let j = 2; j > i; j--) {
              this.tempIndex.splice(j, 1, 0)
              this.linkagePicker.scrollTo(j, 0)
            }

            this.tempIndex.splice(i, 1, newIndex)
            this.linkagePicker.setData(this.linkageData, this.tempIndex)
          }
        },
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
      this.setDataPicker = this.$createPicker({
        title: 'Use SetData',
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.datePicker = this.$createDatePicker({
        min: [2008, 8, 8],
        max: [2020, 10, 20],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.normalTimePicker = this.$createNormalTimePicker({
        selectedIndex: [10, 20, 59],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    data() {
      return {
        tempIndex: [0, 0, 0],
        index: 0,
        tempIndexDay: [0, 0, 0]
      }
    },
    watch: {
      linkageData() {
        this.linkagePicker.refresh()
      }
    },
    computed: {
      linkageData() {
        const provinces = provinceList
        const cities = cityList[provinces[this.tempIndex[0]].value]
        const areas = areaList[cities[this.tempIndex[1]].value]

        return [provinces, cities, areas]
      }
    },
    methods: {
      showPicker() {
        this.picker.show()
      },
      showPickerMuti() {
        this.mutiPicker.show()
      },
      showPickerLinkage() {
        this.linkagePicker.show()
      },
      showPickerSetData() {
        this.setDataPicker.setData([data1, data2, data3], [1, 2, 3])
        this.setDataPicker.show()
      },
      showDatePicker() {
        this.datePicker.show()
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
