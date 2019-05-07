import Vue from 'vue2'
import RecycleList from '@/modules/recycle-list'
import createVue from '../utils/create-vue'
import { dispatchResize } from '../utils/event'

describe('RecycleList', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(RecycleList)
    expect(Vue.component(RecycleList.name))
      .to.be.a('function')
  })
  it('requires onFetch function to return a Promise', () => {
    vm = createRecycleList()
    expect(vm.onFetch() instanceof window.Promise)
        .to.equal(true)
  })
  it('render correct count data', (done) => {
    vm = createRecycleList(true)
    setTimeout(() => {
      const length = vm.items.length
      expect(length)
        .to.equal(10)
      vm.$el.scrollTop = 1000
      setTimeout(() => {
        const length = vm.items.length
        expect(length)
          .to.equal(15)
        done()
      }, 500)
    }, 500)
  })
  it('should stop scroll', (done) => {
    vm = createRecycleList(true)
    setTimeout(() => {
      vm.$el.scrollTop = 2000
      setTimeout(() => {
        expect(vm.noMore)
          .to.equal(true)
        done()
      }, 500)
    }, 500)
  })
  it('should clean all contents', (done) => {
    vm = createRecycleList(true)
    setTimeout(() => {
      vm.$parent.reset()
      vm.reset()

      expect(vm.list.length)
        .to.equal(0)
      setTimeout(() => {
        expect(vm.list.length)
          .to.equal(10)
        done()
      }, 500)
    }, 500)
  })
  it('should call correct method', (done) => {
    vm = createRecycleList()
    setTimeout(() => {
      vm.$el.scrollTop = 1000
      dispatchResize()
      done()
    }, 500)
  })
})

function createRecycleList (infinite) {
  const vm = createVue({
    template: `
    <div :style="{position: 'fixed', top: 0, left: 0, height: '500px', width: '100%'}">
    <cube-recycle-list class="list" :on-fetch="onFetch" :size="size" :infinite="infinite">
      <template slot="tombstone" slot-scope="props">
        <div class="tombstone">
        </div>
      </template>
      <template slot="item" slot-scope="props">
        <div :id="props.data.id" class="item" :style="{height: '20px'}">
        <p>{{props.data.msg}}</p>
        </div>
      </template>
    </cube-recycle-list>
    </div>
    `,
    data () {
      return {
        size: 10,
        infinite,
        pid: 0
      }
    },
    methods: {
      reset () {
        this.pid = 0
      },
      onFetch () {
        let items = []
        this.pid += 1
        const pid = this.pid
        return new Promise((resolve) => {
          if (pid > 2) {
            resolve(false)
          } else if (pid === 2) {
            setTimeout(() => {
              for (let i = 0; i < 5; i++) {
                items.push({
                  id: i,
                  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
                  msg: '123',
                  time: 'Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)'
                })
              }
              resolve(items)
            }, 100)
          } else {
            setTimeout(() => {
              for (let i = 0; i < 10; i++) {
                items.push({
                  id: i,
                  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
                  msg: '123',
                  time: 'Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)'
                })
              }
              resolve(items)
            }, 100)
          }
        })
      }
    }
  })
  return vm
}
