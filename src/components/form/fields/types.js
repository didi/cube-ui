import {
  boolRequiredHandler,
  numberGT0RequiredHandler
} from './validate'
import {
  toButtonHandler
} from './props'

const typesMap = {
  submit(field) {
    toButtonHandler(field, 'submit')
  },
  reset(field) {
    toButtonHandler(field, 'reset')
  },
  checkbox(field) {
    boolRequiredHandler(field)
  },
  switch(field) {
    boolRequiredHandler(field)
  },
  rate(field) {
    numberGT0RequiredHandler(field)
  }
}
export default function processTypes(field) {
  const typeFn = typesMap[field.type]
  if (typeFn) {
    typeFn(field)
  }
}
