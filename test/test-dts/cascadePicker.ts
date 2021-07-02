import { CascadePicker } from '../../types/cube-ui'
import Vue from 'vue'

const root = new Vue()

const cascadeData = [
  {
    value1: 'Fruit1',
    text1: 'Fruit1',
    children: [
      {
        value1: 'Apple',
        text1: 'Apple',
        children: [{ value1: 1, text1: 'One' }, { value1: 2, text1: 'Two' }]
      },
      {
        value1: 'Orange',
        text1: 'Orange',
        children: [{ value1: 3, text1: 'Three' }, { value1: 4, text1: 'Four' }]
      }
    ]
  },
  {
    value1: 'Drink',
    text1: 'Drink',
    children: [
      {
        value1: 'Coffee',
        text1: 'Coffee',
        children: [{ value1: 1, text1: 'One' }, { value1: 2, text1: 'Two' }]
      },
      {
        value1: 'Tea',
        text1: 'Tea',
        children: [{ value1: 1, text1: 'One' }, { value1: 3, text1: 'Three' }]
      }
    ]
  }
]
function selectHandle(selectedVal: [], selectedIndex: [], selectedText: []) {
  root.$createDialog({
    type: 'warn',
    content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
    icon: 'cubeic-alert'
  }).show()
}
function cancelHandle() {
  root.$createToast({
    type: 'correct',
    txt: 'Picker canceled',
    time: 1000
  }).show()
}
let cascadePicker: CascadePicker
function showCascadePicker() {
  if (cascadePicker) {
    cascadePicker.show()
    return
  }
  cascadePicker = root.$createCascadePicker({
    title: 'Cascade Picker',
    data: cascadeData,
    selectedIndex: [0, 1, 0],
    alias: {
      value: 'value1',
      text: 'text1'
    },
    onSelect: selectHandle,
    onCancel: cancelHandle,
    onChange: (index: number, selectedIndex: number) => {
      console.log('change', index, selectedIndex)
    }
  }).show()
}

function setPickerData() {
  console.log('准备设置数据')
  if (!cascadePicker) return
  cascadePicker.setData(cascadeData, [0, 0, 0])
  console.log('数据设置完成')
}


function showPropsCascadePicker () {
  root.$createCascadePicker({
    $props: {
      title: 'Cascade Picker',
      data: cascadeData,
      selectedIndex: [0, 1, 0],
      alias: {
        value: 'value1',
        text: 'text1'
      }
    },
    $events: {
      select: selectHandle,
      cancel: cancelHandle
    }
  }).show()
}