import {
  STATUS_SUCCESS,
  STATUS_UPLOADING,
  STATUS_ERROR
} from './util'

export default function ajaxUpload(file, options, changeHandler) {
  const {
    target,
    headers = {},
    data = {},
    fileName = 'file',
    withCredentials,
    timeout,
    prop = 'file',
    progressInterval = 100,
    checkSuccess = function () { return true }
  } = options

  file.progress = 0
  file.status = STATUS_UPLOADING

  const xhr = new window.XMLHttpRequest()
  file._xhr = xhr
  let progressTid = 0
  if (xhr.upload) {
    let lastProgressTime = Date.now()
    xhr.upload.onprogress = function (e) {
      if (e.total > 0) {
        if (progressTid) {
          clearTimeout(progressTid)
          const now = Date.now()
          const diff = now - lastProgressTime
          if (diff >= progressInterval) {
            computed()
          } else {
            progressTid = setTimeout(computed, diff)
          }
        } else {
          // first time
          computed()
          progressTid = 1
        }
      }
      function computed() {
        file.progress = e.loaded / e.total
        lastProgressTime = Date.now()
      }
    }
  }

  const formData = new window.FormData()
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key])
  })
  formData.append(fileName, file[prop])

  xhr.onload = function () {
    if (xhr.status < 200 || xhr.status >= 300) {
      setStatus(STATUS_ERROR)
      return
    }
    let response = xhr.responseText || xhr.response
    try {
      response = JSON.parse(response)
    } catch (e) {}
    file.response = response
    file.responseHeaders = xhr.getAllResponseHeaders()

    const isSuccess = checkSuccess(response)
    setStatus(isSuccess ? STATUS_SUCCESS : STATUS_ERROR)
  }
  xhr.onerror = function () {
    setStatus(STATUS_ERROR)
  }
  xhr.ontimeout = function () {
    setStatus(STATUS_ERROR)
  }

  xhr.open('POST', target, true)
  if (withCredentials) {
    xhr.withCredentials = true
  }
  Object.keys(headers).forEach((key) => {
    xhr.setRequestHeader(key, headers[key])
  })
  if (timeout > 0) {
    xhr.timeout = timeout
  }

  xhr.send(formData)
  function setStatus(status) {
    clearTimeout(progressTid)
    progressTid = 0
    file.progress = 1
    file.status = status
    changeHandler && changeHandler(file)
  }
}
