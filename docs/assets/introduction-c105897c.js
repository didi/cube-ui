import{a as t,o,j as a}from"./index-9017f177.js";const n={class:"markdown-body"},i=a(`<h2>Introduction</h2><p>cube-ui is an elegant mobile component library based on Vue.js.</p><h3>Features</h3><ul><li><p><strong>Quality</strong></p><p>Extracted from DiDi interior component library and has been put to business test for more than one year. Every component has full unit tests to provide assurance for continuous integration.</p></li><li><p><strong>Experience</strong></p><p>Make quick response, fluent animation and close to native components as the goal, and pursue the perfection of the interactive experience.</p></li><li><p><strong>Standard</strong></p><p>Follow a uniform design interaction standard and highly restore the design; Standardize the interface and unify the way of use, making development more simple and efficient.</p></li><li><p><strong>Scalability</strong></p><p>Lightweight and flexible: support <a href="#/en-US/docs/post-compile">post-compile</a> and importing on demand; High scalability: it is easy to implement secondary development based on existing components.</p></li></ul><h3>Components</h3><h4>Basic</h4><ul><li><a href="#/en-US/docs/button">Button</a></li><li><a href="#/en-US/docs/loading">Loading</a></li><li><a href="#/en-US/docs/tip">Tip</a></li><li><a href="#/en-US/docs/toolbar">Toolbar</a></li><li><a href="#/en-US/docs/tab-bar">TabBar</a></li></ul><h4>Form</h4><ul><li><a href="#/en-US/docs/checkbox">Checkbox</a></li><li><a href="#/en-US/docs/checkbox-group">CheckboxGroup</a></li><li><a href="#/en-US/docs/radio">Radio</a></li><li><a href="#/en-US/docs/input">Input</a></li><li><a href="#/en-US/docs/textarea">Textarea</a></li><li><a href="#/en-US/docs/select">Select</a></li><li><a href="#/en-US/docs/switch">Switch</a></li><li><a href="#/en-US/docs/rate">Rate</a></li><li><a href="#/en-US/docs/validator">Validator</a></li><li><a href="#/en-US/docs/upload">Upload</a></li><li><a href="#/en-US/docs/form">Form</a></li></ul><h4>Layer</h4><ul><li><a href="#/en-US/docs/popup">Popup</a></li><li><a href="#/en-US/docs/toast">Toast</a></li><li><a href="#/en-US/docs/picker">Picker</a></li><li><a href="#/en-US/docs/cascade-picker">CascadePicker</a></li><li><a href="#/en-US/docs/date-picker">DatePicker</a></li><li><a href="#/en-US/docs/time-picker">TimePicker</a></li><li><a href="#/en-US/docs/segment-picker">SegmentPicker</a></li><li><a href="#/en-US/docs/dialog">Dialog</a></li><li><a href="#/en-US/docs/action-sheet">ActionSheet</a></li><li><a href="#/en-US/docs/drawer">Drawer</a></li><li><a href="#/en-US/docs/image-preview">ImagePreview</a></li></ul><p>Most of the layer components can be invoked by components and API, let’s take <code>Toast</code> as an example:</p><p>Component invoking:</p><pre><code class="language-html">&lt;template&gt;
  &lt;cube-button @click=&quot;showToast&quot;&gt;show toast&lt;/cube-button&gt;
  &lt;cube-toast ref=&quot;toast&quot; :txt=&quot;toastTxt&quot;&gt;&lt;/cube-toast&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        toastTxt: &#39;toast content&#39;
      }
    },
    methods: {
      showToast() {
        this.$refs.toast.show()
      }
    }
  }
&lt;/script&gt;
</code></pre><p>API invoking：</p><pre><code class="language-html">&lt;template&gt;
  &lt;cube-button @click=&quot;showToast&quot;&gt;show toast&lt;/cube-button&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        toastTxt: &#39;toast content&#39;
      }
    },
    methods: {
      showToast() {
        this.$createToast({
          txt: this.toastTxt
        }).show()
      }
    }
  }
&lt;/script&gt;
</code></pre><p>Both are pretty good but we recommend the latter, namely using <code>$createXxYy</code> API to invoke; By API invoking, the popup layer is attached to <code>body</code> element whose advantage is that it wouldn’t be affected by outer styles. If using component invoking, it’s fairly easy to be affected by outer styles like <code>transform</code>, <code>overflow</code>, etc.</p><p>Pay attention that the name of the API is <code>$create</code> + <code>\${component name}</code>. For example, the API of <code>ActionSheet</code> component is <code>$createActionSheet</code>.</p><h4>Scroll</h4><ul><li><a href="#/en-US/docs/scroll">Scroll</a></li><li><a href="#/en-US/docs/slide">Slide</a></li><li><a href="#/en-US/docs/index-list">IndexList</a></li><li><a href="#/en-US/docs/swipe">Swipe</a></li><li><a href="#/en-US/docs/sticky">Sticky</a></li><li><a href="#/en-US/docs/scroll-nav-bar">ScrollNavBar</a></li><li><a href="#/en-US/docs/scroll-nav">ScrollNav</a></li></ul><p>Most of the scroll components are all implemented based on <a href="https://github.com/ustbhuangyi/better-scroll">better-scroll</a> and <code>Scroll</code> Component is the encapsulation of better-scroll.</p><h3>Modules</h3><p>cube-ui has some special modules besides components.</p><h4>style</h4><p>The style module. If you are under the circumstance of importing components on demand, then it is recommended to import this module in entry file because it contains basic reset, basic common styles and built-in icons.</p><p>For details, see <a href="#/en-US/docs/style">style module</a>.</p><h4>create-api</h4><p>Sometimes, developers may need to let their own encapsulated components support API invoking as well. At this time they can import create-api module or use the global interface <code>Cube.createAPI</code> to achieve the purpose.</p><p>For details, see <a href="#/en-US/docs/create-api">create-api module</a>。</p><h4>better-scroll</h4><p><a href="https://github.com/ustbhuangyi/better-scroll">better-scroll</a> is a library in <code>cube-ui</code>’s dependencies. To avoid duplicately importing, we expose the module.</p><p>For more detailed use, please refer to <a href="https://better-scroll.github.io/docs-v1/">official documentation</a>。</p>`,32),l=[i],h={__name:"introduction",setup(s,{expose:e}){return e({frontmatter:{}}),(c,d)=>(o(),t("div",n,l))}};export{h as default};
