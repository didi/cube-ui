<template>
  <cube-page type="picker-view" title="Segment Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showSegmentPicker">Segment Picker</cube-button>
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
  import { data1, data2, data3 } from 'example/data/picker'
  // import { cascadeData } from 'example/data/cascade'

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
      this.segmentPicker = this.$createSegmentPicker({
        title: 'Segment Picker',
        data: [{
          title: '第一步',
          data: [data1],
          selectedIndex: [1]
        }, {
          title: '第二步',
          data: [data1, data2],
          selectedIndex: [2, 2]
        }, {
          title: '第三步',
          data: [data1, data2, data3],
          selectedIndex: [3, 3, 3]
        }],
        cancelTxt: 'Cancel',
        confirmTxt: 'Confirm',
        nextTxt: 'Next',
        prevTxt: 'Prev',
        onSelect: (...args) => {
          console.log('select:', ...args)
        },
        onCancel: (...args) => {
          console.log('cancel:', ...args)
        },
        onNext: (...args) => {
          console.log('next:', ...args)
        },
        onPrev: (...args) => {
          console.log('prev:', ...args)
        },
        onChange: (...args) => {
          console.log('change', ...args)
        }
      })
    },
    methods: {
      showSegmentPicker() {
        this.segmentPicker.show()
      }
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>
