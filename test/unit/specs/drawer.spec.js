import Vue from 'vue2'
import Drawer from '@/modules/drawer'
import createVue from '../utils/create-vue'
import { dispatchSwipe } from '../utils/event'

describe('Drawer', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Drawer)
    expect(Vue.component(Drawer.name))
      .to.be.a('function')
  })
  it('should render correct contents', (done) => {
    vm = createDrawer({
      data: [['1', '2'], []],
      selectedIndex: []
    }, {
      change(index) {
        this.$refs.drawer.refill(index + 1, index === 0 ? ['11', '22'] : ['111', '222', '333'])
      }
    })
    expect(vm.$el.querySelector('.cube-drawer-title').textContent.trim())
      .to.equal('请选择')
    expect(vm.$el.querySelectorAll('.cube-drawer-panel').length)
      .to.equal(3)
    expect(vm.$el.style.display)
      .to.equal('none')
    vm.show()
    setTimeout(() => {
      const panel = vm.$el.querySelector('.cube-drawer-panel')
      expect(panel.style.display)
        .not.to.equal('none')
      expect(vm.$el.querySelector('.cube-drawer-panel:last-child').style.display)
        .to.equal('none')
      const items = panel.querySelectorAll('.cube-drawer-item')
      expect(items.length)
        .to.equal(2)
      expect(items[0].textContent.trim())
        .to.equal('1')
      expect(items[1].textContent.trim())
        .to.equal('2')
      dispatchSwipe(items[0], [
        {
          pageX: 300,
          pageY: 80
        }
      ], 0)
      setTimeout(() => {
        expect(panel.querySelector('.cube-drawer-item').className)
          .to.include('cube-drawer-item_active')
        const newPanel = vm.$el.querySelector('.cube-drawer-panel:last-child')
        expect(newPanel.style.display)
          .not.to.equal('none')
        const items = newPanel.querySelectorAll('.cube-drawer-item')
        expect(items.length)
          .to.equal(2)
        expect(items[1].textContent.trim())
          .to.equal('22')
        vm.hide()
        vm.$el.click()
        setTimeout(() => {
          expect(vm.$el.style.display)
            .to.equal('none')
          done()
        }, 400)
      }, 400)
    }, 400)
  })

  it('should trigger events', () => {
    const confirmHandler = sinon.spy()
    const cancelHandler = sinon.spy()
    const closeHandler = sinon.spy()
    vm = createDrawer()
  })

  function createDrawer (props = {}, events = {}) {
    return createVue({
      template: `
        <cube-drawer
          ref="drawer"
          title="请选择"
          :data="data"
          :selected-index="selectedIndex"
          @change="changeHandler"
          @select="selectHandler"
          @cancel="cancelHandler" />
      `,
      data: {
        data: props.data || [['1', '2'], []],
        selectedIndex: props.selectedIndex || []
      },
      methods: {
        changeHandler(index, item, selectedVal, selectedIndex) {
          if (events.change) {
            events.change.call(this, index, item, selectedVal, selectedIndex)
          } else {
            this.$refs.drawer.refill(index + 1, ['11', '22'])
          }
        },
        selectHandler(selectedVal, selectedIndex) {
          events.select && events.select.call(this, selectedVal, selectedIndex)
        },
        cancelHandler() {
          events.cancel && events.cancel.call(this)
        }
      }
    })
  }
})
