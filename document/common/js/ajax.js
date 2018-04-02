export default function ajax (url) {
  return new Promise(function (resolve, reject) {
    const xhr = new window.XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.send(null)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText)
        } else {
          reject(xhr)
        }
      }
    }
  })
}
