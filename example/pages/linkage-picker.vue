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
      value: '北京',
      text: '北京',
      children: [
        {
          value: '北京市',
          text: '北京市',
          children: [
            {
              value: '海淀区',
              text: '海淀区'
            },
            {
              value: '海淀区',
              text: '海淀区'
            }
          ]
        }
      ]
    },
    {
      value: '江苏省',
      text: '江苏省',
      children: [
        {
          value: '南京市',
          text: '南京市',
          children: [
            {
              value: '1区',
              text: '1区'
            },
            {
              value: '2区',
              text: '2区'
            }
          ]
        },
        {
          value: '苏州市',
          text: '苏州市',
          children: [
            {
              value: '2区',
              text: '2区'
            },
            {
              value: '3区',
              text: '3区'
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
        selectedIndex: [1, 1, 0],
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
