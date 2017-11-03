import menuConfig from '../common/config/menu'

const routeMap = {}

Object.keys(menuConfig).forEach((lang) => {
  const docsChildrenRoute = []
  const docsRoute = {
    path: 'docs',
    redirect: './docs/introduction',
    component: () => import(`../components/docs/${lang}.vue`),
    children: docsChildrenRoute
  }
  routeMap[lang] = [docsRoute]
  const groups = menuConfig[lang]
  Object.keys(groups).forEach((name) => {
    getSubList(groups[name]).forEach((key) => {
      docsChildrenRoute.push({
        path: key,
        component: () => import(`../components/docs/${lang}/${key}.md`)
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
