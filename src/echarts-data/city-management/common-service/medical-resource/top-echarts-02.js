/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-02-27 15:49:51
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-25 15:38:49
 */
import echarts from 'echarts'
function createOptions (data, type) {
  let legend = []
  // 处理x轴日期加横线
  let xData = []
  let sData = []
  if (type !== '2') {
    data.xdata.forEach(item => {
      let arr = item.split('')
      let str = ''
      arr.forEach((ite, i) => {
        if (i === 3) {
          if (arr.indexOf('-') > 0) {
            str += ite
          } else {
            str += ite + '-'
          }
        } else {
          str += ite
        }
      })
      xData.push(str)
    })
    data.xdata = xData
    data.data.forEach(d => {
      legend.push(d.name)
    })
  } else {
    legend = []
    let temp = []
    data.data.forEach(item => {
      temp.push(item.data)
    })
    sData.push({
      name: '紧急呼叫数量',
      type: 'bar',
      barWidth: 18 * window.$rem,
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 1, color: '#4BE3FF'}, {offset: 0, color: '#307FF3'}]),
      data: temp
    })
  }
  return {
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 1, color: '#6473F6'}, {offset: 0, color: '#6824EE'}]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 1, color: '#4BE3FF'}, {offset: 0, color: '#307FF3'}]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 1, color: '#F9E659'}, {offset: 0, color: '#FB943A'}]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 1, color: '#9CF780'}, {offset: 0, color: '#5FC372'}])
    ],
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        let html = '<div style="padding: 0.11rem;line-height: 0.26rem; background:rgba(14,53,121,0.74);border-radius:2px;box-sizing: border-box; border: none;">' +
          '  <p style="font-size:0.17rem;">' + params[0].axisValue + '</p>'
        params.forEach((item, index) => {
          html += '<p style="font-size:0.14rem; margin-top: 0.05rem;">' + item.seriesName + '：' + item.value + '</p>'
        })
        html += '</div>'
        return html
      }
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      top: 0,
      itemHeight: 15 * window.$rem,
      itemWidth: 15 * window.$rem,
      borderRadius: 2,
      itemGap: 30 * window.$rem,
      icon: 'roundRect',
      textStyle: {
        padding: [0, 0, 0, 8 * window.$rem],
        color: '#FFFFFF',
        fontSize: 17 * window.$rem
      },
      data: legend
    },
    grid: {
      top: '15%',
      left: 35 * window.$rem,
      right: '4%',
      bottom: '8%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      offset: 10,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#8CF0FC'
        }
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        interval: 0,
        color: '#FFFFFF',
        fontSize: 13 * window.$rem
      },
      axisTick: {
        show: false
      },
      data: data.xdata
    },
    yAxis: {
      type: 'value',
      name: '(人次)',
      nameTextStyle: {
        color: '#fff',
        padding: [0, 0, 8 * window.$rem, -30 * window.$rem],
        fontSize: 14 * window.$rem,
        align: 'right'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#8CF0FC'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#FFFFFF',
        fontSize: 13 * window.$rem
      },
      splitLine: {
        show: false
      }
    },
    series: type ? sData : data.data
  }
}

export default createOptions
