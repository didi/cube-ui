<template>
  <cube-page type="action-sheet-view" title="ActionSheet（操作列表）">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showDefault">ActionSheet</cube-button>
        <cube-button @click="showActive">ActionSheet - active</cube-button>
        <cube-button @click="showPickerStyle">ActionSheet - picker style</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import CubeButtonGroup from '../components/cube-button-group.vue'

  export default {
    methods: {
      showDefault() {
        this.actionSheet = this.$createActionSheet({
          title: '我是标题~~~',
          data: [
            {
              content: '<em>align - center</em>',
              class: 'cube-foo'
            },
            {
              content: 'align - left',
              align: 'left'
            },
            {
              content: 'align - right',
              align: 'right'
            }
          ],
          onSelect: (item, index) => {
            this.$createToast({
              txt: `Clicked ${item.content}`,
              type: 'correct',
              time: 1000
            }).show()
          }
        })
        this.actionSheet.show()
      },
      showActive() {
        this.actionSheet = this.$createActionSheet({
          title: '我是标题~~~',
          active: 0,
          data: [
            {
              content: '舒适型'
            },
            {
              content: '七座商务'
            },
            {
              content: '豪华型'
            }
          ],
          onSelect: (item, index) => {
            this.$createToast({
              txt: `Clicked ${item.content}`,
              type: 'correct',
              time: 1000
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              txt: `Clicked canceled`,
              type: 'warn',
              time: 1000
            }).show()
          }
        })
        this.actionSheet.show()
      },
      showPickerStyle() {
        this.actionSheet = this.$createActionSheet({
          title: '我是标题~~~',
          pickerStyle: true,
          data: [
            {
              content: '舒适型'
            },
            {
              content: '七座商务'
            },
            {
              content: '豪华型'
            }
          ],
          onSelect: (item, index) => {
            this.$createToast({
              txt: `Clicked ${item.content}`,
              type: 'correct',
              time: 1000
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              txt: `Clicked canceled`,
              type: 'warn',
              time: 1000
            }).show()
          }
        })
        this.actionSheet.show()
      }
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>
