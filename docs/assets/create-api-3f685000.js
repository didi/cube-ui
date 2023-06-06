import{a as t,o as n,j as o}from"./index-e8a96955.js";const c={class:"markdown-body"},l=o(`<h2>create-api module</h2><p>This module exports a function called <code>createAPI</code> with which you can invoke the custom component which has been instantiated in api form. And It could be called both in Vue instance context and <a href="https://didi.github.io/cube-ui/#/en-US/docs/create-api#cube-HowtouseingeneralJSfilesoruseitinglobal-anchor">general js file</a>.</p><p><strong>Notice:</strong> All cube-ui componnets which used <code>createAPI</code> must be registered by <code>Vue.use</code>.</p><h3>createAPI(Vue, Component, [events, single])</h3><ul><li><p>Parameters:</p><ul><li><code>{Function} Vue</code> Vue function</li><li><code>{Function | Object} Component</code> Vue component which must contains <code>name</code></li><li><code>{Array} [events]</code> the collection of the instantiated Vue Component’s event name</li><li><code>{Boolean} [single]</code> whether singleton</li></ul></li><li><p>Usage:</p><ul><li><p>This method will add a method which is named <code>$create{camelize(Component.name)}</code> to Vue’s prototype, so you can instantiate the Vue component by <code>const instance = this.$createAaBb(config, [renderFn, single])</code> in other components. The instantiated component’s template content will be attached to <code>body</code> element.</p></li><li><p><code>const instance = this.$createAaBb(config, renderFn, single)</code></p><p><strong>Parameters：</strong></p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>config</td><td>Config options</td><td>Object</td><td>{}</td><td>-</td></tr><tr><td>renderFn</td><td>Optional, used to generate the VNode child node in the slot scene in general</td><td>Function</td><td>-</td><td>function (createElement) {…}</td></tr><tr><td>single</td><td>Optional, whether the instantiated component is a singleton or not. If two parameters are provided and the <code>renderFn</code>’s type is not function, then the <code>single</code> value is the sencond parameter’s value.</td><td>Boolean</td><td>single in createAPI()</td><td>-</td></tr></tbody></table><p><strong>Config options <code>config</code>:</strong></p><p>It will be passed to the component as its props except the events in <code>events</code>(It will transform by default, eg: If <code>events</code> has value <code>[&#39;click&#39;]</code>, then the prop <code>onClick</code> will be treated as component’s event and not component’s props).</p><p>After 1.8.0+, you can set <code>$props</code> and <code>$events</code> in <code>config</code>, <code>$props</code> supported reactive properties, these props will be watched.</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>$props</td><td>Component props</td><td>Object</td><td>-</td><td>{<br> title: ‘title’,<br> content: ‘my content’,<br> open: false<br>}</td></tr><tr><td>$events</td><td>Component event handlers</td><td>Object</td><td>-</td><td>{<br> click: ‘clickHandler’,<br> select: this.selectHandler<br>}</td></tr></tbody></table><p><code>$props</code> example, <code>{ [key]: [propKey] }</code>:</p><pre><code class="language-js">{
  title: &#39;title&#39;,
  content: &#39;my content&#39;,
  open: false
}
</code></pre><p><code>title</code>, <code>content</code> and <code>open</code> are keys of the component prop, and the prop’ value will be taken by the following steps:</p><ol><li>If <code>propKey</code> is not a string value, then use <code>propKey</code> as the prop value.</li><li>If <code>propKey</code> is a string value and the caller instance dont have the <code>propKey</code> property, then use <code>propKey</code> as the prop value.</li><li>If <code>propKey</code> is a string value and the caller instance have the <code>propKey</code> property, then use the caller’s <code>propKey</code> property value as the prop value. And the prop value will be reactively.</li></ol><p><code>$events</code> example, <code>{ [eventName]: [eventValue] }</code>:</p><pre><code class="language-js">{
  click: &#39;clickHandler&#39;,
  select: this.selectHandler
}
</code></pre><p><code>click</code> and <code>select</code> are event names, and the event handlers will be taken by the following steps:</p><ol><li>If <code>eventValue</code> is not a string value, then use <code>eventValue</code> as the event handler.</li><li>If <code>eventValue</code> is a string value, then use the caller’s <code>eventValue</code> property value as the event handler.</li></ol><p>After 1.10.0+, you can set <a href="https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth">all avaliable properties in Vue</a>, but you need to add prefix <code>$</code>, eg:</p><pre><code class="language-js">this.$createAaBb({
  $attrs: {
    id: &#39;id&#39;
  },
  $class: {
    &#39;my-class&#39;: true
  }
})
</code></pre><p><strong>The Returned value <code>instance</code>:</strong></p><p><code>instance</code> is a instantiated Vue component.</p><blockquote><p>And the <code>remove</code> method will be <strong>attached</strong> to this instance.</p></blockquote><p>You can invoke the <code>remove</code> method to destroy the component and detach the component’s content from <code>body</code> element.</p><p>If the caller is destroyed and the <code>instance</code> will be destroyed too.</p></li></ul></li><li><p>Example:</p><p>First we create Hello.vue component：</p><pre><code class="language-html">&lt;template&gt;
  &lt;div @click=&quot;clickHandler&quot;&gt;
    {{content}}
    &lt;slot name=&quot;other&quot;&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    name: &#39;hello&#39;,
    props: {
      content: {
        type: String,
        default: &#39;Hello&#39;
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit(&#39;click&#39;, e)
      }
    }
  }
&lt;/script&gt;
</code></pre><p>Then we make Hello.vue to an API style component by calling the <code>createAPI</code> method.</p><pre><code class="language-js">  import Vue from &#39;vue&#39;
  import Hello from &#39;./Hello.vue&#39;

  // import Style to load the base style
  import {
    /* eslint-disable no-unused-vars */
    Style,
    Dialog,
    createAPI
  } from &#39;cube-ui&#39;

  Vue.use(Dialog)

  // create this.$createHello API
  createAPI(Vue, Hello, [&#39;click&#39;], true)

  // init Vue
  new Vue({
    el: &#39;#app&#39;,
    render: function (h) {
      return h(&#39;button&#39;, {
        on: {
          click: this.showHello
        }
      }, [&#39;Show Hello&#39;])
    },
    methods: {
      showHello() {
        /* The first parameter of \`$createHello\` will be passed to the component as its props except the events in \`events\`(It will transform by default, eg: If \`events\` has value \`[&#39;click&#39;]\`, then the prop \`onClick\` will be treated as component&#39;s event and not component&#39;s props) */
        const instance = this.$createHello({
          content: &#39;My Hello Content&#39;,
          onClick(e) {
            console.log(&#39;Hello component clicked.&#39;)
          }
        }, /* renderFn */ (createElement) =&gt; {
          return [
            createElement(&#39;p&#39;, {
              slot: &#39;other&#39;
            }, &#39;other content&#39;)
          ]
        })
        // Also, the event hanlder can be registered by instance&#39;s \`$on\` method
        instance.$on(&#39;click&#39;, (e) =&gt; {
          const $dialog = this.$createDialog({
            type: &#39;confirm&#39;,
            content: &#39;click confirm to remove current instance&#39;,
            icon: &#39;cubeic-alert&#39;
          })
          $dialog.show()

          $dialog.$on(&#39;confirm&#39;, () =&gt; {
            // remove instance
            instance.remove()
          }).$on(&#39;cancel&#39;, () =&gt; {
            console.log(&#39;cancel&#39;)
          })
        })
      }
    }
  })
</code></pre><p>In this example, we create a component <code>Hello</code> which needs to be invoked in api form and we invoke it in another component.The focus is what <code>showHello()</code> does: invoking method <code>this.$createHello(config, renderFn)</code> to instantiate <code>Hello</code>.</p></li></ul><h3>How to use in general JS files or use it in global</h3><p>In vue component, you could call by <code>this.$createHello(config, renderFn)</code> because the <code>this</code> is just a Vue instance. But in general JS files, you need to use <code>Hello.$create</code>. As shown below:</p><pre><code class="language-js">import Vue from &#39;vue&#39;
import Hello from &#39;./Hello.vue&#39;

import {
  createAPI
} from &#39;cube-ui&#39;

// 创建 this.$createHello and $Hello.create API
createAPI(Vue, Hello, [&#39;click&#39;], true)

Hello.$create(config, renderFn)
</code></pre><p>Or components in cube-ui, like Dialog:</p><pre><code class="language-js">import Vue from &#39;vue&#39;
import { Dialog } from &#39;cube-ui&#39;

Vue.use(Dialog)

Dialog.$create({
  ...
})
</code></pre><p>There is another idea which used the mode of data-driven. For example, in vuex, you could use a global state to label whether to call the component, and watch this state in App.vue to handle this component.</p>`,11),a=[l],h={__name:"create-api",setup(d,{expose:e}){return e({frontmatter:{}}),(r,s)=>(n(),t("div",c,a))}};export{h as default};
