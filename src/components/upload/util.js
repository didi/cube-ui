const URL = window.URL || window.webkitURL || window.mozURL

export { URL }

export function parseFiles(files, eachCb, cb) {
  const fileItems = []
  const len = files.length
  let parsedLen = 0
  for (let i = 0; i < len; i++) {
    parseFile(files[i], i, function (item, index) {
      parsedLen++
      fileItems[index] = item
      eachCb(item, index)
      if (parsedLen === len) {
        return cb(fileItems)
      }
    })
  }
}

export function parseFile(file, i, cb) {
  const item = newFile(file.name, file.size, 'ready', 0, file)
  if (item.url) {
    return cb(item, i)
  }
  const reader = new window.FileReader()
  reader.onload = function (e) {
    const base64 = e.target.result
    item.base64 = base64
    cb(item, i)
  }
  reader.onerror = function (e) {
    item.parseError = e
    cb(item, i)
  }
  reader.readAsDataURL(file)
}

export function newFile(name = '', size = 0, status = '', progress = 0, file = null) {
  let url = ''
  if (file && URL) {
    url = URL.createObjectURL(file)
  }
  return {
    name,
    size,
    url,
    status,
    progress,
    file
  }
}
