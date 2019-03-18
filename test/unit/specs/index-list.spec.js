import Vue from 'vue2'
import IndexList from '@/modules/index-list'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { dispatchSwipe, dispatchTap } from '../utils/event'
import cityData from '../fake/index-list.json'

// 处理数据
let data = []
cityData.forEach((cityGroup) => {
  let group = {}
  group.name = cityGroup.name
  group.items = []
  cityGroup.cities.forEach((city) => {
    let item = {}
    item.name = city.name
    item.value = city.cityid
    group.items.push(item)
  })
  data.push(group)
})

const title = '当前城市：北京市'

describe('IndexList', () => {
  describe('IndexList.vue', () => {
    let vm
    afterEach(() => {
      if (vm) {
        vm.$parent.destroy()
        vm = null
      }
    })

    it('use', () => {
      Vue.use(IndexList)
      expect(Vue.component(IndexList.name))
        .to.be.a('function')
    })

    it('should render correct contents', () => {
      vm = createIndexList({
        data
      })
      const navItems = vm.$el.querySelectorAll('.cube-index-list-nav li')
      expect(navItems.length)
        .to.equal(9)
      expect(navItems[2].textContent)
        .to.equal('B')
      const anchorItems = vm.$el.querySelectorAll('.cube-index-list-content .cube-index-list-anchor')
      expect(anchorItems.length)
        .to.equal(9)
      expect(anchorItems[4].textContent)
        .to.equal('E')

      const items = vm.$el.querySelectorAll('.cube-index-list-item')
      expect(items.length)
        .to.equal(21)
      expect(items[items.length - 1].textContent.trim())
        .to.equal('中卫市')
    })

    it('should trigger events', (done) => {
      const selectHandler = sinon.spy()
      const titleClickHandler = sinon.spy()

      vm = createIndexList({
        title,
        data
      }, {
        select: selectHandler,
        'title-click': titleClickHandler
      })
      vm.$nextTick(() => {
        // select
        const items = vm.$el.querySelectorAll('.cube-index-list-item')
        dispatchTap(items[2])
        expect(selectHandler).to.be.calledOnce

        // title-click
        dispatchTap(vm.$el.querySelector('.cube-index-list-title'))
        expect(titleClickHandler).to.be.calledOnce

        done()
      })
    })

    it('should trigger pulling-up', function (done) {
      this.timeout(10000)

      const pullingUpHandler = sinon.spy()

      vm = createIndexList({
        title,
        data: data.slice(0, 1),
        pullUpLoad: true
      }, {
        'pulling-up': pullingUpHandler
      })

      const scrollWrapper = vm.$el.querySelector('.cube-scroll-wrapper')
      scrollWrapper.style.height = '300px'
      vm.refresh()

      setTimeout(() => {
        const scrollContent = vm.$el.querySelector('.cube-scroll-content li:first-child')
        dispatchSwipe(scrollContent, [
          {
            pageX: 10,
            pageY: 300
          },
          {
            pageX: 10,
            pageY: 10
          }
        ], 100)

        setTimeout(() => {
          expect(pullingUpHandler).to.be.calledOnce

          vm.forceUpdate()
          done()
        }, 400)
      }, 150)
    })

    it('should trigger pulling-down', function (done) {
      this.timeout(10000)

      const pullingDownHandler = sinon.spy()

      vm = createIndexList({
        title,
        data: data.slice(0, 1),
        pullDownRefresh: true
      }, {
        'pulling-down': pullingDownHandler
      })

      const scrollWrapper = vm.$el.querySelector('.cube-scroll-wrapper')
      scrollWrapper.style.height = '300px'
      vm.refresh()

      setTimeout(() => {
        const scrollContent = vm.$el.querySelector('.cube-scroll-content li:first-child')
        dispatchSwipe(scrollContent, [
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
          expect(pullingDownHandler).to.be.calledOnce

          done()
        }, 400)
      }, 150)
    })

    it('should fixed title', function (done) {
      this.timeout(10000)
      vm = createIndexList()

      setTimeout(() => {
        vm.$parent.updateRenderData({
          props: {
            title: title,
            data: data,
            speed: 0
          },
          on: {}
        })
        vm.$parent.$forceUpdate()
      }, 30)

      setTimeout(() => {
        const zEle = vm.$el.querySelector('.cube-index-list-nav li[data-index="2"]')
        // nav li
        dispatchSwipe(zEle, {
          pageX: 342,
          pageY: 327
        }, 0)
        setTimeout(() => {
          // item active class
          dispatchSwipe(vm.$el.querySelector('.cube-index-list-item'), {
            pageX: 342,
            pageY: 327
          }, 0)
          // scroll
          const fixedEle = vm.$el.querySelector('.cube-index-list-fixed')
          expect(fixedEle.textContent.trim())
            .to.equal('B')
          const el = vm.$el.querySelector('.cube-index-list-content')
          vm.$refs.scroll.scroll.on('scrollEnd', () => {
            expect(fixedEle.textContent.trim())
              .to.equal('C')
            done()
          })
          dispatchSwipe(el, [
            {
              pageX: 300,
              pageY: 400
            },
            {
              pageX: 300,
              pageY: 370
            }
          ], 100)
        }, 20)
      }, 150)
    })

    it('should not have navbar when navbar prop is false', () => {
      vm = createIndexList({
        data,
        navbar: false
      })
      const navbar = vm.$el.querySelector('.cube-index-list-nav')
      expect(navbar).to.equal(null)
    })

    it('run normal when group or item undefined', () => {
      vm = createIndexList({
        data: [
          undefined, // props group in index-list-group.vue
          {
            name: 'default',
            items: [
              undefined // props item in index-list-item.vue
            ]
          }
        ]
      })
    })

    it('should handle condition of unexpected param', function (done) {
      this.timeout(10000)
      vm = createIndexList({
        title,
        data,
        speed: 0
      })
      setTimeout(() => {
        const bEl = vm.$el.querySelector('.cube-index-list-nav li[data-index="2"]')
        dispatchSwipe(bEl, [
          {
            pageX: 300,
            pageY: 400
          },
          {
            pageX: 300,
            pageY: 50
          }
        ], 100)
        setTimeout(() => {
          const fixedEl = vm.$el.querySelector('.cube-index-list-fixed')
          expect(fixedEl.textContent.trim())
            .to.equal('★热门城市')

          dispatchSwipe(bEl, [
            {
              pageX: 300,
              pageY: 400
            },
            {
              pageX: 300,
              pageY: 1000
            }
          ], 100)
          setTimeout(() => {
            expect(fixedEl.textContent.trim())
              .to.equal('Z')
            done()
          }, 150)
        }, 150)

        vm.scrollY = 0
        setTimeout(() => {
          vm.scrollY = -10000
        }, 0)
      }, 30)
    })

    function createIndexList(props = {}, events = {}) {
      return instantiateComponent(Vue, IndexList, {
        props: props,
        on: events
      })
    }
  })
})
