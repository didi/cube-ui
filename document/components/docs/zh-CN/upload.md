## Upload 组件

`Upload` 上传组件。

**注：** 本文中所有的原始文件对象统称为**原始文件**，而经过包装后的文件对象称为**文件对象**，这个文件对象的结构如下：

```js
{
  name, // 文件名
  size, // 文件大小
  url, // 文件 url，通过 URL.createObjectURL 获得
  base64, // 文件 base64 的值，这个会从原始文件的 base64 属性获得（默认是没有的，但是插件可以添加，例如下边演示的压缩 compress 插件就会添加 base64 值）
  status, // 文件状态，包含四个： ready, uploading, success, error
  progress, // 文件上传进度，小数 0~1
  file // 原始文件
}
```

### 示例

- 基本用法

  ```html
  <cube-upload
    action="//jsonplaceholder.typicode.com/photos/"
    :simultaneous-uploads="1"
    @files-added="filesAdded" />
  ```
  ```js
  export default {
    methods: {
      filesAdded(files) {
        const maxSize = 1 * 1024 * 1024 // 1M
        for (let k in files) {
          const file = files[k]
          if (file.size > maxSize) {
            file.ignore = true
          }
        }
      }
    }
  }
  ```

  配置 `action` 表示上传的 URL 地址，而 `simultaneous-uploads` 则表示支持的并发上传个数。

  通过 `files-added` 事件可以实现文件过滤，设置 `file.ignore = true` 即可。

- 压缩图片且通过 Base64 上传

  ```html
  <cube-upload
    ref="upload2"
    :action="action2"
    :simultaneous-uploads="1"
    :parse-file="parseFile"
    @file-submitted="fileSubmitted" />
  ```
  ```js
  import compress from '../modules/image'
  export default {
    data() {
      return {
        action2: {
          target: '//jsonplaceholder.typicode.com/photos/',
          prop: 'base64Value'
        }
      }
    },
    methods: {
      parseFile(file, next) {
        compress(file, {
          compress: {
            width: 1600,
            height: 1600,
            quality: 0.5
          }
        }, next)
      },
      fileSubmitted(parsedFile) {
        parsedFile.base64Value = parsedFile.file.base64
      }
    }
  }
  ```

  `action` 中除了有 `target` 目标上传地址外；还有 `prop` 配置，表示上传的时候采用处理后的 `file` 普通对象的哪个属性所对应的值上传，这里设置的就是 `base64Value` 的值。

  `parse-file` 则是一个函数，主要用于处理原生文件的，调用 `next` 回调的话，参数是处理完的文件对象，这里示例的就是调用 `compress` 做压缩，处理完后会回调 `next`。

  `file-submitted` 事件则是每个文件处理完后添加到 `upload` 实例的 `files` 数组中后触发，参数就是一个处理后的 `parsedFile` 文件对象，原始的文件则从其 `file` 属性获得。

### Props 配置

| 参数 | 说明 | 类型 | 默认值 | 示例 |
| - | - | - | - | - |
| action | 上传行为配置项，最少包含上传目标的 URL 地址 | String/Object | '' | { target: '/upload' } |
| max | 最大上传文件个数 | Number | 10 | - |
| auto | 是否自动上传，即选择完文件后自动开始上传 | Boolean | true | - |
| simultaneousUploads | 并发上传数 | Number | 1 | - |
| parseFile | 处理原始文件函数 | Function | function (file, next) { next(file) } | - |

* `action` 子配置项

如果 `action` 是字符串，则会被处理成 `{ target: action }` 这样结构。

| 参数 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| target | 上传目标 URL | String | - |
| fileName | 上传文件时文件的参数名 | String | 'file' |
| prop | 上传的时候使用文件对象的 prop 属性所对应的值 | String | 'file' |
| headers | 自定义请求头 | Object | {} |
| data | 上传需要附加数据 | Object | {} |
| withCredentials | 标准的 CORS 请求是不会带上 cookie 的，如果想要带的话需要设置 withCredentials 为 true | Boolean | false |
| timeout | 请求超时时间 | Number | 0 | |
| progressInterval | 进度回调间隔（单位：ms） | Number | 100 |

* `parseFile` 子配置项

一个函数，这个函数有两个参数：`(file, next)`，`file` 就是原始文件，`next` 为处理完毕后的回调函数，调用的时候需要传入处理后的文件。

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| files-added | 选择完文件后触发，一般可用作文件过滤 | 原始文件列表 |
| file-submitted | 每个文件处理完后添加到 `upload` 实例的 `files` 数组中后触发 | 文件对象 |
| file-removed | 文件被删除后触发 | 文件对象 |
| file-success | 文件上传成功后触发 | 文件对象 |
| file-error | 文件上传失败后触发 | 文件对象 |
| file-click | 文件点击后触发 | 文件对象 |

### 实例方法

| 方法名 | 说明 | 参数 |
| - | - | - |
| start | 开始上传 | - |
| pause | 暂停上传 | - |
| retry | 重试上传 | - |
| removeFile | 删除文件 | 文件对象 |
