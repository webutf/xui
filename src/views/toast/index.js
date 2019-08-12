require('./index.scss')

var toastIcon = ['success', 'warning', 'error']
var toastMsg = ['成功', '警告', '错误']
$('.btn').on('click', function() {
  var index = $(this).index() - 2
  toast(toastMsg[index], toastIcon[index])
})

function toast(msg, type = 'success') {
  var obj = {
    success: 'x-select iconfont',
    warning: 'x-warning iconfont',
    error: 'x-error iconfont'
  }
  var box = $('<div class="xui-toast '+ type +'\"><i class=\"'+ obj[type] +'\"></i>' + msg + '</div>').appendTo(document.body)
  box.animate({ top: 100, opacity: 1 }, 300)
  setTimeout(function() {
    box.fadeOut(400, function() {
      box.remove()
    })
  }, 2000)
}
