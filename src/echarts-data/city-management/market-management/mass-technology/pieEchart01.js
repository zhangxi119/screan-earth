/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-02-27 17:06:20
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-20 14:28:40
 */
import echarts from 'echarts'
function returnData (data) {
  let xData = []
  let nowYearNum = 0
  let nowYearName = ''
  let lastYearName = ''
  let lastYearNum = 0
  data.forEach((item, index) => {
    xData.push(item.zl03001)
    if (index === 0) {
      nowYearNum = item.zl03002
      nowYearName = item.zl03001
    } else {
      lastYearName = item.zl03001
      lastYearNum = item.zl03002
    }
  })
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    title: [
      {
        text: nowYearNum,
        x: 'center',
        y: '30%',
        textStyle: {
          color: 'rgba(250,252,255,1)',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
          textShadowBlur: 10,
          fontSize: 34 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: nowYearName + '年',
        x: 'center',
        y: '43%',
        textStyle: {
          color: 'rgba(223,226,251,1)',
          fontSize: 20 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      }
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      x: 'center',
      y: '71%',
      textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: 17 * window.$rem,
        padding: [0, 0, 0, 6 * window.$rem],
        rich: {
          a: {
            color: 'rgba(255,255,255,1)',
            fontSize: 17 * window.$rem,
            lineHeight: 34 * window.$rem
          },
          b: {
            fontSize: 17 * window.$rem,
            color: 'rgba(255,255,255,1)',
            lineHeight: 34 * window.$rem
          }
        }
      },
      icon: 'rect',
      itemGap: 20 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      // orient: 'vertical',
      formatter: function (name) {
        let value = 0
        data.forEach(item => {
          if (name === item.zl03001) {
            value = item.zl03002
          }
        })
        return `{a|${name} } {b| ${value}件}`
      }
    },
    calculable: true,
    series: [
      {
        name: '工业产品许可情况',
        type: 'pie',
        radius: [65 * window.$rem, 80 * window.$rem],
        center: ['50%', '38%'],
        label: {
          show: false
        },
        data: [
          {
            value: lastYearNum,
            name: lastYearName,
            itemStyle: {
              color: '#2568e3'
            }
          },
          {
            value: nowYearNum,
            name: nowYearName,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#6be473'
              }, {
                offset: 1,
                color: '#6be473'
              }])
            }
          }
        ]
      },
      {
        name: '工业产品许可情况',
        type: 'pie',
        radius: [65 * window.$rem, 90 * window.$rem],
        center: ['50%', '38%'],
        label: {
          show: false
        },
        data: [
          {
            value: lastYearNum,
            name: lastYearName,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#2568e3'
              }, {
                offset: 1,
                color: '#2568e3'
              }])
            }
          },
          {
            value: nowYearNum,
            name: nowYearName,
            itemStyle: {
              color: 'transparent'
            }
          }
        ]
      }
    ]
  }
  return option
}
export default returnData
