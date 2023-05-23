import{a as e,o,j as a}from"./index-9017f177.js";const l={class:"markdown-body"},c=a(`<h2>介绍</h2><p>cube-ui 是基于 Vue.js 实现的精致移动端组件库。</p><h3>特性</h3><ul><li><p><strong>质量可靠</strong></p><p>由滴滴内部组件库精简提炼而来，经历了业务一年多的考验，并且每个组件都有充分单元测试，为后续集成提供保障。</p></li><li><p><strong>体验极致</strong></p><p>以迅速响应、动画流畅、接近原生为目标，在交互体验方面追求极致。</p></li><li><p><strong>标准规范</strong></p><p>遵循统一的设计交互标准，高度还原设计效果；接口标准化，统一规范使用方式，开发更加简单高效。</p></li><li><p><strong>扩展性强</strong></p><p>支持按需引入和<a href="#/zh-CN/docs/post-compile">后编译</a>，轻量灵活；扩展性强，可以方便地基于现有组件实现二次开发。</p></li></ul><h3>组件</h3><h4>基础</h4><ul><li><a href="#/zh-CN/docs/button">Button 按钮</a></li><li><a href="#/zh-CN/docs/loading">Loading 加载中</a></li><li><a href="#/zh-CN/docs/tip">Tip 提示</a></li><li><a href="#/zh-CN/docs/toolbar">Toolbar 工具条</a></li><li><a href="#/zh-CN/docs/tab-bar">TabBar 选项卡</a></li></ul><h4>表单</h4><ul><li><a href="#/zh-CN/docs/checkbox">Checkbox 复选框</a></li><li><a href="#/zh-CN/docs/checkbox-group">CheckboxGroup 复选框组</a></li><li><a href="#/zh-CN/docs/radio">Radio 单选框</a></li><li><a href="#/zh-CN/docs/input">Input 输入框</a></li><li><a href="#/zh-CN/docs/textarea">Textarea</a></li><li><a href="#/zh-CN/docs/select">Select 选择</a></li><li><a href="#/zh-CN/docs/switch">Switch 开关切换</a></li><li><a href="#/zh-CN/docs/rate">Rate 评级</a></li><li><a href="#/zh-CN/docs/validator">Validator 校验器</a></li><li><a href="#/zh-CN/docs/upload">Upload 上传</a></li><li><a href="#/zh-CN/docs/form">Form 表单</a></li></ul><h4>弹层</h4><ul><li><a href="#/zh-CN/docs/popup">Popup</a></li><li><a href="#/zh-CN/docs/toast">Toast 提醒</a></li><li><a href="#/zh-CN/docs/picker">Picker 选择器</a></li><li><a href="#/zh-CN/docs/cascade-picker">CascadePicker 级联选择器</a></li><li><a href="#/zh-CN/docs/date-picker">DatePicker 日期选择器</a></li><li><a href="#/zh-CN/docs/time-picker">TimePicker 时间选择器</a></li><li><a href="#/zh-CN/docs/segment-picker">SegmentPicker 段选择器</a></li><li><a href="#/zh-CN/docs/dialog">Dialog 弹框</a></li><li><a href="#/zh-CN/docs/action-sheet">ActionSheet 操作菜单</a></li><li><a href="#/zh-CN/docs/drawer">Drawer 抽屉</a></li><li><a href="#/zh-CN/docs/image-preview">ImagePreview 图片预览</a></li></ul><p>绝大多数的弹层类组件可以通过组件调用和 API 调用，来看示例（<code>Toast</code> 为例）：</p><p>组件调用：</p><pre><code class="language-html">&lt;template&gt;
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
</code></pre><p>API 调用：</p><pre><code class="language-html">&lt;template&gt;
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
</code></pre><p>两种方式都可以，但是我们推荐后者，通过 <code>$createXxYy</code> API 来调用；通过 API 调用的话，这个弹框是附加到 <code>body</code> 元素下的，这样的好处是可以不受外层样式的影响，因为组件调用的话，很容易受到外层 <code>transform</code>, <code>overflow</code> 等样式的影响。</p><p>注意这个 API 的名字的组合就是：<code>$create</code> + <code>\${组件名字}</code>，例如 <code>ActionSheet</code> 组件的话，API 名字就是 <code>$createActionSheet</code>。</p><h4>滚动</h4><ul><li><a href="#/zh-CN/docs/scroll">Scroll 滚动</a></li><li><a href="#/zh-CN/docs/slide">Slide 幻灯片</a></li><li><a href="#/zh-CN/docs/index-list">IndexList 索引列表</a></li><li><a href="#/zh-CN/docs/swipe">Swipe 滑块</a></li><li><a href="#/zh-CN/docs/sticky">Sticky 吸附</a></li><li><a href="#/zh-CN/docs/scroll-nav-bar">ScrollNavBar 滚动导航条</a></li><li><a href="#/zh-CN/docs/scroll-nav">ScrollNav 滚动导航</a></li></ul><p>滚动类组件一般都是基于 <a href="https://github.com/ustbhuangyi/better-scroll">better-scroll</a> 实现，而 <code>Scroll</code> 组件就是对 better-scroll 的封装。</p><h3>模块</h3><p>除了组件之外，cube-ui 还有一些特殊的模块。</p><h4>style</h4><p>样式部分，如果你是在按需引入使用的场景下，那么建议在入口文件处也要引入这个模块，因为它包含基础的 reset、基础通用样式以及内置 icon。</p><p>详见 <a href="#/zh-CN/docs/style">style 模块</a>。</p><h4>create-api</h4><p>有些时候，开发者可能也需要自己封装的组件支持 API 式调用，此时可以通过引入 create-api 模块或者通过全局的 <code>Cube.createAPI</code> 接口来达到封装目的。</p><p>详见 <a href="#/zh-CN/docs/create-api">create-api 模块</a>。</p><h4>better-scroll</h4><p><a href="https://github.com/ustbhuangyi/better-scroll">better-scroll</a> 是组件库依赖的一个库，为了避免重复引入问题，我们暴露出了这个模块。</p><p>详见 <a href="#/zh-CN/docs/better-scroll">better-scroll 模块</a>。</p>`,32),r=[c],p={__name:"introduction",setup(i,{expose:t}){return t({frontmatter:{}}),(h,d)=>(o(),e("div",l,r))}};export{p as default};
