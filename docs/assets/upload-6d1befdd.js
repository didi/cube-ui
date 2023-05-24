import{a as d,o as e,j as o}from"./index-9017f177.js";const n={class:"markdown-body"},r=o(`<h2>Upload 组件</h2><blockquote><p>1.3.0 新增</p></blockquote><p><code>Upload</code> 上传组件。</p><p><strong>注：</strong> 本文中所有的原始文件对象统称为<strong>原始文件</strong>，而经过包装后的文件对象称为<strong>文件对象</strong>，这个文件对象的结构如下：</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>name</td><td>文件名</td><td>String</td></tr><tr><td>size</td><td>文件大小</td><td>Number</td></tr><tr><td>url</td><td>文件 url，通过 URL.createObjectURL 获得</td><td>String</td></tr><tr><td>base64</td><td>文件 base64 的值，这个会从原始文件的 base64 属性获得（默认是没有的，但是插件可以添加，例如下边演示的压缩 compress 插件就会添加 base64 值）</td><td>String</td></tr><tr><td>status</td><td>文件状态，包含四个： ready, uploading, success, error</td><td>String</td></tr><tr><td>progress</td><td>文件上传进度，小数 0~1</td><td>Number</td></tr><tr><td>file</td><td>原始文件</td><td>File</td></tr><tr><td>response</td><td>响应内容（自动转 JSON）</td><td>Object/Array/String</td></tr><tr><td>responseHeaders</td><td>响应头</td><td>String</td></tr></tbody></table><h3>示例</h3><ul><li><p>基本用法</p><pre><code class="language-html">&lt;cube-upload
  action=&quot;//jsonplaceholder.typicode.com/photos/&quot;
  :simultaneous-uploads=&quot;1&quot;
  @files-added=&quot;filesAdded&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    filesAdded(files) {
      let hasIgnore = false
      const maxSize = 1 * 1024 * 1024 // 1M
      for (let k in files) {
        const file = files[k]
        if (file.size &gt; maxSize) {
          file.ignore = true
          hasIgnore = true
        }
      }
      hasIgnore &amp;&amp; this.$createToast({
        type: &#39;warn&#39;,
        time: 1000,
        txt: &#39;You selected &gt;1M files&#39;
      }).show()
    }
  }
}
</code></pre><p>配置 <code>action</code> 表示上传的 URL 地址，而 <code>simultaneous-uploads</code> 则表示支持的并发上传个数。</p><p>通过 <code>files-added</code> 事件可以实现文件过滤，设置 <code>file.ignore = true</code> 即可。</p></li><li><p>压缩图片且通过 Base64 上传</p><pre><code class="language-html">&lt;cube-upload
  ref=&quot;upload&quot;
  :action=&quot;action&quot;
  :simultaneous-uploads=&quot;1&quot;
  :process-file=&quot;processFile&quot;
  @file-submitted=&quot;fileSubmitted&quot; /&gt;
</code></pre><pre><code class="language-js">import compress from &#39;../../modules/image&#39;
export default {
  data() {
    return {
      action: {
        target: &#39;//jsonplaceholder.typicode.com/photos/&#39;,
        prop: &#39;base64Value&#39;
      }
    }
  },
  methods: {
    processFile(file, next) {
      compress(file, {
        compress: {
          width: 1600,
          height: 1600,
          quality: 0.5
        }
      }, next)
    },
    fileSubmitted(file) {
      file.base64Value = file.file.base64
    }
  }
}
</code></pre><p><code>action</code> 中除了有 <code>target</code> 目标上传地址外；还有 <code>prop</code> 配置，表示上传的时候采用处理后的 <code>file</code> 普通对象的哪个属性所对应的值上传，这里设置的就是 <code>base64Value</code> 的值。</p><p><code>process-file</code> 则是一个函数，主要用于处理原生文件的，调用 <code>next</code> 回调的话，参数是处理完的文件对象，这里示例的就是调用 <code>compress</code> 做压缩，处理完后会回调 <code>next</code>。</p><p><code>file-submitted</code> 事件则是每个文件处理完后添加到 <code>upload</code> 实例的 <code>files</code> 数组中后触发，参数就是一个处理后的文件对象。</p></li><li><p>自定义结构样式</p><p>使用默认插槽来实现自定义结构，在此基础上自定义样式。</p><pre><code class="language-html">&lt;cube-upload
  ref=&quot;upload&quot;
  v-model=&quot;files&quot;
  :action=&quot;action&quot;
  @files-added=&quot;addedHandler&quot;
  @file-error=&quot;errHandler&quot;&gt;
  &lt;div class=&quot;clear-fix&quot;&gt;
    &lt;cube-upload-file v-for=&quot;(file, i) in files&quot; :file=&quot;file&quot; :key=&quot;i&quot;&gt;&lt;/cube-upload-file&gt;
    &lt;cube-upload-btn :multiple=&quot;false&quot;&gt;
      &lt;div&gt;
        &lt;i&gt;＋&lt;/i&gt;
        &lt;p&gt;Please click to upload ID card&lt;/p&gt;
      &lt;/div&gt;
    &lt;/cube-upload-btn&gt;
  &lt;/div&gt;
&lt;/cube-upload&gt;
</code></pre><pre><code class="language-js">export default {
  data() {
    return {
      action: &#39;//jsonplaceholder.typicode.com/photos/&#39;,
      files: []
    }
  },
  methods: {
    addedHandler() {
      const file = this.files[0]
      file &amp;&amp; this.$refs.upload.removeFile(file)
    },
    errHandler(file) {
      // const msg = file.response.message
      this.$createToast({
        type: &#39;warn&#39;,
        txt: &#39;Upload fail&#39;,
        time: 1000
      }).show()
    }
  }
}
</code></pre><p>样式覆盖：</p><pre><code class="language-stylus">.cube-upload
  .cube-upload-file, .cube-upload-btn
    margin: 0
    height: 200px
  .cube-upload-file
    margin: 0
    + .cube-upload-btn
      margin-top: -200px
      opacity: 0
  .cube-upload-file-def
    width: 100%
    height: 100%
    .cubeic-wrong
      display: none
  .cube-upload-btn
    display: flex
    align-items: center
    justify-content: center
    &gt; div
      text-align: center
    i
      display: inline-flex
      align-items: center
      justify-content: center
      width: 50px
      height: 50px
      margin-bottom: 20px
      font-size: 32px
      line-height: 1
      font-style: normal
      color: #fff
      background-color: #333
      border-radius: 50%
</code></pre><p>上述示例实现的效果就是点击上传（一次只能选择一张）一张图片，此图片就会直接展示，而上传按钮本身则是不可见，覆盖在图片预览区域上。再次重新选择图片，就会移除掉上次选择的图片，重新展示新选择的图片。</p></li></ul><h3>Props 配置</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>示例</th></tr></thead><tbody><tr><td>v-model</td><td>文件列表</td><td>Array</td><td>[]</td><td>[{ name, size, url, status: ‘success’, progress: 1 }]</td></tr><tr><td>action</td><td>上传行为配置项，最少包含上传目标的 URL 地址</td><td>String/Object</td><td>‘’</td><td>{ target: ‘/upload’ }</td></tr><tr><td>max</td><td>最大上传文件个数</td><td>Number</td><td>10</td><td>-</td></tr><tr><td>auto</td><td>是否自动上传，即选择完文件后自动开始上传</td><td>Boolean</td><td>true</td><td>-</td></tr><tr><td>simultaneousUploads</td><td>并发上传数</td><td>Number</td><td>1</td><td>-</td></tr><tr><td>multiple</td><td>是否多选</td><td>Boolean</td><td>true</td><td>-</td></tr><tr><td>accept</td><td>input 的 accept 属性值</td><td>String</td><td>image/*</td><td>-</td></tr><tr><td>processFile</td><td>处理原始文件函数</td><td>Function</td><td>function (file, next) { next(file) }</td><td>-</td></tr></tbody></table><ul><li><code>action</code> 子配置项</li></ul><p>如果 <code>action</code> 是字符串，则会被处理成 <code>{ target: action }</code> 这样结构。</p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>target</td><td>上传目标 URL，如果为函数，则传入当前文件对象调用得到目标 URL</td><td>String/Function<sup>1.11.0+</sup></td><td>-</td></tr><tr><td>fileName</td><td>上传文件时文件的参数名</td><td>String</td><td>‘file’</td></tr><tr><td>prop</td><td>上传的时候使用文件对象的 prop 属性所对应的值</td><td>String</td><td>‘file’</td></tr><tr><td>headers</td><td>自定义请求头，如果为函数，则传入当前文件对象调用得到 headers</td><td>Object/Function<sup>1.11.0+</sup></td><td>{}</td></tr><tr><td>data</td><td>上传需要附加数据，如果为函数，则传入当前文件对象调用得到 data</td><td>Object/Function<sup>1.11.0+</sup></td><td>{}</td></tr><tr><td>withCredentials</td><td>标准的 CORS 请求是不会带上 cookie 的，如果想要带的话需要设置 withCredentials 为 true</td><td>Boolean</td><td>false</td></tr><tr><td>timeout</td><td>请求超时时间</td><td>Number</td><td>0</td></tr><tr><td>progressInterval</td><td>进度回调间隔（单位：ms）</td><td>Number</td><td>100</td></tr><tr><td>checkSuccess</td><td>校验是否成功函数，参数为<code>(服务端响应数据, 当前文件对象 [,cb 回调])</code>，注意第二个参数和第三个参数是 1.11.0 后新增的，而参数 <code>cb</code> 是可选的，异步场景可用，如果没有 <code>cb</code> 则取其返回值，如果结果值为 true 则代表成功</td><td>Function</td><td>function (res, file) { return true }</td></tr></tbody></table><ul><li><code>processFile</code> 子配置项</li></ul><p>一个函数，这个函数有两个参数：<code>(file, next)</code>，<code>file</code> 就是原始文件，<code>next</code> 为处理完毕后的回调函数，调用的时候需要传入处理后的文件。</p><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>files-added</td><td>选择完文件后触发，一般可用作文件过滤</td><td>原始文件列表</td></tr><tr><td>file-submitted</td><td>每个文件处理完后添加到 <code>upload</code> 实例的 <code>files</code> 数组中后触发</td><td>文件对象</td></tr><tr><td>file-removed</td><td>文件被删除后触发</td><td>文件对象</td></tr><tr><td>file-success</td><td>文件上传成功后触发</td><td>文件对象</td></tr><tr><td>file-error</td><td>文件上传失败后触发</td><td>文件对象</td></tr><tr><td>file-click</td><td>文件点击后触发</td><td>文件对象，1.12.39后增加了index文件索引参数</td></tr><tr><td>input</td><td>绑定值（文件列表）改变后触发</td><td>更新后的绑定值（文件列表）</td></tr></tbody></table><h3>实例方法</h3><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>start</td><td>开始上传</td><td>-</td></tr><tr><td>pause</td><td>暂停上传</td><td>-</td></tr><tr><td>retry</td><td>重试上传</td><td>-</td></tr><tr><td>removeFile</td><td>删除文件</td><td>文件对象</td></tr></tbody></table>`,18),l=[r],p={__name:"upload",setup(a,{expose:t}){return t({frontmatter:{}}),(c,s)=>(e(),d("div",n,l))}};export{p as default};
