## style 模块

style 模块主要包含就是样式部分，包含内置 icon、基础的 reset 以及基础通用样式。


### 内置 icon

图标是利用 [font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) 规则自定义字体 `"cube-icon"` 实现的。

使用的时候只需要加入对应的类名即可，例如 alert 图标，可以这样用：`<i class="cubeic-alert"></i>`。

内置 icon 有 65 个：

| - | - | - | - |
| :-: | :-: | :-: | :-: |
| <i class="cubeic-eye-invisible"></i> | <i class="cubeic-eye-visible"></i> | <i class="cubeic-person"></i> | <i class="cubeic-select"></i> |
| <i class="cubeic-pulldown"></i> | <i class="cubeic-pullup"></i> | <i class="cubeic-back"></i> | <i class="cubeic-arrow"></i> |
| <i class="cubeic-more"></i> | <i class="cubeic-close"></i> | <i class="cubeic-warn"></i> | <i class="cubeic-question"></i> |
| <i class="cubeic-right"></i> | <i class="cubeic-wrong"></i> | <i class="cubeic-add"></i> | <i class="cubeic-remove"></i> |
| <i class="cubeic-info"></i> | <i class="cubeic-share"></i> | <i class="cubeic-no-wifi"></i> | <i class="cubeic-wifi"></i> |
| <i class="cubeic-sad"></i> | <i class="cubeic-smile"></i> | <i class="cubeic-game"></i> | <i class="cubeic-email"></i> |
| <i class="cubeic-hot"></i> | <i class="cubeic-notification"></i> | <i class="cubeic-delete"></i> | <i class="cubeic-vip"></i> |
| <i class="cubeic-mute"></i> | <i class="cubeic-volume"></i> | <i class="cubeic-good"></i> | <i class="cubeic-bad"></i> |
| <i class="cubeic-mobile-phone"></i> | <i class="cubeic-aim"></i> | <i class="cubeic-navigation"></i> | <i class="cubeic-safe-pay"></i> |
| <i class="cubeic-tag"></i> | <i class="cubeic-lock"></i> | <i class="cubeic-unlock"></i> | <i class="cubeic-edit"></i> |
| <i class="cubeic-scan"></i> | <i class="cubeic-qr-code"></i> | <i class="cubeic-calendar"></i> | <i class="cubeic-time"></i> |
| <i class="cubeic-red-packet"></i> | <i class="cubeic-star"></i> | <i class="cubeic-setting"></i> | <i class="cubeic-home"></i> |
| <i class="cubeic-credit-card"></i> | <i class="cubeic-mall"></i> | <i class="cubeic-microphone"></i> | <i class="cubeic-search"></i> |
| <i class="cubeic-danger"></i> | <i class="cubeic-alert"></i> | <i class="cubeic-picture"></i> | <i class="cubeic-message"></i> |
| <i class="cubeic-phone"></i> | <i class="cubeic-location"></i> | <i class="cubeic-like"></i> | <i class="cubeic-camera"></i> |
| <i class="cubeic-square-right"></i> | <i class="cubeic-square-border"></i> | <i class="cubeic-round-border"></i> | <i class="cubeic-ok"></i> ||
| <i class="cubeic-important"></i> |  |  |  |

### reset.css

源码地址：[reset](https://github.com/didi/cube-ui/blob/master/src/common/stylus/reset.styl)，使用的就是 Eric Meyer's Reset CSS。

```stylus
/**
 * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
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
```

### base.css

源码地址：[base](https://github.com/didi/cube-ui/blob/master/src/common/stylus/base.styl)，主要包含的就是 `html`, `body` 元素的 `font-family`, `line-height` 等的设定，修正浮动影响的 `.clear-fix`，以及上下左右四个边框的绝对 1px 边框的 class：`.border-top-1px`, `.border-right-1px`, `.border-bottom-1px`, `.border-left-1px`。

```stylus
@require "./variable.styl"

body, html
  line-height: 1
  font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif, 'Droid Sans Fallback'
  user-select: none
  -webkit-tap-highlight-color: transparent

.clear-fix
  &::after
    content: ""
    display: table
    clear: both

.border-top-1px, .border-right-1px, .border-bottom-1px, .border-left-1px
  position: relative
  &::before, &::after
    content: ""
    display: block
    position: absolute
    transform-origin: 0 0

.border-top-1px
  &::before
    border-top: 1px solid $color-row-line
    left: 0
    top: 0
    width: 100%
    transform-origin: 0 top

.border-right-1px
  &::after
    border-right: 1px solid $color-col-line
    top: 0
    right: 0
    height: 100%
    transform-origin: right 0

.border-bottom-1px
  &::after
    border-bottom: 1px solid $color-row-line
    left: 0
    bottom: 0
    width: 100%
    transform-origin: 0 bottom

.border-left-1px
  &::before
    border-left: 1px solid $color-col-line
    top: 0
    left: 0
    height: 100%
    transform-origin: left 0

@media (min-resolution: 2dppx)
  .border-top-1px
    &::before
      width: 200%
      transform: scale(.5) translateZ(0)
  .border-right-1px
    &::after
      height: 200%
      transform: scale(.5) translateZ(0)
  .border-bottom-1px
    &::after
      width: 200%
      transform: scale(.5) translateZ(0)
  .border-left-1px
    &::before
      height: 200%
      transform: scale(.5) translateZ(0)

@media (min-resolution: 3dppx)
  .border-top-1px
    &::before
      width: 300%
      transform: scale(.333) translateZ(0)
  .border-right-1px
    &::after
      height: 300%
      transform: scale(.333) translateZ(0)
  .border-bottom-1px
    &::after
      width: 300%
      transform: scale(.333) translateZ(0)
  .border-left-1px
    &::before
      height: 300%
      transform: scale(.333) translateZ(0)
```
