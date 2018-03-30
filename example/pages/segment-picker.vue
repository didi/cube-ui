<template>
  <cube-page type="picker-view" title="Segment Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showDateSegmentPicker">StartDate - EndDate</cube-button>
        <cube-button @click="showCitySegmentPicker">Express - From - To</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import { provinceList, cityList, areaList } from 'example/data/area'
  import { expressData } from 'example/data/picker'

  const cityData = provinceList
  cityData.forEach(province => {
    province.children = cityList[province.value]
    province.children.forEach(city => {
      city.children = areaList[city.value]
    })
  })

  const dateSegmentData = [
    {
      is: 'cube-date-picker',
      title: '入学时间',
      min: new Date(2000, 0, 1),
      max: new Date(2030, 11, 31)
    },
    {
      is: 'cube-date-picker',
      title: '毕业时间',
      min: new Date(2000, 0, 1),
      max: new Date(2030, 11, 31)
    }
  ]

  export default {
    mounted() {
      this.dateSegmentPicker = this.$createSegmentPicker({
        data: dateSegmentData,
        onSelect: (selectedDates, selectedVals, selectedTexts) => {
          this.$createDialog({
            type: 'warn',
            content: `Selected Items: <br/> - 入学时间: ${selectedTexts[0].join('')} <br/> - 毕业时间: ${selectedTexts[1].join('')}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onNext: (i, selectedDate, selectedValue, selectedText) => {
          dateSegmentData[1].min = selectedDate
          if (i === 0) {
            this.dateSegmentPicker.$updateProps({
              data: dateSegmentData
            })
          }
        }
      })

      this.citySegmentPicker = this.$createSegmentPicker({
        data: [{
          title: '选择快递',
          data: [expressData],
          selectedIndex: [1]
        }, {
          is: 'cube-cascade-picker',
          title: '寄件地址',
          data: cityData,
          selectedIndex: [0, 0, 0],
          cancelTxt: '返回'
        }, {
          is: 'cube-cascade-picker',
          title: '收件地址',
          data: cityData,
          selectedIndex: [0, 0, 0]
        }],
        cancelTxt: 'Cancel',
        confirmTxt: 'Confirm',
        nextTxt: 'Next',
        prevTxt: 'Prev',
        onSelect: (selectedVals, selectedIndexs, selectedTexts) => {
          this.$createDialog({
            type: 'warn',
            content: `Selected Items: <br/> - 所选快递:  ${selectedTexts[0].join('')} <br/> - 寄件地址: ${selectedTexts[1].join('')} <br/> - 收件地址: ${selectedTexts[2].join('')}`,
            icon: 'cubeic-alert'
          }).show()
        }
      })
    },
    methods: {
      showDateSegmentPicker() {
        this.dateSegmentPicker.show()
      },
      showCitySegmentPicker() {
        this.citySegmentPicker.show()
      }
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>
