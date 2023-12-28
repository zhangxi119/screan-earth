/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-03 14:05:27
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-03-17 14:36:21
 */

let $ = window.jQuery
var CONSTANTS = {
  /* 模拟数据 */
  'result': {
    'responsibleBodyInfo': {
      'result': [
        {
          'name': '幼儿园',
          'value': 190
        },
        {
          'name': '小学',
          'value': 50
        },
        {
          'name': '初中',
          'value': 100
        }
      ]
    }
  }
}
var noOne = 1 // 最大数（默认为第一个）
var barNum = 13 // 默认渲染的格子数

var context = {

  init: function (data) {
    console.log(data)
    var that = this
    if (data) {
      CONSTANTS.result.responsibleBodyInfo.result = data
    }
    // 排序（大到小）
    CONSTANTS.result.responsibleBodyInfo.result.sort((a, b) => { return b.value - a.value })
    that.responsibleBodyInit(CONSTANTS.result.responsibleBodyInfo)
  },
  /**
     * 责任主体配置情况
     */
  responsibleBodyInit: function (data) {
    var array = data.result
    var list = new ListContainer()
    $(array).each(function (i, e) {
      list.add(new ListItem(e, i))
    })
    list.drawView()
  }

}

/* 责任主体配置，渲染JS开始 */
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
  /* 前端是N个，100%就是N个 */
  var boxNum = barNum
  if (i === 0) {
    noOne = data.value
  }
  boxNum = Math.floor(data.value / noOne * boxNum)
  /* rba颜色第一个值，为了满足渐变 */
  var colorMin = 113
  var colorMax = 79

  var colorMin2 = 228
  var colorMax2 = 144

  var colorMin3 = 248
  var colorMax3 = 234

  // 每个格子加的颜色值
  var colorRba = parseInt((colorMax - colorMin) / boxNum)
  var colorRba2 = parseInt((colorMax2 - colorMin2) / boxNum)
  var colorRba3 = parseInt((colorMax3 - colorMin3) / boxNum)

  /*

     <div class="body-item-box">
        <div class="body-item-title">社区干部</div>
        <div class="body-item-bottom">
            <div class="body-item-bottom-line">
                <div class="temp body-item-line-box"></div>
                <div class="temp body-item-line-box"></div>
                <div class="temp body-item-line-box"></div>
                <div class="body-item-line-box"></div>
                <div class="body-item-line-box"></div>
                <div class="body-item-line-box"></div>
                <div class="body-item-line-box"></div>
                <div class="body-item-line-box"></div>
                <div class="body-item-line-box"></div>
                <div class="body-item-line-box"></div>
                <div class="body-item-line-box"></div>
                <div class="body-item-line-box"></div>
                <div class="body-item-line-box"></div>
                <div class="body-item-line-box"></div>
                <div class="body-item-line-box"></div>
            </div>
            <div class="body-item-percent">18%</div>
        </div>
     </div>
     */

  this.view = {}
  this.view.main = $('<div class="body-item-box"></div>')
  /*  rgba(172,60,87,1) rgba(255,236,100,1) */
  this.view.main.append(this.view.title = $('  <div class="body-item-title"></div>'))
  this.view.main.append(this.view.bottom = $(' <div class="body-item-bottom"></div>'))
  this.view.bottom.append(this.view.lineBox = $(' <div class="body-item-bottom-line"></div>'))
  // 处理颜色渐变,循环N次，保证N个盒子
  for (var j = 1; j <= barNum; j++) {
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
    this.view.percent.append(this.percent + `<span> 万</span>`)
  }
}
/* 责任主体配置，渲染JS结束 */

export default context
