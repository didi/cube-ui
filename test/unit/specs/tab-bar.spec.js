import Vue from 'vue2'
import CubeTabBar from '@/modules/tab-bar'
import CubeTabPanels from '@/modules/tab-panels'
import createVue from '../utils/create-vue'

describe('TabBar', () => {
  let vm
  it('use', () => {
    Vue.use(CubeTabBar)
    expect(Vue.component(CubeTabBar.name))
      .to.be.a('function')
    Vue.use(CubeTabPanels)
    expect(Vue.component(CubeTabPanels.name))
      .to.be.a('function')
  })
  it('props', (done) => {
    vm = createVue({
      template: `
      <cube-tab-bar v-model="selectedLabel" fixed="top" :data="tabs" showSlider>
      </cube-tab-bar>
    `,
      data: {
        selectedLabel: '夜魇',
        tabs: [{ label: '天辉', class: 'cubeic-like' }, { label: '夜魇', class: 'cubeic-star' }]
      }
    })
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.cube-tab-bar-slider').length)
        .to.be.equal(1)
      expect(vm.$el.querySelectorAll('.cube-tab-label')[0].innerText)
        .to.include('天辉')
      done()
    })
  })
  it('should render correct content when pass data prop', (done) => {
    const vm = createVue({
      template: `
      <div>
        <cube-tab-bar v-model="selectedLabel">
          <cube-tab ref="tab" v-for="(item, index) in tabs" :label="item.label" :key="index">
          {{item.label}}
          </cube-tab>
        </cube-tab-bar>
        <cube-tab-panels v-model="selectedLabel" :data="tabs"></cube-tab-panels>
      </div>
    `,
      data: {
        selectedLabel: '夜魇',
        tabs: [{ label: '天辉', class: 'cubeic-like' }, { label: '夜魇', class: 'cubeic-star' }]
      }
    })
    setTimeout(() => {
      const items = vm.$parent.$el.querySelectorAll('.cube-tab-panel')
      const firstTab = vm.$parent.$refs.tab[0].$el
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
        <cube-tab-bar v-model="selectedLabel">
          <cube-tab ref="tab" v-for="(item, index) in tabs" :label="item.label" :key="index">
          {{item.label}}
          </cube-tab>
        </cube-tab-bar>
        <cube-tab-panels v-model="selectedLabel">
          <cube-tab-panel ref="panel" v-for="(item, index) in tabs" :label="item.label" :key="index">
          {{item.label}}
          </cube-tab-panel>
        </cube-tab-panels>
      </div>
    `,
      data: {
        selectedLabel: '天辉',
        tabs: [{ label: '天辉', class: 'cubeic-like' }, { label: '夜魇', class: 'cubeic-star' }]
      }
    })
    setTimeout(() => {
      const tab = vm.$parent.$refs.tab[1].$el
      const containerItem = vm.$parent.$refs.panel[0]
      tab.click()
      setTimeout(() => {
        expect(containerItem.transitionName)
          .to.be.equal('cube-tab-panel-reverse-transition')
        done()
      }, 1000)
    }, 100)
  })
  it('should toggle v-model value', () => {
    vm = createCubeTabBar()
    const items = vm.$el.querySelectorAll('.cube-tab')
    items[1].click()
    expect(vm.$parent.selectedLabel)
      .to.be.equal('夜魇')
  })
  it('should trigger tab-click event', () => {
    const tabClickHandler = sinon.spy()
    vm = createCubeTabBar({ handler: tabClickHandler })
    const items = vm.$el.querySelectorAll('.cube-tab')
    items[1].click()
    expect(tabClickHandler)
      .to.be.calledOnce
  })
  it('should remove child dom when child component destroyed', (done) => {
    vm = createVue({
      template: `
      <div class="cube-tabs-container">
        <cube-tab-bar ref="tabBar" v-model="selectedLabel">
          <cube-tab ref="tab" v-for="(item, index) in tabs" :label="item.label" :key="index">
          {{item.label}}
          </cube-tab>
        </cube-tab-bar>
        <cube-tab-panels v-model="selectedLabel">
          <cube-tab-panel ref="panel" v-for="(item, index) in tabs" :label="item.label" :key="index">
          {{item.label}}
          </cube-tab-panel>
        </cube-tab-panels>
      </div>
    `,
      data: {
        selectedLabel: '天辉',
        tabs: [{ label: '天辉', class: 'cubeic-like' }, { label: '夜魇', class: 'cubeic-star' }]
      }
    })
    // destroyed tab
    vm.$parent.$refs.tab[0].$destroy()
    vm.$parent.$refs.panel[0].$destroy()
    setTimeout(() => {
      expect(vm.$parent.$el.querySelectorAll('.cube-tab').length)
        .to.be.equal(1)
      expect(vm.$parent.$el.querySelectorAll('.cube-tab-panel').length)
        .to.be.equal(1)
      done()
    }, 100)
  })
})

function createCubeTabBar (options) {
  const vm = createVue({
    template: `
      <cube-tab-bar v-model="selectedLabel" showSlider @tab-click="handleClick">
        <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="index" >
          <i slot="icon" :class="item.class"></i>
          {{item.label}}
        </cube-tab>
      </cube-tab-bar>
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
