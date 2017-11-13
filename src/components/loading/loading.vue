<template>
  <div class="cube-loading">
    <span class="spinner-root" :style="style">
      <i class="spinner-blade" v-for="item in balde"></i>
    </span>
  </div>
</template>
<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'cube-loading'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        balde: 12
      }
    },
    props: {
      size: {
        type: Number,
        default: 24
      }
    },
    computed: {
      style() {
        const value = `${this.size}px`
        return {
          width: value,
          height: value
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cube-loading
    .spinner-root
      position: relative
      display: inline-block
      width: 20px
      height: 20px
      .spinner-blade 
        position: absolute
        left: 44.5%
        top: 37%
        width: 10%
        height: 25%
        border-radius: 50%/20%
        background-color: currentColor
        animation: spinner-fade 1s linear infinite
      .spinner-blade:nth-child(1)
        animation-delay: -1.66667s
        transform: rotate(30deg) translateY(-150%)
      .spinner-blade:nth-child(2)
        animation-delay: -1.58333s
        transform: rotate(60deg) translateY(-150%)
      .spinner-blade:nth-child(3)
        animation-delay: -1.5s
        transform: rotate(90deg) translateY(-150%)
      .spinner-blade:nth-child(4)
        animation-delay: -1.41667s
        transform: rotate(120deg) translateY(-150%)
      .spinner-blade:nth-child(5)
        animation-delay: -1.33333s
        transform: rotate(150deg) translateY(-150%)
      .spinner-blade:nth-child(6)
        animation-delay: -1.25s
        transform: rotate(180deg) translateY(-150%)
      .spinner-blade:nth-child(7)
        animation-delay: -1.16667s
        transform: rotate(210deg) translateY(-150%)
      .spinner-blade:nth-child(8)
        animation-delay: -1.08333s
        transform: rotate(240deg) translateY(-150%)
      .spinner-blade:nth-child(9)
        animation-delay: -1s
        transform: rotate(270deg) translateY(-150%)
      .spinner-blade:nth-child(10)
        animation-delay: -.91667s
        transform: rotate(300deg) translateY(-150%)
      .spinner-blade:nth-child(11)
        animation-delay: -.83333s
        transform: rotate(330deg) translateY(-150%)
      .spinner-blade:nth-child(12)
        animation-delay: -.75s
        transform: rotate(1turn) translateY(-150%)
  @keyframes spinner-fade
    0% 
      opacity: .85
    50% 
      opacity: .25
    100% 
      opacity: .25

</style>
