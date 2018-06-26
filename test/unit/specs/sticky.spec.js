import Vue from 'vue2'
import Sticky from '@/modules/sticky'
import createVue from '../utils/create-vue'

describe('Sticky', () => {
  let vm

  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(Sticky)
    expect(Vue.component(Sticky.name))
      .to.be.a('function')
  })

  it('should render correct contents', (done) => {
    vm = createSticky()
    expect(vm.$el.className)
      .to.equal('cube-sticky')
    const eles = vm.$el.querySelectorAll('.cube-sticky-ele')
    expect(eles.length)
      .to.equal(3)
    expect(vm.$el.querySelector('.cube-sticky-fixed').style.display)
      .to.equal('none')
    setTimeout(() => {
      done()
    })
  })

  it('should fixed ele', (done) => {
    vm = createSticky()
    expect(vm.currentIndex)
      .to.equal(-1)
    expect(vm.currentKey)
      .to.equal('')
    setTimeout(() => {
      vm.$parent.scrollTo(280)
      setTimeout(() => {
        expect(vm.currentIndex)
          .to.equal(0)
        expect(vm.currentKey)
          .to.equal(0)
        expect(vm.currentDiff)
          .to.equal(250)
        const fixed = vm.$el.querySelector('.cube-sticky-fixed')
        expect(fixed.style.display)
          .not.equal('none')
        expect(fixed.textContent.trim())
          .to.equal('111')
        vm.$parent.scrollTo(500)
        setTimeout(() => {
          expect(vm.currentIndex)
            .to.equal(1)
          expect(vm.currentKey)
            .to.equal('2')
          expect(vm.currentDiff)
            .to.equal(20)
          vm.$parent.scrollTo(0)
          setTimeout(() => {
            expect(vm.currentIndex)
              .to.equal(-1)
            expect(vm.currentKey)
              .to.equal('')
            expect(vm.currentDiff)
              .to.equal(0)
            done()
          })
        })
      })
    })
  })

  it('should fixed ele - checkTop', (done) => {
    vm = createSticky({
      checkTop: false
    }, {}, `
      <template slot="fixed" slot-scope="props">
        <span>{{props.current}}</span>
      </template>
    `)
    expect(vm.currentIndex)
      .to.equal(-1)
    expect(vm.currentKey)
      .to.equal('')
    setTimeout(() => {
      vm.$parent.scrollTo(280)
      setTimeout(() => {
        expect(vm.currentIndex)
          .to.equal(0)
        expect(vm.currentKey)
          .to.equal(0)
        expect(vm.currentDiff)
          .to.equal(220)
        const fixed = vm.$el.querySelector('.cube-sticky-fixed')
        expect(fixed.style.display)
          .not.equal('none')
        expect(fixed.textContent.trim())
          .to.equal('0')
        vm.$parent.scrollTo(1000)
        setTimeout(() => {
          expect(vm.currentIndex)
            .to.equal(2)
          expect(vm.currentKey)
            .to.equal('3')
          expect(vm.currentDiff)
            .to.equal(10)
          vm.$parent.scrollTo(0)
          setTimeout(() => {
            expect(vm.currentIndex)
              .to.equal(-1)
            expect(vm.currentKey)
              .to.equal('')
            expect(vm.currentDiff)
              .to.equal(0)
            done()
          })
        })
      })
    })
  })

  it('should trigger events', (done) => {
    const changeHandler = sinon.spy()
    const onDiffChange = sinon.spy()
    vm = createSticky(undefined, {
      onChange: changeHandler,
      onDiffChange: onDiffChange
    })
    setTimeout(() => {
      vm.$parent.scrollTo(280)
      setTimeout(() => {
        expect(changeHandler)
          .to.be.calledOnce
        expect(changeHandler)
          .to.be.calledWith(0)
        expect(onDiffChange)
          .to.be.calledOnce
        vm.$parent.scrollTo(500)
        setTimeout(() => {
          expect(changeHandler)
            .to.be.calledTwice
          expect(changeHandler)
            .to.be.calledWith('2')
          expect(onDiffChange)
            .to.be.calledTwice
          done()
        })
      })
    })
  })

  function createSticky(props = { checkTop: true }, events = {}, fixedSlot) {
    const _data = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14'
    ]
    return createVue({
      template: `
        <div style="height:400px;font-size:30px;">
          <cube-sticky
            :pos="scrollY"
            :check-top="checkTop"
            @change="changeHandler"
            @diff-change="diffChangeHandler">
            <div
              ref="scroller"
              style="height:100%;overflow:auto;"
              @scroll="scrollHandler">
              <ul>
                <li>title</li>
              </ul>
              <cube-sticky-ele>
                <ul>
                  <li>111</li>
                </ul>
              </cube-sticky-ele>
              <ul>
                <li v-for="item in items">{{item}}</li>
              </ul>
              <cube-sticky-ele ele-key="2">
                <ul>
                  <li>222</li>
                  <li>222</li>
                </ul>
              </cube-sticky-ele>
              <ul>
                <li v-for="item in items2">{{item}}</li>
              </ul>
              <cube-sticky-ele ele-key="3">
                <ul>
                  <li>333</li>
                </ul>
              </cube-sticky-ele>
              <ul>
                <li v-for="item in items3">{{item}}</li>
              </ul>
            </div>
            ${fixedSlot || ''}
          </cube-sticky>
        </div>
      `,
      data: {
        checkTop: props.checkTop,
        scrollY: 0,
        items: _data.concat(),
        items2: _data.concat(),
        items3: _data.concat()
      },
      methods: {
        changeHandler(key, index) {
          events.onChange && events.onChange.call(this, key, index)
        },
        diffChangeHandler(diff, height) {
          events.onDiffChange && events.onDiffChange.call(this, diff, height)
        },
        scrollHandler(e) {
          this.scrollY = e.currentTarget.scrollTop
        },
        scrollTo(y) {
          this.$refs.scroller.scrollTop = y
        }
      }
    })
  }
})
