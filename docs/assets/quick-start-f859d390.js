import{a as t,o,j as u}from"./index-9017f177.js";const n={class:"markdown-body"},s=u(`<h2>快速上手</h2><ul><li>新手教程项目：<a href="https://github.com/cube-ui/cube-application-guide">cube-application-guide</a></li><li>遇到问题，先移步 <a href="https://github.com/cube-ui/question-answer/issues">QA</a></li><li>使用 nuxt，请参考<a href="https://github.com/cube-ui/cube-nuxt-demo">示例仓库</a></li></ul><h3>脚手架</h3><h4>vue-cli &gt;= 3</h4><p>如果你正在使用新版本的 Vue CLI vue-cli@3，那么推荐你直接使用 <a href="https://github.com/cube-ui/vue-cli-plugin-cube-ui">vue-cli-plugin-cube-ui</a> 插件。在你初始化完项目后直接执行 <code>vue add cube-ui</code> 即可。</p><p>在执行的时候，会询问一些配置项，这个和老版本的 <a href="https://github.com/cube-ui/cube-template">模板</a> 配置是一样的，参见 <a href="https://github.com/cube-ui/cube-template/wiki">cube-template WIKI</a>。</p><p>执行完成后，你可以直接进入<a href="#cube-使用-anchor" class="anchor">使用部分</a>。</p><h4>vue-cli &lt; 3</h4><p>如果你打算用在一个新项目中使用 cube-ui，可以通过我们提供的一套基于 <a href="https://github.com/vuejs/vue-cli">vue-cli</a> 实现的<a href="https://github.com/cube-ui/cube-template">脚手架模板</a>去初始化 cube-ui 项目的配置和基础代码，这样你就可以忽略<a href="#cube-安装-anchor" class="anchor">安装</a>步骤，直接看<a href="#cube-使用-anchor" class="anchor">使用部分</a>。</p><pre><code class="language-shell">$ vue init cube-ui/cube-template projectname
</code></pre><p>关于初始化时特殊的配置项，请参考 <a href="https://github.com/cube-ui/cube-template/wiki">cube-template WIKI</a>。</p><p>如果你打算在现有项目中使用 cube-ui，请先参考<a href="#cube-安装-anchor" class="anchor">安装</a>部分。</p><h3>安装</h3><blockquote><p>此安装部分只针对于 vue-cli &lt; 3 的情况</p></blockquote><h4>NPM</h4><pre><code class="language-shell">$ npm install cube-ui --save
</code></pre><p>cube-ui 搭配 webpack 2+ 支持<a href="#/zh-CN/docs/post-compile">后编译</a>和普通编译 2 种构建方式（默认使用后编译），使用前都需要修改应用的依赖和配置。</p><ul><li><p>后编译</p><ol><li>修改 package.json 并安装依赖</li></ol><pre><code class="language-json">{
  // webpack-transform-modules-plugin 依赖 transformModules
  &quot;transformModules&quot;: {
    &quot;cube-ui&quot;: {
      &quot;transform&quot;: &quot;cube-ui/src/modules/\${member}&quot;,
      &quot;kebabCase&quot;: true
    }
  },
  &quot;devDependencies&quot;: {
    // 新增 stylus 相关依赖
    &quot;stylus&quot;: &quot;^0.54.5&quot;,
    &quot;stylus-loader&quot;: &quot;^2.1.1&quot;,
    &quot;webpack-post-compile-plugin&quot;: &quot;^1.0.0&quot;,
    &quot;webpack-transform-modules-plugin&quot;: &quot;^0.4.3&quot;
  }
}
</code></pre><ol start="2"><li>修改 webpack.base.conf.js</li></ol><pre><code class="language-js">var PostCompilePlugin = require(&#39;webpack-post-compile-plugin&#39;)
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
</code></pre><ol start="3"><li>修改 build/utils.js 中的 <code>exports.cssLoaders</code> 函数</li></ol><pre><code class="language-js">exports.cssLoaders = function (options) {
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
</code></pre><ol start="4"><li>修改 vue-loader.conf.js</li></ol><pre><code class="language-javascript">module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: false
  }),
  // ...
}
</code></pre><p>具体参见 <a href="https://github.com/vuejs-templates/webpack/pull/970/files">https://github.com/vuejs-templates/webpack/pull/970/files</a></p></li><li><p>普通编译</p><ol><li>修改 package.json 并安装依赖</li></ol><pre><code class="language-json">{
  // webpack-transform-modules-plugin 依赖 transformModules
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
</code></pre><ol start="2"><li>修改 webpack 配置：</li></ol><pre><code class="language-js">// webpack.config.js
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
</code></pre><h3>使用</h3><h4>全部引入</h4><p>一般在入口文件中：</p><pre><code class="language-javascript">import Vue from &#39;vue&#39;
import Cube from &#39;cube-ui&#39;

Vue.use(Cube)
</code></pre><h4>按需引入</h4><pre><code class="language-javascript">import {
  /* eslint-disable no-unused-vars */
  Style,
  Button
} from &#39;cube-ui&#39;
</code></pre><p><strong>注意：</strong> 按需引入的话，是不会打包<a href="#/zh-CN/docs/style">基础样式</a>部分的，所以在使用的时候需要引入 style 模块。</p><p>我们推荐直接全局注册：</p><pre><code class="language-js">// 全局注册
Vue.use(Button)
// ...
</code></pre><p>所有的可按需引入的组件以及模块：</p><pre><code class="language-js">import {
  // 基础样式
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
</code></pre><p>也可以引入<a href="#/zh-CN/docs/create-api">create-api</a>和<a href="#/zh-CN/docs/better-scroll">better-scroll</a>模块：</p><pre><code class="language-js">import { createAPI, BetterScroll, Locale } from &#39;cube-ui&#39;
</code></pre><h4>示例</h4><pre><code class="language-html">&lt;template&gt;
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
</code></pre><h3>TypeScript 开发工具</h3><p>我们将在 v1.12.39 开始提供对 TypeScript 更好的支持。</p><blockquote><p>如果你使用 <a href="https://code.visualstudio.com/">Visual Studio Code</a> + <a href="https://github.com/vuejs/vetur">Vetur</a> 进行开发</p></blockquote><h4>TypeScript</h4><p>TypeScript 版本需 &gt;= <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html">4.1</a></p><h4>Visual Studio Code</h4><p>Visual Studio Code 版本需 &gt;= <a href="https://github.com/vuejs/vetur/releases/tag/v0.30.3">1.52.0</a></p><h4>Vetur</h4><p>Vetur 版本需 &gt;= <a href="https://github.com/microsoft/vscode/releases/tag/1.52.0">0.30.3</a></p>`,44),a=[s],h={__name:"quick-start",setup(c,{expose:e}){return e({frontmatter:{}}),(r,p)=>(o(),t("div",n,a))}};export{h as default};
