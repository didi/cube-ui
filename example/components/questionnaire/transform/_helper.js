import { provinceList, cityList, areaList } from 'example/data/area'

const fieldRulesMap = {}
export function setRules(field, model, rules) {
  let globalRules = fieldRulesMap[model]
  if (!globalRules) {
    globalRules = fieldRulesMap[model] = {}
  }
  if (!field.rules) {
    field.rules = globalRules
  }
  Object.assign(field.rules, rules)
}

export function setMessages(field, messages) {
  if (!field.messages) {
    field.messages = {}
  }
  Object.assign(field.messages, messages)
}

const addressData = provinceList
addressData.forEach(province => {
  province.children = cityList[province.value]
  province.children.forEach(city => {
    city.children = areaList[city.value]
  })
})

export function loadCityData() {
  // fake request
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(addressData)
    }, 500)
  })
}
