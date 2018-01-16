// fake File
function File(content, name, options) {
  var blob = new window.Blob(content)
  blob.name = name
  if (options) {
    for (let k in options) {
      blob[k] = options[k]
    }
  }
  return blob
}
window.File = File
