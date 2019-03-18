<template>
  <cube-page type="scroll-textarea" title="Scroll">
    <template slot="content">
      <div class="scroll-wrap" @touchstart.stop>
        <cube-scroll
          ref="scrollOuter"
          :options="optionsOuter"
          class="scroll-outer">
          <p>Sometimes we need a teatarea in cube-scroll component. However the problem is, we can not use the native scroll in teatarea when we need to scroll, due to we prevent the default broswer behavior of 'scroll' event in Cube-scroll.</p>
          <p>Now, we give this example, introducing two ways how to solve this trouble.</p>
          <p>Both approach takes advantage of the cube-scroll support for nesting. We wrap the internal input box with cube-scroll and simulate the scrolling behavior by cube-scroll.</p>
          <div class="editable-div-wrapper" :class="{'editable-div_active': isFocusDiv}">
            <cube-scroll
              ref="divWrapScroll"
              :options="options">
              <div ref="editablediv" contenteditable="true" class="editable-div"
                @focus="onFocusDiv"
                @blur="onBlurDiv"
                @input="onInputDiv">
              </div>
            </cube-scroll>
            <span class="editable-div-indicator">{{divValueCount}}</span>
          </div>
          <div class="cube-textarea-wrapper" :class="{'cube-textarea_active': isFocusNative}">
            <cube-scroll
              ref="nativeWrapScroll"
              :options="options">
              <textarea
                ref="textarea"
                v-model="textareaValue"
                @input="onInputNative"
                @focus="onFocusNative"
                @blur="onBlurNative"
                :placeholder="placeholder"
                class="cube-textarea">
              </textarea>
            </cube-scroll>
            <span class="cube-textarea-indicator">{{textareaValueCount}}</span>
          </div>
          <p>有时候我们需要在 cube-scroll 组件中包含 teatarea 输入框。然而由于我们在使用 cube-scroll 时禁用了浏览器 'scroll' 事件的默认行为，因此我们无法在 textarea 输入框中使用浏览器的原生滚动。</p>
          <p>现在我们希望通过这个例子，介绍两种解决这个问题的方法。</p>
          <p>核心都是利用了 cube-scroll 支持嵌套的能力，我们将内部的输入框用 cube-scroll 进行包装，通过 cube-scroll 去模拟滚动行为。但是有一个要求是，内容区域必须是高度自适应，即高度随内容多少增加或减少。</p>
          <p>1. 利用 div 标签模拟 textarea，实现内容区域高度自适应。<br> 2. 利用 textarea 配合 js，实现高度自适应。</p>
          <p>最后，我们还需要一些额外的工作保证输入过程中，光标能始终在视线内，保持与原生输入框的行为一致。</p>
        </cube-scroll>
      </div>

      <h1>{{ msg }}</h1>
    </template>
  </cube-page>
</template>

<script>
import CubePage from '../../components/cube-page.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'scroll - textarea demo',
      options: {
        scrollbar: true,
        preventDefaultException: {
          className: /(^|\s)(editable-div|textarea-native)(\s|$)/,
          tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
        }
      },
      optionsOuter: {
        preventDefaultException: {
          className: /(^|\s)(editable-div|textarea-native)(\s|$)/,
          tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|P)$/
        }
      },
      placeholder: 'Please type here...',
      divValue: '',
      textareaValue: '',
      isFocusNative: false,
      isFocusDiv: false
    }
  },
  computed: {
    textareaValueCount() {
      return this.textareaValue.length
    },
    divValueCount() {
      return this.divValue.length
    }
  },
  mounted() {
    this.textareaInitHeight = window.getComputedStyle(this.$refs.textarea).height
    console.log('textareaInitHeight: ', this.textareaInitHeight)
  },
  methods: {
    onInputDiv (e) {
      this.divValue = e.target.innerText

      const scroll = this.$refs.divWrapScroll

      if (this.oldHeightDiv !== scroll.$el.scrollHeight) {
        this.goToRightPositon(scroll, scroll.$el)
      }
    },
    onInputNative() {
      const textarea = this.$refs.textarea
      const scroll = this.$refs.nativeWrapScroll
      // make textarea's height adaptive
      textarea.style.height = this.textareaInitHeight // 无意中给l个 空字符串 好像也可以，还不知道为什么
      textarea.style.height = textarea.scrollHeight + 'px'

      if (this.oldHeightNative !== textarea.scrollHeight) {
        this.goToRightPositon(scroll, textarea)
      }
    },
    goToRightPositon(scroll, el) {
      this.$nextTick(() => { // waiting scrollTop update
        let diff = this.oldHeightDiv ? el.scrollHeight - this.oldHeightDiv : 0
        this.oldHeightDiv = el.scrollHeight

        scroll.refresh()
        scroll.$el.scrollTop = 0

        const posY = scroll.scroll.y
        const maxScrollY = scroll.scroll.maxScrollY
        const position = posY !== maxScrollY ? Math.max(Math.min(posY - diff, 0), maxScrollY) : posY
        scroll.scrollTo(0, position, 100)
      })
    },
    onFocusNative() {
      this.isFocusNative = true
    },
    onBlurNative() {
      this.isFocusNative = false
    },
    onFocusDiv() {
      this.isFocusDiv = true
    },
    onBlurDiv() {
      this.isFocusDiv = false
    }
  },
  components: {
    CubePage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@require "../../../src/common/stylus/variable.styl"
@require "../../../src/common/stylus/mixin.styl"

.scroll-textarea
  background: white
  text-align: center
.scroll-wrap
  height: 400px
  padding: 10px
  margin-bottom: 30px
  line-height: 1.2
  text-align: left 
  color: #323233
  letter-spacing: 0
  border-top: 1px solid grey
  border-bottom: 1px solid grey
.editable-div-wrapper
.cube-textarea-wrapper
  position: relative
  height: 100px
  width: 80%
  margin: 10px auto
  font-size: $fontsize-medium
  border-radius: 2px
  border: 1px solid $textarea-border-color
.editable-div_active
.cube-textarea_active
  border: 1px solid $textarea-focus-border-color
.editable-div-indicator
.cube-textarea-indicator
  position: absolute
  z-index: 1
  bottom: 7px
  right: 10px
  color: $textarea-indicator-color
.editable-div
  min-height: 80px
  padding: 10px
  outline: none
  color: $textarea-color
  word-wrap: break-word
  overflow-x: hidden
  -webkit-user-modify: read-write-plaintext-only
  -webkit-user-select: text // 解决移动端无法输入的问题
.cube-textarea
  width: 100%
  height: 100px
  padding: 10px
  box-sizing: border-box
  vertical-align: top
  text-align: left
  font-size: 100%
  line-height: inherit
  color: $textarea-color
  background-color: $textarea-bgc
  border-radius: 2px
  resize: none
  border: none
  outline: none
textarea::-webkit-input-placeholder
  color: $textarea-placeholder-color !important
  text-overflow: ellipsis
</style>
