<template>
  <cube-page type="scroll-nav-def" title="ScrollNav">
    <div slot="content">
      <div class="view-wrapper">
        <cube-scroll-nav @change="changeHandler">
          <cube-scroll-nav-panel
            v-for="item in data"
            :key="item.name"
            :label="item.name">
            <ul>
              <li v-for="food in item.foods">
                <div>
                  <img :src="food.icon">
                  <p>{{food.name}}</p>
                </div>
              </li>
            </ul>
          </cube-scroll-nav-panel>
        </cube-scroll-nav>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  import goodsData from 'example/data/goods-list.json'

  const goods = goodsData.goods

  export default {
    components: {
      CubePage
    },
    data() {
      return {
        data: goods
      }
    },
    methods: {
      changeHandler(label) {
        console.log('changed to:', label)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .scroll-nav-def
    background-color: #fff
    .view-wrapper
      position: fixed
      top: 44px
      left: 0
      bottom: 0
      width: 100%
    .cube-scroll-nav-bar
      border-bottom: 1px solid #f4f4f4
    .cube-scroll-nav-panel
      width: 90%
      margin: auto
      img
        width: 114px
        height: 114px
      ul
        overflow: hidden
        font-size: 14px
        line-height: 1.4
        color: #666
      li
        float: left
        width: 50%
        div
          width: 114px
          margin: 0 auto 15px
          p
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
    .cube-scroll-nav-panel-title
      padding: 15px
      font-size: 16px
      text-align: center
</style>
