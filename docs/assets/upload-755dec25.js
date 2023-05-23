import{a as e,o as d,j as o}from"./index-9017f177.js";const i={class:"markdown-body"},r=o(`<h2>Upload</h2><blockquote><p>New in 1.3.0+</p></blockquote><p><code>Upload</code> component.</p><p><strong>Notice:</strong> In this document, all the original File will be called <strong>original file</strong>, since the wrapped file object will be called <strong>file object</strong>. The structure of <strong>file object</strong> show as following:</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>v-model</td><td>file list</td><td>Array</td></tr><tr><td>name</td><td>file name</td><td>String</td></tr><tr><td>size</td><td>file size</td><td>Number</td></tr><tr><td>url</td><td>file url, created by URL.createObjectURL, for preview</td><td>String</td></tr><tr><td>base64</td><td>file base64 value, the value is equaled to the original file’s base64 value. It is <code>&#39;&#39;</code> by default, but you can have some plugins to added this <code>base64</code> value, like the compress plugin below</td><td>String</td></tr><tr><td>status</td><td>file status, one of: ready, uploading, success, error</td><td>String</td></tr><tr><td>progress</td><td>file progress, number 0~1</td><td>Number</td></tr><tr><td>file</td><td>the original file</td><td>File</td></tr><tr><td>response</td><td>response data(try to parse to JSON）</td><td>Object/Array/String</td></tr><tr><td>responseHeaders</td><td>all response headers</td><td>String</td></tr></tbody></table><h3>Example</h3><ul><li><p>Basic usage</p><pre><code class="language-html">&lt;cube-upload
  action=&quot;//jsonplaceholder.typicode.com/photos/&quot;
  :simultaneous-uploads=&quot;1&quot;
  @files-added=&quot;filesAdded&quot; /&gt;
</code></pre><pre><code class="language-js">export default {
  methods: {
    filesAdded(files) {
      const maxSize = 1 * 1024 * 1024 // 1M
      for (let k in files) {
        const file = files[k]
        if (file.size &gt; maxSize) {
          file.ignore = true
        }
      }
    }
  }
}
</code></pre><p>Set <code>action</code> to configure the upload target URL for the multipart POST request.</p><p>Set <code>simultaneous-uploads</code> to configure the max number of files uploading simultaneously .</p><p>The <code>files-added</code> event is used for file validation, and you can filter file by setting <code>file.ignore = true</code>.</p></li><li><p>Compress and uploaded through Base64</p><pre><code class="language-html">&lt;cube-upload
  ref=&quot;upload&quot;
  :action=&quot;action&quot;
  :simultaneous-uploads=&quot;1&quot;
  :process-file=&quot;processFile&quot;
  @file-submitted=&quot;fileSubmitted&quot;&gt;&lt;/cube-upload&gt;
</code></pre><pre><code class="language-js">import compress from &#39;../../modules/image&#39;
export default {
  data() {
    return {
      action2: {
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
</code></pre><p>The <code>action</code> is an object which contains <code>target</code> and <code>prop</code>. the <code>prop</code> could configure which property in file object will be uploaded).</p><p>The <code>process-file</code> is a function which is used to process the original file, like compress, <code>next</code> must be called with the processed file.</p><p>The <code>file-submitted</code> event will be trigged after the file is processed and added to the <code>upload.files</code> with a parameter – the file object.</p></li><li><p>Use slots</p><p>You can use slots to define your custom HTML structure.</p><pre><code class="language-html">&lt;cube-upload
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
</code></pre><p>Custom Style:</p><pre><code class="language-stylus">.cube-upload
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
</code></pre></li></ul><h3>Props configuration</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Demo</th></tr></thead><tbody><tr><td>v-model</td><td>file list</td><td>Array</td><td>[]</td><td>[{ name, size, url, status: ‘success’, progress: 1 }]</td></tr><tr><td>action</td><td>upload action config</td><td>String/Object</td><td>‘’</td><td>{ target: ‘/upload’ }</td></tr><tr><td>max</td><td>max upload files number</td><td>Number</td><td>10</td><td>-</td></tr><tr><td>auto</td><td>whether auto start upload</td><td>Boolean</td><td>true</td><td>-</td></tr><tr><td>simultaneousUploads</td><td>the number of simultaneous uploads</td><td>Number</td><td>1</td><td>-</td></tr><tr><td>multiple</td><td>multiple select</td><td>Boolean</td><td>true</td><td>-</td></tr><tr><td>accept</td><td>input accept</td><td>String</td><td>image/*</td><td>-</td></tr><tr><td>processFile</td><td>process the original file</td><td>Function</td><td>function (file, next) { next(file) }</td><td>-</td></tr></tbody></table><ul><li><code>action</code> sub configuration</li></ul><p>If <code>action</code> is a string, it will be transformed into <code>{ target: action }</code>.</p><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>the upload target URL for the multipart POST request, if this value is a function, then it will be called with the file object as parameter and the returned value as the URL</td><td>String/Function<sup>1.11.0+</sup></td><td>-</td></tr><tr><td>fileName</td><td>the name of the multipart POST parameter</td><td>String</td><td>‘file’</td></tr><tr><td>prop</td><td>which property in file object will be uploaded</td><td>String</td><td>‘file’</td></tr><tr><td>headers</td><td>extra headers to include in the multipart POST, if this value is a function, then it will be called with the file object as parameter and the returned value as headers</td><td>Object/Function<sup>1.11.0+</sup></td><td>{}</td></tr><tr><td>data</td><td>extra data to include in the multipart POST, if this value is a function, then it will be called with the file object as parameter and the returned value as data</td><td>Object/Function<sup>1.11.0+</sup></td><td>{}</td></tr><tr><td>withCredentials</td><td>Standard CORS requests would not send or set any cookies by default. In order to include cookies as part of the request, you need to set the withCredentials property to true</td><td>Boolean</td><td>false</td></tr><tr><td>timeout</td><td>upload request timeout value</td><td>Number</td><td>0</td></tr><tr><td>progressInterval</td><td>The time interval between progress reports (Unit: ms)</td><td>Number</td><td>100</td></tr><tr><td>checkSuccess</td><td>Check the response should be successful, the parameters is <code>(response, file[, cb])</code> object. The <code>file</code> and optional <code>cb</code> parameters are avaliable after 1.11.0. If there are no <code>cb</code> then get this function as result <code>isSuccess</code>, otherwise the <code>cb(isSuccess)</code> parameter <code>isSuccess</code> as the result. If the result <code>isSuccess</code> is <code>true</code> then it will be treated as successful</td><td>Function</td><td>function (res) { return true }</td></tr></tbody></table><ul><li><code>processFile</code> sub configuration</li></ul><p>A function with two parameters: <code>(file, next)</code>, the <code>file</code> is the original file and the <code>next</code> callback must be called with the processed file.</p><h3>Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>files-added</td><td>triggers when files are added, usually used for file validation</td><td>original files</td></tr><tr><td>file-submitted</td><td>triggers when a file is added to the <code>upload.files</code></td><td>the file object</td></tr><tr><td>file-removed</td><td>triggers when a file is removed</td><td>the file object</td></tr><tr><td>file-success</td><td>triggers when a file is uploaded successfully</td><td>the file object</td></tr><tr><td>file-error</td><td>triggers when a file is failed to upload</td><td>the file object</td></tr><tr><td>file-click</td><td>triggers when a file is clicked</td><td>the file object. After 1.12.39, added file <code>index</code> param</td></tr><tr><td>input</td><td>triggers when the binding value(file list) changes</td><td>the updated value(file list)</td></tr></tbody></table><h3>Instance methods</h3><table><thead><tr><th>Method name</th><th>Description</th><th>Parameter</th></tr></thead><tbody><tr><td>start</td><td>start uploading</td><td>-</td></tr><tr><td>pause</td><td>pause uploading</td><td>-</td></tr><tr><td>retry</td><td>retry uploading</td><td>-</td></tr><tr><td>removeFile</td><td>remove file</td><td>the file object</td></tr></tbody></table>`,18),l=[r],p={__name:"upload",setup(n,{expose:t}){return t({frontmatter:{}}),(s,c)=>(d(),e("div",i,l))}};export{p as default};
