let commonUtils = {
  // 数组转树形
  translateDataToTree: function (data) {
    if (data) {
      let parents = data.filter(value => value.pid === 'undefined' || value.pid === null || value.pid === '0')
      let children = data.filter(value => value.pid !== 'undefined' && value.pid != null && value.pid !== '0')
      let translator = (parents, children) => {
        parents.forEach((parent) => {
          children.forEach((current, index) => {
            if (current.pid === parent.id) {
              let temp = JSON.parse(JSON.stringify(children))
              temp.splice(index, 1)
              translator([current], temp)
              typeof parent.children !== 'undefined' ? parent.children.push(current) : parent.children = [current]
            }
          })
        })
      }
      translator(parents, children)
      return parents
    } else {
      return '参数不能为空'
    }
  },
  isEmpty: function (value) {
    if (value === null || value === undefined || value === '' || value.trim() === '') {
      return false
    }
    return true
  },
  // 时间格式化
  timeFormat: function (date) {
    if (!date || typeof (date) === 'string') {
      this.error('参数异常，请检查...')
    }
    let y = date.getFullYear() // 年
    let m = date.getMonth() + 1 // 月
    let d = date.getDate() // 日
    if (m < 10) {
      m = '0' + m
    }
    if (d < 10) {
      d = '0' + d
    }
    return y + '-' + m + '-' + d
  },
  // 由大到小
  compare (obj1, obj2) {
    let val1 = obj1.total
    let val2 = obj2.total
    if (val1 < val2) {
      return 1
    } else if (val1 > val2) {
      return -1
    } else {
      return 0
    }
  }
}

export { commonUtils }
