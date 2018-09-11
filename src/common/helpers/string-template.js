import { isFunc } from './util'
const stringRE = /\{(\w+)[()]*\}/g

function format (string, replaceData = {}, lang = 'zh-CN') {
  const argsLen = arguments.length
  const DEFINE_KEY = 'config'

  if (argsLen === 1) return string

  replaceData = replaceData || {}

  return string.replace(stringRE, (match, group1, index) => {
    match = isFunc(replaceData[group1]) ? replaceData[group1](replaceData[DEFINE_KEY], lang) : replaceData[group1]
    return match
  })
}

export default format
