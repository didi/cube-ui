import{a as e,o as i,j as n}from"./index-e8a96955.js";const c={class:"markdown-body"},s=n(`<h2>style 模块</h2><p>style 模块主要包含就是样式部分，包含内置 icon、基础的 reset 以及基础通用样式。</p><h3>内置 icon</h3><p>图标是利用 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face">font-face</a> 规则自定义字体 <code>&quot;cube-icon&quot;</code> 实现的。</p><p>使用的时候只需要加入对应的类名即可，例如 alert 图标，可以这样用：<code>&lt;i class=&quot;cubeic-alert&quot;&gt;&lt;/i&gt;</code>。</p><p>内置 icon 有 65 个：</p><table><thead><tr><th style="text-align:center;">-</th><th style="text-align:center;">-</th><th style="text-align:center;">-</th><th style="text-align:center;">-</th></tr></thead><tbody><tr><td style="text-align:center;"><i class="cubeic-eye-invisible"></i></td><td style="text-align:center;"><i class="cubeic-eye-visible"></i></td><td style="text-align:center;"><i class="cubeic-person"></i></td><td style="text-align:center;"><i class="cubeic-select"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-pulldown"></i></td><td style="text-align:center;"><i class="cubeic-pullup"></i></td><td style="text-align:center;"><i class="cubeic-back"></i></td><td style="text-align:center;"><i class="cubeic-arrow"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-more"></i></td><td style="text-align:center;"><i class="cubeic-close"></i></td><td style="text-align:center;"><i class="cubeic-warn"></i></td><td style="text-align:center;"><i class="cubeic-question"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-right"></i></td><td style="text-align:center;"><i class="cubeic-wrong"></i></td><td style="text-align:center;"><i class="cubeic-add"></i></td><td style="text-align:center;"><i class="cubeic-remove"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-info"></i></td><td style="text-align:center;"><i class="cubeic-share"></i></td><td style="text-align:center;"><i class="cubeic-no-wifi"></i></td><td style="text-align:center;"><i class="cubeic-wifi"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-sad"></i></td><td style="text-align:center;"><i class="cubeic-smile"></i></td><td style="text-align:center;"><i class="cubeic-game"></i></td><td style="text-align:center;"><i class="cubeic-email"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-hot"></i></td><td style="text-align:center;"><i class="cubeic-notification"></i></td><td style="text-align:center;"><i class="cubeic-delete"></i></td><td style="text-align:center;"><i class="cubeic-vip"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-mute"></i></td><td style="text-align:center;"><i class="cubeic-volume"></i></td><td style="text-align:center;"><i class="cubeic-good"></i></td><td style="text-align:center;"><i class="cubeic-bad"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-mobile-phone"></i></td><td style="text-align:center;"><i class="cubeic-aim"></i></td><td style="text-align:center;"><i class="cubeic-navigation"></i></td><td style="text-align:center;"><i class="cubeic-safe-pay"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-tag"></i></td><td style="text-align:center;"><i class="cubeic-lock"></i></td><td style="text-align:center;"><i class="cubeic-unlock"></i></td><td style="text-align:center;"><i class="cubeic-edit"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-scan"></i></td><td style="text-align:center;"><i class="cubeic-qr-code"></i></td><td style="text-align:center;"><i class="cubeic-calendar"></i></td><td style="text-align:center;"><i class="cubeic-time"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-red-packet"></i></td><td style="text-align:center;"><i class="cubeic-star"></i></td><td style="text-align:center;"><i class="cubeic-setting"></i></td><td style="text-align:center;"><i class="cubeic-home"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-credit-card"></i></td><td style="text-align:center;"><i class="cubeic-mall"></i></td><td style="text-align:center;"><i class="cubeic-microphone"></i></td><td style="text-align:center;"><i class="cubeic-search"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-danger"></i></td><td style="text-align:center;"><i class="cubeic-alert"></i></td><td style="text-align:center;"><i class="cubeic-picture"></i></td><td style="text-align:center;"><i class="cubeic-message"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-phone"></i></td><td style="text-align:center;"><i class="cubeic-location"></i></td><td style="text-align:center;"><i class="cubeic-like"></i></td><td style="text-align:center;"><i class="cubeic-camera"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-square-right"></i></td><td style="text-align:center;"><i class="cubeic-square-border"></i></td><td style="text-align:center;"><i class="cubeic-round-border"></i></td><td style="text-align:center;"><i class="cubeic-ok"></i></td></tr><tr><td style="text-align:center;"><i class="cubeic-important"></i></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><h3>reset.css</h3><p>源码地址：<a href="https://github.com/didi/cube-ui/blob/master/src/common/stylus/reset.styl">reset</a>，使用的就是 Eric Meyer’s Reset CSS。</p><pre><code class="language-stylus">/**
 * Eric Meyer&#39;s Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
 * http://cssreset.com
 */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input
  margin: 0
  padding: 0
  border: 0
  font-size: 100%
  font-weight: normal
  vertical-align: baseline

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, menu, nav, section
  display: block

body
  line-height: 1

blockquote, q
  quotes: none

blockquote:before, blockquote:after,
q:before, q:after
  content: none

table
  border-collapse: collapse
  border-spacing: 0

/* custom */

a
  color: #7e8c8d
  -webkit-backface-visibility: hidden
  text-decoration: none

li
  list-style: none

body
  -webkit-text-size-adjust: none
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
</code></pre><h3>base.css</h3><p>源码地址：<a href="https://github.com/didi/cube-ui/blob/master/src/common/stylus/base.styl">base</a>，主要包含的就是 <code>html</code>, <code>body</code> 元素的 <code>font-family</code>, <code>line-height</code> 等的设定，修正浮动影响的 <code>.clear-fix</code>，以及上下左右四个边框的绝对 1px 边框的 class：<code>.border-top-1px</code>, <code>.border-right-1px</code>, <code>.border-bottom-1px</code>, <code>.border-left-1px</code>。</p><pre><code class="language-stylus">@require &quot;./variable.styl&quot;

body, html
  line-height: 1
  font-family: &#39;PingFang SC&#39;, &#39;STHeitiSC-Light&#39;, &#39;Helvetica-Light&#39;, arial, sans-serif, &#39;Droid Sans Fallback&#39;
  user-select: none
  -webkit-tap-highlight-color: transparent

.clear-fix
  &amp;::after
    content: &quot;&quot;
    display: table
    clear: both

.border-top-1px, .border-right-1px, .border-bottom-1px, .border-left-1px
  position: relative
  &amp;::before, &amp;::after
    content: &quot;&quot;
    display: block
    position: absolute
    transform-origin: 0 0

.border-top-1px
  &amp;::before
    border-top: 1px solid $color-row-line
    left: 0
    top: 0
    width: 100%
    transform-origin: 0 top

.border-right-1px
  &amp;::after
    border-right: 1px solid $color-col-line
    top: 0
    right: 0
    height: 100%
    transform-origin: right 0

.border-bottom-1px
  &amp;::after
    border-bottom: 1px solid $color-row-line
    left: 0
    bottom: 0
    width: 100%
    transform-origin: 0 bottom

.border-left-1px
  &amp;::before
    border-left: 1px solid $color-col-line
    top: 0
    left: 0
    height: 100%
    transform-origin: left 0

@media (min-resolution: 2dppx)
  .border-top-1px
    &amp;::before
      width: 200%
      transform: scale(.5) translateZ(0)
  .border-right-1px
    &amp;::after
      height: 200%
      transform: scale(.5) translateZ(0)
  .border-bottom-1px
    &amp;::after
      width: 200%
      transform: scale(.5) translateZ(0)
  .border-left-1px
    &amp;::before
      height: 200%
      transform: scale(.5) translateZ(0)

@media (min-resolution: 3dppx)
  .border-top-1px
    &amp;::before
      width: 300%
      transform: scale(.333) translateZ(0)
  .border-right-1px
    &amp;::after
      height: 300%
      transform: scale(.333) translateZ(0)
  .border-bottom-1px
    &amp;::after
      width: 300%
      transform: scale(.333) translateZ(0)
  .border-left-1px
    &amp;::before
      height: 300%
      transform: scale(.333) translateZ(0)
</code></pre>`,13),l=[s],g={__name:"style",setup(r,{expose:t}){return t({frontmatter:{}}),(o,d)=>(i(),e("div",c,l))}};export{g as default};
