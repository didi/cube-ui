<template>
  <cube-page type="picker-view" title="Picker（选择器）" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showTimePicker">Picker</cube-button>
        <cube-button @click="showTimePickerMuti">Picker - multiple Columns</cube-button>
        <cube-button @click="showTimePickerLinkage">Picker - linkage</cube-button>
        <cube-button @click="showTimePickerSetData">Picker - setData</cube-button>
        <cube-button @click="showDayPicker">Year-Month-Day</cube-button>
        <cube-button @click="showSecondPicker">HH:MM:SS</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import { provinceList, cityList, areaList } from '../data/area'
  import { data1, data2, data3 } from '../data/picker'

  const year = range(2010, 2020)
  const month = range(1, 12)

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
        onSelect: (selectedText, selectedIndex) => {
          this.$createDialog({
            type: 'warn',
            content: `选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      }, false)
      this.mutiPicker = this.$createPicker({
        title: 'Picker-多列',
        data: [data1, data2, data3],
        onSelect: (selectedText, selectedIndex) => {
          this.$createDialog({
            type: 'warn',
            content: `选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      }, false)
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
        onSelect: (selectedText, selectedIndex) => {
          this.$createDialog({
            type: 'warn',
            content: `选中的城市id是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      }, false)
      this.setDataPicker = this.$createPicker({
        title: 'Picker-setData',
        onSelect: (selectedText, selectedIndex) => {
          this.$createDialog({
            type: 'warn',
            content: `选中的内容是：${selectedText.join(',')} <br/> 选中的索引是 ${selectedIndex.join(',')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      }, false)

      this.dayPicker = this.$createPicker({
        title: 'Year-Month-Day',
        data: this.dayData,
        onChange: (i, newIndex) => {
          this.tempIndexDay.splice(i, 1, newIndex)
          this.dayPicker.setData(this.dayData, this.tempIndexDay)
        },
        onSelect: (selectedText, selectedIndex) => {
          this.$createDialog({
            type: 'warn',
            content: `Year-Month-Day：${selectedText.join('-')} <br/> selected index: ${selectedIndex.join(',')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      }, false)

      this.secondPicker = this.$createPicker({
        title: 'HH:MM:SS',
        data: [range(0, 23, true), range(0, 59, true), range(0, 59, true)],
        selectedIndex: [10, 20, 59],
        onSelect: (selectedText, selectedIndex) => {
          this.$createDialog({
            type: 'warn',
            content: `HH:MM:SS：${selectedText.join(':')} <br/> selected index: ${selectedIndex.join(',')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
      }, false)
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
      },
      dayData() {
        let day = 30
        if ([0, 2, 4, 6, 7, 9, 11].includes(this.tempIndexDay[1])) {
          day = 31
        } else {
          if (this.tempIndexDay[1] === 1) {
            day = this.tempIndexDay[0] % 4 ? 28 : 29
          }
        }
        return [year, month, range(1, day)]
      }
    },
    methods: {
      showTimePicker() {
        this.picker.show()
      },
      showTimePickerMuti() {
        this.mutiPicker.show()
      },
      showTimePickerLinkage() {
        this.linkagePicker.show()
      },
      showTimePickerSetData() {
        this.setDataPicker.setData([data1, data2, data3], [1, 2, 3])
        this.setDataPicker.show()
      },
      showDayPicker() {
        this.dayPicker.show()
      },
      showSecondPicker() {
        this.secondPicker.show()
      }
    },
    beforeDestroy () {
      ['picker', 'mutiPicker', 'linkagePicker', 'setDataPicker', 'dayPicker', 'secondPicker'].forEach((picker) => {
        this[picker] && this[picker].remove() && (this[picker] = null)
      })
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>
