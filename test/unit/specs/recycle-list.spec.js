import Vue from 'vue2'
import RecycleList from '@/modules/recycle-list'
import createVue from '../utils/create-vue'

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
  it('render correct count data', () => {
    vm = createRecycleList()
    setTimeout(() => {
      let length = vm.$el.querySelector('.cube-recycle-list-item').length
      expect(length)
        .to.equal(50)
    }, 100)
  })
})

function createRecycleList () {
  const vm = createVue({
    template: `
    <cube-recycle-list class="list" :on-fetch="onFetch">
      <template slot="item" slot-scope="props">
        <div :id="props.data.id" class="item">
          <div class="avatar" :style="{backgroundImage: 'url(' + (props.data.avatar || '') + ')'}"></div>
          <div class="bubble">
            <p>{{ props.data.msg }}</p>
            <div class="meta">
              <time class="posted-date">{{ props.data.time }}</time>
            </div>
          </div>
        </div>
      </template>
    </cube-recycle-list>
    `,
    methods: {
      onFetch () {
        let items = []
        return new Promise((resolve) => {
          setTimeout(() => {
            for (let i = 0; i < 20; i++) {
              items.push({
                id: i,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
                msg: '123',
                time: 'Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)'
              })
            }
            resolve(items)
          }, 1000)
        })
      }
    }
  })
  return vm
}
