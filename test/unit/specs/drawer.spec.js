import Vue from 'vue2'
import Drawer from '@/modules/drawer'
import createVue from '../utils/create-vue'
import { dispatchTap } from '../utils/event'

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
  it('should render correct contents', function (done) {
    this.timeout(5000)
    vm = createDrawer({
      data: [['1', '2'], [], []],
      selectedIndex: [0]
    }, {
      change(index) {
        this.$refs.drawer.refill(index + 1, index === 0 ? [
          {
            text: '11',
            value: 11
          },
          {
            text: '22',
            value: 22
          }
        ] : [
          {
            text: '111',
            value: 111
          },
          {
            text: '222',
            value: 222
          },
          {
            text: '333',
            value: 333
          }
        ])
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
      const firstItems = panel.querySelectorAll('.cube-drawer-item')
      expect(firstItems.length)
        .to.equal(2)
      expect(firstItems[0].textContent.trim())
        .to.equal('1')
      expect(firstItems[1].textContent.trim())
        .to.equal('2')
      setTimeout(() => {
        expect(panel.querySelector('.cube-drawer-item').className)
          .to.include('cube-drawer-item_active')
        const newPanel = vm.$el.querySelector('.cube-drawer-panel:nth-child(2)')
        expect(newPanel.style.display)
          .not.to.equal('none')
        const items = newPanel.querySelectorAll('.cube-drawer-item')
        expect(items.length)
          .to.equal(2)
        expect(items[1].textContent.trim())
          .to.equal('22')
        dispatchTap(items[0])
        setTimeout(() => {
          const newPanel = vm.$el.querySelector('.cube-drawer-panel:last-child')
          expect(newPanel.style.display)
            .not.to.equal('none')
          const items = newPanel.querySelectorAll('.cube-drawer-item')
          expect(items[0].textContent.trim())
            .to.equal('111')
          // back to first
          dispatchTap(firstItems[1])
          setTimeout(() => {
            dispatchTap(vm.$el.querySelector('.cube-drawer-panel:nth-child(2)').querySelector('.cube-drawer-item'))
            setTimeout(() => {
              const items = newPanel.querySelectorAll('.cube-drawer-item')
              // select one
              dispatchTap(items[1])
              setTimeout(() => {
                expect(vm.$el.style.display)
                  .to.equal('none')
                done()
              }, 400)
            }, 400)
          })
        }, 400)
      }, 400)
    }, 400)
  })

  it('should trigger events', function (done) {
    this.timeout(2000)
    const changeHandler = sinon.spy()
    const selectHandler = sinon.spy()
    const cancelHandler = sinon.spy()
    vm = createDrawer({}, {
      change(index) {
        changeHandler.apply(this, arguments)
        this.$refs.drawer.refill(index + 1, ['11', '22'], 1)
      },
      select: selectHandler,
      cancel: cancelHandler
    })
    vm.show()
    setTimeout(() => {
      const panel = vm.$el.querySelector('.cube-drawer-panel')
      const items = panel.querySelectorAll('.cube-drawer-item')
      dispatchTap(items[1])
      expect(changeHandler)
        .to.be.calledOnce
      setTimeout(() => {
        expect(selectHandler)
          .to.be.calledOnce
        vm.show()
        const newPanel = vm.$el.querySelector('.cube-drawer-panel:last-child')
        const item = newPanel.querySelector('.cube-drawer-item')
        dispatchTap(item)
        expect(selectHandler)
          .to.be.calledTwice
        setTimeout(() => {
          vm.show()
          // hide
          vm.$el.click()
          expect(cancelHandler)
            .to.be.calledOnce
          done()
        }, 400)
      }, 400)
    }, 400)
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
