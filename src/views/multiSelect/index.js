require('./index.scss')
import "../../styles/xui.js"
xui.multiSelect({
  el: $('button'),
  arr: [1,3],
  data: [
    { key: 1, value: '黄金糕'},
    { key: 2, value: '狮子头'},
    { key: 3, value: '大闸蟹'},
    { key: 4, value: '双皮奶'},
    { key: 5, value: '啤酒鸭'},
    { key: 6, value: '啤鸭'},
    { key: 7, value: '大龙虾'}
  ],
  valid(arr) {
    if (arr.length >= 3) {
      xui.toast('最多选择3个', 'warning')
      return false
    }
  },
  callback(key, value) {
    console.log(key, value)
  }
})