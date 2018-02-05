<template>
  <cube-page type="swipe-view" title="Swipe">
    <template slot="content">
      <div class="swipe-wrapper">
        <cube-scroll>
          <cube-swipe
              :data="swipeData"
          >
            <transition-group name="swipe" tag="ul">
              <li class="swipe-item-wrapper" v-for="(data,index) in swipeData" :key="data.item.id">
                <cube-swipe-item
                    ref="swipeItem"
                    :btns="data.btns"
                    :index="index"
                    @btn-click="onBtnClick"
                    @active="onItemActive(index)">
                  <div @click="onItemClick(data.item, index)" class="item-inner">
                    <div class="icon">
                      <img width="60" height="60" :src="data.item.imgurl">
                    </div>
                    <div class="text">
                      <h2 class="item-name" v-html="data.item.name"></h2>
                      <p class="item-desc" v-html="data.item.desc"></p>
                    </div>
                  </div>
                </cube-swipe-item>
              </li>
            </transition-group>
          </cube-swipe>
        </cube-scroll>
      </div>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  export default {
    data() {
      return {
        swipeData: [
          {
            item: {
              id: '3646653877',
              name: '还不是因为你长得不好看',
              desc: '伤感：歌词再狠，也抵不过现实伤人',
              imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          },
          {
            item: {
              id: '1789676645',
              name: '秋水浮萍任飘渺',
              desc: '『武侠配乐』快意恩仇江湖情',
              imgurl: 'http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          },
          {
            item: {
              id: '3649034125',
              name: '念葳蕊',
              desc: '江海迦：热恋后哼一首歌为自己悲悯的歌',
              imgurl: 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          },
          {
            item: {
              id: '2977781451',
              name: '风少',
              desc: '午后甜点：静听浓情爵士，于悠然中尽享',
              imgurl: 'http://p.qpic.cn/music_cover/llTQ9l2AeicK2OLIORnsUdtbhlNRGF89NBDI6SoBxEIzhAlrmV1SmGg/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          },
          {
            item: {
              id: '2691498608',
              name: '虛榮少女',
              desc: '感性强盗｜强势洗榜的那些韩国抒情音乐',
              imgurl: 'http://p.qpic.cn/music_cover/icLTHicH8iakBFAJbiazGT3DnywHfOoiaVzdZWJ4pVcDdoVCqlU5hLx8K7A/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          },
          {
            item: {
              id: '3703029362',
              name: '哔咯独角兽',
              desc: '温情摇滚｜安抚夜色弥漫时落寞的心',
              imgurl: 'http://p.qpic.cn/music_cover/0yiaX8d9LSmnROyId1RsUUwklzSKKp7RSanBAJ89We5I4kMwdnH5yeg/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          },
          {
            item: {
              id: '3606666961',
              name: '毕业雨季',
              desc: '小资情调：何为亏欠文艺青年心中的体面',
              imgurl: 'http://p.qpic.cn/music_cover/SXTicaprnQbfAyiaibTsguPlPQK4ZBwicp09O22qKwnTJaO10kp2le37Ww/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          },
          {
            item: {
              id: '3604823742',
              name: '冷门单曲酱',
              desc: '放假挤火车回家：等车时的轻快曲',
              imgurl: 'http://p.qpic.cn/music_cover/lricrZ3ca62ybvZbWYjtYa9d3Biab7MTiaJhX9owcjdkv5HMxDEunm7tg/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          },
          {
            item: {
              id: '1746389460',
              name: '私に闻いて风i',
              desc: '追忆续篇：少女漫中关于邂逅他的故事',
              imgurl: 'http://p.qpic.cn/music_cover/qH8rLHHhL8O8Iibm56uPzJy4mNzibugoib19FAujo6GdTXAAvhicw7Js0Q/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          },
          {
            item: {
              id: '1746020155',
              name: '同位',
              desc: '优雅的音乐贵族 大提琴',
              imgurl: 'http://p.qpic.cn/music_cover/e4us58fDgLVdxdbgmSUdTADM7Sl88AfGK3qQqibxmqpqRnmSGHaFaEQ/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          },
          {
            item: {
              id: '2949232733',
              name: '香草拿铁',
              desc: '超级碗中场秀嘉宾歌曲集',
              imgurl: 'http://p.qpic.cn/music_cover/V34Wl85ZuJRskg3Ds3R8yyddp8gI2icb7wXicN8ZEzJZP0icnwHyzNzhQ/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          },
          {
            item: {
              id: '3691421503',
              name: 'L岺',
              desc: '寒假赖床指南:吸猫！吸猫！吸猫！',
              imgurl: 'http://p.qpic.cn/music_cover/Ay2w92PeiaO57pZWMwecv6SEWibhUAoWKzkmWgbtcfCsibQYt8bZtq2PA/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          },
          {
            item: {
              id: '2072789141',
              name: 'D.Va',
              desc: '中国风电音：敢问上天，是否有仙？',
              imgurl: 'http://p.qpic.cn/music_cover/QlZibnBVmII60BjTttickJO9MTQDoTRFvboeks5LDkOJHNEjao8f9t6Q/600?n=1'
            },
            btns: [
              {
                action: 'clear',
                text: '不再关注',
                color: '#c8c7cd'
              },
              {
                action: 'delete',
                text: '删除',
                color: '#ff3a32'
              }
            ]
          }
        ]
      }
    },
    created() {
      this.activeIndex = -1
    },
    methods: {
      onItemClick(item) {
        console.log('click item:', item)
      },
      onBtnClick(btn, index) {
        if (btn.action === 'delete') {
          this.$createActionSheet({
            title: '确认要删除吗',
            active: 0,
            data: [
              {content: '删除'}
            ],
            onSelect: () => {
              this.swipeData.splice(index, 1)
            }
          }).show()
        } else {
          this.$refs.swipeItem[index].shrink()
        }
      },
      onItemActive(index) {
        if (index === this.activeIndex) {
          return
        }
        if (this.activeIndex !== -1) {
          const activeItem = this.$refs.swipeItem[this.activeIndex]
          activeItem.shrink()
        }
        this.activeIndex = index
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swipe-view
    .swipe-wrapper
      position: fixed
      top: 60px
      left: 10px
      right: 10px
      bottom: 0
      background: #fff
      .swipe-item-wrapper
        overflow: hidden
        &.swipe-enter-active, &.swipe-leave-active
          transition: all .3s
          .item-inner
            transition: all .3s
        &.swipe-enter, &.swipe-leave-to
          .item-inner
            height: 0
      .item-inner
        display: flex
        box-sizing: border-box
        align-items: center
        padding: 0 20px
        height: 80px
        .icon
          flex: 0 0 60px
          width: 60px
          padding-right: 20px
        .text
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          font-size: 14px
          .item-name
            margin-bottom: 10px
            color: #333
          .item-desc
            color: #666

</style>
