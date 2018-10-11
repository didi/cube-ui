<template>
  <cube-page type="swipe-view" title="Swipe">
    <template slot="content">
      <div class="swipe-wrapper">
        <cube-scroll>
          <cube-swipe>
            <transition-group name="swipe" tag="ul">
              <li class="swipe-item-wrapper" v-for="(data,index) in swipeData" :key="data.item.id">
                <cube-swipe-item
                    ref="swipeItem"
                    :btns="data.btns"
                    :index="index"
                    @btn-click="onBtnClick">
                  <div @click="onItemClick(data.item, index)" class="item-inner">
                    <div class="icon">
                      <img width="60" height="60" :src="data.item.imgurl">
                    </div>
                    <div class="text">
                      <h2 class="item-name" v-html="data.item.name"></h2>
                      <p class="item-desc" v-html="data.item.desc"></p>
                    </div>
                  </div>
                </cube-swipe-item>
              </li>
            </transition-group>
          </cube-swipe
              >
        </cube-scroll>
      </div>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  import { customData } from '../../data/swipe'
  export default {
    data() {
      return {
        swipeData: customData
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
        } else {
          this.$refs.swipeItem[index].shrink()
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
      .swipe-item-wrapper
        overflow: hidden
        &.swipe-enter-active, &.swipe-leave-active
          transition: all .3s
          .item-inner
            transition: all .3s
        &.swipe-enter, &.swipe-leave-to
          .item-inner
            height: 0
      .item-inner
        display: flex
        box-sizing: border-box
        align-items: center
        padding: 0 20px
        height: 80px
        .icon
          flex: 0 0 60px
          width: 60px
          padding-right: 20px
        .text
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          font-size: 14px
          .item-name
            margin-bottom: 10px
            color: #333
          .item-desc
            color: #666

</style>
