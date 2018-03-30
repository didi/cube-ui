<template>
  <div class="home-index">
    <div class="banner">
      <h2>Cube UI</h2>
      <p>
        <slot name="desc"></slot>
      </p>
      <div class="ghbtns">
        <Badge type="Star"></Badge>
        <Badge type="Fork"></Badge>
        <Badge type="Watch"></Badge>
      </div>
      <div class="rec-btns">
        <slot name="rec-btns"></slot>
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
    </section>
    <sfooter />
  </div>
</template>

<script>
  import Badge from '../badge/badge.vue'
  import Sfooter from '../footer/footer.vue'

  export default {
    components: {
      Badge,
      Sfooter
    }
  }
</script>
<style lang="stylus">
@require "~@/common/stylus/variable.styl"

  .home-index
    min-height: 100%
    box-sizing: border-box
    text-align: center
    background-size: cover
    > .banner
      padding: 190px 140px 70px
      margin-top: -70px
      text-align: left
      color: #4B4B4C
      background: url("./cube.png") no-repeat 520px -10px
      background-size: 1250px
      @media screen and (max-width: 960px)
        padding: 254px 32px 20px
        margin-top: -48px
        text-align: left
        background-position: 6% 0
        background-size: 186%
        .ghbtns
          margin-left: -5px
          margin-right: -5px
        .btn-link
          width: 140px
          margin-right: 15px
          font-size: 14px
          border-width: 1px
      h2
        font-size: 60px
        color: #333
        @media screen and (max-width: 960px)
          font-size: 30px
      > p
        margin: 30px 0 20px 0
        font-size: 18px
        @media screen and (max-width: 960px)
          font-size: 12px
  .ghbtns
    font-size: 0
  .rec-btns
    margin-top: 36px
  .btn-link
    display: inline-block
    box-sizing: border-box
    width: 164px
    height: 42px
    text-align: center
    line-height: 38px
    font-size: $fontsize-large-x
    color: #fff
    background-color: #89C6FF
    border-radius: 3px
    margin-bottom: 10px
    margin-right: 18px
    border: 2px solid #89C6FF
    &:hover
      color: #fff
      background-color: #80c1ff
      border-color: #80c1ff
    &:last-child
      margin-right 0!important
  .btn-active
    color: #89c6ff
    background-color: white
    &:hover
      color: #137dc6
      background-color: #fff
  .features
    margin: 0 90px
    box-shadow: 0 4px 30px 0 rgba(66, 81, 148, 0.1)
    @media screen and (max-width: 960px)
      margin: 10px auto 0
      box-shadow: none
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
        padding: 60px 16px 20px
        margin: 0 10px
        font-size: 13px
        line-height: 1.4
        text-align: center
        @media screen and (max-width: 960px)
          display: flex
          align-items: center
          max-width: initial
          padding-top: 20px
          text-align: left
          .text
            flex: 1
            margin-top: -7px
        img
          width: 130px
          margin-bottom: 13px
          transition: all .5s
          @media screen and (max-width: 960px)
            width: 90px
            height: 90px
            margin-right: 16px
            margin-bottom: 0
        .text
          transition: all .5s
          .ch
            padding: 7px 0
            font-size: 22px
            color: #333
          .en
            font-size: 18px
            transition: all .5s
          p
            margin-top: -18px
            font-size: 14px
            opacity: 0
            transition: all .5s
          @media screen and (max-width: 960px)
            .ch
              font-size: 15px
            .en
              display: none
            p
              margin-top: 0
              opacity: 1
              font-size: 12px
        @media screen and (min-width: 961px)
          &:hover
            p
              opacity:1
            img
                transform: scale(0.5,0.5)
            .en
              opacity: 0
            .text
              transform: translateY(-50px)
</style>
