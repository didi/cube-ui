import{a as e,o as d,j as o}from"./index-e8a96955.js";const n={class:"markdown-body"},a=o(`<h2>Select</h2><blockquote><p>New in 1.5.0+</p></blockquote><p>Select component.</p><p><strong>Notice:</strong> Cause this component depend on Picker component, and Picker used create-api, so you should read <a href="#/en-US/docs/create-api">create-api</a> first.</p><h3>Example</h3><ul><li><p>Basic usage</p><p>Basically, you need to use <code>options</code> to define each option and the selected value will bind on <code>v-model</code>.</p><pre><code class="language-html">&lt;cube-select
  v-model=&quot;value&quot;
  :options=&quot;options&quot;&gt;
&lt;/cube-select&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      options: [2013, 2014, 2015, 2016, 2017, 2018],
      value: 2016
    }
  }
}
</code></pre></li><li><p>Configs and Events</p><p>Select supports the configs of picker title, placeholder, whether auto pop, disabled. And if the selected value is changed when selected, it will emit the event <code>change</code>.</p><pre><code class="language-html">&lt;cube-select
  v-model=&quot;value&quot;
  :title=&quot;title&quot;
  :options=&quot;options&quot;
  :placeholder=&quot;placeholder&quot;
  :auto-pop=&quot;autoPop&quot;
  :disabled=&quot;disabled&quot;
  cancelTxt=&quot;Cancel&quot;
  confirmTxt=&quot;Confirm&quot;
  @change=&quot;change&quot;&gt;
&lt;/cube-select&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      options: [2013, 2014, 2015, 2016, 2017, 2018],
      value: 2016,
      title: &#39;Entry time&#39;,
      placeholder: &#39;Please choose entry time&#39;,
      autoPop: false,
      disabled: false
    }
  },
  methods: {
    change(value, index, text) {
      console.log(&#39;change&#39;, value, index, text)
    }
  }
}
</code></pre><p>There is one thing you may need notice. the <code>change</code> event won’t change when you directly set the value of <code>v-model</code>, it only emit when the change is caused by select. If you want to listen the change of <code>v-model</code>, just watch it.</p></li></ul><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>options</td><td>options</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>v-model</td><td>the selected value</td><td>Any</td><td>-</td><td>-</td></tr><tr><td>placeholder</td><td>placeholder</td><td>String</td><td>-</td><td>‘请选择’</td></tr><tr><td>autoPop</td><td>whether auto pop picker</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>disabled</td><td>whether disabled</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>title</td><td>the title of picker</td><td>String</td><td>-</td><td>‘请选择’</td></tr><tr><td>cancelTxt</td><td>the cancel text of picker</td><td>String</td><td>-</td><td>‘取消’</td></tr><tr><td>confirmTxt</td><td>the confirm text of picker</td><td>String</td><td>-</td><td>‘确认’</td></tr></tbody></table><ul><li><code>options </code> sub configuration</li></ul><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Example</th></tr></thead><tbody><tr><td>value</td><td>value of the option</td><td>Any</td><td>-</td><td>-</td></tr><tr><td>text</td><td>text of the option</td><td>String</td><td>-</td><td>-</td></tr></tbody></table><p>If an option is not an object, such as 2014，we will transform it to { value: 2014, text: 2014 }.</p><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters 1</th><th>Parameters 2</th><th>Parameters 3</th></tr></thead><tbody><tr><td>input</td><td>when the selected value changed by select</td><td>the selected value</td><td>-</td><td>-</td></tr><tr><td>change</td><td>when the selected value changed by select</td><td>the selected value</td><td>the selected index</td><td>the selected text</td></tr><tr><td>picker-show</td><td>when Picker show</td><td>-</td><td>-</td><td>-</td></tr><tr><td>picker-hide</td><td>when Picker hide</td><td>-</td><td>-</td><td>-</td></tr></tbody></table>`,13),l=[a],u={__name:"select",setup(c,{expose:t}){return t({frontmatter:{}}),(h,s)=>(d(),e("div",n,l))}};export{u as default};
