import Vue from 'vue2'
import ImagePreview from '@/modules/image-preview'
import instantiateComponent from '@/common/helpers/instantiate-component'
import {
  dispatchSwipe,
  dispatchDblclick,
  dispatchTap,
  dispatchMoveAction
} from '../utils/event'

const imgs = [
  'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mpd5uj21hc0tyws2.jpg',
  'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0ncnnej21hc0zetxo.jpg',
  'https://wx1.sinaimg.cn/mw1024/686d7361ly1fpha0mqvu5j21hc0zkgzz.jpg'
]
describe('ImagePreview', () => {
  describe('ImagePreview.vue', () => {
    let vm
    afterEach(() => {
      if (vm) {
        vm.$parent.destroy()
        vm = null
      }
    })
    it('use', () => {
      Vue.use(ImagePreview)
      expect(Vue.component(ImagePreview.name))
        .to.be.a('function')
    })
    it('should render correct contents', function (done) {
      this.timeout(10000)
      vm = createImagePreview({
        initialIndex: 0
      })
      expect(vm.$el.className)
        .to.equal('cube-popup cube-popup_mask cube-image-preview')
      expect(vm.$el.querySelector('.cube-slide'))
        .to.be.null
      vm.show()
      setTimeout(() => {
        expect(vm.$el.querySelector('.cube-slide'))
          .not.to.be.null
        const items = vm.$el.querySelectorAll('.cube-slide-item')
        // for loop
        expect(items.length)
          .to.equal(3 + 2)
        expect(items[2].querySelector('.cube-image-preview-img').src)
          .to.equal(imgs[1])
        expect(vm.$el.querySelector('.cube-image-preview-counter').textContent.trim())
          .to.equal('1/3')
        vm.$updateProps({
          initialIndex: 1
        })
        setTimeout(() => {
          expect(vm.$el.querySelector('.cube-image-preview-counter').textContent.trim())
            .to.equal('2/3')
          vm.next()
          setTimeout(() => {
            expect(vm.$el.querySelector('.cube-image-preview-counter').textContent.trim())
              .to.equal('3/3')
            vm.goTo(0)
            setTimeout(() => {
              expect(vm.$el.querySelector('.cube-image-preview-counter').textContent.trim())
                .to.equal('1/3')
              vm.hide()
              vm.$nextTick(() => {
                expect(vm.$el.querySelector('.cube-slide'))
                  .to.be.null
                done()
              })
            }, 800)
          }, 800)
        }, 800)
      })
    })

    it('should trigger events', function (done) {
      this.timeout(10000)
      const changeHandler = sinon.spy()
      const hideHandler = sinon.spy()
      vm = createImagePreview({}, {
        change: changeHandler,
        hide: hideHandler
      })
      vm.show()
      setTimeout(() => {
        vm.prev()
        setTimeout(() => {
          expect(changeHandler)
            .to.be.calledOnce
          dispatchDblclick(vm.$refs.items[0].$el)
          setTimeout(() => {
            // zoomed
            expect(Math.round(vm.$refs.items[0].scroll.scale))
              .to.equal(2)
            dispatchDblclick(vm.$refs.items[0].$el)
            setTimeout(() => {
              expect(Math.round(vm.$refs.items[0].scroll.scale))
                .to.equal(1)
              // dispatch touch
              dispatchSwipe(vm.$refs.slide.$el, [
                {
                  pageX: 280,
                  pageY: 200
                },
                {
                  pageX: 10,
                  pageY: 200
                }
              ], 100)
              setTimeout(() => {
                expect(changeHandler)
                  .to.be.calledTwice
                const items = vm.$el.querySelectorAll('.cube-image-preview-item')
                dispatchTap(items[2])
                setTimeout(() => {
                  expect(hideHandler)
                    .to.be.calledOnce
                  done()
                }, 300)
              }, 1000)
            }, 500)
          }, 500)
        }, 800)
      }, 300)
    })

    it('should work correctly when slide & zoom', function (done) {
      this.timeout(10000)
      vm = createImagePreview()
      vm.show()
      setTimeout(() => {
        const img = new window.Image()
        img.src = imgs[0]
        img.onload = () => {
          const item = vm.$refs.items[0]
          const itemScroll = item.scroll
          const slide = vm.$refs.slide
          const slideScroll = slide.slide
          const ele = item.$el
          dispatchSwipe(ele, [
            [
              {
                pageX: 320,
                pageY: 200
              },
              {
                pageX: 320,
                pageY: 200
              }
            ],
            [
              {
                pageX: 360,
                pageY: 200
              },
              {
                pageX: 280,
                pageY: 200
              }
            ]
          ], 100)
          setTimeout(() => {
            // zoomed
            expect(Math.round(itemScroll.scale))
              .not.to.equal(1)
            dispatchMoveAction(ele, [
              {
                pageX: 360,
                pageY: 400
              },
              {
                pageX: 360,
                pageY: 380
              },
              {
                pageX: 360,
                pageY: 360
              },
              {
                pageX: 320,
                pageY: 340
              },
              {
                pageX: 280,
                pageY: 340
              },
              {
                pageX: 240,
                pageY: 340
              },
              {
                pageX: 200,
                pageY: 340
              },
              {
                pageX: 160,
                pageY: 340
              },
              {
                pageX: 10,
                pageY: 340
              }
            ], 30, (i) => {
              // move cb
            }, () => {
              // end cb
              // in PhantomJS, enabled becomes false in the nextTick
              // but becomes false in the same tick in safari
              vm.$nextTick(() => {
                expect(itemScroll.enabled)
                .to.be.false
              })
              expect(slideScroll.enabled)
                .to.be.true
              setTimeout(() => {
                expect(vm.currentPageIndex)
                  .to.equal(0)
                done()
              }, 1000)
            })
          }, 500)
        }
      }, 300)
    })

    function createImagePreview (props = {}, events = {}) {
      if (!props.imgs) {
        props.imgs = imgs
      }
      return instantiateComponent(Vue, ImagePreview, {
        props: props,
        on: events
      })
    }
  })

  describe('ImagePreview API', () => {
    it('$createImagePreview API', (done) => {
      const changeHandler = sinon.spy()
      const hideHandler = sinon.spy()
      let ins
      const vm = new Vue({
        template: '<div>xx</div>',
        methods: {
          showAPI() {
            ins = this.$createImagePreview({
              imgs,
              initialIndex: 1,
              onChange: changeHandler,
              onHide: hideHandler
            })
            ins.show()
          }
        }
      })
      vm.showAPI()
      setTimeout(() => {
        ins.next()
        setTimeout(() => {
          expect(changeHandler)
            .to.be.calledOnce
          ins.hide()
          expect(hideHandler)
            .to.be.calledOnce
          vm.$destroy()
          done()
        }, 800)
      }, 300)
    })
  })
})
