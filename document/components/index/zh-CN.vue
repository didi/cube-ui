<template>
  <home-index>
    <template slot="desc">基于 Vue.js 实现的精致移动端组件库</template>
    <template slot="features">
      <li>
        <h1>质量可靠</h1>
        由滴滴内部组件库精简提炼而来，历经考验，并且每个组件都有充分单元测试，为后续集成提供保障。
      </li>
      <li>
        <h1>体验极致</h1>
        以迅速响应、动画流畅、接近原生为目标，在交互体验方面追求极致。
      </li>
      <li>
        <h1>标准规范</h1>
        遵循统一的设计交互标准，高度还原设计效果；接口标准化，统一规范使用方式，开发更加简单高效。
      </li>
      <li>
        <h1>扩展性强</h1>
        支持按需引入和<router-link to="/zh-CN/docs/post-compile">后编译</router-link>，轻量灵活；扩展性强，可以方便地基于现有组件实现二次开发。
      </li>
    </template>
  </home-index>
</template>

<script>
  import HomeIndex from './index.vue'
  export default {
    components: {
      HomeIndex
    }
  }
</script>
<style lang="stylus">
</style>
