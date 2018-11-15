<template>
  <div class="cube-recycle-list">
    <div class="cube-recycle-list-main">
      <div class="cube-recycle-list-items" :style="{height: heights + 'px'}">
        <div
          v-for="item in visibleItems"
          class="cube-recycle-list-item"
          :style="{transform: 'translate(0,' + item.top + 'px)'}"
        >
          <div
            v-if="infinite"
            :class="{'cube-recycle-list-transition': infinite}"
            :style="{opacity: +!item.loaded}"
          >
            <slot name="tombstone"></slot>
          </div>
          <div
            :class="{'cube-recycle-list-transition': infinite}"
            :style="{opacity: item.loaded}"
          >
            <slot name="item" :data="item.data"></slot>
          </div>
        </div>

        <!-- preloads item for get its height, remove it after caculating height-->
        <div class="cube-recycle-list-pool">
          <div
            class="cube-recycle-list-item cube-recycle-list-invisible"
            v-if="!item.isTombstone && !item.height"
            :ref="'preloads'+index"
            v-for="(item, index) in items"
          >
            <slot name="item" :data="item.data"></slot>
          </div>
          <div ref="tomb" class="cube-recycle-list-item cube-recycle-list-invisible">
            <slot name="tombstone"></slot>
          </div>
        </div>
      </div>
      <div
        v-if="!infinite"
        class="cube-recycle-list-loading"
        :style="{visibility: loading ? 'visible' : 'hidden'}"
      >
        <slot name="spinner">
          <div class="cube-recycle-list-loading-content">
            <cube-loading class="spinner"></cube-loading>
          </div>
        </slot>
      </div>

      <div v-show="noMore" class="cube-recycle-list-noMore">
        <slot name="noMore" />
      </div>
    </div>
    <div class="cube-recycle-list-fake"></div>
  </div>
</template>

