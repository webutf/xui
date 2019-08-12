require('./index.scss')
import "../../styles/xui.js"
$('.btn-primary:eq(0)').on('click', function() {
  xui.dialog($('.dialog:eq(0)'), true)
})
$('.btn-primary:eq(1)').on('click', function() {
  xui.dialog($('.dialog:eq(1)'), true)
})