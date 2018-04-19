import Vue from 'vue2'
import Popup from '@/modules/popup'
import instantiateComponent from '@/common/helpers/instantiate-component'

describe('Popup', () => {
  describe('Popup.vue', () => {
    let vm
    afterEach(() => {
      if (vm) {
        vm.$parent.destroy()
        vm = null
      }
    })
    it('use', () => {
      Vue.use(Popup)
      expect(Vue.component(Popup.name))
        .to.be.a('function')
    })
    it('should render correct contents - no type', () => {
      vm = instantiateComponent(Vue, Popup, {
        props: {
          type: ''
        }
      })
      expect(vm.$el.className)
        .to.equal('cube-popup cube-popup_mask')
    })
    it('should render correct contents', () => {
      vm = instantiateComponent(Vue, Popup, {
        props: {
          type: 'xx',
          content: 'popup content'
        }
      })
      vm.show()
      expect(vm.$el.className)
        .to.equal('cube-popup cube-popup_mask cube-xx')
      expect(vm.$el.querySelector('.cube-popup-container').className)
        .to.equal('cube-popup-container cube-popup-center')
      expect(vm.$el.querySelector('.cube-popup-content').innerHTML)
        .to.equal('popup content')
    })
    it('events', () => {
      const clickHandler = sinon.spy()
      vm = instantiateComponent(Vue, Popup, {
        props: {
          type: 'xx',
          content: 'popup content'
        },
        on: {
          'mask-click': clickHandler
        }
      })
      vm.$el.querySelector('.cube-popup-mask').click()
      expect(clickHandler)
        .to.have.been.calledOnce
    })
  })

  describe('Popup API', () => {
    it('$createPopup API', () => {
      const clickHandler = sinon.spy()
      let ins
      const vm = new Vue({
        template: '<div>xx</div>',
        methods: {
          showAPI() {
            ins = this.$createPopup({
              type: 'xx',
              content: 'popup api content',
              onMaskClick: clickHandler
            })
            ins.show()
          }
        }
      })
      vm.showAPI()
      expect(ins.isVisible)
        .to.be.true
      expect(ins.$el.parentElement)
        .to.equal(document.body)
      expect(ins.$el.querySelector('.cube-popup-content').innerHTML)
        .to.equal('popup api content')
      ins.$el.querySelector('.cube-popup-mask').click()
      expect(clickHandler)
        .to.have.been.calledOnce
      ins.remove()
      expect(ins.$el.parentElement)
        .to.be.null
      vm.$destroy()
    })
  })
})
