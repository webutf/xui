var xui = (function(window, document, undefined) {
  $(document).on('input', '.positiveNumber', function() {
    var value = $(this).val().replace(/\D/ig, '').trim()
    $(this).val(value)
  })

  $(document).on('input', '.number', function() {
    var value = $(this).val().replace(/[^0123456789-]/ig, '').trim()
    var index = value.indexOf('-')
    if (index > -1) {
      value = index == 0 ? '-' + value.replace(/\D/ig, '') : value.replace(/\D/ig, '')
    }
    $(this).val(value)
  })

  $(document).on('input', '.numberDot', function() {
    var value = $(this).val().replace(/[^-0123456789.]/ig, '').trim()
    if (value.indexOf('.') != value.lastIndexOf('.')) {
      value = value.substring(0, value.lastIndexOf('.'))
    }
    var index = value.indexOf('-')
    var reg = /[^0123456789.]/ig
    if (index > -1) {
      value = index == 0 ? '-' + value.replace(reg, '') : value.replace(reg, '')
    }
    $(this).val(value)
  })

  function toast(msg, type) {
    type = type || 'success'
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

  function message(msg = '', title ='提示', obj = {}) {
    var str = `<div class="message">
      <div class="alert box">
      <header class="clearfix">
        <p class="fl font-size18">${title}</p>
        <i class="iconfont pointer fr x-guanbi"></i>
      </header>`

    if (obj.messageType == 'prompt') {
      str += `<div class="content">
          <p class="mb-20">${msg}</p>
          <input type="text" class="width100 ${obj.inputClass || ''}" autofocus
            maxlength="${obj.maxLength || 10000}" value="${obj.inputValue || ''}"
            placeholder="${obj.placeholder || ''}" />
        </div>
        <div class="text-right">`
    } else {
      str += `<div class="content">${msg}</div>
        <div class="text-right">`
    }

    if (obj.showCancelButton) {
      str += `<button class="btn btn1 ${obj.cancelButtonClass || 'btn-default'} iconfont mr-10">
            ${obj.cancelButtonText || '取消'}
          </button>`
    }
    str += `<button class="btn btn2 ${obj.confirmButtonClass || 'btn-primary'}">
              ${obj.confirmButtonText || '确定'}
            </button>
          </div>
        </div>
      </div>`

    var box = $(str).appendTo(document.body)
    box.animate({ opacity: 1 }, 250).find('.box').animate({ top: '50%'}, 250)
    box.find('.iconfont').on('click', function(){
      hide()
    })

    box.find('.btn1').on('click', function() {
      obj.callback && obj.callback(-1)
      hide()
    })

    box.find('.btn2').on('click', function() {
      if (obj.messageType == 'prompt') {
        var value = box.find('input').val()
        var lock = true
        if (obj.valid) {
          lock = obj.valid(value) === false ? false : true
        }
        if (lock) {
          hide()
          obj.callback && obj.callback(value)
        }
      } else {
        obj.callback && obj.callback(1)
        hide()
      }
    })

    if (obj.closeOnClickModal) {
      box.on('click', function() {
        hide()
      })
      box.find('.box').on('click', function(e) {
        e.stopPropagation()
      })
    }

    function hide() {
      box.animate({ opacity: 0 }, 250, function() {
        box.remove()
      }).find('.box').animate({ top: '44%'}, 250)
    }
  }

  function alert(msg, title, obj = {}) {
    message(msg, title, obj)
  }

  function confirm(msg, title, obj = {}) {
    obj.closeOnClickModal = obj.closeOnClickModal !== false
    obj.showCancelButton = obj.showCancelButton !== false
    message(msg, title, obj)
  }

  function prompt(msg, title, obj = {}) {
    obj.messageType = 'prompt'
    obj.closeOnClickModal = obj.closeOnClickModal !== false
    obj.showCancelButton = obj.showCancelButton !== false
    message(msg, title, obj)
  }

  $(document).find('.nav-tabs').on('click', '.nav-pane', function() {
    var index = $(this).index()
    $(this).addClass('active').siblings().removeClass('active')
    var parent = $(this).parent().parent()
    parent.children('.tab-content').children('.tab-pane').eq(index).show().siblings().hide()
  })

  $(document).find('.dropdown span, .dropdown .btn').on('click', function(e) {
    e.stopPropagation()
    $(this).next().slideToggle(100)
  })
  $(document).off('click').on('click', function() {
    $('.dropdown ul').slideUp(100)
  })

  var tooltip = ''
  $(document).find('.tooltip').hover(function(e) {
    var el = $(this)
    var title = el.data('title') || ''
    if (!title) return
    if (tooltip) {
      tooltip.text(title).fadeIn(300)
    } else {
      tooltip = $('<div class="tooltip-box">'+ title +'</div>').appendTo('body').fadeIn(300)
    }
    el.mousemove(function(e) {
      tooltip.css({ top: e.pageY + 8, left: e.pageX + 15 })
    })
  }, function() {
    tooltip && tooltip.hide()
  })

  function multiSelect(obj = {}) {
    var el = obj.el
    if (!el) return
    if (!el.parent().hasClass('multi-select-box')) {
      el.wrap('<div class="multi-select-box"></div>')
    }
    if (el.parent().find('ul').length == 0) {
      el.after('<ul class="multi-select-ul"></ul>')
    }

    var key = el.data('key') ? el.data('key').split(',') : obj.arr || []
    var value = el.data('value') ? el.data('value').split(',') : []
    var arr = obj.data || []
    var initArr = obj.arr || []
    var str = ''

    arr.forEach(val => {
      if (initArr.indexOf(val.key) > -1) {
        value.push(val.value)
        str += `<li data-key="${val.key}" data-value="${val.value}">${val.value}
          <i class="iconfont active x-select"></i></li>`
      } else {
        str += `<li data-key="${val.key}" data-value="${val.value}">${val.value}
          <i class="iconfont x-select"></i></li>`
      }
    })
    el.next().html(str)
    el.attr('data-key', key.join(','))
    el.attr('data-value', value.join(','))
    el.text(value.join(','))

    el.off('click').on('click', function(e) {
      e.stopPropagation()
      el.next().toggle()
    })

    el.next().off('click').on('click', 'li', function(e) {
      e.stopPropagation()
      var index = key.indexOf($(this).data('key'))
      if (index > - 1) {
        key.splice(index, 1)
        value.splice(index, 1)
        $(this).find('i').removeClass('active')
      } else {
        var lock = true
        if (obj.valid) {
          lock = obj.valid(key) !== false
        }
        if (!lock) return
        key.push($(this).data('key'))
        value.push($(this).data('value'))
        $(this).find('i').addClass('active')
      }
      el.attr('data-key', key.join(','))
      el.attr('data-value', value.join(','))
      el.text(value.join(','))
      obj.callback && obj.callback(key, value)
    })

    $(document).on('click', function() {
      el.next().hide()
    })
  }

  function dialog(el = '', visible = false) {
    if (!el) return
    var backdrop = el.data('backdrop') !== 'static'
    if (visible) {
      el.css({'paddingTop': 0, 'opacity': 0}).hide()
      el.show().animate({'paddingTop': 80, 'opacity': 1}, 200)
      el.scrollTop(0)
    } else {
      hide()
    }
    if (backdrop) {
      el.find('.modal-dialog').off('click').on('click', function(e) {
        e.stopPropagation()
      })
      el.off('click').on('click', hide)
    }
    el.find('.close').off('click').on('click', hide)

    function hide() {
      el.animate({'paddingTop': 0, 'opacity': 0}, 150).fadeOut(150)
    }
  }

  return {
    toast,
    pagination,
    alert,
    confirm,
    prompt,
    multiSelect,
    dialog
  }
})(window, document)

window.xui = xui
export default xui
