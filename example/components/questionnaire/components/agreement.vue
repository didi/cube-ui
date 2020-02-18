<template>
  <div class="demo-agreement">
    <p v-if="desc" v-html="desc"></p>
    <cube-checkbox v-model="checked">
      <span v-html="text"></span> <a :href="link.href" target="_blank" v-if="link">{{link.text}}</a>
    </cube-checkbox>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    desc: String,
    text: String,
    link: Object
  },
  data() {
    return {
      checked: this.value
    }
  },
  watch: {
    checked(newV) {
      this.$emit('input', newV)
    }
  }
}
</script>

<style lang="stylus">

.demo-agreement
  color: #666
  > p
    line-height: 1.5
    margin-bottom: 10px
  .cube-checkbox-label
    font-weight: bold
    a
    span
      font-weight: inherit
    a
      position: relative
      z-index: 1
  a
    color: #fc9153
</style>
