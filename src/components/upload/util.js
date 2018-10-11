import { inBrowser } from '../../common/helpers/env'

export const URL = inBrowser ? window.URL || window.webkitURL || window.mozURL : null

export const STATUS_READY = 'ready'
export const STATUS_UPLOADING = 'uploading'
export const STATUS_ERROR = 'error'
export const STATUS_SUCCESS = 'success'

export function processFiles(files, eachProcessFile, eachCb, cb) {
  const fileItems = []
  const len = files.length
  let processedLen = 0
  for (let i = 0; i < len; i++) {
    processFile(files[i], i, eachProcessFile, function (item, index) {
      processedLen++
      fileItems[index] = item
      eachCb(item, index)
      if (processedLen === len) {
        return cb(fileItems)
      }
    })
  }
}

export function processFile(file, i, eachProcessFile, cb) {
  eachProcessFile(file, function (file) {
    const item = newFile(file.name, file.size, STATUS_READY, 0, file)
    cb(item, i)
  })
}

export function newFile(name = '', size = 0, status = '', progress = 0, file = null) {
  const base64 = (file && file.base64) || ''
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

export function evalOpts(data, ...args) {
  if (typeof data === 'function') {
    return data.apply(this, args)
  }
  return data
}
