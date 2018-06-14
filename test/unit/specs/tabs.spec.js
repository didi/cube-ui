import Vue from 'vue2'
import CubeTabNav from '@/modules/tab-nav'
import CubeTabContainer from '@/modules/tab-container'
import createVue from '../utils/create-vue'

describe('Tabs', () => {
  let vm
  it('use', () => {
    Vue.use(CubeTabNav)
    expect(Vue.component(CubeTabNav.name))
      .to.be.a('function')
    Vue.use(CubeTabContainer)
    expect(Vue.component(CubeTabContainer.name))
      .to.be.a('function')
  })
  it('props', (done) => {
    vm = createVue({
      template: `
      <cube-tab-nav v-model="selectedLabel" fixed="top" :data="tabs" showSlider>
      </cube-tab-nav>
    `,
      data: {
        selectedLabel: '夜魇',
        tabs: [{ label: '天辉', class: 'cubeic-like' }, { label: '夜魇', class: 'cubeic-star' }]
      }
    })
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.cube-tab-slider').length)
        .to.be.equal(1)
      expect(vm.$el.querySelectorAll('.cube-tab-nav-item-label')[0].innerText)
        .to.include('天辉')
      done()
    })
  })
  it('should render correct content when pass data prop', (done) => {
    const vm = createVue({
      template: `
      <div>
        <cube-tab-nav v-model="selectedLabel">
          <cube-tab-nav-item ref="navItem" v-for="(item, index) in tabs" :label="item.label" :key="index">
          {{item.label}}
          </cube-tab-nav-item>
        </cube-tab-nav>
        <cube-tab-container v-model="selectedLabel" :data="tabs"></cube-tab-container>
      </div>
    `,
      data: {
        selectedLabel: '夜魇',
        tabs: [{ label: '天辉', class: 'cubeic-like' }, { label: '夜魇', class: 'cubeic-star' }]
      }
    })
    setTimeout(() => {
      const items = vm.$parent.$el.querySelectorAll('.cube-tab-container-item')
      const firstTab = vm.$parent.$refs.navItem[0].$el
      firstTab.click()
      expect(items[0].innerText)
        .to.include('天辉')
      done()
    }, 300)
  })
  it('should excute correct transition when tab is clicked', (done) => {
    vm = createVue({
      template: `
      <div class="cube-tabs-container">
        <cube-tab-nav v-model="selectedLabel">
          <cube-tab-nav-item ref="navItem" v-for="(item, index) in tabs" :label="item.label" :key="index">
          {{item.label}}
          </cube-tab-nav-item>
        </cube-tab-nav>
        <cube-tab-container v-model="selectedLabel">
          <cube-tab-container-item ref="containerItem" v-for="(item, index) in tabs" :label="item.label" :key="index">
          {{item.label}}
          </cube-tab-container-item>
        </cube-tab-container>
      </div>
    `,
      data: {
        selectedLabel: '天辉',
        tabs: [{ label: '天辉', class: 'cubeic-like' }, { label: '夜魇', class: 'cubeic-star' }]
      }
    })
    setTimeout(() => {
      const tab = vm.$parent.$refs.navItem[1].$el
      const containerItem = vm.$parent.$refs.containerItem[0]
      tab.click()
      setTimeout(() => {
        expect(containerItem.transitionName)
          .to.be.equal('cube-tab-reverse-transition')
        done()
      }, 1000)
    }, 100)
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
      <cube-tab-nav v-model="selectedLabel" showSlider @tab-click="handleClick">
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
