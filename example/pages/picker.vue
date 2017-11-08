<template>
  <cube-page type="picker-view" title="Picker（选择器）" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showTimePicker">Picker</cube-button>
        <cube-button @click="showTimePickerMuti">Picker - multiple Columns</cube-button>
        <cube-button @click="showTimePickerLinkage">Picker - linkage</cube-button>
        <cube-button @click="showTimePickerSetData">Picker - setData</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import { provinceList, cityList, areaList } from '../data/area'
  import { data1, data2, data3 } from '../data/picker'

  export default {
    mounted() {
      this.picker = this.$createPicker({
        title: 'Picker-单列',
        data: [data1]
      })
      this.mutiPicker = this.$createPicker({
        title: 'Picker-多列',
        data: [data1, data2, data3]
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
        onSelect: (selectedVal) => {
          console.log(selectedVal)
        }
      })
      this.setDataPicker = this.$createPicker({
        title: 'Picker-setData'
      })
    },
    data() {
      return {
        tempIndex: [0, 0, 0],
        index: 0
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
      }
    },
    beforeDestroy () {
      ['picker', 'mutiPicker', 'linkagePicker', 'setDataPicker'].forEach((picker) => {
        this[picker] && this[picker].remove() && (this[picker] = null)
      })
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>
