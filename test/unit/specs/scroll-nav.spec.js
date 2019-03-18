import Vue from 'vue2'
import ScrollNav from '@/modules/scroll-nav'
import createVue from '../utils/create-vue'
import { dispatchSwipe, dispatchTap } from '../utils/event'
import { findIndex } from '@/common/helpers/util'
import cityData from '../fake/index-list.json'

describe('ScrollNav', () => {
  let vm

  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(ScrollNav)
    expect(Vue.component(ScrollNav.name))
      .to.be.a('function')
  })

  it('should render correct contents', (done) => {
    vm = createScrollNav()
    setTimeout(() => {
      expect(vm.$el.className)
        .to.equal('cube-scroll-nav')
      // prepend
      expect(vm.$el.querySelector('.prepend-header').nextElementSibling.className)
        .to.equal('cube-scroll-nav-main')

      const navBarItems = vm.$el.querySelectorAll('.cube-scroll-nav-bar-item')
      expect(navBarItems.length)
        .to.equal(cityData.length)
      expect(navBarItems[0].className)
        .to.include('cube-scroll-nav-bar-item_active')

      const panels = vm.$el.querySelectorAll('.cube-scroll-nav-panel')
      expect(panels.length)
        .to.equal(cityData.length)
      expect(panels[0].querySelector('.cube-scroll-nav-panel-title').textContent.trim())
        .to.equal(cityData[0].name)
      done()
    }, 50)
  })

  it('should render correct contents - side', (done) => {
    vm = createScrollNav({
      side: true,
      current: cityData[1].name
    }, {}, false)
    setTimeout(() => {
      expect(vm.$el.className)
        .to.equal('cube-scroll-nav cube-scroll-nav_side')
      expect(vm.$el.querySelector('.cube-scroll-nav-bar-item_active').textContent.trim())
        .to.equal(cityData[1].name)
      // sticky
      expect(vm.$el.querySelector('.cube-sticky > .cube-sticky-fixed .cube-scroll-nav-bar'))
        .not.to.be.null
      expect(vm.$el.querySelector('.cube-scroll-wrapper > .cube-sticky-fixed .cube-scroll-nav-panel-title').textContent.trim())
        .to.equal(cityData[1].name)
      done()
    }, 400)
  })

  it('should sticky & nav correctly', function (done) {
    this.timeout(10000)
    vm = createScrollNav()
    setTimeout(() => {
      expect(vm.active)
        .to.equal(cityData[0].name)
      // scroll to city 3
      vm.$parent.current = cityData[2].name
      setTimeout(() => {
        expect(vm.active)
          .to.equal(cityData[2].name)
        // click bar
        // to city 2
        dispatchTap(vm.$el.querySelectorAll('.cube-scroll-nav-bar-item')[1])
        setTimeout(() => {
          expect(vm.active)
            .to.equal(cityData[1].name)
          // scroll to top 0
          vm.$refs.scroll.scrollTo(0, 0, 50)
          setTimeout(() => {
            expect(vm.active)
              .to.equal(cityData[0].name)
            done()
          }, 100)
        }, 350)
      }, 350)
    }, 50)
  })

  it('should trigger events', function (done) {
    this.timeout(10000)
    const changeHandler = sinon.spy()
    const stickyChangeHandler = sinon.spy()
    vm = createScrollNav({
      side: true,
      current: cityData[1].name
    }, {
      onChange: changeHandler,
      onStickyChange: stickyChangeHandler
    }, false)
    setTimeout(() => {
      expect(stickyChangeHandler)
        .to.be.calledOnce
      expect(stickyChangeHandler)
        .to.be.calledWith('cube-scroll-nav-bar')
      const scroller = vm.$el.querySelector('.cube-scroll-wrapper')
      dispatchSwipe(scroller, [
        {
          pageX: 300,
          pageY: 300
        },
        {
          pageX: 300,
          pageY: 10
        }
      ], 100)
      var scrollEnd = () => {
        vm.$refs.scroll.scroll.off('scrollEnd', scrollEnd)
        const targetActive = 'G'
        expect(vm.active)
          .to.equal(targetActive)
        const index = findIndex(cityData, function (item) {
          return item.name === targetActive
        })
        expect(changeHandler)
          .to.have.callCount(index)
        done()
      }
      setTimeout(() => {
        vm.$refs.scroll.scroll.on('scrollEnd', scrollEnd)
      }, 120)
    }, 400)
  })

  function createScrollNav(props = {}, events = {}, showPrepend = true) {
    const prepend = `
      <ul class="prepend-header" slot="prepend">
        <li>11</li>
        <li>22</li>
        <li>333</li>
      </ul>
    `
    const data = {
      side: false,
      current: '',
      data: cityData
    }
    Object.keys(props).forEach((k) => {
      data[k] = props[k]
    })
    return createVue({
      template: `
        <div style="height:300px;font-size:16px;">
          <cube-scroll-nav
            :side="side"
            :current="current"
            @change="changeHandler"
            @sticky-change="stickyChangeHandler">
            ${showPrepend ? prepend : ''}
            <cube-scroll-nav-panel v-for="item in data" :key="item.name" :label="item.name">
              <ul>
                <li v-for="city in item.cities">
                  <div>
                    <p>{{city.cityid}}</p>
                    <p>{{city.name}}</p>
                    <p>{{city.tags}}</p>
                  </div>
                </li>
              </ul>
            </cube-scroll-nav-panel>
          </cube-scroll-nav>
        </div>
      `,
      data: data,
      methods: {
        changeHandler(current) {
          events.onChange && events.onChange.call(this, current)
        },
        stickyChangeHandler(current) {
          events.onStickyChange && events.onStickyChange.call(this, current)
        }
      }
    })
  }
})
