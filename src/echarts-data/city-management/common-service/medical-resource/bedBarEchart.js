/*
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-16 10:26:38
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-25 12:13:22
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
      offset: 1,
      color: '#5d83c3'
    }]
  }
]

var barWidth = 20 * window.$rem
function retrunData (data) {
  let xData = []
  let sData01 = []
  let sData02 = []
  data.forEach(item => {
    xData.push(item.district)
    sData01.push(item.districtBedList[0].tbedNum)
    sData02.push(item.districtBedList[0].bedNum)
  })
  let options = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255,255,255,0)',
      formatter: function (parmas) {
        return '<div class="tool-tip" style="line-height: 0.26rem; font-size: 0.16rem; background:rgba(0,18,55,0.4); border:2px solid rgba(72,170,244,1); border-radius:2px; padding: 0.12rem 0.15rem; box-sizing: border-box;">' +
          '<p><span>床位数：</span><span>' + parmas[0].data + '张</span></p>' +
          '<p><span>每千人床位数：</span><span>' + parmas[2].data + '张</span></p>' +
          '</div>'
      },
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
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
      top: '15%',
      left: 62 * window.$rem,
      right: 52 * window.$rem,
      bottom: 60 * window.$rem
    },
    legend: {
      data: ['床位数', '每千人床位数'],
      top: '5%',
      icon: 'rect',
      itemWidth: 13 * window.$rem,
      itemHeight: 13 * window.$rem,
      itemGap: 25 * window.$rem,
      textStyle: {
        color: '#ffffff',
        padding: [0, 0, 0, 10 * window.$rem],
        fontSize: 13 * window.$rem
      }
    },
    xAxis: [
      {
        type: 'category',
        offset: 10,
        data: xData,
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#00ffee'
          }
        },
        axisLabel: {
          interval: 0,
          margin: 25 * window.$rem,
          align: 'center',
          rotate: 35,
          fontSize: 17 * window.$rem,
          show: true,
          color: '#FFFFFF'
        }
      }
    ],
    yAxis: [
      {
        name: '(张)',
        nameTextStyle: {
          color: '#fff',
          align: 'right',
          padding: [0, 0, 10 * window.$rem, -20 * window.$rem],
          fontSize: 14 * window.$rem
        },
        type: 'value',
        offset: 0,
        min: 0,
        // max: 20000,
        // interval: 5000,
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
        }
      },
      {
        name: '(张)',
        nameTextStyle: {
          color: '#fff',
          align: 'right',
          padding: [0, 0, 10 * window.$rem, -10 * window.$rem],
          fontSize: 14 * window.$rem
        },
        type: 'value',
        min: 0,
        splitLine: {
          show: false
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
        name: '床位数',
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        itemStyle: {
          normal: {
            color: colors[0]
          }
        },
        data: sData02
      },
      {
        name: '床位数',
        type: 'pictorialBar',
        symbol: 'diamond',
        symbolOffset: ['0', '-50%'],
        symbolSize: [barWidth - 2, 10 * (barWidth - 2) / barWidth],
        symbolPosition: 'end',
        z: 3,
        emphasis: {
          itemStyle: {
            color: '#5d83c3'
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
        barWidth: 20,
        data: sData02
      },
      {
        name: '每千人床位数',
        type: 'line',
        smooth: true,
        yAxisIndex: 1,
        showSymbol: false,
        animation: true,
        lineWidth: 0.5,
        hoverAnimation: true,
        data: sData01,
        color: '#F9E659',
        z: 12,
        lineStyle: {
          color: '#F9E659',
          shadowBlur: 20 * window.$rem,
          shadowOffsetY: 1,
          width: 4 * window.$rem
        },
        itemStyle: {
          // normal: {
          //   color: 'rgba(255,145,59,1)',
          //   shadowBlur: 10 * window.$rem,
          //   shadowColor: 'rgba(255,145,59,1)'
          // }
        }
      }
    ]
  }
  return options
}
export default retrunData
