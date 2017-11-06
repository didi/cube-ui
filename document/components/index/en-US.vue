<template>
  <home-index>
    <template slot="desc">A fantastic mobile ui lib implement by Vue.js</template>
    <template slot="features">
      <li>
        <h1>Quality</h1>
        Extracted from DiDi interior component library and has been put to business test for more than one year. Every component has full unit tests to provide assurance for continuous integration.
      </li>
      <li>
        <h1>Experience</h1>
        Make quick response, fluent animation and close to native components as the goal, and pursue the perfection of the interactive experience.
      </li>
      <li>
        <h1>Standard</h1>
        Follow a uniform design interaction standard and highly restore the design; Standardize the interface and unify the way of use, making development more simple and efficient.
      </li>
      <li>
        <h1>Scalability</h1>
        Lightweight and flexible: support <router-link to="/en-US/docs/post-compile">post-compile</router-link> and importing on demand; High scalability: it is easy to implement secondary development based on existing components.
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
