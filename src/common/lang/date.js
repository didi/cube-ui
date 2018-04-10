const DAY_TIMESTAMP = 60 * 60 * 24 * 1000
const HOUR_TIMESTAMP = 60 * 60 * 1000
const MINUTE_TIMESTAMP = 60 * 1000

function formatType(type, format, value) {
  const regExpMap = {
    year: '(y+)',
    month: '(M+)',
    date: '(d+)',
    hour: '(h+)',
    minute: '(m+)',
    second: '(s+)',
    quarter: '(q+)',
    millisecond: '(S)'
  }

  if (new RegExp(regExpMap[type]).test(format)) {
    const replaceStr = type === 'year'
                       ? value.toString().substr(4 - RegExp.$1.length)
                       : (RegExp.$1.length === 1) ? value : pad(value)
    format = format.replace(RegExp.$1, replaceStr)
  }

  return format
}

function pad(value) {
  return ('00' + value).substr(('' + value).length)
}

function formatDate(date, format) {
  const map = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    quarter: Math.floor((date.getMonth() + 3) / 3),
    millisecond: date.getMilliseconds()
  }

  for (const key in map) {
    format = formatType(key, format, map[key])
  }

  return format
}

function getZeroDate(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return new Date(year + '/' + month + '/' + day + ' 00:00:00')
}

function getNow() {
  return window.performance && window.performance.now ? (window.performance.now() + window.performance.timing.navigationStart) : +new Date()
}

function computeNatureMaxDay(month, year) {
  let natureMaxDay = 30
  if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) > -1) {
    natureMaxDay = 31
  } else {
    if (month === 2) {
      natureMaxDay = !year || (!(year % 400) || (!(year % 4) && year % 100)) ? 29 : 28
    }
  }

  return natureMaxDay
}

export {
  DAY_TIMESTAMP,
  HOUR_TIMESTAMP,
  MINUTE_TIMESTAMP,
  pad,
  formatType,
  formatDate,
  getZeroDate,
  getNow,
  computeNatureMaxDay
}
