<template>
  <cube-page type="dialog-view" title="Dialog">
    <div slot="content">
      <cube-button-group>
        <cube-button @click="showAlert">Dialog - alert</cube-button>
        <cube-button @click="showPrompt">Dialog - prompt</cube-button>
        <cube-button @click="showBtn">Dialog - btn</cube-button>
        <cube-button @click="showClose">Dialog - show close</cube-button>
        <cube-button @click="showSlot">Dialog - slot</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import CubePage from '../components/cube-page.vue'

  export default {
    methods: {
      showAlert() {
        this.dialog = this.$createDialog({
          type: 'alert',
          title: '我是标题',
          content: '我是内容',
          icon: 'cubeic-alert'
        })
        this.dialog.show()
      },
      showPrompt() {
        this.dialog = this.$createDialog({
          type: 'prompt',
          title: '我是标题',
          prompt: {
            placeholder: '请输入'
          },
          onConfirm: (e, promptValue) => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: `Prompt value: ${promptValue || ''}`
            }).show()
          }
        })
        this.dialog.show()
      },
      showBtn() {
        this.dialog = this.$createDialog({
          type: 'confirm',
          icon: 'cubeic-alert',
          title: '我是标题',
          content: '我是内容',
          confirmBtn: {
            text: '确定按钮',
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: '取消按钮',
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '点击确认按钮'
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '点击取消按钮'
            }).show()
          }
        })
        this.dialog.show()
      },
      showClose() {
        this.dialog = this.$createDialog({
          type: 'alert',
          icon: 'cubeic-alert',
          showClose: true,
          title: '标题',
          onClose: () => {
            this.$createToast({
              type: 'warn',
              time: 1000,
              txt: '点击关闭按钮'
            }).show()
          }
        })
        this.dialog.show()
      },
      showSlot() {
        this.dialog = this.$createDialog({
          type: 'alert',
          confirmBtn: {
            text: '我知道了',
            active: true
          }
        }, (createElement) => {
          return [
            createElement('div', {
              'class': {
                'my-title': true
              },
              slot: 'title'
            }, [
              createElement('div', {
                'class': {
                  'my-title-img': true
                }
              }),
              createElement('p', '附近车少,优选出租车将来接您')
            ]),
            createElement('p', {
              'class': {
                'my-content': true
              },
              slot: 'content'
            }, '价格仍按快车计算')
          ]
        })
        this.dialog.show()
      }
    },
    components: {
      CubeButtonGroup,
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .my-title-img
    height: 120px
    margin-bottom: 16px
    background: url("data:image/png;base64,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") no-repeat center
    background-size: 100%
  .my-content
    text-align: center
</style>
