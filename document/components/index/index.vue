<template>
  <div class="home-index">
    <h2>
      <img src="//static.galileo.xiaojukeji.com/static/tms/shield/z/mofang/mofang/images/mofang_logo.png">
      <p>cube-ui</p>
    </h2>
    <p>
      <slot name="desc"></slot>
    </p>
    <div class="ghbtns">
      <iframe src="https://ghbtns.com/github-btn.html?user=didi&repo=cube-ui&type=star&count=true" frameborder="0" scrolling="0"></iframe>
      <iframe src="https://ghbtns.com/github-btn.html?user=didi&repo=cube-ui&type=fork&count=true" frameborder="0" scrolling="0"></iframe>
    </div>
    <section class="features">
<!--       <h3>Features</h3> -->
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
    background: url("//webapp.didistatic.com/static/webapp/shield/cube-ui-home-index-background.png") no-repeat fixed center
    background-size: cover
    > h2
      margin: 80px 0 20px
      font-size: 30px
      @media screen and (max-width: 960px)
        margin: 50px 0 10px
      p
        margin-top: 30px
    > p
      margin: 20px 0
    > footer
      position: absolute
      bottom: 0
      width: 100%
      a
        display: inline-block
        padding: 10px 20px
        color: #666
  .ghbtns
    iframe
      width: 56px
      height: 20px
      &:last-child
        margin-left: 40px
  .features
    margin: 60px auto 40px
    @media screen and (max-width: 960px)
      margin: 30px auto 10px
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
</style>
