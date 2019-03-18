import Vue from 'vue2'
import Toolbar from '@/modules/toolbar'
import instantiateComponent from '@/common/helpers/instantiate-component'

describe('Toolbar.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Toolbar)
    expect(Vue.component(Toolbar.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = instantiateComponent(Vue, Toolbar, {
      props: {
        actions: [
          {
            text: '完成订单',
            action: 'showText'
          },
          {
            text: '打车来接',
            checked: false,
            type: 'checkbox'
          }
        ]
      }
    })

    expect(vm.$el.querySelectorAll('.cube-toolbar-group').length)
      .to.equal(1)
    const items = vm.$el.querySelectorAll('.cube-toolbar-item')
    expect(items.length)
      .to.equal(2)
    expect(items[0].querySelector('.cube-btn').textContent.trim())
      .to.equal('完成订单')
    expect(items[1].querySelector('.cube-checkbox-label').textContent.trim())
      .to.equal('打车来接')
  })
  it('should render correct contents - more actions', () => {
    vm = instantiateComponent(Vue, Toolbar, {
      props: {
        actions: [
          {
            text: '完成订单',
            action: 'showText'
          },
          {
            text: '打车来接',
            checked: false,
            type: 'checkbox'
          }
        ],
        moreActions: [
          {
            text: '操作a',
            action: 'showText'
          }
        ]
      }
    })
    const groups = vm.$el.querySelectorAll('.cube-toolbar-group')
    expect(groups.length)
      .to.equal(2)
    const items = groups[0].querySelectorAll('.cube-toolbar-item')
    expect(items.length)
      .to.equal(1)
    expect(items[0].querySelector('.cube-btn').textContent.trim())
      .to.equal('操作a')
    // 2 + 1 more action
    expect(groups[1].querySelectorAll('.cube-toolbar-item').length)
      .to.equal(3)
  })
  it('should trigger events', () => {
    const itemHandler = sinon.spy()
    const moreHandler = sinon.spy()
    const actions = [
      {
        text: '完成订单',
        action: 'showText'
      },
      {
        text: '打车来接',
        checked: false,
        type: 'checkbox'
      }
    ]
    vm = instantiateComponent(Vue, Toolbar, {
      props: {
        actions,
        moreActions: [
          {
            text: '操作a',
            action: 'showText'
          }
        ]
      },
      on: {
        click: itemHandler,
        'more-click': moreHandler
      }
    })
    const groups = vm.$el.querySelectorAll('.cube-toolbar-group')
    groups[1].querySelector('.cube-btn').click()
    expect(itemHandler)
      .to.be.calledOnce
    expect(itemHandler)
      .to.be.calledWith(actions[0])
    groups[1].querySelector('.cube-toolbar-item:last-child .cube-btn').click()
    expect(moreHandler)
      .to.be.calledOnce
    expect(moreHandler)
      .to.be.calledWith(true)
  })
})
