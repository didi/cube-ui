<template>
  <cube-page type="picker-view" title="Linkage Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showLinkagePicker">Linkage Picker</cube-button>
        <cube-button @click="showCityPicker">City Picker</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'
  import { provinceList, cityList, areaList } from 'example/data/area'

  const linkageData = [
    {
      value: 'Fruit',
      text: 'Fruit',
      children: [
        {
          value: 'Apple',
          text: 'Apple',
          children: [
            {
              value: 1,
              text: 'One'
            },
            {
              value: 2,
              text: 'Two'
            },
            {
              value: 3,
              text: 'Three'
            }
          ]
        },
        {
          value: 'Orange',
          text: 'Orange',
          children: [
            {
              value: 1,
              text: 'One'
            },
            {
              value: 2,
              text: 'Two'
            },
            {
              value: 3,
              text: 'Three'
            },
            {
              value: 4,
              text: 'Four'
            }
          ]
        },
        {
          value: 'Lemon',
          text: 'Lemon',
          children: [
            {
              value: 1,
              text: 'One'
            },
            {
              value: 2,
              text: 'Two'
            },
            {
              value: 3,
              text: 'Three'
            },
            {
              value: 4,
              text: 'Four'
            },
            {
              value: 5,
              text: 'Five'
            }
          ]
        }
      ]
    },
    {
      value: 'Drink',
      text: 'Drink',
      children: [
        {
          value: 'Coffee',
          text: 'Coffee',
          children: [
            {
              value: 1,
              text: 'One'
            },
            {
              value: 2,
              text: 'Two'
            },
            {
              value: 3,
              text: 'Three'
            }
          ]
        },
        {
          value: 'Tee',
          text: 'Tee',
          children: [
            {
              value: 1,
              text: 'One'
            },
            {
              value: 2,
              text: 'Two'
            },
            {
              value: 3,
              text: 'Three'
            },
            {
              value: 4,
              text: 'Four'
            }
          ]
        },
        {
          value: 'Juice',
          text: 'Juice',
          children: [
            {
              value: 1,
              text: 'One'
            },
            {
              value: 2,
              text: 'Two'
            },
            {
              value: 3,
              text: 'Three'
            }
          ]
        }
      ]
    },
    {
      value: 'Dessert',
      text: 'Dessert',
      children: [
        {
          value: 'Chocolate',
          text: 'Chocolate',
          children: [
            {
              value: 1,
              text: 'One'
            },
            {
              value: 2,
              text: 'Two'
            },
            {
              value: 3,
              text: 'Three'
            },
            {
              value: 4,
              text: 'Four'
            },
            {
              value: 5,
              text: 'Five'
            }
          ]
        },
        {
          value: 'cheese',
          text: 'cheese',
          children: [
            {
              value: 1,
              text: 'One'
            },
            {
              value: 2,
              text: 'Two'
            },
            {
              value: 3,
              text: 'Three'
            },
            {
              value: 4,
              text: 'Four'
            }
          ]
        },
        {
          value: 'cake',
          text: 'cake',
          children: [
            {
              value: 1,
              text: 'One'
            },
            {
              value: 2,
              text: 'Two'
            },
            {
              value: 3,
              text: 'Three'
            }
          ]
        }
      ]
    }
  ]

  const cityData = provinceList
  cityData.forEach(province => {
    province.children = cityList[province.value]
    province.children.forEach(city => {
      city.children = areaList[city.value]
    })
  })

  export default {
    mounted() {
      this.linkagePicker = this.$createLinkagePicker({
        title: 'Linkage Picker',
        data: linkageData,
        selectedIndex: [1, 0, 0],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
      this.cityPicker = this.$createLinkagePicker({
        title: 'City Picker',
        data: cityData,
        selectedIndex: [1, 0, 0],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      showLinkagePicker() {
        this.linkagePicker.show()
      },
      showCityPicker() {
        this.cityPicker.show()
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
