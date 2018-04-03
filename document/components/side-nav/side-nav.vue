<template>
  <ul class="nav-ul">
    <li class="nav-li" v-for="(item, key) in data" :class="{'nav-li_open': item.isRootActive, 'nav-li_active': item.hasActived}" :key="key">
      <template v-if="item.name">
        <p class="nav-name" @click="derail(item)">{{item.name}}</p>
        <side-nav :data="item.subList"></side-nav>
      </template>
      <router-link
        active-class="nav-active"
        :to="{path: key}"
        v-else
      >{{item}}</router-link>
      <span v-if="item.angle" class="angle">{{item.angle}}</span>
      <div v-if="item.angle" class="arrow" :class="{rotate: item.isRootActive}"></div>
    </li>
  </ul>
</template>

<script>
  const COMPONENT_NAME = 'side-nav'
  export default {
    name: COMPONENT_NAME,
    props: {
      data: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      derail (item) {
        let nowActive = item.isRootActive
        this.$set(item, 'isRootActive', !nowActive)
      }
    }
  }
</script>

<style lang="stylus">
  @require "~@/common/stylus/variable.styl"
  .nav-ul
    font-size: 100%
  .nav-li
    // margin-left: .4em
    position:relative
    max-height: 75px
    overflow: hidden
    // transition: all .2s linear
    > .nav-ul
      visibility: hidden
    .angle
      position: absolute
      left: 30px
      top: 12px
      font-size: 22px
      color: #cdcdcd
    .arrow
      width: 10px
      height: 10px
      position: absolute
      right: 48px
      top: 32px
      transition: all 300ms
      &::after, &::before
        width: 0
        height: 0
        content: ""
        border: 5px solid transparent
        border-top: 5px solid #fff
        position: absolute
        top: 0
        right: 0px
      &::before
        border-top-color: #333
        top: 2px
    .rotate
      transform: rotate(180deg)
    .nav-name
      font-size: 1.5em
      border-bottom: #E3E3E3 solid 1px
      padding: 15px 0 15px 30px
      margin-left: 30px
      margin-right: 30px
      cursor: pointer
    .nav-li
      text-indent: 60px
      line-height: 30px
      max-height: none
      a
        padding: 5px 0
      .nav-name
        font-size: 1.125em
        border: none
        padding: 0
        margin: 0
        line-height: 50px
        color: #969799
      .nav-li
        text-indent: 80px
    a
      display: block
      padding: 0 10px
      box-sizing: border-box
      color: $color-grey
      &:hover, &.nav-active
        color: $color-orange
      &:hover
        border-right: 1px solid #e3e3e3
        background-color: #fbfbfb
      &.nav-active
        background-color: rgba(252, 145, 83, .2)
        &::after
          content: ""
          width: 3px
          height: 100%
          background-color: #fc9153
          position: absolute
          z-index: 1
          right: 0
          top: 0
  .nav-li_open
    // height: auto
    max-height: 2000px
    .nav-ul
      visibility: visible
  .nav-li_active
    .arrow
      &::before
        border-top-color: #fc9153
    > .nav-name
      color: #fc9153
  .nav-name
    margin: 10px 0
    font-size: $fontsize-large-xx
</style>
