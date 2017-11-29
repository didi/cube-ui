<template>
  <cube-page type="picker-view" title="Picker（选择器）" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showPicker">Single Column Picker</cube-button>
        <cube-button @click="showPickerMuti">Multiple Columns Picker</cube-button>
        <cube-button @click="showPickerLinkage">Linkage Picker</cube-button>
        <cube-button @click="showPickerSetData">SetData Picker</cube-button>
        <cube-button @click="showDatePicker">Date Picker</cube-button>
        <cube-button @click="showSecondPicker">Time Picker</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import DatePicker from 'example/components/date-picker.vue'
  import { provinceList, cityList, areaList } from 'example/data/area'
  import { data1, data2, data3 } from 'example/data/picker'
  import Vue from 'vue'
  import createAPI from '@/modules/create-api'

  createAPI(Vue, DatePicker, ['min', 'max', 'select', 'cancel'], false)

  function range(n, m, polyfill = false) {
    let arr = []
    for (let i = n; i <= m; i++) {
      let value = polyfill && i < 10 ? '0' + i : i
      arr.push({
        text: value,
        value: value
      })
    }
    return arr
  }

  export default {
    mounted() {
      this.picker = this.$createPicker({
        title: 'Picker-单列',
        data: [data1],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
      this.mutiPicker = this.$createPicker({
        title: 'Picker-多列',
        data: [data1, data2, data3],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
      this.linkagePicker = this.$createPicker({
        title: 'Picker-数据联动',
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
        title: 'Picker-setData',
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.datePicker = this.$createDatePicker({
        min: [2008, 8, 8],
        max: [2024, 10, 20],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.secondPicker = this.$createPicker({
        title: 'HH:MM:SS',
        data: [range(0, 23, true), range(0, 59, true), range(0, 59, true)],
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
      },
      dayData() {
        this.dayPicker.refresh()
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
      showSecondPicker() {
        this.secondPicker.show()
      },
      selectHandle(selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `selected item: ${selectedText.join(':')} <br/> selected index: ${selectedIndex.join(',')}`,
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
