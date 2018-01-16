const URL = window.URL || window.webkitURL || window.mozURL

export { URL }

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
    const item = newFile(file.name, file.size, 'ready', 0, file)
    cb(item, i)
  })
}

export function newFile(name = '', size = 0, status = '', progress = 0, file = null) {
  let url = createURL(file)

  return {
    name,
    size,
    url,
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
