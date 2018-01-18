
// fake XMLHttpRequest
function XMLHttpRequest() {
  this.method = ''
  this.url = ''
  this.async = false
  this.upload = {}
  this.data = null
}
XMLHttpRequest.prototype = {
  open(method, url, async) {
    this.method = method
    this.url = url
    this.async = async
    this.headers = {}
  },
  send(data) {
    this.data = data
    if (this.timeout) {
      this.timeoutId = setTimeout(() => {
        this.triggerTimeout()
      }, this.timeout)
    }
  },
  abort() {
    this.triggerError()
  },
  setRequestHeader(key, value) {
    this.headers[key] = value
  },
  getAllResponseHeaders() {
    return ''
  },
  triggerProgress(loaded = 0, total) {
    this.upload.onprogress && this.upload.onprogress.call(this, {
      loaded,
      total
    })
  },
  triggerSuccess(status = 200, msg = '{"state": "ok"}') {
    this.status = status
    this.responseText = msg
    this.onload && this.onload()
  },
  triggerTimeout() {
    this.ontimeout && this.ontimeout()
  },
  triggerError(status = 500) {
    this.onerror && this.onerror(status)
  }
}

window.XMLHttpRequest = XMLHttpRequest
