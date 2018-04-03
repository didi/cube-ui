<template>
  <cube-page type="index-list" title="IndexList">
    <div slot="content">
      <div class="view-wrapper">
        <div class="index-list-wrapper custom">
          <cube-index-list :data="singerData">
            <cube-index-list-group v-for="(group, index) in singerData" :key="index" :group="group">
              <cube-index-list-item v-for="(item, index) in group.items" :key="index" :item="item" @select="selectItem">
                <div class="custom-item">
                  <img class="avatar" v-lazy="item.avatar">
                  <span class="name">{{item.name}}</span>
                </div>
              </cube-index-list-item>
            </cube-index-list-group>
            <span class="custom-nav-item" slot="nav-item" slot-scope="props">{{props.item}}</span>
          </cube-index-list>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  import singerData from '../../data/singer.json'

  export default {
    components: {
      CubePage
    },
    data() {
      return {
        singerData: singerData
      }
    },
    methods: {
      selectItem(item) {
        console.log(item.name)
      },
      clickTitle(title) {
        console.log(title)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../../src/common/stylus/variable.styl"

  .view-wrapper
    position: fixed
    top: 54px
    left: 0
    bottom: 0
    width: 100%
    .index-list-wrapper
      height: 98%
      width: 94%
      margin: 0 auto
      overflow: hidden
      &.custom
        .cube-index-list-content
          background-color: #222
          color: #909090
        .cube-index-list-group
          padding-bottom: 30px
        .cube-index-list-anchor
          background-color: #333
          height: 30px
          line-height: 30px
          padding: 0 0 0 20px
        .custom-item
          display: flex
          align-items: center
          padding: 20px 0 0 30px
          .avatar
            width: 50px
            height: 50px
            border-radius: 50%
          .name
            margin-left: 20px
            color: $color-text-l
            font-size: $font-size-medium
        .cube-index-list-nav
          padding: 20px 0
          border-radius: 10px
          background: rgba(0,0,0,.3)
          >ul
            >li
              padding: 3px
              &.active
                .custom-nav-item
                  color: #ffcd32
        .custom-nav-item
          font-size: 12px
          color: #909090
</style>
