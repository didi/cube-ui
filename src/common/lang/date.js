export const DAY_TIMESTAMP = 60 * 60 * 24 * 1000
export const HOUR_TIMESTAMP = 60 * 60 * 1000
export const MINUTE_TIMESTAMP = 60 * 1000

export function formatUnit(unit, format, value) {
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

  if (new RegExp(regExpMap[unit]).test(format)) {
    const replaceStr = unit === 'year'
                       ? value.toString().substr(4 - RegExp.$1.length)
                       : (RegExp.$1.length === 1) ? value : (('00' + value).substr(('' + value).length))
    format = format.replace(RegExp.$1, replaceStr)
  }

  return format
}

export function formatDate(date, format) {
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
    format = formatUnit(key, format, map[key])
  }

  return format
}

export function getZeroDate(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return new Date(year + '/' + month + '/' + day + ' 00:00:00')
}

export function getNow() {
  return window.performance && window.performance.now ? (window.performance.now() + window.performance.timing.navigationStart) : +new Date()
}

export function computeNatrueMaxDay(month, year) {
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
