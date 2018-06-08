import Vue from 'vue2'
import CubeTabNav from '@/modules/tab-nav'
import createVue from '../utils/create-vue'

describe('TabNav.vue', () => {
  let vm
  it('use', () => {
    Vue.use(CubeTabNav)
    expect(Vue.component(CubeTabNav.name))
      .to.be.a('function')
  })
  it('props', (done) => {
    vm = createVue({
      template: `
      <cube-tab-nav v-model="selectedLabel" fixed="top" :data="tabs" showTabBar>
      </cube-tab-nav>
    `,
      data: {
        selectedLabel: '天辉',
        tabs: [{ label: '天辉', class: 'cubeic-like' }, { label: '夜魇', class: 'cubeic-star' }]
      }
    })
    vm.$nextTick(() => {
      expect(window.getComputedStyle(vm.$el).top)
        .to.equal('0px')
      expect(vm.$el.querySelectorAll('.cube-tab-bar').length)
        .to.be.equal(1)
      expect(vm.$el.querySelectorAll('.cube-tab-nav-item-label')[0].innerText)
        .to.be.equal('天辉')
      done()
    })
  })
  it('should toggle v-model value', () => {
    vm = createCubeTabNav()
    const items = vm.$el.querySelectorAll('.cube-tab-nav-item')
    items[1].click()
    expect(vm.$parent.selectedLabel)
      .to.be.equal('夜魇')
  })
  it('should trigger tab-click event', () => {
    const tabClickHandler = sinon.spy()
    vm = createCubeTabNav({ handler: tabClickHandler })
    const items = vm.$el.querySelectorAll('.cube-tab-nav-item')
    items[1].click()
    expect(tabClickHandler)
      .to.be.calledOnce
  })
})

function createCubeTabNav (options) {
  const vm = createVue({
    template: `
      <cube-tab-nav v-model="selectedLabel" showTabBar @tab-click="handleClick">
        <cube-tab-nav-item v-for="(item, index) in tabs" :label="item.label" :key="index" >
          <i slot="icon" :class="item.class"></i>
          {{item.label}}
        </cube-tab-nav-item>
      </cube-tab-nav>
    `,
    data: {
      selectedLabel: '天辉',
      tabs: [{ label: '天辉', class: 'cubeic-like' }, { label: '夜魇', class: 'cubeic-star' }]
    },
    methods: {
      handleClick: (options && options.handler) || function () {}
    }
  })
  return vm
}
