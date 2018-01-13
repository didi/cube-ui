import { eventHub } from '../common/js/utils'
import menuConfig from '../common/config/menu'
const routeMap = {}

Object.keys(menuConfig).forEach((lang) => {
  const loadingNotify = (p) => {
    eventHub.$emit('begin-loading')
    return p.then((r) => {
      eventHub.$emit('finish-loading')
      return r
    })
  }
  const docsChildrenRoute = []
  const docsRoute = {
    path: 'docs',
    redirect: './docs/introduction',
    component: () => loadingNotify(import(`../components/docs/${lang}.vue`)),
    children: docsChildrenRoute
  }
  routeMap[lang] = [docsRoute]
  const groups = menuConfig[lang]
  Object.keys(groups).forEach((name) => {
    getSubList(groups[name]).forEach((key) => {
      docsChildrenRoute.push({
        path: key,
        component: () => loadingNotify(import(`../components/docs/${lang}/${key}.md`))
      })
    })
  })
})

export default routeMap

function getSubList (group) {
  let subList = []
  Object.keys(group.subList).forEach((key) => {
    const item = group.subList[key]
    if (typeof item === 'string') {
      subList.push(key)
    } else {
      subList = subList.concat(getSubList(item))
    }
  })
  return subList
}
