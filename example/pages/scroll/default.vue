<template>
  <cube-page type="scroll-view" title="Scroll" class="option-demo">
    <div slot="content" class="scroll-wrapper">
      <div class="options">
        <div class="title">Basic Options</div>
        <div class="option-list">
          <div class="group">
            <switch-option class="item" name="Scrollbar" :value="scrollbar"
                           @update:value="updateScrollbar"></switch-option>
            <switch-option v-if="scrollbar" class="item sub first last" name="fade" :value="scrollbarFade"
                           @update:value="updateScrollbarFade"></switch-option>
          </div>
          <div class="group">
            <input-option class="item" name="startY" :value="startY"
                          @update:value="updateStartY"></input-option>
          </div>
        </div>
      </div>
      <div class="demo">
        <div class="title">Basic Demo</div>
        <div class="scroll-list-wrap">
          <cube-scroll
            ref="scroll"
            :data="items"
            :options="options">
          </cube-scroll>
        </div>
      </div>
      <div class="methods">
        <div class="title">Methods</div>
        <ul class="method-list">
          <li class="group">
            <input-option class="item" name="y" :value="scrollToY"
                          @update:value="updateScrollToY"></input-option>
            <input-option class="item" name="time" :value="scrollToTime"
                          @update:value="updateScrollToTime"></input-option>
            <select-option class="item" name="easing" :value="scrollToEasing" :options="scrollToEasingOptions"
                           @update:value="updateScrollToEasing"></select-option>
            <button @click="scrollTo">scrollTo</button>
          </li>
        </ul>
      </div>

    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import CubePage from '../../components/cube-page.vue'
import SwitchOption from '../../components/switch-option'
import InputOption from '../../components/input-option'
import SelectOption from '../../components/select-option'

import { ease } from '../../data/ease'

const _data = [
  '😀 😁 😂 🤣 😃 😄 ',
  '🙂 🤗 🤩 🤔 🤨 😐 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '😔 😕 🙃 🤑 😲 ☹️ ',
  '🐣 🐣 🐣 🐣 🐣 🐣 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🐥 🐥 🐥 🐥 🐥 🐥 ',
  '🤓 🤓 🤓 🤓 🤓 🤓 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🦔 🦔 🦔 🦔 🦔 🦔 ',
  '🙈 🙈 🙈 🙈 🙈 🙈 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🚖 🚖 🚖 🚖 🚖 🚖 ',
  '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
]

export default {
  data() {
    return {
      items: _data,
      itemIndex: _data.length,
      scrollbar: true,
      scrollbarFade: true,
      startY: 0,
      scrollToY: -200,
      scrollToTime: 700,
      scrollToEasing: 'bounce',
      scrollToEasingOptions: [
        {
          text: 'bounce',
          value: 'bounce'
        },
        {
          text: 'swipe',
          value: 'swipe'
        },
        {
          text: 'swipeBounce',
          value: 'swipeBounce'
        }
      ],
      customPullDown: false
    }
  },
  computed: {
    options() {
      return {
        scrollbar: this.scrollbarObj,
        startY: this.startY
      }
    },
    scrollbarObj: function() {
      return this.scrollbar ? { fade: this.scrollbarFade } : false
    }
  },
  watch: {
    scrollbarObj: {
      handler() {
        this.rebuildScroll()
      },
      deep: true
    },
    startY() {
      this.rebuildScroll()
    }
  },
  methods: {
    scrollTo() {
      this.$refs.scroll.scrollTo(
        0,
        this.scrollToY,
        this.scrollToTime,
        ease[this.scrollToEasing]
      )
    },
    updateScrollbar(val) {
      this.scrollbar = val
    },
    updateScrollbarFade(val) {
      this.scrollbarFade = val
    },
    updateStartY(val) {
      this.startY = val
    },
    updateScrollToY(val) {
      this.scrollToY = val
    },
    updateScrollToTime(val) {
      this.scrollToTime = val
    },
    updateScrollToEasing(val) {
      this.scrollToEasing = val
    },
    rebuildScroll() {
      Vue.nextTick(() => {
        this.$refs.scroll.destroy()
        this.$refs.scroll.initScroll()
      })
    }
  },
  components: {
    CubePage,
    SwitchOption,
    InputOption,
    SelectOption
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.scroll-list-wrap {
  height: 350px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transform: rotate(0deg); // fix 子元素超出边框圆角部分不隐藏的问题
  overflow: hidden;
}
</style>
