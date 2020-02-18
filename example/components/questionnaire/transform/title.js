const appendTitleMap = {
  radio: '（单选）',
  checkbox: '（多选）'
}
export default function transformTitle(config, field) {
  const appendTitle = appendTitleMap[config.type] || ''
  field.label = config.title ? config.title + appendTitle : ''
}
