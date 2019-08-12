require('./index.scss')

var arr = [
  'radioplain', 'radiofill', 'checkplain', 'select',
  'checkfill', 'guanbi', 'error', 'warning', 'caretdown'
]
var str = ''
arr.forEach(val => {
  str += `<li><i class="iconfont x-${val}"></i><p>${val}</p></li>`
})

$('ul').html(str)
