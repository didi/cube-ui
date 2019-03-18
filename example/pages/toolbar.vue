<template>
  <cube-page type="toolbar" title="Toolbar" class="option-demo">
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
        :more-actions="more ? moreActions : undefined"
        @click="clickHandler">
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
      return {
        more: false,
        money: 10,
        actions: [
          {
            text: '完成订单',
            action: 'showText'
          },
          {
            text: '打车来接',
            checked: false,
            type: 'checkbox'
          },
          {
            text: '一口价<span class="orange">10元</span>',
            action: 'moreMoney'
          }
        ],
        moreActions: [
          {
            text: '操作a',
            action: 'showText'
          },
          {
            text: '操作b',
            action: 'showText'
          },
          {
            text: '操作c',
            icon: 'cubeic-right',
            action: 'showText'
          }
        ]
      }
    },
    methods: {
      updateMore(val) {
        this.more = val
      },
      showText(item) {
        this.$createToast({
          type: 'correct',
          txt: 'clicked ' + item.text,
          time: 1000
        }).show()
      },
      moreMoney(item) {
        this.money += 10
        item.text = '一口价<span class="orange">' + this.money + '元</span>'
      },
      clickHandler(item) {
        if (item.action) {
          this[item.action](item)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .orange
    color: #fc9153
</style>
