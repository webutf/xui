require('./index.scss')
import xui from "../../styles/xui.js"
var $confirm = $('#confirm')
$('button:eq(0)').on('click', function() {
  xui.confirm('这个是测试confirm', '提示', {
    callback(n) {
      xui.toast(n == 1 ? '点击了确定': '点击了取消')
    }
  })
})
$('button:eq(1)').on('click', function() {
  xui.confirm('这个是测试confirm', '提示', {
    cancelButtonText: '未完成',
    confirmButtonText: '已完成',
    cancelButtonClass: 'btn-warning',
    confirmButtonClass: 'btn-success',
    callback(n) {
      xui.toast(n == 1 ? '点击了确定': '点击了取消')
    }
  })
})