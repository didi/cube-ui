## style module

This module contains the common css: reset, base and built-in icons.

### reset.css

Based on [Eric Meyer's Reset CSS](http://meyerweb.com/eric/tools/css/reset/) and [modified](https://github.com/didi/cube-ui/blob/master/src/common/stylus/reset.styl).

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

The [base css](https://github.com/didi/cube-ui/blob/master/src/common/stylus/base.styl) contains the following styles:

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

### icon.css

Icons:

![cube icons](https://raw.githubusercontent.com/didi/cube-ui/master/assets/icon.png)

If you want to use them, just add the `cubeic-${name}` class: `<i class="cubeic-alert"></i>`.
