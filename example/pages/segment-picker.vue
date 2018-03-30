<template>
  <cube-page type="picker-view" title="Segment Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showDateSegmentPicker">StartDate - EndDate</cube-button>
        <cube-button @click="showCitySegmentPicker">Express - From - To</cube-button>
        <cube-button @click="updateProps">Use $updateProps</cube-button>
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

  export default {
    mounted() {
      this.citySegmentPicker = this.$createSegmentPicker({
        data: [{
          title: '快递',
          data: [expressData],
          selectedIndex: [1]
        }, {
          is: 'cube-cascade-picker',
          title: '出发地',
          data: cityData,
          selectedIndex: [0, 0, 0],
          cancelTxt: '返回'
        }, {
          is: 'cube-cascade-picker',
          title: '目的地',
          data: cityData,
          selectedIndex: [0, 0, 0]
        }],
        cancelTxt: 'Cancel',
        confirmTxt: 'Confirm',
        nextTxt: 'Next',
        prevTxt: 'Prev',
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle,
        onNext: this.nextHandle,
        onPrev: this.prevHandle,
        onChange: this.changeHandle
      })
    },
    methods: {
      showDateSegmentPicker() {
        this.dateSegmentPicker.show()
      },
      showCitySegmentPicker() {
        this.citySegmentPicker.show()
      },
      updateProps() {
        this.citySegmentPicker.$updateProps({
          data: [{
            is: 'cube-cascade-picker',
            title: '出发地',
            data: cityData,
            selectedIndex: [0, 0, 0],
            cancelTxt: '返回'
          }, {
            title: '快递',
            data: [expressData],
            selectedIndex: [1]
          }, {
            is: 'cube-cascade-picker',
            title: '目的地',
            data: cityData,
            selectedIndex: [0, 0, 0]
          }]
        })
      },
      selectHandle: (...args) => {
        console.log('select:', ...args)
      },
      cancelHandle: (...args) => {
        console.log('cancel:', ...args)
      },
      nextHandle: (...args) => {
        console.log('next:', ...args)
      },
      prevHandle: (...args) => {
        console.log('prev:', ...args)
      },
      changeHandle: (...args) => {
        console.log('change', ...args)
      }
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>
