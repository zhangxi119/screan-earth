/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-02-26 15:52:38
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-28 21:50:36
 */

function returnData (data) {
  let xData = []
  let sData01 = []
  let sData02 = []
  if (data.length > 0) {
    data.forEach(item => {
      xData.push(item.zy02002)
      sData01.push(item.zy02003)
      sData02.push(item.zy02004)
    })
  }
  // console.log('sData02==============', sData02)
  let options = {
    tooltip: {
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
                str += `${i.seriesName} :${i.value} 户<br>`
                break

              case 3:
                str += `${i.seriesName} :${i.value} %<br>`
                break
              default:
                str += ''
            }
          }
        }
        return str
      },
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
              offset: 0.1,
              color: 'rgba(255,208,168,0)' // 0% 处的颜色
            },
            {
              offset: 0.31,
              color: 'rgba(255,208,168,1)' // 0% 处的颜色
            },
            {
              offset: 0.8,
              color: 'rgba(255,208,168,1)' // 100% 处的颜色
            }
            ],
            global: false // 缺省为 false
          }
        }
      }
    },
    grid: {
      left: 62 * window.$rem,
      right: 52 * window.$rem,
      bottom: '25%'
    },
    legend: {
      data: ['数量', '增长率'],
      right: 100 * window.$rem,
      top: 'top',
      itemWidth: 11 * window.$rem,
      itemHeight: 11 * window.$rem,
      textStyle: {
        color: '#ffffff',
        fontSize: 16 * window.$rem
      }
    },
    xAxis: [
      {
        type: 'category',
        offset: 10 * window.$rem,
        data: xData,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#00ffee'
          }
        },
        axisLabel: {
          // interval: 0,
          margin: 20 * window.$rem,
          align: 'center',
          rotate: 20,
          fontSize: 17 * window.$rem,
          show: true,
          color: '#FFFFFF'
        }
      }
    ],
    yAxis: [
      {
        name: '(户)',
        type: 'value',
        offset: 0,
        // min: 0,
        // max: 20000,
        interval: 20000,
        splitLine: {
          show: false
        },
        nameTextStyle: {
          fontSize: 14 * window.$rem,
          color: '#fff',
          align: 'right'
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
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisTick: {
          show: false
        }
      },
      {
        name: '(%)',
        type: 'value',
        // min: 0,
        // max: 20,
        interval: 0.15,
        splitLine: {
          show: false
        },
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'left'
        },
        axisLabel: {
          formatter: '{value} ',
          color: '#FFFFFF',
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
        }
      }
    ],
    series: [
      {
        name: '数量',
        type: 'pictorialBar',
        // barGap: '20%',
        symbolSize: [21 * window.$rem, 5 * window.$rem],
        symbolOffset: [-10 * window.$rem, -16 * window.$rem],
        symbolPosition: 'end',
        z: 10 * window.$rem,
        itemStyle: {
          normal: {
            color: 'rgba(27,255,231,1)'
          }
        },
        emphasis: {
          itemStyle: {
            color: 'rgba(255,145,59,1)'
          }
        },
        data: sData01
      },
      {
        name: '数量',
        type: 'pictorialBar',
        // barGap: '20%',
        symbolSize: [20 * window.$rem, 5 * window.$rem],
        symbolOffset: [-10 * window.$rem, -12 * window.$rem],
        z: 2 * window.$rem,
        itemStyle: {
          normal: {
            color: 'rgba(27,255,231,1)',
            opacity: 0.6
          }
        },
        tooltip: {
          // show: false
        },
        emphasis: {
          itemStyle: {
            color: 'rgba(255,145,59,1)',
            opacity: 0.6
          }
        },
        data: sData01
      },
      {
        name: '数量',
        type: 'pictorialBar',
        symbol: 'rect',
        symbolOffset: [0 * window.$rem, -15 * window.$rem],
        // barGap: '20%',
        tooltip: {
          // show: false
        },
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
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: '#06FEED'
              }, {
                offset: 0.5, color: 'rgba(2,216,199,.2)'
              }, {
                offset: 1, color: '#06FEED'
              }]
            }
          }
        },
        silent: true,
        barWidth: 20 * window.$rem,
        data: sData01
      },
      {
        name: '增长率',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        showSymbol: false,
        animation: true,
        // lineWidth: 0.5,
        hoverAnimation: true,
        yAxisIndex: 1,
        data: sData02,
        z: 12 * window.$rem,
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            colorStops: [
              {
                offset: 0.01,
                color: 'rgba(255,145,59,0)' // 0% 处的颜色
              },
              {
                offset: 0.1,
                color: 'rgba(255,145,59,0.4)' // 100% 处的颜色
              },
              {
                offset: 0.5,
                color: 'rgba(255,145,59,1)' // 100% 处的颜色
              },
              {
                offset: 0.6,
                color: 'rgba(255,145,59,1)' // 100% 处的颜色
              },
              {
                offset: 0.8,
                color: 'rgba(255,145,59,1)' // 100% 处的颜色
              },
              {
                offset: 0.99,
                color: 'rgba(255,145,59,0)' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          shadowColor: 'rgba(255,145,59,1)',
          shadowBlur: 20,
          shadowOffsetY: 1,
          width: 3 * window.$rem
        },
        itemStyle: {
          normal: {
            color: 'rgba(255,145,59,1)',
            shadowBlur: 10,
            shadowColor: 'rgba(255,145,59,1)'
          }
        }
      }
    ]
  }
  return options
}
export default returnData
