<template>
  <div class="home-index">
    <div class="banner">
      <h2>Cube UI</h2>
      <p>
        <slot name="desc"></slot>
      </p>
      <div class="ghbtns">
        <a href="https://github.com/didi/cube-ui"><img src="https://img.shields.io/github/stars/didi/cube-ui.svg?style=social&label=Star"></a>
        <a href="https://github.com/didi/cube-ui"><img src="https://img.shields.io/github/forks/didi/cube-ui.svg?style=social&label=Fork"></a>
        <a href="https://github.com/didi/cube-ui"><img src="https://img.shields.io/github/watchers/wepyjs/wepy.svg?style=social&label=Watch"></a>
      </div>
    </div>
    <section class="features">
      <ul>
        <slot name="features"></slot>
      </ul>
    </section>
    <footer>
      <a href="https://github.com/didi">© DiDi</a>
    </footer>
  </div>
</template>

<script>
  export default {
  }
</script>
<style lang="stylus">
  .home-index
    position: relative
    padding-bottom: 36px
    min-height: 100%
    box-sizing: border-box
    overflow: hidden
    text-align: center
    background-size: cover
    > .banner
      padding: 120px 198px 220px 198px
      text-align: left
      color: #4B4B4C
      @media screen and (max-width: 960px)
        padding: 50px 0 30px 0
        text-align: center
      h2
        font-size: 60px
        @media screen and (max-width: 960px)
          font-size: 30px
      > p
        margin: 30px 0
        font-size: 18px
  .ghbtns
    a
      display: inline-block
  .features
    padding: 80px 50px
    background-color: #FBFBFB
    box-shadow 0 0 12px 0 rgba(0, 0, 0, 0.1)
    @media screen and (max-width: 960px)
      margin: 30px auto 10px
      padding: 0
      box-shadow: none
    > ul
      display: flex
      padding: 0 10px
      align-items: stretch
      justify-content: center
      text-align: left
      color: #666
      @media screen and (max-width: 960px)
        flex-direction: column
      li
        flex: 1
        max-width: 160px
        padding: 10px 16px 20px
        margin: 0 10px
        border-top: 1px solid #4a4c5b
        font-size: 13px
        line-height: 1.4
        background: #fff
        border-radius: 2px
        box-shadow: 0 0 3px rgba(0, 0, 0, .1)
        @media screen and (max-width: 960px)
          max-width: initial
          margin-bottom: 20px
        h1
          padding: 10px 0
          text-align: center
          font-size: 15px

    footer
      position: absolute
      bottom: 0
      width: 100%
      background-color: #FBFBFB
      a
        display: inline-block
        padding: 10px 20px
        color: #666
</style>
