/*
 * @Author: yangpk
 * @Date: 2020-03-03 18:03:55
 * @Last Modified by: yangpk
 * @Last Modified time: 2020-03-04 14:33:54
 */
function returnData (data) {
  var colors = [
    {
      type: 'linear',
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#5293f3'
      }, {
        offset: 0.5,
        color: '#88d6ff'
      }, {
        offset: 0.6,
        color: '#4289f1'
      }, {
        offset: 1,
        color: '#4289f1'
      }]
    }
  ]
  var barWidth = 18 * window.$rem
  let xData = []
  let seriesData = []
  data.forEach((item, index) => {
    xData.push(item.mc)
    seriesData.push(item.num)
  })
  let option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255,255,255,0)'
    },
    grid: {
      top: '25%',
      right: '5%',
      left: '17%',
      bottom: '40%'
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#c5dae7'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        rotate: 20,
        margin: 20 * window.$rem,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          fontSize: 16 * window.$rem,
          color: '#ffffff'
        }
      },
      data: xData
    },
    yAxis: [
      {
        axisLine: {
          lineStyle: {
            color: '#c5dae7'
          }
        },
        name: '(次)',
        nameGap: 15 * window.$rem,
        nameTextStyle: {
          color: 'rgba(255,255,255,0.6)',
          fontSize: 14 * window.$rem,
          align: 'right',
          padding: [0, 20 * window.$rem, 0, 0]
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          margin: 10 * window.$rem,
          textStyle: {
            fontFamily: 'Microsoft YaHei',
            fontSize: 16 * window.$rem,
            color: '#ffffff'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        data: seriesData,
        itemStyle: {
          normal: {
            color: colors[0]
          }
        }
      }, {
        z: 3,
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: seriesData,
        symbol: 'diamond',
        symbolOffset: ['0', '-50%'],
        symbolSize: [barWidth - 4, 10 * (barWidth - 4) / barWidth],
        itemStyle: {
          normal: {
            borderColor: '#6ab7ff',
            borderWidth: 2,
            color: '#6ab7ff'
          }
        }
      }
    ]
  }
  return option
}

export default returnData
