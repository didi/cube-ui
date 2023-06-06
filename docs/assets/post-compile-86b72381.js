import{a as o,o as n,j as p}from"./index-e8a96955.js";const a={class:"markdown-body"},t=p(`<h2>Post-compile</h2><p>Post-compile means the NPM packages don’t need to be compiled before published, and they will be compiled along with the application’s compiling.</p><blockquote><p>Notes: For more detailed content about post-compile, see <a href="https://github.com/DDFE/DDFE-blog/issues/23">webpack 应用编译优化之路</a>.</p></blockquote><h3>Background</h3><p>More and more applications are developed with webpack + babel, and commonly use NPM to manage packages. With the growing of the number of package dependencies which are also developed with ES2015+ and need to be compiled before published, the final compiled code usually contains a lot of compiling code. Therefore, to eliminate the redundancy, we recommend post-compile.</p><h3>Pros and cons</h3><p>Pros:</p><ul><li>Common dependencies can be shared and only need to be compiled once.</li><li>Only one copy of babel-plugin-transform-runtime or babel-polyfill code.</li><li>The NPM packages don’t need to be compiled before published.</li></ul><p>Cons:</p><ul><li>The application’s babel configuration needs to be compatible with the NPM packages’ babel configuration.</li><li>The NPM packages can’t use alias and DefinePlugin (you can use them and compiled before published but don’t need to use babel).</li><li>The application’s compiling time will be longer.</li></ul><h3>Rules</h3><p>Considering some applications can not use post-compile, cube-ui used the rule:</p><blockquote><p>The main field in package.json is the compiled entry point and the module field is the source entry point.</p></blockquote><p><em>About <a href="https://github.com/rollup/rollup/wiki/pkg.module">pkg.module</a></em></p><p>Post-compile is used by default if you use webpack 2+. Of course, you can use the webpack alias configuration to change the default behavior.</p><h3>webpack demo</h3><p>The <a href="https://www.npmjs.com/package/webpack-post-compile-plugin">webpack-post-compile-plugin</a> is used to resolve the nested post-compile NPM packages.</p><p>An example of your application webpack configuration:</p><pre><code class="language-js">// webpack.config.js
var PostCompilePlugin = require(&#39;webpack-post-compile-plugin&#39;)

module.exports = {
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\\.js$/,
        loader: &#39;babel-loader&#39;,
        include: [
          resolve(&#39;src&#39;)
        ]
      },
      // ...
    ]
  },
  // ...
  plugins: [
    new PostCompilePlugin()
  ]
}
</code></pre><p>And if you can control all the packages which you want to post compile, you can just add postCompile: true to the packages package.json:</p><pre><code class="language-js">{
  &quot;name&quot;: &quot;your-one-pkg&quot;,
  // ...
  &quot;postCompile&quot;: true
  // ...
}
</code></pre><p>Or you can add compileDependencies to your application package.json:</p><pre><code class="language-js">// package.json
{
  // ...
  &quot;compileDependencies&quot;: [&quot;A&quot;, &quot;B&quot;]
  // ...
}
</code></pre><p>If <code>A</code> package have a dependency on <code>C</code> which is needed to be post compiled, just add <code>compileDependencies</code> to <code>A</code>’s package.json:</p><pre><code class="language-json">// A package.json
{
  // ...
  &quot;compileDependencies&quot;: [&quot;C&quot;]
  // ...
}
</code></pre>`,25),c=[t],r={__name:"post-compile",setup(i,{expose:e}){return e({frontmatter:{}}),(s,d)=>(n(),o("div",a,c))}};export{r as default};
