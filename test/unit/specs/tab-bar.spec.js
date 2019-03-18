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
      <cube-tab-bar v-model="selectedLabel" :data="tabs" show-slider>
      </cube-tab-bar>
    `,
      data: {
        selectedLabel: '夜魇',
        tabs: [{ label: '天辉', icon: 'cubeic-like' }, { label: '夜魇', icon: 'cubeic-star' }]
      }
    })
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.cube-tab-bar-slider').length)
        .to.be.equal(1)
      expect(vm.$el.querySelectorAll('.cube-tab')[0].getElementsByTagName('div')[0].textContent)
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
        tabs: [{ label: '天辉', icon: 'cubeic-like' }, { label: '夜魇', icon: 'cubeic-star' }]
      }
    })
    setTimeout(() => {
      const items = vm.$parent.$el.querySelectorAll('.cube-tab-panel')
      const firstTab = vm.$parent.$refs.tab[0].$el
      firstTab.click()
      expect(items[0].textContent)
        .to.include('天辉')
      done()
    }, 300)
  })
  it('should toggle v-model value', () => {
    vm = createTabBar()
    const items = vm.$el.querySelectorAll('.cube-tab')
    items[1].click()
    expect(vm.$parent.selectedLabel)
      .to.be.equal('夜魇')
  })
  it('should trigger click and change event', () => {
    const clickHandler = sinon.spy()
    const changeHandler = sinon.spy()
    vm = createTabBar({ clickHandler, changeHandler })
    const items = vm.$el.querySelectorAll('.cube-tab')
    items[1].click()
    expect(clickHandler)
      .to.be.calledOnce
    expect(changeHandler)
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
    // destroyed tab and panel
    vm.$parent.tabs.splice(0, 1)
    setTimeout(() => {
      expect(vm.$parent.$el.querySelectorAll('.cube-tab').length)
        .to.be.equal(1)
      expect(vm.$parent.$el.querySelectorAll('.cube-tab-panel').length)
        .to.be.equal(1)
      done()
    }, 1000)
  })
})

function createTabBar (options) {
  const vm = createVue({
    template: `
      <cube-tab-bar v-model="selectedLabel" show-slider @click="clickHandler" @change="changeHandler">
        <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="index" >
          <i slot="icon" :class="item.icon"></i>
          {{item.label}}
        </cube-tab>
      </cube-tab-bar>
    `,
    data: {
      selectedLabel: '天辉',
      tabs: [{ label: '天辉', icon: 'cubeic-like' }, { label: '夜魇', icon: 'cubeic-star' }]
    },
    methods: {
      clickHandler: (options && options.clickHandler) || function () {},
      changeHandler: (options && options.changeHandler) || function () {}
    }
  })
  return vm
}
