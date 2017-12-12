<template>
  <cube-page type="picker-view" title="Linkage Picker" desc="">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showLinkagePicker">Linkage Picker</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script>
  import CubePage from 'example/components/cube-page.vue'
  import CubeButtonGroup from 'example/components/cube-button-group.vue'

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

  export default {
    mounted() {
      this.linkagePicker = this.$createLinkagePicker({
        title: 'Linkage Picker',
        data: linkageData,
        selectedIndex: [1, 0, 0],
        onChange: () => {
          console.log('change')
        },
        onSelect: () => {
          console.log('select')
        },
        onCancel: () => {
          console.log('cancel')
        }
      })
    },
    methods: {
      showLinkagePicker() {
        this.linkagePicker.show()
      }
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>
