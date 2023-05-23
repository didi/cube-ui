import{a as t,o,j as n}from"./index-9017f177.js";const s={class:"markdown-body"},u=n(`<h2>Quick start</h2><ul><li><a href="https://github.com/cube-ui/cube-application-guide">Application Guide</a></li><li>Have problems? See <a href="https://github.com/cube-ui/question-answer/issues">QA</a></li><li>In nuxt application, see <a href="https://github.com/cube-ui/cube-nuxt-demo">demo repo</a></li></ul><h3>CLI</h3><h4>vue-cli &gt;= 3</h4><p>If you are using vue-cli@3, you can use <a href="https://github.com/cube-ui/vue-cli-plugin-cube-ui">vue-cli-plugin-cube-ui</a> plugin. After you inited your project, just run <code>vue add cube-ui</code>. About options, see <a href="https://github.com/cube-ui/cube-template/wiki">cube-template WIKI</a>.</p><p>Then you can see the <a href="#cube-Usage-anchor" class="anchor">Usage</a> part directly.</p><h4>vue-cli &lt; 3</h4><p>If you are going to create a new project with cube-ui, use the <a href="https://github.com/cube-ui/cube-template">cli tools</a> base on <a href="https://github.com/vuejs/vue-cli">vue-cli</a> to init the config and base code, then you can ignore the <a href="#cube-Install-anchor" class="anchor">Install</a> steps and see the <a href="#cube-Usage-anchor" class="anchor">Usage</a> part directly.</p><pre><code class="language-shell">$ vue init cube-ui/cube-template projectname
</code></pre><p>About cube-template special options: <a href="https://github.com/cube-ui/cube-template/wiki">cube-template WIKI</a>.</p><p>If you are going to use cube-ui in an existing project, see the <a href="#cube-Install-anchor" class="anchor">Install</a> part first.</p><h3>Install</h3><blockquote><p>This section only used in the case of vue-cli &lt; 3</p></blockquote><h4>NPM</h4><pre><code class="language-shell">$ npm install cube-ui --save
</code></pre><p>Since cube-ui support two compile ways such as [post-compile] (#/en-US/docs/post-compile) and normal compile with webpack 2+(by default using post-compile), you need to modify your application’s dependencies and configuration before using it.</p><ul><li><p>post-compile</p><ol><li>Modify package.json and install the dependencies</li></ol><pre><code class="language-json">{
  // webpack-transform-modules-plugin depends on transformModules
  &quot;transformModules&quot;: {
    &quot;cube-ui&quot;: {
      &quot;transform&quot;: &quot;cube-ui/src/modules/\${member}&quot;,
      &quot;kebabCase&quot;: true
    }
  },
  &quot;devDependencies&quot;: {
    // add stylus dependencies
    &quot;stylus&quot;: &quot;^0.54.5&quot;,
    &quot;stylus-loader&quot;: &quot;^2.1.1&quot;,
    &quot;webpack-post-compile-plugin&quot;: &quot;^1.0.0&quot;,
    &quot;webpack-transform-modules-plugin&quot;: &quot;^0.4.3&quot;
  }
}
</code></pre><ol start="2"><li>Modify webpack.base.conf.js</li></ol><pre><code class="language-js">var PostCompilePlugin = require(&#39;webpack-post-compile-plugin&#39;)
var TransformModulesPlugin = require(&#39;webpack-transform-modules-plugin&#39;)
module.exports = {
  // ...
  plugins: [
    // ...
    new PostCompilePlugin(),
    new TransformModulesPlugin()
  ]
  // ...
}
</code></pre><ol start="3"><li>Modify <code>exports.cssLoaders</code> function in build/utils.js</li></ol><pre><code class="language-js">exports.cssLoaders = function (options) {
  // ...
  const stylusOptions = {
    &#39;resolve url&#39;: true
  }
  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders(&#39;less&#39;),
    sass: generateLoaders(&#39;sass&#39;, { indentedSyntax: true }),
    scss: generateLoaders(&#39;sass&#39;),
    stylus: generateLoaders(&#39;stylus&#39;, stylusOptions),
    styl: generateLoaders(&#39;stylus&#39;, stylusOptions)
  }
}
</code></pre><ol start="4"><li>Modify vue-loader.conf.js</li></ol><pre><code class="language-javascript">module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: false
  }),
  // ...
}

</code></pre><p>See <a href="https://github.com/vuejs-templates/webpack/pull/970/files">https://github.com/vuejs-templates/webpack/pull/970/files</a></p></li><li><p>Normal compile</p><ol><li>Modify package.json and install the dependencies</li></ol><pre><code class="language-json">{
  // webpack-transform-modules-plugin depends on transformModules
  &quot;transformModules&quot;: {
    &quot;cube-ui&quot;: {
      &quot;transform&quot;: &quot;cube-ui/lib/\${member}&quot;,
      &quot;kebabCase&quot;: true,
      &quot;style&quot;: {
        &quot;ignore&quot;: [&quot;create-api&quot;, &quot;better-scroll&quot;, &quot;locale&quot;]
      }
    }
  },
  &quot;devDependencies&quot;: {
    &quot;webpack-transform-modules-plugin&quot;: &quot;^0.4.3&quot;
  }
}
</code></pre><ol start="2"><li>Modify webpack config</li></ol><pre><code class="language-js">// webpack.config.js
var TransformModulesPlugin = require(&#39;webpack-transform-modules-plugin&#39;)
module.exports = {
  // ...
  resolve: {
    // ...
    alias: {
      // ...
      &#39;cube-ui&#39;: &#39;cube-ui/lib&#39;
      // ...
    }
    // ...
  }
  // ...
  plugins: [
    // ...
    new TransformModulesPlugin()
  ]
  // ...
}
</code></pre></li></ul><h4>CDN</h4><pre><code class="language-html">&lt;script src=&quot;https://unpkg.com/cube-ui/lib/cube.min.js&quot;&gt;&lt;/script&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/cube-ui/lib/cube.min.css&quot;&gt;
</code></pre><h3>Usage</h3><h4>Fully import</h4><p>Commonly in the entry file:</p><pre><code class="language-javascript">import Vue from &#39;vue&#39;
import Cube from &#39;cube-ui&#39;

Vue.use(Cube)
</code></pre><h4>Import on demand</h4><pre><code class="language-javascript">import {
  /* eslint-disable no-unused-vars */
  Style,
  Button
} from &#39;cube-ui&#39;
</code></pre><p><strong>Notice:</strong> In this case, you also need to import <a href="#/en-US/docs/style">style module</a>.</p><p>Then register globally:</p><pre><code class="language-js">// register globally
Vue.use(Button)
// ...
</code></pre><p>All the components and modules that can be imported on demand are listed below:</p><pre><code class="language-js">import {
  // basic style
  Style,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  // form
  Checkbox,
  CheckboxGroup,
  Radio,
  Checker,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe
} from &#39;cube-ui&#39;
</code></pre><p>You can also import <a href="#/en-US/docs/create-api">create-api</a> and <a href="#/en-US/docs/better-scroll">better-scroll</a> module:</p><pre><code class="language-js">import { createAPI, BetterScroll, Locale } from &#39;cube-ui&#39;
</code></pre><h4>Examples</h4><pre><code class="language-html">&lt;template&gt;
  &lt;cube-button @click=&quot;showDialog&quot;&gt;show dialog&lt;/cube-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      showDialog() {
        this.$createDialog({
          type: &#39;alert&#39;,
          title: &#39;Alert&#39;,
          content: &#39;dialog content&#39;
        }).show()
      }
    }
  }
&lt;/script&gt;
</code></pre><h3>TypeScript Development Tooling</h3><p>We will start to provide better support for TypeScript in v1.12.39.</p><blockquote><p>If you use <a href="https://code.visualstudio.com/">Visual Studio Code</a> + <a href="https://github.com/vuejs/vetur">Vetur</a> for development</p></blockquote><h4>TypeScript</h4><p>TypeScript version &gt;= <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html">4.1</a></p><h4>Visual Studio Code</h4><p>Visual Studio Code version &gt;= <a href="https://github.com/vuejs/vetur/releases/tag/v0.30.3">1.52.0</a></p><h4>Vetur</h4><p>Vetur version &gt;= <a href="https://github.com/microsoft/vscode/releases/tag/1.52.0">0.30.3</a></p>`,43),a=[u],d={__name:"quick-start",setup(l,{expose:e}){return e({frontmatter:{}}),(c,i)=>(o(),t("div",s,a))}};export{d as default};
