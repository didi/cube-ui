<template>
  <home-index>
    <template slot="desc">A fantastic mobile ui lib implement by Vue.js</template>
    <template slot="rec-btns">
      <router-link to="/en-US/docs/quick-start" class="btn-link"><span>Quick Start</span></router-link>
      <router-link to="/en-US/docs/introduction" class="btn-link btn-active"><span>Introduction</span></router-link>
    </template>
    <template slot="feature-1">
      <h1 class="h1">High Quality</h1>
      <h1 class="h2">Quality</h1>
      <p>
        From DiDi interior component library and has been put to business test for more than one year. Every component has full unit tests to provide assurance for continuous integration.
      </p>
    </template>
    <template slot="feature-2">
      <h1 class="h1">Good Experience</h1>
      <h1 class="h2">Experience</h1>
      <p>
        Make quick response, fluent animation and close to native components as the goal, and pursue the perfection of the interactive experience.
      </p>
    </template>
    <template slot="feature-3">
      <h1 class="h1">Keep Standard</h1>
      <h1 class="h2">Standard</h1>
      <p>
        Follow a uniform design interaction standard and highly restore the design; Standardize the interface and unify the way of use, making development more simple and efficient.
      </p>
    </template>
    <template slot="feature-4">
      <h1 class="h1">Design Scalability</h1>
      <h1 class="h2">Scalability</h1>
      <p>
        Lightweight and flexible: support <router-link to="/en-US/docs/post-compile">post-compile</router-link> and importing on demand; High scalability: it is easy to implement secondary development based on existing components.
      </p>
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
