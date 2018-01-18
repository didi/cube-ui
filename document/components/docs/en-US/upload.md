## Upload

`Upload` component.

**Notice:** all the original File will be called **original file** and the wrapped file object will be called **file object** in this document. The **file object** will be like:

```js
{
  name, // file name
  size, // file size
  url, // file url, created by URL.createObjectURL, for preview
  base64, // file base64 value, the value is equaled to the original file's base64 value. It is `''` by default, but you can have some plugins to added this `base64` value, like the compress plugin below.
  status, // file status, one of: ready, uploading, success, error
  progress, // file progress, number 0~1
  file // the original file
}
```

### Example

- Basic usage

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

  Set `action` to change the upload target URL for the multipart POST request.

  Set `simultaneous-uploads` to change the number of simultaneous uploads.

  The `files-added` event is used for file validation, just set `file.ignore = true` to filter file.

- Compress and uploaded through Base64

  ```html
  <cube-upload
    ref="upload2"
    :action="action2"
    :simultaneous-uploads="1"
    :parse-file="parseFile"
    @file-submitted="fileSubmitted"></cube-upload>
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

  The `action` is an object which contains `target` and `prop`(the target property `prop` value in file object will be uploaded).

  The `parse-file` is a function which is used to handle the original file, like compress, `next` must be called with the handled file.

  The `file-submitted` event will be trigged after the file is parsed and added to the `upload.files`. This event will be passed the file object as parameter.

### Props configuration

| Attribute | Description | Type | Accepted Values | Demo |
| - | - | - | - | - |
| action | upload action config | String/Object | '' | { target: '/upload' } |
| max | max upload files number | Number | 10 | - |
| auto | whether auto start upload | Boolean | true | - |
| simultaneousUploads | the number of simultaneous uploads | Number | 1 | - |
| parseFile | handle the original file | Function | function (file, next) { next(file) } | - |

* `action` sub configuration

If `action` is a string, then it will be parsed to `{ target: action }`.

| Attribute | Description | Type | Default |
| - | - | - | - |
| target | the upload target URL for the multipart POST request | String | - |
| fileName | the name of the multipart POST parameter | String | 'file' |
| prop | the target property `prop` value in file object will be uploaded | String | 'file' |
| headers | extra headers to include in the multipart POST | Object | {} |
| data | extra data to include in the multipart POST | Object | {} |
| withCredentials | Standard CORS requests do not send or set any cookies by default. In order to include cookies as part of the request, you need to set the withCredentials property to true | Boolean | false |
| timeout | upload request timeout value | Number | 0 |
| progressInterval | The time interval in milliseconds between progress reports | Number | 100 |

* `parseFile` sub configuration

A function, this function have two parameters: `(file, next)`, the `file` is the original file and the `next` callback must be called with the handled file.

### Events

| Event Name | Description | Parameters |
| - | - | - |
| files-added | triggers when files are added, used for file validation normally | original files |
| file-submitted | triggers when one file is added to the `upload.files` | the file object |
| file-removed | triggers when one file is removed | the file object |
| file-success | triggers when one file is uploaded successfully | the file object |
| file-error | triggers when one file is uploaded unsuccessfully | the file object |
| file-click | triggers when one file clicked | the file object |

### Instance methods

| Method name | Description | Parameter |
| - | - | - |
| start | start upload | - |
| pause | pause upload | - |
| retry | retry upload | - |
| removeFile | remove file | the file object |
