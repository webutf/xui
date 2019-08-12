require('./index.scss')
import xui from "../../styles/xui.js"
$('.btn-primary').on('click', function() {
  xui.alert('这个是测试alert', '提示', {
    callback(n) {
      xui.toast(n == 1 ? '点击了确定': '点击了取消')
    }
  })
})
$('.btn-danger').on('click', function() {
  xui.alert('这个是测试alert', '提示', {
    showCancelButton: true,
    confirmButtonText: '删除',
    confirmButtonClass: 'btn-danger',
    callback(n) {
      xui.toast(n == 1 ? '点击了确定': '点击了取消')
    }
  })
})