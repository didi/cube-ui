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
        <li>
          <img src="./quality.png">
          <div class="text">
            <slot name="feature-1"></slot>
          </div>
        </li>
        <li>
          <img src="./experience.png">
          <div class="text">
            <slot name="feature-2"></slot>
          </div>
        </li>
        <li>
          <img src="./standard.png">
          <div class="text">
            <slot name="feature-3"></slot>
          </div>
        </li>
        <li>
          <img src="./scalability.png">
          <div class="text">
            <slot name="feature-4"></slot>
          </div>
        </li>
      </ul>
      <footer>
        <a href="https://github.com/didi">© 2012-2017 Didi Chuxing. All Rights Reserved</a>
      </footer>
    </section>
  </div>
</template>

<script>
  export default {}
</script>
<style lang="stylus">
  .home-index
    min-height: 100%
    box-sizing: border-box
    text-align: center
    background-size: cover
    > .banner
      padding: 190px 198px 210px 198px
      margin-top: -70px
      text-align: left
      color: #4B4B4C
      background: url("./cube.png") no-repeat 520px -31px
      background-size: 1515px 696px
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
    height: 22px
    a
      display: inline-block
  .features
    padding: 60px 0 20px 0
    background-color: #FBFBFB
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.1)
    @media screen and (max-width: 960px)
      margin: 30px auto 0
      padding: 30px 0
    > ul
      display: flex
      justify-content: space-around
      padding: 0 80px
      text-align: left
      color: #666
      @media screen and (max-width: 960px)
        flex-direction: column
        padding: 0
      li
        flex: 1
        max-width: 220px
        padding: 10px 16px 20px
        margin: 0 10px
        font-size: 13px
        line-height: 1.4
        text-align: center
        @media screen and (max-width: 960px)
          max-width: initial
          margin-bottom: 20px
        img
          width: 130px
          margin-bottom: 13px
          transition: all .5s
        .text
          transition: all .5s
          .ch
            padding: 7px 0
            text-align: center
            font-size: 22px
            color: #000000
          .en
            text-align: center
            font-size: 18px
            transition: all .5s
          p
            font-size: 16px
            color: #000000
            opacity: 0
            transition: all .5s
        &:hover
          p
            opacity:1
          img
              transform: scale(0.5,0.5)
          .en
            opacity: 0
          .text
            transform: translateY(-50px)
    footer
      margin-top: 60px
      font-size: 14px
      a
        color: #4B4B4C
</style>
