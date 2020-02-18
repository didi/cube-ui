import { formatDate } from '../../../../src/common/lang/date'
import { loadCityData } from './_helper'

const resetCases = {
  switch: {
    hollowStyle: true
  },
  radio: {
    hollowStyle: true
  },
  checkbox: {
    hollowStyle: true
  }
}
const optionsCases = {
  switch(options) {
    // 是 否
    return {
      colNum: 2,
      options: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ]
    }
  },
  select(options, loadData) {
    const placeholder = options.placeholder || '请选择'
    const propOptions = {
      component: options.component || 'picker',
      options: options.props || {
        title: placeholder,
        data: [options.options.map((option) => {
          return {
            text: option,
            value: option
          }
        })]
      }
    }
    return {
      placeholder,
      icon: options.icon || 'cubeic-select',
      loadData,
      options: propOptions,
      formatValue: options.formatValue || function (vals, _, texts) {
        return {
          value: vals[0],
          text: texts[0]
        }
      }
    }
  },
  date(options) {
    const props = {
      value: new Date(),
      title: '选择日期'
    }
    if (options.min) {
      props.min = parseStringDate(options.min)
    } else {
      props.min = [2010, 1, 1]
    }
    if (options.max) {
      props.max = parseStringDate(options.max)
    } else {
      props.max = [2100, 12, 31]
    }
    return optionsCases.select({
      placeholder: options.placeholder,
      icon: 'cubeic-calendar',
      component: 'date-picker',
      props,
      formatValue(date) {
        return formatDate(date, options.format || 'YYYY-MM-DD')
      }
    })
  },
  time(options) {
    const props = {
      value: new Date(),
      title: '选择时间',
      startColumn: 'hour',
      columnCount: 2
    }
    if (options.min) {
      props.min = parseStringDate(options.min, ':')
    } else {
      props.min = [0, 0]
    }
    if (options.max) {
      props.max = parseStringDate(options.max, ':')
    } else {
      props.max = [23, 59]
    }
    return optionsCases.select({
      placeholder: options.placeholder,
      icon: 'cubeic-time',
      component: 'date-picker',
      props,
      formatValue(date) {
        return formatDate(date, options.format || 'hh:mm')
      }
    })
  },
  radio(options) {
    return options
  },
  checkbox(options) {
    return options
  },
  tel(options) {
    return {
      type: 'tel',
      ...options
    }
  },
  city(options) {
    const props = {}
    const cityPromise = loadCityData()
    const loadData = () => {
      return cityPromise.then(cityList => {
        props.data = cityList
        return cityList
      })
    }
    return optionsCases.select({
      placeholder: options.placeholder,
      icon: 'cubeic-location',
      component: 'cascade-picker',
      props,
      formatValue(selectedVal, _, selectedText) {
        return {
          text: selectedText.join(''),
          value: selectedVal
        }
      }
    }, loadData)
  },
  upload(options) {
    if (!options.max) {
      options.max = 1
    }
    return {
      ...options
    }
  }
}

export default function transformOptions(config, field) {
  if (!field.props) {
    field.props = {}
  }
  Object.assign(field.props, resetCases[config.type] || {})
  if (config.row) {
    field.props.colNum = 2
  }
  let options = config.options || {}
  if (Array.isArray(options)) {
    options = {
      options: options
    }
  }
  options = Object.assign({}, options)
  const caseFn = optionsCases[config.type]
  Object.assign(field.props, (caseFn && caseFn(options)) || options)
}

function parseStringDate(val, split = '-') {
  return val.split(split).map(n => +n)
}
