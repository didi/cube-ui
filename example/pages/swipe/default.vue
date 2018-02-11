<template>
  <cube-page type="swipe-view" title="Swipe">
    <template slot="content">
      <div class="swipe-wrapper">
        <cube-scroll>
          <cube-swipe
              @item-click="onItemClick"
              @btn-click="onBtnClick"
              :data="swipeData">
          </cube-swipe>
        </cube-scroll>
      </div>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  import { defaultData } from '../../data/swipe'
  export default {
    data() {
      return {
        swipeData: defaultData
      }
    },
    methods: {
      onItemClick(item) {
        console.log('click item:', item)
      },
      onBtnClick(btn, index) {
        if (btn.action === 'delete') {
          this.$createActionSheet({
            title: '确认要删除吗',
            active: 0,
            data: [
              {content: '删除'}
            ],
            onSelect: () => {
              this.swipeData.splice(index, 1)
            }
          }).show()
        }
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swipe-view
    .swipe-wrapper
      position: fixed
      top: 60px
      left: 10px
      right: 10px
      bottom: 0
      background: #fff
</style>
