<template>
  <cube-page type="scroll-view" title="Scroll" class="option-demo">
    <div slot="content" class="scroll-wrapper">
      <div class="demo">
        <cube-scroll
          ref="scroll"
          :data="items1"
          direction="horizontal"
          class="outer-horizontal-scroll">
          <ul class="list-wrapper">
            <li v-for="item in items1" class="list-item">{{ item }}</li>
            <li class="list-item inner-horizontal-scroll">
              <cube-scroll
                ref="scroll"
                :data="items2"
                nestMode="free"
                direction="horizontal">
                <ul class="list-wrapper">
                  <li v-for="item in items2" class="list-item">{{ item }}</li>
                </ul>
              </cube-scroll>
            </li>
            <li v-for="item in items1" class="list-item">{{ item }}</li>
          </ul>
        </cube-scroll>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
import CubePage from '../../components/cube-page.vue'

const _data1 = [
  '👈🏻  outer 👉🏻 ',
  '🙂 🤔 😄 🤨 😐 🙃 '
]

const _data2 = [
  '👈🏻  inner 👉🏻  ',
  '🙂 🤔 😄 🤨 😐 🙃 ',
  '👈🏻  inner 👉🏻 ',
  '😔 😕 🙃 🤑 😲 ☹️ ',
  '👈🏻  inner 👉🏻 ',
  '🐣 🐣 🐣 🐣 🐣 🐣 ',
  '👈🏻  inner 👉🏻 ',
  '🐥 🐥 🐥 🐥 🐥 🐥 '
]

export default {
  data() {
    return {
      items1: _data1,
      items2: _data2
    }
  },
  components: {
    CubePage
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.inner-horizontal-scroll  
  vertical-align: top
  width: 200px
.outer-horizontal-scroll
.inner-horizontal-scroll
  border: 1px solid rgba(0, 0, 0, 0.1)
  border-radius: 5px
  transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
  position: relative
  .cube-scroll-content
    display: inline-block
    vertical-align: top
  .list-wrapper
    padding: 0 10px
    line-height: 60px
    white-space: nowrap
  .list-item
    display: inline-block
</style>
