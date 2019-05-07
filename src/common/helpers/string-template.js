import { isFunc } from './util'
import { warn } from './debug'
import Locale from '../../modules/locale'
const stringRE = /\{\{((?:.|\n)+?)\}\}/g
const quoteRe = /['"]/g
const INVALID_INDEX = -1

function format (string, config = '') {
  return string.replace(stringRE, (match, group1, index) => {
    const helpersArr = group1.split('|').slice(1).map(_ => _.trim())
    const hasHelpers = helpersArr.length
    let result = config

    if (hasHelpers) {
      helpersArr.forEach((helperString) => {
        let { fnName, args } = resolveHelperFnString(helperString)
        args.unshift(result)
        /* istanbul ignore else */
        if (isFunc(Locale.helpers[fnName])) {
          result = Locale.helpers[fnName].apply(null, args)
        } else {
          warn(`A helper function named "${fnName}" is not registered, ` +
               `please register it by Validator.addHelper()`)
          result = ''
        }
      })
    }

    return result
  })
}

function resolveHelperFnString (helperString) {
  const leftBracketsIndex = helperString.indexOf('(')
  const rightBracketsIndex = helperString.indexOf(')')
  let fnName = ''
  let args = []
  /* istanbul ignore if */
  if (leftBracketsIndex === INVALID_INDEX) {
    args = []
    fnName = helperString
  } else if (leftBracketsIndex !== INVALID_INDEX && rightBracketsIndex !== INVALID_INDEX) {
    const argsStr = helperString.slice(leftBracketsIndex + 1, rightBracketsIndex)
    args = argsStr.split(',').map(_ => _.trim().replace(quoteRe, ''))
    fnName = helperString.slice(0, leftBracketsIndex)
  }
  return { fnName, args }
}

export default format
