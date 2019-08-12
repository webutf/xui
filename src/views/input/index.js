require('./index.scss')

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
