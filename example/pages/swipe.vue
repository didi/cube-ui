<template>
  <cube-page type="swipe-view" title="Swipe">
    <template slot="content">
      <div class="swipe-wrapper">
        <cube-scroll>
          <cube-swipe :data="swipeData"></cube-swipe>
        </cube-scroll>
      </div>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  export default {
    data() {
      return {
        swipeData: [{
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }, {
          item: {
            text: '测试',
            val: 1
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
        }]
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
</style>
