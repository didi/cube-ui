<template>
  <cube-page type="picker-view" title="Cascade Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showCascadePicker">Cascade Picker</cube-button>
        <cube-button @click="showCityPicker">City Picker</cube-button>
        <cube-button @click="showSetDataPicker">Set Data</cube-button>
        <cube-button @click="showAsyncPicker">Async Cascade</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import { provinceList, cityList, areaList } from 'example/data/area'
  import { cascadeData } from 'example/data/cascade'

  const cityData = provinceList.slice()
  cityData.forEach(province => {
    province.children = cityList[province.value]
    province.children.forEach(city => {
      city.children = areaList[city.value]
    })
  })

  const asyncData = provinceList.slice()
  const asyncSelectedIndex = [0, 0, 0]
  asyncData[0].children = cityList[asyncData[0].value]
  asyncData[0].children[0].children = areaList[asyncData[0].children[0].value]

  export default {
    mounted() {
      this.cascadePicker = this.$createCascadePicker({
        title: 'Cascade Picker',
        data: cascadeData,
        selectedIndex: [0, 1, 0],
        cancelTxt: 'Cancel',
        confirmTxt: 'Confirm',
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

      this.setDataPicker = this.$createCascadePicker({
        title: 'Set Data',
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })

      this.asyncPicker = this.$createCascadePicker({
        title: 'Async Cascade',
        async: true,
        data: asyncData,
        selectedIndex: asyncSelectedIndex.slice(),
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle,
        onChange: (i, newIndex) => {
          if (newIndex !== asyncSelectedIndex[i]) {
            asyncSelectedIndex.splice(i, 1, newIndex)
            if (i === 2) {
              this.asyncPicker.setData(asyncData, asyncSelectedIndex)
            }
            setTimeout(() => {
              if (i === 0) {
                const current = asyncData[newIndex]
                current.children = current.children || cityList[current.value]
              }

              if (i === 1) {
                const current = asyncData[asyncSelectedIndex[0]].children[newIndex]
                current.children = current.children || areaList[current.value]
              }
              this.asyncPicker.setData(asyncData, asyncSelectedIndex)
            }, 3000)
          }
        }
      })
    },
    methods: {
      showCascadePicker() {
        this.cascadePicker.show()
      },
      showCityPicker() {
        this.cityPicker.show()
      },
      showSetDataPicker() {
        /* setData when the picker is invisible */
        this.setDataPicker.setData(cascadeData)

        this.setDataPicker.show()
        setTimeout(() => {
          /* setData when the picker is visible */
          this.setDataPicker.setData(cityData, [1, 1, 0])
        }, 1000)
      },
      showAsyncPicker() {
        this.asyncPicker.show()
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
