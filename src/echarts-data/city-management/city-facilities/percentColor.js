/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-11 16:33:15
 * @LastEditors: wuqiuchi
 * @LastEditTime: 2020-03-17 09:51:03
 */
let $ = window.jQuery
var context = {
  init: function (data) {
    var that = this
    that.responsibleBodyInit(data)
  },
  /**
     * 事件处理配置情况
     */
  responsibleBodyInit: function (data) {
    var array = data
    var list = new ListContainer()
    $(array).each(function (i, e) {
      list.add(new ListItem(e, i))
    })
    list.drawView()
  }
}

/* 事件处理配置，渲染JS开始 */
function ListContainer () {
  this.content = []
  this.view = {}
  this.view.main = $('#responsibleBody')
}

ListContainer.prototype = {
  add: function (item) {
    this.content.push(item)
  },
  drawView: function () {
    var that = this
    this.view.main.empty()
    $(that.content).each(function (i, e) {
      that.view.main.append(e.getView())
    })
  }
}

// 列表每一行
function ListItem (data, i) {
  var that = this
  that.title = data.name
  that.percent = data.value
  /* 前端是15个，100%就是15个，大概7%站一个格子，相差7%不到，没有差异效果 */

  var boxNum = parseInt(that.percent / 1)
  if (that.percent >= 100) {
    boxNum = 15
  }
  /* rba颜色第一个值，为了满足渐变 */
  var colorMin = 113
  var colorMax = 79

  var colorMin2 = 228
  var colorMax2 = 144

  var colorMin3 = 248
  var colorMax3 = 234

  // 每个格子加的颜色值
  var colorRba = parseInt((colorMax - colorMin) / boxNum)
  var colorRba2 = parseInt((colorMax2 - colorMin3) / boxNum)
  var colorRba3 = parseInt((colorMax3 - colorMin3) / boxNum)

  this.view = {}
  this.view.main = $('<div class="body-item-box"></div>')
  /*  rgba(172,60,87,1) rgba(255,236,100,1) */
  this.view.main.append(this.view.title = $('  <div class="body-item-title"></div>'))
  this.view.main.append(this.view.bottom = $(' <div class="body-item-bottom"></div>'))
  this.view.bottom.append(this.view.lineBox = $(' <div class="body-item-bottom-line"></div>'))
  // 处理颜色渐变,循环15次，保证15个盒子
  for (var j = 1; j <= 23; j++) {
    this.view.lineBox.append(this.view.line = $('<div class="body-item-line-box"></div>'))
    // 判断处理颜色的盒子
    if (j <= boxNum) {
      $(this.view.line).css('background-color', 'rgba(' + colorMin + ',' + colorMin2 + ',' + colorMin3 + ',1)')
      colorMin = colorMin + colorRba
      colorMin2 = colorMin2 + colorRba2
      colorMin3 = colorMin3 + colorRba3
    }
  }

  this.view.bottom.append(this.view.percent = $(' <div class="body-item-percent">1.6<span> 万</span></div>'))

  // 点击事件
}

ListItem.prototype = {
  getView: function () {
    this.updateView()
    return this.view.main
  },
  updateView: function () {
    this.view.title.text(this.title)
    // this.view.percent.text(this.percent + '%')
    this.view.percent.html('')
    this.view.percent.append(this.percent + `<span> 件</span>`)
  }
}
/* 事件处理配置，渲染JS结束 */

export default context
