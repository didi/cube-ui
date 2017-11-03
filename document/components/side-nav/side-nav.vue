<template>
  <ul class="nav-ul">
    <li class="nav-li" v-for="(item, key) in data" :key="key">
      <template v-if="item.name">
        <p class="nav-name">{{item.name}}</p>
        <side-nav :data="item.subList"></side-nav>
      </template>
      <router-link
        active-class="nav-active"
        :to="{path: key}"
        v-else
      >{{item}}</router-link>
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
    }
  }
</script>

<style lang="stylus">
  @import "~@/common/stylus/variable.styl"
  .nav-ul
    font-size: 100%
    .nav-ul
      font-size: 96%
  .nav-li
    margin-left: .4em
    margin-bottom: 10px
    .nav-li
      a
        padding: 5px
      .nav-name
        font-size: $fontsize-small
        color: $color-light-grey
    a
      display: block
      padding: 0 10px
      box-sizing: border-box
      color: $color-grey
      &:hover, &.nav-active
        color: $color-orange
      &.nav-active
        border-right: 3px solid $color-orange
  .nav-name
    margin: 10px 0
    font-size: $fontsize-large-xx
</style>
