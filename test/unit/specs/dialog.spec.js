import Vue from 'vue2'
import Dialog from '@/modules/dialog'
import instantiateComponent from '@/common/helpers/instantiate-component'

describe('Dialog', () => {
  describe('Dialog.vue', () => {
    let vm
    afterEach(() => {
      if (vm) {
        vm.$parent.destroy()
        vm = null
      }
    })
    it('use', () => {
      Vue.use(Dialog)
      expect(Vue.component(Dialog.name))
        .to.be.a('function')
    })
    it('should render correct contents - icon', () => {
      vm = createDialog({
        icon: 'icon-xx',
        content: 'dialog'
      })
      expect(vm.$el.querySelector('.cube-dialog-icon i').className)
        .to.equal('icon-xx')
    })
    it('should render correct contents - title', () => {
      vm = createDialog({
        title: 'dialog title',
        content: 'dialog'
      })
      expect(vm.$el.querySelector('.cube-dialog-title-def').textContent)
        .to.equal('dialog title')
    })
    it('should render correct contents - alert', () => {
      vm = createDialog({
        type: 'alert',
        content: 'dialog'
      })
      expect(vm.$el.querySelector('.cube-dialog-alert').parentElement.className)
        .to.equal('cube-dialog-main')
      expect(vm.$el.querySelector('.cube-dialog-btns').getElementsByTagName('a').length)
        .to.equal(1)
    })
    it('should render correct contents - confirm', () => {
      vm = createDialog({
        type: 'confirm',
        content: 'dialog'
      })
      expect(vm.$el.querySelector('.cube-dialog-confirm').parentElement.className)
        .to.equal('cube-dialog-main')
      expect(vm.$el.querySelector('.cube-dialog-btns').getElementsByTagName('a').length)
        .to.equal(2)
    })

    it('should trigger events', () => {
      const confirmHandler = sinon.spy()
      const cancelHandler = sinon.spy()
      const closeHandler = sinon.spy()
      vm = createDialog({
        type: 'confirm',
        title: 'dialog title',
        content: 'dialog'
      }, {
        confirm: confirmHandler,
        cancel: cancelHandler,
        close: closeHandler
      })
      vm.show()
      // confirm click
      vm.$el.querySelector('.cube-dialog-btns a:last-child').click()
      expect(vm.isVisible)
        .to.be.false
      expect(confirmHandler)
        .to.be.calledOnce
      vm.show()
      vm.$el.querySelector('.cube-dialog-btns a').click()
      expect(vm.isVisible)
        .to.be.false
      expect(cancelHandler)
        .to.be.calledOnce
      vm.show()
      vm.$el.querySelector('.cube-dialog-close').click()
      expect(vm.isVisible)
        .to.be.false
      expect(closeHandler)
        .to.be.calledOnce
    })

    function createDialog (props = {}, events = {}) {
      return instantiateComponent(Vue, Dialog, {
        props: props,
        on: events
      })
    }
  })

  describe('Dialog API', () => {
    it('$createDialog API', () => {
      const confirmHandler = sinon.spy()
      const cancelHandler = sinon.spy()
      const closeHandler = sinon.spy()
      let ins
      const vm = new Vue({
        template: '<div>xx</div>',
        methods: {
          showAPI() {
            ins = this.$createDialog({
              type: 'confirm',
              showClose: true,
              title: 'dialog api title',
              content: 'dialog api content',
              icon: 'cubeic-dialog-unwifi',
              onConfirm: confirmHandler,
              onCancel: cancelHandler,
              onClose: closeHandler
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
      expect(ins.$el.querySelector('.cube-dialog-title-def').textContent)
        .to.equal('dialog api title')
      expect(ins.$el.querySelector('.cube-dialog-content-def p').textContent)
        .to.equal('dialog api content')
      expect(ins.$el.querySelector('.cube-dialog-icon i').className)
        .to.equal('cubeic-dialog-unwifi')
      // confirm click
      ins.$el.querySelector('.cube-dialog-btns a:last-child').click()
      expect(ins.isVisible)
        .to.be.false
      expect(confirmHandler)
        .to.be.calledOnce
      ins.show()
      ins.$el.querySelector('.cube-dialog-btns a').click()
      expect(ins.isVisible)
        .to.be.false
      expect(cancelHandler)
        .to.be.calledOnce
      ins.show()
      ins.$el.querySelector('.cube-dialog-close').click()
      expect(ins.isVisible)
        .to.be.false
      expect(closeHandler)
        .to.be.calledOnce
      ins.remove()
      expect(ins.$el.parentElement)
        .to.be.null
      vm.$destroy()
    })
  })
})
