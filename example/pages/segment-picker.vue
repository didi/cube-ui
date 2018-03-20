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
          data: [data1]
        }, {
          data: [data1, data2]
        }, {
          data: [data1, data2, data3]
        }],
        onSelect: (...args) => {
          console.log('select:', ...args)
        },
        onCancel: (...args) => {
          console.log('cancel:', ...args)
        },
        onSubSelect: (...args) => {
          console.log('sub-select:', ...args)
        },
        onSubCancel: (...args) => {
          console.log('sub-cancel:', ...args)
        }
        // selectedIndex: [0, 1, 0],
        // cancelTxt: 'Cancel',
        // confirmTxt: 'Confirm',
        // onSelect: this.selectHandle,
        // onCancel: this.cancelHandle,
        // onChange: () => {
        //   console.log('change')
        // }
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
