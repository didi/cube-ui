<template>
  <div class="cube-infinity-scroll">
    <div class="cube-infinity-scroll-template" v-once>
      <slot name="render"></slot>
      <div ref="tombstone" class="cube-infinity-scroll-tombstone tombstone">
        <slot name="tombstone">
          <div class="cube-infinity-scroll-tombstone_default"></div>
        </slot>
      </div>
    </div>
    <div class="cube-infinity-scroll-wrapper" ref="wrapper">
      <div class="cube-infinity-scroll-list-content">
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import scroll from '../../common/mixins/scroll'

  const COMPONENT_NAME = 'cube-infinity-scroll'
  const DIRECTION_V = 'vertical'

  const EVENT_FETCH = 'fetch'

  const DEFAULT_OPTIONS = {
    observeDOM: false,
    click: true,
    scrollY: DIRECTION_V
  }

  export default {
    name: COMPONENT_NAME,
    mixins: [scroll],
    props: {
      render: {
        type: Function,
        required: true
      }
    },
    mounted () {
      this._createInfinityScroll()
    },
    data () {
      return {
        items: []
      }
    },
    methods: {
      _createInfinityScroll () {
        let options = Object.assign({}, DEFAULT_OPTIONS, this.options, {
          infinity: {
            render: this.render,
            createTombstone: () => {
              return this.$refs.tombstone.cloneNode(true)
            },
            fetch: (amount) => {
              return new Promise((resolve, reject) => {
                const unwatch = this.$watch('items', (newItems) => {
                  resolve(newItems)
                  unwatch()
                })
                this.$emit(EVENT_FETCH, amount)
              })
            }
          }
        })
        this.infinityScroll = new BScroll(this.$refs.wrapper, options)
      },
      setItems (items) {
        this.items = items
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  .cube-infinity-scroll
    position: relative
    height: 100%
    overflow: hidden
    .cube-infinity-scroll-template
      display none
    .cube-infinity-scroll-tombstone
      width: 100%
      padding: 10px 0
    .cube-infinity-scroll-tombstone_default
      background-color: $color-light-grey
      width: 90%
      margin: 0 auto
      height: 20px
    .cube-infinity-scroll-wrapper
      position: relative
      height: 100%
      overflow: hidden
      .cube-infinity-scroll-list-content
        position: relative
        z-index: 1
</style>
