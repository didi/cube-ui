export const URL = window.URL || window.webkitURL || window.mozURL

export const STATUS_READY = 'ready'
export const STATUS_UPLOADING = 'uploading'
export const STATUS_ERROR = 'error'
export const STATUS_SUCCESS = 'success'

export function parseFiles(files, eachParseFile, eachCb, cb) {
  const fileItems = []
  const len = files.length
  let parsedLen = 0
  for (let i = 0; i < len; i++) {
    parseFile(files[i], i, eachParseFile, function (item, index) {
      parsedLen++
      fileItems[index] = item
      eachCb(item, index)
      if (parsedLen === len) {
        return cb(fileItems)
      }
    })
  }
}

export function parseFile(file, i, eachParseFile, cb) {
  eachParseFile(file, function (file) {
    const item = newFile(file.name, file.size, STATUS_READY, 0, file)
    cb(item, i)
  })
}

export function newFile(name = '', size = 0, status = '', progress = 0, file = null) {
  const base64 = file && file.base64 || ''
  const url = base64 ? '' : createURL(file)

  return {
    name,
    size,
    url,
    base64,
    status,
    progress,
    file
  }
}

function createURL(file) {
  if (file && URL) {
    return URL.createObjectURL(file)
  }
  return ''
}
