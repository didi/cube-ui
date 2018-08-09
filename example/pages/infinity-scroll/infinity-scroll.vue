<template>
  <cube-page type="infinity-scroll" title="InfinityScroll">
    <div slot="content">
      <div class="infinity-scroll-container">
        <cube-infinity-scroll
          ref="infinityScroll"
          @fetch="fetchData"
          :render="render">
          <!-- dom to be cloned as render template -->
          <div slot="render" class="render-template" ref="render">
            <img class="avatar" width="48" height="48">
            <div class="bubble">
              <p></p>
              <img width="300" height="300" class="picture">
              <div class="meta">
                <time class="posted-date"></time>
              </div>
            </div>
          </div>
          <!-- dom to be cloned as tombstone -->
          <div slot="tombstone" class="tombstone-template">
            <img width="48" height="48" src="unknown.jpg">
            <div>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </cube-infinity-scroll>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  import message from '../../data/message.json'

  const NUM_AVATARS = 4
  const NUM_IMAGES = 6
  const INIT_TIME = new Date().getTime()

  export default {
    created () {
      this.nextItem = 0
      this.pageNum = 0
    },
    methods: {
      fetchData (count) {
        // Fetch at least 30 or count more objects for display.
        count = Math.max(30, count)
        const infinityScroll = this.$refs.infinityScroll
        if (this.pageNum++ > 20) {
          infinityScroll.setItems(false)
        } else {
          let items = []
          for (let i = 0; i < count; i++) {
            items[i] = getItem(this.nextItem++)
          }
          Promise.all(items).then((res) => {
            infinityScroll.setItems(res)
          })
        }
      },
      render (item, div) {
        div = div || this.$refs.render.cloneNode(true)
        div.dataset.id = item.id
        div.querySelector('.avatar').src = `avatar${item.avatar}.jpg`
        div.querySelector('.bubble p').textContent = item.message
        div.querySelector('.bubble .posted-date').textContent = item.time.toString()
        let img = div.querySelector('.bubble img')
        if (item.image !== '') {
          img.style.display = ''
          img.src = item.image.src
          img.width = item.image.width
          img.height = item.image.height
        } else {
          img.src = ''
          img.style.display = 'none'
        }
        if (item.self) {
          div.classList.add('from-me')
        } else {
          div.classList.remove('from-me')
        }
        return div
      }
    },
    components: {
      CubePage
    }
  }
  function getItem(id) {
    function pickRandom(a) {
      return a[Math.floor(Math.random() * a.length)]
    }
    return new Promise(function (resolve) {
      let item = {
        id: id,
        avatar: Math.floor(Math.random() * NUM_AVATARS),
        self: Math.random() < 0.1,
        image: Math.random() < 1.0 / 20 ? Math.floor(Math.random() * NUM_IMAGES) : '',
        time: new Date(Math.floor(INIT_TIME + id * 20 * 1000 + Math.random() * 20 * 1000)),
        message: pickRandom(message)
      }
      if (item.image === '') {
        resolve(item)
      } else {
        let image = new window.Image()
        image.src = `image${item.image}.jpg`
        image.addEventListener('load', function () {
          item.image = image
          resolve(item)
        })
        image.addEventListener('error', function () {
          item.image = ''
          resolve(item)
        })
      }
    })
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .infinity-scroll-container
    position: absolute
    top: 55px
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    contain: layout
    will-change: transform
    .render-template
      display: flex
      padding: 10px 0
      width: 100%
      contain: layout
      will-change: transform
      font-size: 13px
      &.from-me
        justify-content: flex-end
        .avatar
          order: 1
          margin: 0 6px 0 20px
        .bubble
          background: #F9D7FF
          &::before
            left: 100%
            border-width: 5px
            border-color: #f9d7ff transparent transparent #f9d7ff
      .avatar
        border-radius: 50%
        margin: 0 10px 0 6px
        min-width: 48px
      .bubble
        padding: 7px 10px
        color: #333
        background: #fff
        position: relative
        max-width: 420px
        min-width: 80px
        margin: 0 5px
        &::before
          content: '';
          border-style: solid
          border-width: 0 10px 10px 0
          border-color: transparent #fff transparent transparent
          position: absolute
          top: 0
          left: -10px
        .picture
          max-width: 100%
          height: auto
        .meta
          font-size: 14px
          color: #999
          margin-top: 3px
    .tombstone-template
      display: flex
      padding: 10px 0
      width: 100%
      contain: layout
      will-change: transform
      > img
        margin: 0 6px 0 20px
        min-wdith: 48px
        border-radius: 50%
      > div
        position: relative
        max-width: 420px
        min-width: 80px
        box-sizing: border-box
        padding: 7px 10px
        margin: 0 5px
        color: #333
        background: #fff
        &::before
          content: ''
          border-style: solid
          border-width: 0 10px 10px 0
          border-color: transparent #fff transparent transparent
          position: absolute
          top: 0
          left: -10px
        > p
          width: 100%
          height: 6px
          background-color: #ccc
          margin: 6px 0
</style>