<script>
  import CubeLoading from '../loading/loading.vue'
  import { warn } from '../../common/helpers/debug.js'
  import { isUndef } from '../../common/helpers/util.js'

  const COMPONENT_NAME = 'cube-recycle-list'
  const PROMISE_ERROR = 'requires a Promise polyfill in this browser.'
  const EVENT_SCROLL = 'scroll'
  const EVENT_RESIZE = 'resize'

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        items: [],
        list: [],
        heights: 0,
        startIndex: 0,
        loadings: [],
        startOffset: 0,
        noMore: false
      }
    },
    props: {
      infinite: {
        type: Boolean,
        default: false
      },
      size: {
        type: Number,
        default: 20
      },
      offset: {
        type: Number,
        default: 100
      },
      onFetch: {
        type: Function,
        required: true
      }
    },
    computed: {
      visibleItems() {
        return this.items.slice(Math.max(0, this.startIndex - this.size), Math.min(this.items.length, this.startIndex + this.size))
      },
      tombHeight() {
        return this.infinite ? this.$refs.tomb && this.$refs.tomb.offsetHeight : 0
      },
      loading() {
        return this.loadings.length
      }
    },
    watch: {
      list (newV) {
        if (newV.length) {
          this.loadings.pop()
          if (!this.loading) {
            this.loadItems()
          }
        }
      },
      items (newV) {
        if (newV.length > this.list.length) {
          this.getItems()
        }
      }
    },
    created () {
      this.checkPromiseCompatibility()
    },
    mounted() {
      this.$el.addEventListener(EVENT_SCROLL, this._onScroll)
      window.addEventListener(EVENT_RESIZE, this._onResize)
      this.init()
    },
    beforeDestroy () {
      this.$el.removeEventListener(EVENT_SCROLL, this._onScroll)
      window.removeEventListener(EVENT_RESIZE, this._onResize)
    },
    methods: {
      checkPromiseCompatibility () {
        /* istanbul ignore if */
        if (isUndef(window.Promise)) {
          warn(PROMISE_ERROR)
        }
      },
      init() {
        this.load()
      },
      load() {
        if (this.infinite) {
          // increase capacity of items to display tombstone
          this.items.length += this.size
          this.loadItems()
        } else if (!this.loading) {
          this.getItems()
        }
      },
      getItems() {
        this.loadings.push('pending')
        this.onFetch().then((res) => {
          /* istanbul ignore if */
          if (!res) {
            this.noMore = true
            this.loadings.pop()
          } else {
            this.list = this.list.concat(res)
          }
        })
      },
      loadItems(isResize) {
        let promiseTasks = []
        let start = 0
        let end = this.infinite ? this.items.length : this.list.length
        let item
        for (let i = start; i < end; i++) {
          item = this.items[i]
          /* istanbul ignore if */
          if (item && item.loaded) {
            continue
          }
          this.setItem(i, this.list[i])
          // get each item's height in nextTick
          promiseTasks.push(this.$nextTick().then(() => {
            this.updateItemHeight(i)
          }))
        }
        // update items top and full list height
        window.Promise.all(promiseTasks).then(() => {
          this.updateItemTop()
        })
      },
      setItem(index, data) {
        this.$set(this.items, index, {
          data: data || {},
          height: 0,
          top: -1000,
          isTombstone: !data,
          loaded: data ? 1 : 0
        })
      },
      updateItemHeight(index) {
        // update item height
        let cur = this.items[index]
        let dom = this.$refs['preloads' + index]
        if (dom && dom[0]) {
          cur.height = dom[0].offsetHeight
        } else {
          // tombstone
          cur.height = this.tombHeight
        }
      },
      updateItemTop() {
        // loop all items to update item top and list height
        this.heights = 0
        for (let i = 0; i < this.items.length; i++) {
          let pre = this.items[i - 1]
          this.items[i].top = pre ? pre.top + pre.height : 0
          this.heights += this.items[i].height
        }
        // update scroll top when needed
        if (this.startOffset) {
          this.setScrollTop()
        }
        this.updateIndex()
      },
      updateIndex() {
        // update visible items start index
        let top = this.$el.scrollTop
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].top > top) {
            this.startIndex = Math.max(0, i - 1)
            break
          }
        }
      },
      getStartItemOffset() {
        if (this.items[this.startIndex]) {
          this.startOffset = this.items[this.startIndex].top - this.$el.scrollTop
        }
      },
      setScrollTop() {
        if (this.items[this.startIndex]) {
          this.$el.scrollTop = this.items[this.startIndex].top - this.startOffset
          // reset start item offset
          this.startOffset = 0
        }
      },
      _onScroll() {
        // trigger load
        if (this.$el.scrollTop + this.$el.offsetHeight > this.heights - this.offset) {
          this.load()
        }
        this.updateIndex()
      },
      _onResize() {
        this.getStartItemOffset()
        this.items.forEach((item) => {
          item.loaded = false
        })
        this.loadItems(true)
      }
    },
    components: {
      CubeLoading
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cube-recycle-list
    position: relative
    height: 100%
    overflow-x: hidden
    overflow-y: auto
    -webkit-overflow-scrolling: touch

  .cube-recycle-list-main
    min-height: 100%

  .cube-recycle-list-fake
    height: 1px

  .cube-recycle-list-invisible
    top: -1000px
    visibility: hidden

  .cube-recycle-list-item
    width: 100%
    position: absolute
    box-sizing: border-box

  .cube-recycle-list-transition
    position: absolute
    opacity: 0
    transition-property: opacity
    transition-duration: 500ms

  .cube-recycle-list-loading
    overflow: hidden

  .cube-recycle-list-loading-content
    text-align: center
    .spinner
      margin: 10px auto
      display: flex
      justify-content: center

  .cube-recycle-list-noMore
    overflow: hidden
    margin: 10px auto
    height: 20px
    text-align: center
</style>

