import{a as t,o,j as a}from"./index-e8a96955.js";const c={class:"markdown-body"},n=a(`<h2>快速上手</h2><blockquote><p>你正在阅读的是 <code>cube-ui for Vue 3</code> 的文档！</p></blockquote><p>使用 cube-ui 之前，假设您已经了解 Vue 3 的相关知识，我们推荐您使用 Vite 来启动 Vue 3 项目，配合 Volar 您会获得上佳的开发体验</p><ul><li><a href="https://cn.vuejs.org/guide/introduction.html">Vue3</a></li><li><a href="https://cn.vitejs.dev/guide/">Vite</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=vue.volar">Volar</a></li></ul><h3>安装</h3><h4>NPM</h4><pre><code class="language-shell">$ npm install cube-ui@alpha --save
</code></pre><h4>CDN</h4><pre><code class="language-html">&lt;script src=&quot;https://unpkg.com/cube-ui/lib/cube.umd.js&quot;&gt;&lt;/script&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/cube-ui/lib/cube.min.css&quot;&gt;
</code></pre><h3>使用</h3><h4>按需引入（推荐）</h4><p>在组件中导入 cube-ui 组件：</p><pre><code class="language-javascript">import { Button } from &#39;cube-ui&#39;
</code></pre><p>也可以直接全局注册：</p><pre><code class="language-js">// 全局注册
createApp().use(Button)
// ...
</code></pre><h4>全部引入（不推荐）</h4><p>一般在入口文件中：</p><pre><code class="language-javascript">// main.ts
import { createApp } from &#39;vue&#39;
import Cube from &#39;cube-ui/cube&#39;

createApp().use(Cube)
</code></pre><h4>所有的可按需引入的组件以及模块</h4><pre><code class="language-js">import {
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
</code></pre><h3>TypeScript 开发工具</h3><p>我们将在 v1.12.39 开始提供对 TypeScript 更好的支持。</p><blockquote><p>如果你使用 <a href="https://code.visualstudio.com/">Visual Studio Code</a> + <a href="https://github.com/vuejs/vetur">Vetur</a> 进行开发</p></blockquote><h4>TypeScript</h4><p>TypeScript 版本需 &gt;= <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html">4.1</a></p><h4>Visual Studio Code</h4><p>Visual Studio Code 版本需 &gt;= <a href="https://github.com/vuejs/vetur/releases/tag/v0.30.3">1.52.0</a></p>`,31),r=[n],h={__name:"quick-start",setup(p,{expose:e}){return e({frontmatter:{}}),(s,u)=>(o(),t("div",c,r))}};export{h as default};
