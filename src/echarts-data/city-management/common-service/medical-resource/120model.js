/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-04-13 15:32:32
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 16:49:50
 */
var colors = [
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#6199e3'
    }, {
      offset: 0.5,
      color: '#86c6fc'
    }, {
      offset: 0.6,
      color: '#66b2e1'
    }, {
      offset: 1,
      color: '#5d83c3'
    }]
  }
]

var barWidth = 20 * window.$rem
function retrunData (data) {
  let xData = []
  let sData01 = []
  data.forEach(item => {
    xData.push(item.type)
    sData01.push(item.count)
  })
  let options = {
    tooltip: {
      show: true,
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }

    },
    grid: {
      top: '15%',
      bottom: '20%',
      left: '18%',
      right: '10%'
    },

    xAxis: [
      {
        type: 'category',
        offset: 20 * window.$rem,
        data: xData,
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        axisLabel: {
          interval: 0,
          margin: 5 * window.$rem,
          align: 'center',
          rotate: 20,
          fontSize: 15 * window.$rem,
          show: true,
          color: '#FFFFFF'
        }
      }
    ],
    yAxis: [
      {
        name: '(个)',
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          padding: [0, 0, 8 * window.$rem, -25 * window.$rem]
        },
        type: 'value',
        offset: 0,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: 'rgba(255,255,255,0.5)'
          }
        },
        axisLabel: {
          formatter: '{value}',
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
        },
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '呼叫数量',
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        itemStyle: {
          normal: {
            color: colors[0]
          }
        },
        data: sData01
      },
      {
        name: '呼叫数量',
        type: 'pictorialBar',
        symbol: 'diamond',
        symbolOffset: ['0', '-50%'],
        symbolSize: [barWidth - 2, 10 * (barWidth - 2) / barWidth],
        symbolPosition: 'end',
        z: 3,
        emphasis: {
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: '#FF923D'
              }, {
                offset: 0.5, color: 'rgba(255,144,64,.2)'
              }, {
                offset: 1, color: '#FF923D'
              }]
            }
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#6f92c3',
            borderWidth: 1,
            color: '#66b2e1'
          }
        },
        silent: true,
        barWidth: 20 * window.$rem,
        data: sData01
      }
    ]
  }
  return options
}
export default retrunData
