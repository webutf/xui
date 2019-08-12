require('./index.scss')
pagination({
  el: $('.pagination1'),
  total: 20,
  pageIndex: 2
})

pagination({
  el: $('.pagination2'),
  total: 26,
  pageIndex: 19,
  jump: false,
  prev: '<',
  next: '>',
  callback(n) {
    $('p').text('当前第' + n + '页')
  },
  setPage(n) {

  }
})

function pagination(obj = {}) {
  var el = obj.el
  var total = obj.total || 0
  var pageIndex = obj.pageIndex || 1
  var jump = obj.jump == false ? false : true
  var prev = obj.prev || '上一页'
  var next = obj.next || '下一页'
  render()
  setupEvents()
  obj.setPage && obj.setPage()
  function render() {
    if (pageIndex < 1) pageIndex = 1
    if (pageIndex > total) pageIndex = total
    var str = pageIndex == 1 ? '<button class="prev" disabled>' + prev + '</button>' : '<button class="prev">' + prev + '</button>'
    if (total <= 7) {
      for (var i = 1; i <= total; i++) {
        if (i == pageIndex) {
          str += '<button class="active">' + i + '</button>'
        } else {
          str += '<button>' + i + '</button>'
        }
      }
    } else if (pageIndex > 4 && pageIndex < total - 3) {
      str += '<button>1</button><button>...</button>'
      for (var i = pageIndex - 2; i <= pageIndex + 2; i++) {
        if (i == pageIndex) {
          str += '<button class="active">' + i + '</button>'
        } else {
          str += '<button>' + i + '</button>'
        }
      }
      str += '<button>...</button><button>' + total + '</button>'
    } else if (pageIndex <= 4) {
      for (var i = 1; i <= 6; i++) {
        if (i == pageIndex) {
          str += '<button class="active">' + i + '</button>'
        } else {
          str += '<button>' + i + '</button>'
        }
      }
      str += '<button>...</button><button>' + total + '</button>'
    } else if (pageIndex >= total - 3) {
      str += '<button>1</button><button>...</button>'
      for (var i = total - 5; i <= total; i++) {
        if (i == pageIndex) {
          str += '<button class="active">' + i + '</button>'
        } else {
          str += '<button>' + i + '</button>'
        }
      }
    }

    str += pageIndex == total ? '<button class="next" disabled>' + next + '</button>' : '<button class="next">' + next + '</button>'
    if (jump && total > 7) {
      str += '前往 <input type="text"/> 页'
    }
    el.html(str)
    obj.callback && obj.callback(pageIndex)
    if (jump && total > 7) {
      el.on('keydown', 'input', function(e) {
        if (e.keyCode == 13) {
          var str = $(this).val().trim() - 0
          if (str > total) return $(this).val('')
          pageIndex = str
          render()
        }
      })

      el.on('input', 'input', function(e) {
        $(this).val($(this).val().replace(/[\D]/g, ''))
      })
    }
  }

  function setupEvents() {
    el.on('click', 'button', function() {
      if (!$(this).hasClass('prev') && !$(this).hasClass('next')) {
        if (pageIndex == $(this).text() || $(this).text() == '...') return
        pageIndex = ($(this).text() || 1) - 0
        render()
      } else if ($(this).hasClass('prev')) {
        pageIndex--
        render()
      } else if ($(this).hasClass('next')) {
        pageIndex++
        render()
      }
    })
  }
}
