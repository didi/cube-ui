## Upload

> New in 1.3.0+

`Upload` component.

**Notice:** In this document, all the original File will be called **original file**, since the wrapped file object will be called **file object**. The structure of **file object** show as following:

| Attribute | Description | Type |
| - | - | - |
| name | file name | String |
| size | file size | Number |
| url | file url, created by URL.createObjectURL, for preview | String |
| base64 | file base64 value, the value is equaled to the original file's base64 value. It is `''` by default, but you can have some plugins to added this `base64` value, like the compress plugin below | String |
| status | file status, one of: ready, uploading, success, error | String |
| progress | file progress, number 0~1 | Number |
| file | the original file | File |
| response | response data(try to parse to JSON）| Object/Array/String |
| responseHeaders | all response headers | String |

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

  Set `action` to configure the upload target URL for the multipart POST request.

  Set `simultaneous-uploads` to configure the max number of files uploading simultaneously .

  The `files-added` event is used for file validation, and you can filter file by setting `file.ignore = true`.

- Compress and uploaded through Base64

  ```html
  <cube-upload
    ref="upload2"
    :action="action2"
    :simultaneous-uploads="1"
    :process-file="processFile"
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
  ```

  The `action` is an object which contains `target` and `prop`. the `prop` could configure which property  in file object will be uploaded).

  The `process-file` is a function which is used to process the original file, like compress, `next` must be called with the processed file.

  The `file-submitted` event will be trigged after the file is processed and added to the `upload.files` with a parameter -- the file object.

### Props configuration

| Attribute | Description | Type | Accepted Values | Demo |
| - | - | - | - | - |
| action | upload action config | String/Object | '' | { target: '/upload' } |
| max | max upload files number | Number | 10 | - |
| auto | whether auto start upload | Boolean | true | - |
| simultaneousUploads | the number of simultaneous uploads | Number | 1 | - |
| processFile | process the original file | Function | function (file, next) { next(file) } | - |

* `action` sub configuration

If `action` is a string, it will be transformed into `{ target: action }`.

| Attribute | Description | Type | Default |
| - | - | - | - |
| target | the upload target URL for the multipart POST request | String | - |
| fileName | the name of the multipart POST parameter | String | 'file' |
| prop | which property in file object will be uploaded | String | 'file' |
| headers | extra headers to include in the multipart POST | Object | {} |
| data | extra data to include in the multipart POST | Object | {} |
| withCredentials | Standard CORS requests would not send or set any cookies by default. In order to include cookies as part of the request, you need to set the withCredentials property to true | Boolean | false |
| timeout | upload request timeout value | Number | 0 |
| progressInterval | The time interval between progress reports (Unit: ms) | Number | 100 |

* `processFile` sub configuration

A function with two parameters: `(file, next)`, the `file` is the original file and the `next` callback must be called with the processed file.

### Events

| Event Name | Description | Parameters |
| - | - | - |
| files-added | triggers when files are added, usually used for file validation | original files |
| file-submitted | triggers when a file is added to the `upload.files` | the file object |
| file-removed | triggers when a file is removed | the file object |
| file-success | triggers when a file is uploaded successfully | the file object |
| file-error | triggers when a file is failed to upload | the file object |
| file-click | triggers when a file is clicked | the file object |

### Instance methods

| Method name | Description | Parameter |
| - | - | - |
| start | start uploading | - |
| pause | pause uploading | - |
| retry | retry uploading | - |
| removeFile | remove file | the file object |
