<template>
  <cube-page type="recycle-list" title="RecycleList">
    <div slot="content">
      <div class="view-wrapper">
        <cube-recycle-list class="list" :infinite="infinite" :size="size" :on-fetch="onFetch">
          <template slot="tombstone" slot-scope="props">
            <div class="item tombstone">
              <div class="avatar"></div>
              <div class="bubble">
                <p></p>
                <p></p>
                <p></p>
                <div class="meta">
                  <time class="posted-date"></time>
                </div>
              </div>
            </div>
          </template>
          <template slot="item" slot-scope="{ data }">
            <div :id="data.id" class="item" @click="handleClick(data)">
              <div class="avatar" :style="{backgroundImage: 'url(' + (data.avatar || '') + ')'}"></div>
              <div class="bubble">
                <p>{{ data.msg }}</p>
                <div class="meta">
                  <time class="posted-date">{{ data.time }}</time>
                </div>
              </div>
            </div>
          </template>
          <!-- <div slot="spinner">Loading Data</div> -->
          <div slot="noMore">没有更多数据了</div>
        </cube-recycle-list>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  import Mock from '../../data/messages.js'

  const AVATAR_LENGTH = 6
  export default {
    data() {
      return {
        // data
        initTime: new Date().getTime(),
        id: 0,
        size: 50,
        infinite: true
      }
    },
    components: {
      CubePage
    },
    methods: {
      getItem(id) {
        const avatar = Math.floor(Math.random() * AVATAR_LENGTH)
        const msg = Mock.messages[Math.floor(Math.random() * Mock.messages.length)]
        return {
          id,
          avatar: require(`./avatar${avatar}.png`),
          msg: msg,
          time: new Date(Math.floor(this.initTime + id * this.size * 1000 + Math.random() * this.size * 1000)).toString()
        }
      },
      onFetch() {
        let items = []
        return new Promise((resolve) => {
          setTimeout(() => {
            for (let i = 0; i < this.size; i++) {
              items.push(this.getItem(this.id++))
            }
            resolve(items)
          }, 1000)
        })
      },
      handleClick(data) {
        console.log(data)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .view-wrapper
    position: fixed
    top: 54px
    left: 0
    bottom: 0
    width: 100%
  .list
    width: 375px
    max-width: 100%
    height: 100%
    margin: 0 auto
    padding: 0
    border: 1px solid #ddd
    list-style-type: none
    text-align: center
    .item
      display: flex
      padding: 10px 0
      width: 100%
      text-align: left
      .avatar
        border-radius: 50%
        margin-left: 15px
        margin-right: 6px
        min-width: 48px
        width: 48px
        height: 48px
        background-image: url('./unknown.jpg')
        background-size: cover
        outline: none
      p
        margin: 0
        word-wrap: break-word
        font-size: 14px
      &.tombstone
        p
          width: 100%
          height: 0.5em
          background-color: #ccc
          margin: 0.5em 0
      .bubble
        padding: 7px 10px
        color: #333
        background: #fff
        box-shadow: 0 3px 2px rgba(0, 0, 0, 0.1)
        position: relative
        max-width: 420px
        min-width: 80px
        margin: 0 20px 0 5px
        &:before
          content: ''
          border-style: solid
          border-width: 0 10px 10px 0
          border-color: transparent #fff transparent transparent
          position: absolute
          top: 0
          left: -10px
      .meta
        font-size: 0.8rem
        color: #999
        margin-top: 3px
</style>
