import Vue from 'vue2'
import Slide from '@/modules/slide'
import createVue from '../utils/create-vue'
import { dispatchSwipe } from '../utils/event'

const items = [{
  url: 'http://www.didichuxing.com/',
  image: 'http://webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
}, {
  url: 'http://www.didichuxing.com/',
  image: 'http://webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
}]

describe('Slide.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Slide)
    expect(Vue.component(Slide.name))
      .to.be.a('function')
  })
  it('should render correct contents', function (done) {
    vm = createVue({
      template: `
      <cube-slide :loop="loop" style="width:300px;height:100px;">
        <cube-slide-item v-for="(item,index) in items" :key="index" :item="item"></cube-slide-item>
      </cube-slide>
    `,
      data: {
        items,
        loop: false
      }
    })
    vm.$nextTick(() => {
      const itemEls = vm.$el.querySelectorAll('.cube-slide-item')
      expect(itemEls.length).to.equal(items.length)
      let imgEl = itemEls[0].querySelector('img')
      expect(imgEl.src).to.equal(items[0].image)
      vm.$nextTick(() => {
        let dotEls = vm.$el.querySelectorAll('.cube-slide-dots span')
        expect(dotEls.length).to.equal(2)
        expect(dotEls[0].className).to.equal('active')
      })
      done()
    })
  })

  it('should clone nodes if loop is true', (done) => {
    vm = createVue({
      template: `
      <cube-slide :loop="loop" style="width:300px;height:100px;">
        <cube-slide-item v-for="(item,index) in items" :key="index" :item="item"></cube-slide-item>
      </cube-slide>
    `,
      data: {
        items,
        loop: true
      }
    })

    vm.$nextTick(() => {
      let groupEl = vm.$el.querySelector('.cube-slide-group')
      let itemEls = vm.$el.querySelectorAll('.cube-slide-item')
      expect(itemEls.length).to.equal(items.length + 2)
      let width = itemEls[0].clientWidth
      expect(groupEl.clientWidth).to.equal(width * (items.length + 2))

      vm.$destroy()
      vm = createVue({
        template: `
      <cube-slide :loop="loop" :direction="direction" style="width:300px;height:100px;">
        <cube-slide-item v-for="(item,index) in items" :key="index" :item="item"></cube-slide-item>
      </cube-slide>
    `,
        data: {
          items,
          loop: true,
          direction: 'vertical'
        }
      })
      vm.$nextTick(() => {
        groupEl = vm.$el.querySelector('.cube-slide-group')
        itemEls = vm.$el.querySelectorAll('.cube-slide-item')
        expect(itemEls.length).to.equal(items.length + 2)
        let height = itemEls[0].clientHeight
        expect(groupEl.clientHeight).to.equal(height * (items.length + 2))
        done()
      })
    })
  })

  it('should trigger change event', function (done) {
    this.timeout(10000)
    const changeHandler = sinon.spy()
    vm = createVue({
      template: `
      <cube-slide :interval="interval" @change="change" style="width:300px;height:100px;">
        <cube-slide-item v-for="(item,index) in items" :key="index" :item="item"></cube-slide-item>
      </cube-slide>
    `,
      data: {
        items,
        interval: 1000
      },
      methods: {
        change() {
          changeHandler()
        }
      }
    })
    setTimeout(() => {
      // auto change
      expect(changeHandler).to.be.calledOnce
      dispatchSwipe(vm.$el, [
        {
          pageX: 180,
          pageY: 20
        },
        {
          pageX: 10,
          pageY: 20
        }
      ], 100)
      setTimeout(() => {
        expect(changeHandler).to.be.calledTwice
        done()
      }, 600)
    }, 2000)
  })

  it('should go to right pageIndex if set initialIndex', function (done) {
    vm = createVue({
      template: `
      <cube-slide style="width:300px;height:100px;" :initial-index="initialIndex" :auto-play="autoPlay">
        <cube-slide-item v-for="(item,index) in items" :key="index" :item="item"></cube-slide-item>
      </cube-slide>
    `,
      data: {
        items,
        initialIndex: 0,
        autoPlay: false
      }
    })

    vm.$nextTick(() => {
      vm.$parent.initialIndex = 1
      setTimeout(() => {
        expect(vm.currentPageIndex).to.equal(1)
        done()
      }, 600)
    })
  })
})
