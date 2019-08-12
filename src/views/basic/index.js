require('./index.scss')

var basicTable = [
  { key: 'fl, fr, clearfix, bold, normal', value: '左浮动, 右浮动, 清除浮动, 字体变粗, 字体正常' },
  {
    key: 'hide, inline-block, inline, block, show',
    value: '分别对应display: none, inline-block, inline, block'
  },
  { key: 'visisble, invisible', value: '分别对应visibility: visible, hidden' },
  { key: 'relative, absolute, fixed', value: '分别对应position: relative, absolute, fixed' },
  { key: 'opacity0, opacity-50, opacity-1', value: '分别对应opacity: 0, 0.5, 1' },
  { key: 'height-auto, height-34, no-border', value: 'height高度, border:none' },
]
var str = ''
basicTable.forEach(val => {
  str += `<tr><td>${val.key}</td><td>${val.value}</td></tr>`
})
$('.table').find('tbody').html(str)
