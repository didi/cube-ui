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
