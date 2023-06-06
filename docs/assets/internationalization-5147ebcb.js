import{a as n,o,j as t}from"./index-e8a96955.js";const a={class:"markdown-body"},i=t(`<h2>Internationalization</h2><blockquote><p>New in 1.11.0+</p></blockquote><p>All non-configurable copy files inside <code>cube-ui</code> are in Chinese, so if your application needs to do the corresponding international translation, then <code>1.11.0</code> is available for cube-ui provide ability to translate a component’s copywriting, even this ability can be extended to your application.</p><h2>Internationalization within components</h2><p>Cube-ui is the Chinese language pack used by default and is already registered. The corresponding English language pack is also built into the cube-ui, but you need the following logic to register the language pack and switch to the corresponding language.</p><pre><code class="language-js">  import Vue from &#39;vue&#39;
  import { Locale } from &#39;cube-ui&#39;
  import enUSMessages from &#39;cube-ui/src/locale/lang/en-US&#39;

  Vue.use(Locale)
  // Switch to English and cache the current language pack
  Locale.use(&#39;en-US&#39;, enUSMessages)
</code></pre><p>Cube-ui will listen to the current language type, so it automatically renders the corresponding copy of the component, and caches the loaded copy. When the component language is switched, if the language pack is already installed, cube-ui directly takes the cached copy. Similar pseudo code is as follows:</p><pre><code class="language-js">  import Vue from &#39;vue&#39;
  import { Locale } from &#39;cube-ui&#39;
  import enUSMessages from &#39;cube-ui/src/locale/lang/en-US&#39;

  // Load Chinese language pack by default
  Vue.use(Locale)

  // Switch to English and need to import the English language pack
  one.click(() =&gt;{
    Locale.use(&#39;en-US&#39;, enUSMessages)
  })

  another.click(() =&gt; {
    // load Chinese from cache
    Locale.use(&#39;zh-CN&#39;)
  })
</code></pre><p>But maybe you have translation needs in other countries, such as Japanese and Korean, then you need to provide the language pack yourself and switch to the corresponding language. code show as below:</p><pre><code class="language-js">  import Vue from &#39;vue&#39;
  import { Locale } from &#39;cube-ui&#39;
  import jPMessages from &#39;/somewhere/ja-JP.js&#39; // Your own language

  Vue.use(Locale)

  // Switch to Japanese and need to import Japanese language packs
  Locale.use(&#39;ja-JP&#39;, jPMessages)
</code></pre><p>The configuration item format of the language pack you import should be similar to the following. The default Chinese language pack is as follows:</p><pre><code class="language-js">  export default {
    cancel: &#39;取消&#39;,
    confirm: &#39;确认&#39;,
    ok: &#39;确定&#39;,
    prev: &#39;上一步&#39;,
    next: &#39;下一步&#39;,
    selectText: &#39;请选择&#39;,
    now: &#39;现在&#39;,
    selectTime: &#39;选择时间&#39;,
    today: &#39;今日&#39;,
    formatDate: &#39;M月D日&#39;,
    hours: &#39;点&#39;,
    minutes: &#39;分&#39;,
    validator: {
      required: &#39;此为必填项&#39;,
      type: {
        string: &#39;请输入字符&#39;,
        number: &#39;请输入数字&#39;,
        array: &#39;数据类型应为数组&#39;,
        date: &#39;请选择有效日期&#39;,
        email: &#39;请输入有效邮箱&#39;,
        tel: &#39;请输入有效的手机号码&#39;,
        url: &#39;请输入有效网址&#39;
      },
      min: {
        string: &#39;至少输入 {{config}} 位字符&#39;,
        number: &#39;不得小于 {{config}}&#39;,
        array: &#39;请选择至少 {{config}} 项&#39;,
        date: &#39;请选择 {{config | toLocaleDateString(&quot;yyyy年MM月dd日&quot;)}} 之后的时间&#39;,
        email: &#39;至少输入 {{config}} 位字符&#39;,
        tel: &#39;至少输入 {{config}} 位字符&#39;,
        url: &#39;至少输入 {{config}} 位字符&#39;
      },
      max: {
        string: &#39;请勿超过 {{config}} 位字符&#39;,
        number: &#39;请勿大于 {{config}}&#39;,
        array: &#39;最多选择 {{config}} 项&#39;,
        date: &#39;请选择 {{config | toLocaleDateString(&quot;yyyy年MM月dd日&quot;)}} 之前的时间&#39;,
        email: &#39;请勿超过 {{config}} 位字符&#39;,
        tel: &#39;请勿超过 {{config}} 位字符&#39;,
        url: &#39;请勿超过 {{config}} 位字符&#39;
      },
      len: {
        string: &#39;请输入 {{config}} 位字符&#39;,
        number: &#39;长度应等于 {{config}}&#39;,
        array: &#39;请选择 {{config}} 项&#39;,
        date: &#39;请选择 {{config | toLocaleDateString(&quot;yyyy年MM月dd日&quot;)}} 之前的时间&#39;,
        email: &#39;请输入 {{config}} 位字符&#39;,
        tel: &#39;请输入 {{config}} 位字符&#39;,
        url: &#39;请输入 {{config}} 位字符&#39;
      },
      pattern: &#39;格式错误&#39;,
      custom: &#39;未通过校验&#39;,
      notWhitespace: &#39;空白内容无效&#39;
    }
  }
</code></pre><h2>Internationalization of applications<sup>1.12.23+</sup></h2><p>As mentioned above, cube-ui provides international capabilities for its own components, but this capability can be extended to your application in two steps:</p><ol><li>Import language packs</li></ol><p>you must import the language pack, which should be the full set containing the <code>cube-ui</code> default language pack. For example, your language pack configuration might look like this:</p><pre><code class="language-js">  // default.js
  export default {
    &quot;application_key&quot;: &quot;this is application text&quot;,
    &quot;country&quot;: {
      &quot;province&quot;: &quot;Beijing&quot;
    }

    /* defaults of cube-ui*/
    &quot;cancel&quot;: &quot;Cancel&quot;,
    // ...ignore
    &quot;validator&quot;: {/* */}
  }
</code></pre><p>Then import the language pack in your app’s entry file.</p><pre><code class="language-js">  import Vue from &#39;vue&#39;
  import { Locale } from &#39;cube-ui&#39;
  import defaultMessages from &#39;default.js&#39; // your own language

  Vue.use(Locale)
  Locale.use(&#39;zh-CN&#39;, defaultMessages)
</code></pre><ol start="2"><li>Ability to inject translations through mixins inside components</li></ol><p>Then use the <code>mixin</code> capability provided by <code>Vue</code>. cube-ui provides the conversion function <code>$t</code> for the language package <code>key=&gt;value</code>. You only need to inject it into the component’s <code>mixins</code> property, and then you can use it in the template. An example is as follows:</p><pre><code class="language-js">// dialog.vue

import { Locale } from &#39;cube-ui&#39;
&lt;script&gt;
  export default {
    //...
    mixins: [Locale.localeMixin] // Inject mixin, have the ability to $t. After v1.12.23
  }
&lt;/script&gt;
</code></pre><p>Then you can reference the <code>$t()</code> method in the template.</p><pre><code class="language-html">  &lt;template&gt;
    &lt;div&gt;{{$t(&#39;application_key&#39;)}}&lt;/div&gt;
  &lt;/template&gt;
</code></pre><p>Finally, <code>{{$t(&#39;application_key&#39;)}}</code> is rendered as <code>&quot;this is application text&quot;</code>. Considering that your language pack may be multi-level nested, <code>$t</code> also accepts a string with a separator of <code>&quot;.&quot;</code> to get deep-level properties, such as:</p><pre><code class="language-js">// your language packs structure
export default {
  a: {
    b: {
      c: &quot;nested c&quot;
    }
  }
}
</code></pre><p>It is easy to use it in <code>template</code>。</p><pre><code class="language-html">&lt;template&gt;
  &lt;div&gt;
    {{$t(&#39;a.b.c&#39;)}}
  &lt;/div&gt;
&lt;/template&gt;
</code></pre>`,28),c=[i],g={__name:"internationalization",setup(l,{expose:e}){return e({frontmatter:{}}),(u,r)=>(o(),n("div",a,c))}};export{g as default};
