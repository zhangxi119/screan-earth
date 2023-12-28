/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-03 10:15:04
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 19:18:17
 */
import echarts from 'echarts'
var base = +new Date(1968, 9, 3)
var oneDay = 24 * 3600 * 1000
var date = []

var data = [Math.random() * 300]

for (var i = 1; i < 1000; i++) {
  var now = new Date(base += oneDay)
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'))
  data.push(Math.abs(Math.round((Math.random() - 0.5) * 20 + data[i - 1])))
}
function setOptions (color, param, type) { // type: 1:全市天然气供应量 2: 全市用电量 3: 全市用水量
  let xData = []
  let sData = []
  let name = ''
  let cell = 'm^3'
  let dataIndex = 0
  let spancolors = ['#55f0c7', '#f8ea36', '#008af5']
  if (!color.length) {
    color = ['#00D865', '#0090DC']
  }
  param.forEach(item => {
    xData.push(item.hg10001)
    switch (type) {
      case 1:
        sData.push(item.hg10004)
        name = '全市天然气供应量'
        cell = '(亿立方米)'
        dataIndex = 0
        break
      case 2:
        sData.push(item.hg10003)
        name = '全市用电量'
        cell = '(亿千瓦时)'
        dataIndex = 1
        break
      case 3:
        sData.push(item.hg10002)
        name = '全市用水量'
        cell = '(亿立方米)'
        dataIndex = 2
        break
    }
  })
  return {
    tooltip: {
      trigger: 'axis',
      position: 'left',
      formatter: function (parmas) {
        return `<div class="tool-tip">
        <p>${parmas[0].name}年</p>
        <p><span style="background:${spancolors[dataIndex]}"></span><span>${name}:</span><span>${parmas[0].value}    ${cell}</span></p>
        </div>`
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    grid: {
      top: '10%',
      left: '1%',
      right: '5%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisPointer: {
        type: 'shadow'
      },
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      },
      axisLabel: {
        color: '#FFFFFF',
        margin: 10 * window.$rem,
        fontSize: 15 * window.$rem

      },
      axisTick: {
        show: false
      },
      data: xData
    },
    yAxis: {
      type: 'value',
      name: cell,
      nameTextStyle: {
        color: '#fff',
        align: 'center',
        fontSize: 14 * window.$rem,
        padding: [0, 0, 0, 20 * window.$rem]
      },
      nameGap: 10 * window.$rem,
      splitLine: {
        show: false
      },
      axisLabel: {
        formatter: '{value}',
        color: '#FFFFFF',
        margin: 10 * window.$rem,
        fontSize: 15 * window.$rem
      },
      axisPointer: {
        type: 'shadow'
      },
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      },
      axisTick: {
        show: false
      },
      boundaryGap: [0, '100%']
    },

    series: [
      {
        name: '',
        type: 'line',
        symbol: 'circle',
        itemStyle: {
          color: color[0]
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: color[0]
          }, {
            offset: 1,
            color: color[1]
          }])
        },
        smooth: true,
        lineStyle: {
          width: 2 * window.$rem
        },
        data: sData
      }
    ]
  }
}

export default setOptions
