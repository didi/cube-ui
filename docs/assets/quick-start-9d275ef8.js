import{a as t,o,j as n}from"./index-e8a96955.js";const a={class:"markdown-body"},r=n(`<h2>Quick start</h2><blockquote><p>You are currently reading the documentation for cube-ui for Vue 3!</p></blockquote><p>Before using cube-ui, it is assumed that you have knowledge of Vue 3. We recommend using Vite to start your Vue 3 project to get the best development experience, along with Volar.</p><ul><li><a href="https://cn.vuejs.org/guide/introduction.html">Vue3</a></li><li><a href="https://cn.vitejs.dev/guide/">Vite</a></li><li><a href="https://marketplace.visualstudio.com/items?itemName=vue.volar">Volar</a></li></ul><h3>Install</h3><h4>NPM</h4><pre><code class="language-shell">$ npm install cube-ui@alpha --save
</code></pre><h4>CDN</h4><pre><code class="language-html">&lt;script src=&quot;https://unpkg.com/cube-ui/lib/cube.umd.js&quot;&gt;&lt;/script&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/cube-ui/lib/cube.min.css&quot;&gt;
</code></pre><h3>Usage</h3><h4>Import on demand(recommended)</h4><p>Importing Cube UI components in your component:</p><pre><code class="language-javascript">import { Button } from &#39;cube-ui&#39;
</code></pre><p>You can also register Cube UI components globally:</p><pre><code class="language-js">// 全局注册
createApp().use(Button)
// ...
</code></pre><h4>Fully import(not recommended)</h4><p>Commonly in the entry file:</p><pre><code class="language-javascript">// main.ts
import { createApp } from &#39;vue&#39;
import Cube from &#39;cube-ui/cube&#39;

createApp().use(Cube)
</code></pre><h4>All the components and modules that can be imported on demand are listed below</h4><pre><code class="language-js">import {
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
</code></pre><h3>TypeScript Development Tooling</h3><p>We will start to provide better support for TypeScript in v1.12.39.</p><blockquote><p>If you use <a href="https://code.visualstudio.com/">Visual Studio Code</a> + <a href="https://github.com/vuejs/vetur">Vetur</a> for development</p></blockquote><h4>TypeScript</h4><p>TypeScript version &gt;= <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html">4.1</a></p><h4>Visual Studio Code</h4><p>Visual Studio Code version &gt;= <a href="https://github.com/vuejs/vetur/releases/tag/v0.30.3">1.52.0</a></p><h4>Vetur</h4><p>Vetur version &gt;= <a href="https://github.com/microsoft/vscode/releases/tag/1.52.0">0.30.3</a></p>`,33),c=[r],h={__name:"quick-start",setup(s,{expose:e}){return e({frontmatter:{}}),(i,p)=>(o(),t("div",a,c))}};export{h as default};
