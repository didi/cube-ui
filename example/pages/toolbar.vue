<template>
  <cube-page type="index-list" title="IndexList" class="option-demo">
    <div slot="content">
      <div class="options">
        <div class="option-list">
          <div class="group">
            <switch-option class="item" name="More Actions" :value="more"
              @update:value="updateMore"></switch-option>
          </div>
        </div>
      </div>
      <cube-toolbar
        :actions="actions"
        :moreActions="more ? moreActions : undefined">
      </cube-toolbar>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from 'example/components/cube-page.vue'
  import SwitchOption from 'example/components/switch-option.vue'

  export default {
    components: {
      CubePage,
      SwitchOption
    },
    data() {
      let money = 10
      return {
        more: true,
        actions: [
          {
            text: '完成订单',
            clickHandler: this.clickHandler
          },
          {
            text: '打车来接',
            checked: false,
            type: 'checkbox'
          },
          {
            text: '一口价<span class="orange">10元</span>',
            clickHandler(event, data) {
              money += 10
              data.text = '一口价<span class="orange">' + money + '元</span>'
            }
          }
        ],
        moreActions: [
          {
            text: '操作a',
            clickHandler: this.clickHandler
          },
          {
            text: '操作b',
            clickHandler: this.clickHandler
          },
          {
            text: '操作c',
            icon: 'dd-cubeic-right',
            clickHandler: this.clickHandler
          }
        ]
      }
    },
    methods: {
      updateMore(val) {
        this.more = val
      },
      clickHandler(event, action) {
        this.$createToast({
          type: 'correct',
          txt: 'clicked ' + action.text,
          time: 1000
        }).show()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
