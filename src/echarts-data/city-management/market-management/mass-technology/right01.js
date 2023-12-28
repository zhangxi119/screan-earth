/*
 * @Author: zhangxi
 * @Date: 2020-03-03 18:03:55
 * @Last Modified by: zhangxi
 * @Last Modified time: 2020-03-09 15:35:02
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
      color: '#cd9d74'
    }, {
      offset: 0.5,
      color: '#ffe565'
    }, {
      offset: 0.6,
      color: '#e9b748'
    }, {
      offset: 1,
      color: '#d2b075'
    }]
  }
]

var barWidth = 18 * window.$rem

function returnData (data) {
  let xData = []
  let sData01 = []
  let sData02 = []
  data.forEach((item, index) => {
    xData.push(item.zl07002)
    sData01.push(item.zl07003)
    sData02.push(item.zl07004)
  })
  var option = {
    // title: [
    //   {
    //     text: '(件)',
    //     left: '5%',
    //     top: '18%',
    //     textStyle: {
    //       color: 'rgba(237,241,251,0.72)',
    //       fontSize: 14 * window.$rem
    //     }
    //   }
    // ],
    legend: {
      itemWidth: 12 * window.$rem,
      itemHeight: 12 * window.$rem,
      itemGap: 14 * window.$rem,
      textStyle: {
        color: '#ffffff',
        padding: [0, 0, 0, 6 * window.$rem],
        fontSize: 16 * window.$rem
      },
      top: '6%',
      data: ['强检件数', '合格率']
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: function (data) {
        let str = ''
        if (data.length > 0) {
          for (let i of data) {
            switch (i.seriesIndex) {
              case 0:
                str += `${i.seriesName} :${i.value} 件 <br>`
                break

              case 2:
                str += `${i.seriesName} :${i.value} %<br>`
                break
              default:
                str += ''
            }
          }
        }
        return str
      }
    },
    grid: {
      top: '23%',
      right: '15%',
      left: '18%',
      bottom: '18%'
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
          fontSize: 14 * window.$rem,
          color: '#ffffff'
        }
      },
      data: xData
    },
    yAxis: [
      {
        name: '(件)',
        axisLine: {
          lineStyle: {
            color: '#c5dae7'
          }
        },
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'right',
          padding: [0, 0, 8 * window.$rem, 0]
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          fontSize: 15 * window.$rem,
          margin: 10 * window.$rem,
          color: '#ffffff'
        },
        axisTick: {
          show: false
        }
      },
      {
        name: '（%）',
        min: 0,
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'left',
          padding: [0, 0, 8 * window.$rem, 0]
        },
        // max: 1.2,
        show: true,
        axisLine: {
          lineStyle: {
            color: '#c5dae7'
          }
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: true,
          fontSize: 15 * window.$rem,
          color: '#ffffff'
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '强检件数',
        z: 1,
        type: 'bar',
        yAxisIndex: 0,
        barWidth: barWidth,
        data: sData01,
        showSymbol: true,
        itemStyle: {
          normal: {
            color: colors[0]
          }
        }
      }, {
        z: 3,
        name: '强检件数',
        yAxisIndex: 0,
        showSymbol: true,
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: sData01,
        symbol: 'diamond',
        symbolOffset: ['0', '-50%'],
        symbolSize: [barWidth - 4, 10 * (barWidth - 4) / barWidth],
        itemStyle: {
          normal: {
            borderColor: '#b78b21',
            borderWidth: 2,
            color: '#da9e33'
          }
        }
      },
      {
        name: '合格率',
        type: 'line',
        yAxisIndex: 1,
        smooth: false,
        showSymbol: true,
        color: '#6BE573',
        symbol: 'circle',
        symbolSize: 6 * window.$rem,
        lineStyle: {
          color: '#84cf8d'
        },
        data: sData02
      }
    ]
  }
  return option
}
export default returnData
