## Theme

You can choose to modify all or only some of the theme variables from `cube-ui^1.0.2`(also need webpack).

**Notice:** Customizing theme depend on [post-compile](#/en-US/docs/post-compile).

### Theme file

You can create a `theme.styl` file in your application's `src/` directory. The theme file's content that looks like this (these variables are cube-ui's default value):

```styl
// you want to use cube-ui variables, just require it
@require "~cube-ui/src/common/stylus/var/color.styl"

// action-sheet
$action-sheet-color := $color-grey
$action-sheet-active-color := $color-orange
$action-sheet-bgc := $color-white
$action-sheet-active-bgc := $color-light-grey-opacity
$action-sheet-title-color := $color-dark-grey
$action-sheet-space-bgc := $color-mask-bg
/// picker style
$action-sheet-picker-cancel-color := $color-light-grey
$action-sheet-picker-cancel-active-color := $color-light-grey-s

// bubble

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

// toolbar
$toolbar-bgc := $color-light-grey-sss
$toolbar-active-bgc := $color-active-grey

// checkbox
$checkbox-color := $color-grey
$checkbox-icon-color := $color-light-grey-s
/// checked
$checkbox-checked-icon-color := $color-orange
$checkbox-checked-icon-bgc := $color-white
/// disabled
$checkbox-disabled-icon-color := $color-light-grey-ss
$checkbox-disabled-icon-bgc := $color-light-grey-ss
// checkbox hollow
$checkbox-hollow-checked-icon-color := $color-orange
$checkbox-hollow-disabled-icon-color := $color-light-grey-ss
// checkbox-group
$checkbox-group-bgc := $color-white
$checkbox-group-horizontal-bdc := $color-light-grey-s

// radio
$radio-group-bgc := $color-white
$radio-group-horizontal-bdc := $color-light-grey-s
$radio-color := $color-grey
$radio-icon-color := $color-light-grey-s
/// selected
$radio-selected-icon-color := $color-white
$radio-selected-icon-bgc := $color-orange
/// disabled
$radio-disabled-icon-bgc := $color-light-grey-ss
// radio hollow
$radio-hollow-selected-icon-color := $color-orange
$radio-hollow-disabled-icon-color := $color-light-grey-ss

// dialog
$dialog-color := $color-grey
$dialog-bgc := $color-white
$dialog-icon-color := $color-regular-blue
$dialog-icon-bgc := $color-background
$dialog-title-color := $color-dark-grey
$dialog-close-color := $color-light-grey
$dialog-btn-color := $color-light-grey
$dialog-btn-bgc := $color-white
$dialog-btn-active-bgc := $color-light-grey-opacity
$dialog-btn-highlight-color := $color-orange
$dialog-btn-highlight-active-bgc := $color-light-orange-opacity
$dialog-btn-disabled-color := $color-light-grey
$dialog-btn-disabled-active-bgc := transparent
$dialog-btns-split-color := $color-row-line

// index-list
$index-list-bgc := $color-white
$index-list-title-color := $color-dark-grey
$index-list-anchor-color := $color-light-grey
$index-list-anchor-bgc := #f7f7f7
$index-list-item-color := $color-dark-grey
$index-list-item-active-bgc := $color-light-grey-opacity
$index-list-nav-color := $color-grey
$index-list-nav-active-color := $color-orange

// loading

// picker
$picker-bgc := $color-white
$picker-title-color := $color-dark-grey
$picker-subtitle-color := $color-light-grey
$picker-confirm-btn-color := $color-orange
$picker-confirm-btn-active-color := $color-light-orange
$picker-cancel-btn-color := $color-light-grey
$picker-cancel-btn-active-color := $color-light-grey-s
$picker-item-color := $color-dark-grey

// popup
$popup-mask-bgc := rgb(37, 38, 45)
$popup-mask-opacity := .4

//scroll

// slide
$slide-dot-bgc := $color-light-grey-s
$slide-dot-active-bgc := $color-orange

// time-picker

// tip
$tip-color := $color-white
$tip-bgc := $color-dark-grey-opacity

// toast
$toast-color := $color-light-grey-s
$toast-bgc := rgba(37, 38, 45, 0.9)

// upload
$upload-btn-color := $color-grey
$upload-btn-bgc := $color-white
$upload-btn-active-bgc := $color-light-grey-opacity
$upload-btn-box-shadow := 0 0 6px 2px $color-grey-opacity
$upload-btn-border-color := #e5e5e5
$upload-file-bgc := $color-white
$upload-file-remove-color := rgba(0, 0, 0, .8)
$upload-file-remove-bgc := $color-white
$upload-file-state-bgc := $color-mask-bg
$upload-file-success-color := $color-orange
$upload-file-error-color := #f43530
$upload-file-status-bgc := $color-white
$upload-file-progress-color := $color-white

// switch
$switch-on-bgc := $color-orange
$switch-off-bgc := $color-white
$switch-off-border-color := #e4e4e4

// input
$input-color := $color-grey
$input-bgc := $color-white
$input-border-color := $color-row-line
$input-focus-border-color := $color-orange
$input-placeholder-color := $color-light-grey-s
$input-clear-icon-color := $color-light-grey

//textarea
$textarea-color := $color-grey
$textarea-bgc := $color-white
$textarea-border-color := $color-row-line
$textarea-focus-border-color := $color-orange
$textarea-outline-color := $color-orange
$textarea-placeholder-color := $color-light-grey-s
$textarea-indicator-color := $color-light-grey-s

// validator
$validator-msg-def-color := #e64340

// select
$select-color := $color-grey
$select-bgc := $color-white
$select-disabled-color := #b8b8b8
$select-disabled-bgc := $color-light-grey-opacity
$select-border-color := $color-light-grey-s
$select-border-active-color := $color-orange
$select-icon-color := $color-light-grey
$select-placeholder-color := $color-light-grey-s

// swipe
$swipe-btn-color := $color-white

// form
$form-color := $color-grey
$form-bgc := $color-white
$form-invalid-color := #e64340
$form-group-legend-color := $color-light-grey
$form-group-legend-bgc := $color-background
$form-label-required-color := #e64340

// drawer
$drawer-color := $color-dark-grey
$drawer-title-bdc := $color-light-grey-ss
$drawer-title-bgc := $color-white
$drawer-panel-bgc := $color-white
$drawer-item-active-bgc := $color-light-grey-opacity

// scroll-nav
$scroll-nav-bgc := $color-white
$scroll-nav-color := $color-grey
$scroll-nav-active-color := $color-orange

// image-preview
$image-preview-counter-color := $color-white

// tab-bar & tab-panel
$tab-color := $color-grey
$tab-active-color := $color-dark-orange
$tab-slider-bgc := $color-dark-orange
```

### webpack config

If your project is created by vue-cli, then you can modify the `exports.cssLoaders` function in `build/utils.js` to this:

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
    // !! add import option, include the theme file
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

### Result

In this way you can use cube-ui with your own theme. You do not need to override the cube-ui style because you can just override the theme variables.
