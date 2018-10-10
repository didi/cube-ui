import Vue from 'vue2'
import Toast from '@/modules/toast'
import instantiateComponent from '@/common/helpers/instantiate-component'

describe('Toast', () => {
  describe('Toast.vue', () => {
    let vm
    afterEach(() => {
      if (vm) {
        vm.$parent.destroy()
        vm = null
      }
    })
    it('use', () => {
      Vue.use(Toast)
      expect(Vue.component(Toast.name))
        .to.be.a('function')
    })
    it('should render correct contents - no type', () => {
      vm = instantiateComponent(Vue, Toast, {
        props: {
          time: 300,
          txt: 'toast content'
        }
      })
      vm.show()
      expect(vm.$el.className)
        .to.equal('cube-popup cube-toast')
      expect(vm.$el.querySelector('.cube-loading'))
        .not.to.be.null
      return new Promise((resolve) => {
        setTimeout(resolve, 330)
      })
    })
    it('should render correct contents - time 0', () => {
      vm = instantiateComponent(Vue, Toast, {
        props: {
          type: 'error',
          time: 0,
          txt: 'toast content'
        }
      })
      vm.show()
      return new Promise((resolve) => {
        setTimeout(() => {
          expect(vm.isVisible)
            .to.be.true
          vm.hide()
          expect(vm.isVisible)
            .to.be.false
          resolve()
        }, 0)
      })
    })
    it('should render correct contents - with type', () => {
      vm = instantiateComponent(Vue, Toast, {
        props: {
          type: 'error',
          time: 300,
          txt: 'toast content'
        }
      })
      vm.show()
      expect(vm.$el.className)
        .to.equal('cube-popup cube-toast')
      expect(vm.$el.querySelector('.cube-toast-icon').className)
        .to.include('cubeic-wrong')
      expect(vm.$el.querySelector('.cube-toast-tip').textContent)
        .to.equal('toast content')
      return new Promise((resolve) => {
        setTimeout(() => {
          expect(vm.isVisible)
            .to.be.false
          resolve()
        }, 330)
      })
    })
    it('should render correct contents - with type txt', () => {
      vm = instantiateComponent(Vue, Toast, {
        props: {
          type: 'txt',
          time: 300,
          txt: 'toast content'
        }
      })
      vm.show()
      expect(vm.$el.className)
        .to.equal('cube-popup cube-toast')
      expect(vm.$el.querySelector('.cube-toast-icon'))
        .to.be.null
      expect(vm.$el.querySelector('.cube-toast-tip').textContent)
        .to.equal('toast content')
      return new Promise((resolve) => {
        setTimeout(() => {
          expect(vm.isVisible)
            .to.be.false
          resolve()
        }, 330)
      })
    })
  })

  describe('Toast API', () => {
    it('$createToast API', (done) => {
      let ins
      const vm = new Vue({
        template: '<div>xx</div>',
        methods: {
          showAPI() {
            ins = this.$createToast({
              type: 'error',
              txt: 'error txt',
              time: 200
            })
            ins = this.$createToast({
              type: 'warn',
              txt: 'toast api content',
              time: 100,
              $class: {
                'my-toast': true
              }
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
      setTimeout(() => {
        expect(ins.$el.className)
          .to.include('my-toast')
        expect(ins.$el.querySelector('.cube-toast-tip').textContent)
        .to.equal('toast api content')
        ins.remove()
        expect(ins.$el.parentElement)
          .to.be.null
        vm.$destroy()
        done()
      })
    })

    it('should trigger correct event', function (done) {
      const timeoutHandle = sinon.spy()

      const vm = createToast({
        time: 1000
      }, {
        timeout: timeoutHandle
      })

      vm.show()

      setTimeout(() => {
        expect(timeoutHandle).to.be.calledOnce
        done()
      }, 1200)
    })

    function createToast(props = {}, events = {}) {
      return instantiateComponent(Vue, Toast, {
        props: props,
        on: events
      })
    }
  })
})
