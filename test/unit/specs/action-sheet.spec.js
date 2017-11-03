import Vue from 'vue2'
import ActionSheet from '@/modules/action-sheet'
import instantiateComponent from '@/common/helpers/instantiate-component'

describe('ActionSheet', () => {
  describe('ActionSheet.vue', () => {
    let vm
    afterEach(() => {
      if (vm) {
        vm.$parent.destroy()
        vm = null
      }
    })
    it('use', () => {
      Vue.use(ActionSheet)
      expect(Vue.component(ActionSheet.name))
        .to.be.a('function')
    })
    it('should render correct contents', () => {
      vm = createActionSheet({
        data: [
          {
            content: '左对齐',
            align: 'left'
          },
          {
            content: '右对齐',
            align: 'right'
          }
        ],
        active: 1,
        title: 'action sheet title'
      })
      expect(vm.$el.querySelector('.cube-action-sheet-title').textContent)
        .to.equal('action sheet title')
      const items = vm.$el.querySelectorAll('.cube-action-sheet-item')
      expect(items.length)
        .to.equal(2)
      expect(items[1].className)
        .to.include('cube-action-sheet-item_active')
      expect(items[0].textContent)
        .to.equal('左对齐')
    })
    it('should render correct contents - no data', () => {
      vm = createActionSheet({
        title: 'action sheet title'
      })
      const items = vm.$el.querySelectorAll('.cube-action-sheet-item')
      expect(items.length)
        .to.equal(0)
    })
    it('should render correct contents - picker style', () => {
      vm = createActionSheet({
        data: [
          {
            content: '舒适型'
          },
          {
            content: '七座商务'
          },
          {
            content: '豪华型'
          }
        ],
        pickerStyle: true,
        active: 1,
        title: 'action sheet title2'
      })
      vm.show()
      expect(vm.$el.className)
        .to.include('cube-action-sheet_picker')
      expect(vm.$el.querySelector('.cube-action-sheet-title').textContent)
        .to.equal('action sheet title2')
      const items = vm.$el.querySelectorAll('.cube-action-sheet-item')
      expect(items.length)
        .to.equal(3)
      expect(items[1].className)
        .to.include('cube-action-sheet-item_active')
      expect(items[0].textContent)
        .to.equal('舒适型')
      expect(vm.$el.querySelector('.cube-action-sheet-space').offsetHeight)
        .to.equal(0)
    })

    it('should trigger events', () => {
      const selectHandler = sinon.spy()
      const cancelHandler = sinon.spy()
      const data = [
        {
          content: '舒适型'
        },
        {
          content: '七座商务'
        },
        {
          content: '豪华型'
        }
      ]
      vm = createActionSheet({
        data: data,
        pickerStyle: true,
        active: 1,
        title: 'action sheet title2'
      }, {
        select: selectHandler,
        cancel: cancelHandler
      })
      vm.show()
      const items = vm.$el.querySelectorAll('.cube-action-sheet-item')

      items[0].click()
      expect(vm.isVisible)
        .to.be.false
      expect(selectHandler)
        .to.be.calledWith(data[0])

      vm.show()
      vm.$el.querySelector('.cube-action-sheet-cancel').click()
      expect(vm.isVisible)
        .to.be.false
      expect(cancelHandler)
        .to.be.calledOnce
    })

    function createActionSheet (props = {}, events = {}) {
      return instantiateComponent(Vue, ActionSheet, {
        props: props,
        on: events
      })
    }
  })

  describe('ActionSheet API', () => {
    it('$createActionSheet API', () => {
      const selectHandler = sinon.spy()
      const cancelHandler = sinon.spy()
      const data = [
        {
          content: '左对齐',
          align: 'left'
        },
        {
          content: '右对齐',
          align: 'right'
        },
        {
          content: '默认居中对齐'
        },
        {
          content: '自定义样式的内容',
          class: 'orange'
        },
        {
          content: '<i class="didi-icons didi-icons-arrow_lift"></i><span>嵌入了HTML的内容</span>'
        }
      ]
      let ins
      const vm = new Vue({
        template: '<div>xx</div>',
        methods: {
          showAPI() {
            ins = this.$createActionSheet({
              data: data,
              active: 1,
              title: 'action sheet api title',
              onSelect: selectHandler,
              onCancel: cancelHandler
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

      expect(ins.$el.querySelector('.cube-action-sheet-title').textContent)
        .to.equal('action sheet api title')
      const items = ins.$el.querySelectorAll('.cube-action-sheet-item')
      expect(items.length)
        .to.equal(5)
      expect(items[1].className)
        .to.include('cube-action-sheet-item_active')
      expect(items[4].querySelector('span').textContent)
        .to.equal('嵌入了HTML的内容')

      items[0].click()
      expect(ins.isVisible)
        .to.be.false
      expect(selectHandler)
        .to.be.calledWith(data[0])

      ins.show()
      ins.$el.querySelector('.cube-action-sheet-cancel').click()
      expect(ins.isVisible)
        .to.be.false
      expect(cancelHandler)
        .to.be.calledOnce
      ins.remove()
      expect(ins.$el.parentElement)
        .to.be.null
      vm.$destroy()
    })
  })
})
