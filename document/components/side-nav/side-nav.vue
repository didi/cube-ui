<template>
  <ul class="nav-ul">
    <li class="nav-li" v-for="(item, key) in data" :class="{open: item.isRootActive}" :key="key">
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
    .nav-ul
      font-size: 96%
  .nav-li
    // margin-left: .4em
    margin-bottom: 10px
    position:relative
    max-height: 74px
    overflow: hidden
    trasition: all 0.2s
    .angle
      position: absolute
      left: 30px
      top: 0
      font-size: 22px
      color: #000000
    .arrow
      width: 10px
      height: 10px
      position: absolute
      right: 17px
      top: 32px
      transition: all 300ms
      &::after, &::before
        width: 0
        height: 0
        content: ' '
        border: 5px solid transparent
        border-top: 5px solid #fff
        position: absolute
        top: 0
        right: 0px
      &::before
        border-top-color: #000000
        top: 2px
    .rotate
      transform: rotate(180deg)
    .nav-name
      font-size: $fontsize-large-xxx
      color: #000000
      border-bottom: #E3E3E3 solid 1px
      padding: 15px 0 15px 30px
      margin-left: 30px
      cursor: pointer
    .nav-li
      text-indent: 60px
      line-height: 30px
      max-height: 2000px
      a
        padding: 5px 0
      .nav-name
        font-size: $fontsize-large-x
        color: #000000
        border: none
        padding: 0
        margin: 0
        line-height: 50px
      .nav-li
        text-indent: 80px
    a
      display: block
      padding: 0 10px
      box-sizing: border-box
      color: $color-grey
      &:hover, &.nav-active
        color: $color-orange
      &.nav-active
        &::after
          content: ""
          width: 20px
          height: 100%
          background-color: #FFC9A9
          position: absolute
          z-index: 1
          left: 0
          top: 0
  .open
    // height: auto
    max-height: 2000px
  .nav-name
    margin: 10px 0
    font-size: $fontsize-large-xx
</style>
