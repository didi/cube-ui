import Vue from 'vue2'
import Scroll from '@/modules/scroll'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { dispatchSwipe, dispatchTap } from '../utils/event'

const data = [
  '我是第 1 行',
  '我是第 2 行',
  '我是第 3 行',
  '我是第 4 行'
]

describe('Scroll', () => {
  let vm

  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(Scroll)
    expect(Vue.component(Scroll.name))
      .to.be.a('function')
  })

  it('should correct by default', () => {
    vm = createScroll()
  })

  it('should render correct contents', () => {
    vm = createScroll({
      data
    })
    const listItems = vm.$el.querySelectorAll('.cube-scroll-content li')
    expect(listItems.length)
      .to.equal(4)
    expect(listItems[1].textContent)
      .to.equal('我是第 2 行')
    expect(listItems[3].textContent)
      .to.equal('我是第 4 行')
  })

  it('should trigger pullingDown', function (done) {
    this.timeout(10000)

    const pullingDownHandle = sinon.spy()
    vm = createScroll({
      data
    })

    vm.$parent.updateRenderData({
      props: {
        data,
        options: {
          pullDownRefresh: true
        }
      },
      on: {
        'pulling-down': pullingDownHandle
      }
    })
    vm.$parent.$forceUpdate()

    vm.$refs.wrapper.style.height = '200px'
    vm.refresh()

    setTimeout(() => {
      const listFirstItem = vm.$el.querySelector('.cube-scroll-content li:first-child')
      dispatchSwipe(listFirstItem, [
        {
          pageX: 10,
          pageY: 10
        },
        {
          pageX: 10,
          pageY: 300
        }
      ], 100)
      setTimeout(() => {
        expect(pullingDownHandle)
          .to.be.callCount(1)

        // test: watch data
        const newData = data.concat(['我是插入的一行'])
        vm.$parent.updateRenderData({
          props: {
            data: newData,
            options: {
              pullDownRefresh: {
                threshold: 10,
                stop: 40,
                txt: '刷新成功'
              }
            }
          }
        })
        vm.$parent.$forceUpdate()
        setTimeout(() => {
          expect(vm.beforePullDown).to.be.true
          expect(vm.isPullingDown).to.be.false

          done()
        }, 1500)
      }, 400)
    }, 150)
  })

  it('should not trigger pullingDown', function (done) {
    this.timeout(10000)

    const pullingDownHandle = sinon.spy()
    vm = createScroll({
      data,
      options: {
        pullDownRefresh: true
      }
    }, {
      'pulling-down': pullingDownHandle
    })

    vm.$parent.updateRenderData({
      props: {
        data,
        options: {
          pullDownRefresh: false
        }
      },
      on: {
        'pulling-down': pullingDownHandle
      }
    })
    vm.$parent.$forceUpdate()

    vm.$refs.wrapper.style.height = '200px'
    vm.refresh()

    setTimeout(() => {
      const listFirstItem = vm.$el.querySelector('.cube-scroll-content li:first-child')
      dispatchSwipe(listFirstItem, [
        {
          pageX: 10,
          pageY: 10
        },
        {
          pageX: 10,
          pageY: 300
        }
      ], 100)
      setTimeout(() => {
        expect(pullingDownHandle)
          .to.be.callCount(0)

        done()
      }, 400)
    }, 150)
  })

  it('should trigger pullingUp', function (done) {
    this.timeout(10000)

    const pullingUpHandle = sinon.spy()
    vm = createScroll()

    vm.$parent.updateRenderData({
      props: {
        data,
        options: {
          pullUpLoad: {
            txt: {
              more: 'more',
              noMore: 'noMore'
            }
          }
        }
      },
      on: {
        'pulling-up': pullingUpHandle
      }
    })
    vm.$parent.$forceUpdate()

    vm.$refs.wrapper.style.height = '200px'
    vm.refresh()

    setTimeout(() => {
      const listItem = vm.$el.querySelector('.cube-scroll-content li:nth-child(3)')
      dispatchSwipe(listItem, [
        {
          pageX: 10,
          pageY: 200
        },
        {
          pageX: 10,
          pageY: 10
        }
      ], 100)

      setTimeout(() => {
        expect(pullingUpHandle)
          .to.be.callCount(1)

        // test: forceUpdate
        vm.forceUpdate()

        setTimeout(() => {
          expect(vm.isPullUpLoad).to.be.false
          expect(vm.pullUpDirty).to.be.false

          const pullUpTxtElm = vm.$el.querySelector('.cube-pullup-wrapper span')
          expect(pullUpTxtElm.textContent).to.equal('noMore')

          // test: resetPullUpTxt
          vm.resetPullUpTxt()
          vm.$nextTick(() => {
            expect(pullUpTxtElm.textContent).to.equal('more')

            done()
          })
        }, 50)
      }, 400)
    }, 150)
  })

  it('should not trigger pullingUp', function (done) {
    this.timeout(10000)

    const pullingUpHandle = sinon.spy()
    vm = createScroll({
      data,
      options: {
        pullUpLoad: true
      }
    }, {
      'pulling-up': pullingUpHandle
    })

    vm.$parent.updateRenderData({
      props: {
        data,
        options: {
          pullUpLoad: false
        }
      },
      on: {
        'pulling-up': pullingUpHandle
      }
    })
    vm.$parent.$forceUpdate()

    vm.$refs.wrapper.style.height = '200px'
    vm.refresh()

    setTimeout(() => {
      const listItem = vm.$el.querySelector('.cube-scroll-content li:nth-child(3)')
      dispatchSwipe(listItem, [
        {
          pageX: 10,
          pageY: 200
        },
        {
          pageX: 10,
          pageY: 10
        }
      ], 100)

      setTimeout(() => {
        expect(pullingUpHandle)
          .to.be.callCount(0)

        done()
      }, 400)
    }, 150)
  })

  it('should trigger click', function (done) {
    const clickHandler = sinon.spy()
    vm = createScroll({
      data
    }, {
      click: clickHandler
    })

    vm.$nextTick(() => {
      const listItem = vm.$el.querySelector('.cube-scroll-content li')
      dispatchTap(listItem)
      expect(clickHandler).to.be.calledOnce
      done()
    })
  })

  it('should not trigger scroll events', function (done) {
    const scrollHandle = sinon.spy()
    const beforeScrollHandle = sinon.spy()
    const scrollEndHandle = sinon.spy()

    vm = createScroll({
      data,
      options: {
        pullUpLoad: true
      }
    }, {
      scroll: scrollHandle,
      'before-scroll-start': beforeScrollHandle,
      'scroll-end': scrollEndHandle
    })
    vm.$refs.wrapper.style.height = '200px'
    vm.refresh()

    const listItem = vm.$el.querySelector('.cube-scroll-content li:nth-child(3)')

    setTimeout(() => {
      dispatchSwipe(listItem, [
        {
          pageX: 10,
          pageY: 200
        },
        {
          pageX: 10,
          pageY: 10
        }
      ], 100)

      setTimeout(() => {
        expect(scrollHandle).to.be.callCount(0)
        expect(beforeScrollHandle).to.be.callCount(0)
        expect(scrollEndHandle).to.be.callCount(0)

        done()
      }, 1500)
    }, 100)
  })

  it('should trigger scroll events - with scroll-events', function (done) {
    const scrollHandle = sinon.spy()
    const beforeScrollHandle = sinon.spy()
    const scrollEndHandle = sinon.spy()

    vm = createScroll({
      data,
      scrollEvents: ['scroll', 'before-scroll-start', 'scroll-end'],
      options: {
        pullUpLoad: true
      }
    }, {
      scroll: scrollHandle,
      'before-scroll-start': beforeScrollHandle,
      'scroll-end': scrollEndHandle
    })
    vm.$refs.wrapper.style.height = '200px'
    vm.refresh()

    const listItem = vm.$el.querySelector('.cube-scroll-content li:nth-child(3)')

    setTimeout(() => {
      dispatchSwipe(listItem, [
        {
          pageX: 10,
          pageY: 200
        },
        {
          pageX: 10,
          pageY: 10
        }
      ], 100)

      setTimeout(() => {
        expect(scrollHandle).to.be.called
        expect(beforeScrollHandle).to.be.callCount(1)
        expect(scrollEndHandle).to.be.callCount(1)

        done()
      }, 1500)
    }, 100)
  })

  it('should trigger scroll events - with listen-scroll', function (done) {
    const scrollHandle = sinon.spy()
    const beforeScrollHandle = sinon.spy()
    const scrollEndHandle = sinon.spy()

    vm = createScroll({
      data,
      listenScroll: true,
      listenBeforeScroll: true,
      options: {
        pullUpLoad: true
      }
    }, {
      scroll: scrollHandle,
      'before-scroll-start': beforeScrollHandle,
      'scroll-end': scrollEndHandle
    })
    vm.$refs.wrapper.style.height = '200px'
    vm.refresh()

    const listItem = vm.$el.querySelector('.cube-scroll-content li:nth-child(3)')

    setTimeout(() => {
      dispatchSwipe(listItem, [
        {
          pageX: 10,
          pageY: 200
        },
        {
          pageX: 10,
          pageY: 10
        }
      ], 100)

      setTimeout(() => {
        expect(scrollHandle).to.be.called
        expect(beforeScrollHandle).to.be.callCount(1)

        done()
      }, 1500)
    }, 100)
  })

  it('should call correct method', function () {
    vm = createScroll({data})

    vm.disable()

    vm.enable()

    vm.scrollTo(0, 100)

    const listItems = vm.$el.querySelectorAll('.cube-scroll-content li')
    vm.scrollToElement(listItems[3])

    vm.destroy()
  })

  describe('Nest Scrolls', () => {
    it('should render scrolls correct', function () {
      vm = createNestScrolls()

      const innerScroll = vm.$parent.$refs.innerScroll

      expect(innerScroll.parentScroll).to.be.a('object')
    })

    it('should disable outer scroll when touch the inner one and not reach boundary', function (done) {
      let cnt = 0
      vm = createNestScrolls({
        innerProps: {
          scrollEvents: ['scroll']
        },
        innerEvents: {
          scroll: () => {
            if (cnt === 1) { // we disable the outer scroll in first 'scroll' event
              expect(vm.scroll.enabled).to.be.false
              done()
            }
            cnt++
          }
        }
      })

      vm.$refs.wrapper.style.height = '500px'
      vm.refresh()
      const innerScroll = vm.$parent.$refs.innerScroll
      innerScroll.$refs.wrapper.style.height = '200px'

      setTimeout(() => { // waiting scroll init
        const listItem = innerScroll.$el.querySelector('.cube-scroll-content li:nth-child(1)')
        dispatchSwipe(listItem, [
          {
            pageX: 20, // using for touchstart
            pageY: 200
          },
          {
            pageX: 20, // using for fire first touchmove. we disabled outer scroll when this event fire.
            pageY: 180
          },
          {
            pageX: 20, // using for second touchmove, now we check whether outer scroll is disabled.
            pageY: 160
          }
        ], 200)
      }, 200)
    })

    it('should disable inner scroll when touch the inner one and reach boundary', function (done) {
      let cnt = 0
      vm = createNestScrolls({
        outerProps: {
          scrollEvents: ['scroll']
        },
        outerEvents: {
          scroll: () => {
            // there will be two 'scroll' event, one fired by dispatchEvent and one fired by resetPosition in _end() function.
            // we only concern the first scroll event.
            if (cnt === 0) {
              cnt++
              expect(innerScroll.scroll.enabled).to.be.false
              done()
            }
          }
        }
      })

      vm.$refs.wrapper.style.height = '300px'
      vm.refresh()
      const innerScroll = vm.$parent.$refs.innerScroll
      innerScroll.$refs.wrapper.style.height = '200px'

      setTimeout(() => { // waiting scroll init
        vm.scroll.aname = 'outer'
        innerScroll.scroll.aname = 'inner'
        const listItem = innerScroll.$el.querySelector('.cube-scroll-content li:nth-child(1)')
        dispatchSwipe(listItem, [
          {
            pageX: 20, // using for touchstart
            pageY: 100
          },
          {
            pageX: 20, // using for fire first touchmove. we disabled outer scroll when this event fire, And since we assign outerScroll.pointY = innerScroll.pointY,
            pageY: 120 // so this touchmove event will not trigger outerScroll's "scroll" event, due to "We need to move at least momentumLimitDistance pixels for the scrolling to initiate" (from better-scroll)
          },
          {
            pageX: 20, // using for second touchmove, now we check if the inner scroll is disabled .
            pageY: 140
          }
        ], 200)
      }, 200)
    })
  })

  function createScroll(props = {}, events = {}, renderFn) {
    return instantiateComponent(Vue, Scroll, {
      props: props,
      on: events
    }, renderFn)
  }

  function createNestScrolls(options = {}) {
    const { outerProps = {}, outerEvents = {}, innerProps = {}, innerEvents = {} } = options
    return createScroll(outerProps, outerEvents, (h) => {
      return h('div', [
        h('ul', [
          ...data.map(item => {
            return h('li', item)
          })
        ]),
        h(Scroll, {
          ref: 'innerScroll',
          class: 'inner-scroll',
          props: {data, ...innerProps},
          on: {...innerEvents}
        }),
        h('ul', [
          ...data.map(item => {
            return h('li', item)
          })
        ])
      ])
    })
  }
})
