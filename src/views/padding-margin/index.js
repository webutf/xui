require('./index.scss')
var basicTable = [
  { 
    key: 'pt-5, pr-5, pb-5, pl-5, pt-10, pr-10, pb-10, pl-10', 
    value: '上右下左内边距 5px, 10px' 
  },
  { 
    key: 'pt-15, pr-15, pb-15, pl-15, pt-20, pr-20, pb-20, pl-20', 
    value: '上右下左内边距 15px, 20px' 
  },
  { 
    key: 'padding-5, padding-10, padding-15, padding-20', 
    value: '内边距' 
  },
  { 
    key: 'mt-5, mr-5, mb-5, ml-5, mt-10, mr-10, mb-10, ml-10', 
    value: '上右下左外边距 5px, 10px' 
  },
  { 
    key: 'mt-15, mr-15, mb-15, ml-15, mt-20, mr-20, mb-20, ml-20', 
    value: '上右下左外边距 15px, 20px' 
  },
  { 
    key: 'margin-5, margin-10, margin-15, margin-20, margin0-auto', 
    value: '外边距, margin: 0 auto' 
  },
  { 
    key: 'col-no-padding, col-no-margin', 
    value: '左右无边距' 
  }
]
var str = ''
basicTable.forEach(val => {
  str += `<tr><td>${val.key}</td><td>${val.value}</td></tr>`
})
$('.table').find('tbody').html(str)
