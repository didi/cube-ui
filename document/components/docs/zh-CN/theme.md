## 主题

移动端的组件对主题定制的需求会更多，从 `cube-ui^1.0.2` 开始，通过 webpack 工具可以实现自定义主题样式。

**注意：** 自定义主题依赖[后编译](#/zh-CN/docs/post-compile)。

### 主题文件

在你的项目的 `src/` 目录下创建一个 `theme.styl` 的文件，内容如下（展示的全是默认样式，你可以选择这针对不同组件做定制）：

```stylus
// 如果你需要使用 cube-ui 自带的颜色值 需要 require 进来
@require "~cube-ui/src/common/stylus/var/color.styl"

// action-sheet
$action-sheet-color := $color-grey
$action-sheet-active-color := $color-orange
$action-sheet-bgc := $color-white
$action-sheet-active-bgc := $color-light-grey-opacity
$action-sheet-title-color := $color-dark-grey
/// picker style
$action-sheet-picker-cancel-color := $color-light-grey
$action-sheet-picker-cancel-active-color := $color-light-grey-s

// button
$btn-color := $color-white
$btn-bgc := $color-regular-blue
$btn-bdc := $color-regular-blue
$btn-active-bgc := $color-blue
$btn-active-bdc := $color-blue
$btn-disabled-color := $color-white
$btn-disabled-bgc := $color-light-grey-s
$btn-disabled-bdc := $color-light-grey-s
/// primary
$btn-primary-color := $color-white
$btn-primary-bgc := $color-orange
$btn-primary-bdc := $color-orange
$btn-primary-active-bgc := $color-dark-orange
$btn-primary-active-bdc := $color-dark-orange
/// light
$btn-light-color := $color-grey
$btn-light-bgc := $color-light-grey-sss
$btn-light-bdc := $color-light-grey-sss
$btn-light-active-bgc := $color-active-grey
$btn-light-active-bdc := $color-active-grey
/// outline
$btn-outline-color := $color-grey
$btn-outline-bgc := transparent
$btn-outline-bdc := $color-grey
$btn-outline-active-bgc := $color-grey-opacity
$btn-outline-active-bdc := $color-grey
/// outline-primary
$btn-outline-primary-color := $color-orange
$btn-outline-primary-bgc := transparent
$btn-outline-primary-bdc := $color-orange
$btn-outline-primary-active-bgc := $color-orange-opacity
$btn-outline-primary-active-bdc := $color-dark-orange

// checkbox
$checkbox-color := $color-grey
$checkbox-bgc := $color-white
$checkbox-icon-color := $color-light-grey-s
$checkbox-icon-bgc := $color-white
/// checked
$checkbox-checked-icon-color := $color-orange
$checkbox-checked-icon-bgc := $color-white
/// disabled
$checkbox-disabled-icon-color := $color-light-grey-ss
$checkbox-disabled-icon-bgc := $color-light-grey-ss

// checkbox-group
$checkbox-group-horizontal-bdc := $color-light-grey-s

// dialog
$dialog-color := $color-grey
$dialog-bgc := $color-white
$dialog-icon-color := $color-regular-blue
$dialog-icon-bgc := $color-background
$dialog-title-color := $color-dark-grey
$dialog-close-color := $color-light-grey
$dialog-btn-color := $color-light-grey
$dialog-btn-bgc := $color-white
$dialog-btn-active-bgc := $$color-light-grey-opacity
$dialog-btn-highlight-color := $color-orange
$dialog-btn-highlight-active-bgc := $color-light-orange-opacity
$dialog-btn-disabled-color := $color-light-grey
$dialog-btn-disabled-active-bgc := transparent
$dialog-btns-split-color := $color-row-line

// index-list
$index-list-bgc := $color-white
$index-list-box-shadow := 0 3px 6px $color-light-grey-ss
$index-list-title-color := $color-dark-grey
$index-list-anchor-color := $color-light-grey
$index-list-anchor-bgc := #f7f7f7
$index-list-item-color := $color-dark-grey
$index-list-item-active-bgc := $color-light-grey-opacity
$index-list-nav-color := $color-grey
$index-list-nav-active-color := $color-orange

// picker
$picker-bgc := $color-white
$picker-title-color := $color-dark-grey
$picker-confirm-btn-color := $color-orange
$picker-confirm-btn-active-color := $color-light-orange
$picker-cancel-btn-color := $color-light-grey
$picker-cancel-btn-active-color := $color-light-grey-s
$picker-item-color := $color-dark-grey

// popup
$popup-mask-bgc := $color-mask-bg

// scroll
$scroll-content-bgc := $color-white

// slide
$slide-dot-bgc := $color-light-grey-s
$slide-dot-active-bgc := $color-orange

// tip
$tip-color := $color-white
$tip-bgc := $color-dark-grey-opacity

// toast
$toast-color := $color-light-grey-s
$toast-bgc := rgba(37, 38, 45, 0.9)
```

### 配置 webpack

如果你的项目是用 vue-cli 生成的，那么找到 `build/utils.js` 中的 `exports.cssLoaders` 函数，改成如下：

```js
exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  var postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  const stylusOptions = {
    'resolve url': true,
    // 这里 新增 import 配置项，指向自定义主题文件
    import: [path.resolve(__dirname, '../src/theme')]
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus',stylusOptions),
    styl: generateLoaders('stylus',stylusOptions)
  }
}
```

### 结果

这样修改自定义的主题文件内容，最终编译打包后的样式就是你需要的；而且这样也不存在样式冗余覆盖的问题，因为直接是对组件样式的变量做的修改，而不是采用传统的样式覆盖。
