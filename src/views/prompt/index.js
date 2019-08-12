require('./index.scss')
import xui from "../../styles/xui.js"
var value = 50
$('.btn-primary').on('click', function() {
  xui.prompt('请输入内容', '提示', {
    maxLength: 6,
    inputValue: value,
    inputClass: 'positiveNumber',
    placeholder: '请输入大于10的数字',
    valid(val) {
      if (val <= 10) {
        xui.toast('请输入大于10的数字')
        return false
      }
    },
    callback(n) {
      if (n == -1) return
      value = n
      $('.btn-default').text(n)
    }
  })
})
