<template>
  <cube-page type="picker-view" title="Cascade Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showCascadePicker">Cascade Picker</cube-button>
        <cube-button @click="showAddressPicker">Address Picker</cube-button>
        <cube-button @click="showSetDataPicker">Set Data</cube-button>
        <cube-button @click="showAsyncPicker">Async Load Data</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import { provinceList, cityList, areaList } from 'example/data/area'
  import { cascadeData } from 'example/data/cascade'

  const asyncProvinceList = provinceList.slice()
  const asyncCityList = JSON.parse(JSON.stringify(cityList))
  const asyncAreaList = JSON.parse(JSON.stringify(areaList))

  const addressData = provinceList
  addressData.forEach(province => {
    province.children = cityList[province.value]
    province.children.forEach(city => {
      city.children = areaList[city.value]
    })
  })

  const asyncData = asyncProvinceList
  const asyncSelectedIndex = [0, 0, 0]
  asyncData[0].children = asyncCityList[asyncData[0].value]
  asyncData[0].children[0].children = asyncAreaList[asyncData[0].children[0].value]

  export default {
    mounted() {
      this.cascadePicker = this.$createCascadePicker({
        title: 'Cascade Picker',
        data: cascadeData,
        selectedIndex: [0, 1, 0],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.addressPicker = this.$createCascadePicker({
        title: 'City Picker',
        data: addressData,
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.setDataPicker = this.$createCascadePicker({
        title: 'Set Data',
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.asyncPicker = this.$createCascadePicker({
        title: 'Async Load Data',
        async: true,
        data: asyncData,
        selectedIndex: asyncSelectedIndex.slice(),
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle,
        onChange: this.asyncChangeHandle
      })
    },
    methods: {
      showCascadePicker() {
        this.cascadePicker.show()
      },
      showAddressPicker() {
        this.addressPicker.show()
      },
      showSetDataPicker() {
        // setData when the picker is invisible.
        this.setDataPicker.setData(cascadeData)

        this.setDataPicker.show()
        setTimeout(() => {
          // setData when the picker is visible.
          this.setDataPicker.setData(addressData, [1, 1, 0])
        }, 1000)
      },
      showAsyncPicker() {
        this.asyncPicker.show()
      },
      asyncChangeHandle(i, newIndex) {
        if (newIndex !== asyncSelectedIndex[i]) {
          asyncSelectedIndex[i] = newIndex
          // If the first two column is changed, request the data for rest columns.
          if (i < 2) {
            // Mock async load.
            setTimeout(() => {
              if (i === 0) {
                const current = asyncData[newIndex]
                current.children = current.children || asyncCityList[current.value]
                current.children[0].children = current.children[0].children || asyncAreaList[current.children[0].value]
                asyncSelectedIndex[1] = 0
                asyncSelectedIndex[2] = 0
              }

              if (i === 1) {
                const current = asyncData[asyncSelectedIndex[0]].children[newIndex]
                current.children = current.children || asyncAreaList[current.value]
                asyncSelectedIndex[2] = 0
              }
              this.asyncPicker.setData(asyncData, asyncSelectedIndex)
            }, 500)
          }
        }
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
