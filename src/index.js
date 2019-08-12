require('./styles/xui.scss')
require('./styles/index.scss')
var arr = ''
$(function() {
  var $sidebar = $('#sidebar')
  var $iframe = $("iframe")
  var $loading = $("#loading")
  arr = $('#sidebar li')
  var thisPage = localStorage.getItem('thisPage') || ''
  var page = thisPage || 'guide'
  getPage(page)

  $sidebar.on('click', 'li', function() {
    thisPage = $(this).data('id')
    if (page == thisPage) return
    localStorage.setItem('thisPage', thisPage)
    page = thisPage
    getPage(page)
  })

  $iframe.on('load', function() {
    $loading.hide()
  })

  function getPage(page) {
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr.eq(i).data('id') == page) {
        arr.eq(i).addClass('active').siblings().removeClass('active')
        break
      }
    }
    $loading.show()
    $iframe.attr({ src: `./views/${page}.html`})
  }
})


