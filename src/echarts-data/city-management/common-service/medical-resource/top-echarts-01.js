/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-02-26 15:52:38
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-28 22:30:06
 */

function returnData (data) {
  let xData = []
  let sData01 = []
  // let sData02 = []
  let sData03 = []
  data.forEach(item => {
    xData.push(item.district)
    sData01.push(item.medicalsList[0].medicalNum)
    // sData02.push(item.medicalsList[0].medicalPeoNum)
    sData03.push(item.medicalsList[0].bedNum)
  })
  let options = {

    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255,255,255,0)',
      formatter: function (parmas) {
        return `<div class="tool-tip" style="background:rgba(0,18,55,0.7); font-size: 0.14rem; line-height: 0.27rem; border:2px solid rgba(72,170,244);border-radius: 2px;padding: 0.12rem 0.16rem;">
        <p><span>医疗机构：</span><span>${parmas[2].value} 家</span></p>
        <p><span>床位：</span><span>${parmas[3].value} 张</span></p>
        </div>`
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
      top: '15%',
      left: 80 * window.$rem,
      right: 85 * window.$rem,
      bottom: 110 * window.$rem
    },
    legend: {
      x: 'center',
      y: 'top',
      show: true,
      itemWidht: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      itemGap: 14 * window.$rem,
      textStyle: {
        color: '#ffffff',
        fontSize: 16 * window.$rem
      },
      data: [{
        name: '医疗机构'
      }, {
        name: '床位'
      }],
      formatter: name => {
        return name
      }
    },
    xAxis: [
      {
        type: 'category',
        offset: 20,
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
          interval: 0,
          margin: 25 * window.$rem,
          rotate: 35,
          fontSize: 17 * window.$rem,
          show: true,
          color: '#FFFFFF'
        }
      }
    ],
    yAxis: [
      {
        name: '(家)',
        show: true,
        nameTextStyle: {
          fontSize: 14 * window.$rem,
          padding: [0, 0, 8 * window.$rem, -35 * window.$rem],
          color: '#FFF',
          align: 'right'
        },
        offset: 20,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        splitLine: false,
        axisLabel: {
          color: '#FFF',
          margin: 10 * window.$rem,
          fontSize: 17 * window.$rem
        }
      },
      {
        name: '(张)',
        show: true,
        nameTextStyle: {
          fontSize: 14 * window.$rem,
          padding: [0, 0, 8 * window.$rem, 20 * window.$rem],
          color: '#fff',
          align: 'left'
        },
        offset: 15,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#00ffee'
          }
        },
        splitLine: false,
        axisLabel: {
          color: '#FFF',
          margin: 10 * window.$rem,
          fontSize: 17 * window.$rem
        }
      }
    ],
    series: [
      {
        name: '医疗机构',
        type: 'pictorialBar',
        symbolSize: [20 * window.$rem, 5 * window.$rem],
        symbolOffset: [0, -3 * window.$rem],
        yAxisIndex: 0,
        symbolPosition: 'end',
        z: 10,
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
        name: '医疗机构',
        yAxisIndex: 0,
        type: 'pictorialBar',
        symbolSize: [20 * window.$rem, 3 * window.$rem],
        symbolOffset: [0, 1 * window.$rem],
        z: 12,
        itemStyle: {
          normal: {
            color: 'rgba(27,255,231,1)',
            opacity: 0.6
          }
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
        name: '医疗机构',
        type: 'bar',
        yAxisIndex: 0,
        label: {
          show: true,
          position: 'top',
          distance: 10,
          color: '#FFFFFF',
          fontWeight: 'bolder',
          fontSize: 18 * window.$rem
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
      // {
      //   name: '医疗人员',
      //   type: 'line',
      //   smooth: true,
      //   symbol: 'circle',
      //   yAxisIndex: 1,
      //   showSymbol: false,
      //   animation: true,
      //   lineWidth: 0.5,
      //   hoverAnimation: true,
      //   data: sData02,
      //   z: 12,
      //   lineStyle: {
      //     color: {
      //       type: 'linear',
      //       x: 0,
      //       y: 0,
      //       colorStops: [
      //         {
      //           offset: 0.01,
      //           color: 'rgba(255,145,59,0)' // 0% 处的颜色
      //         },
      //         {
      //           offset: 0.1,
      //           color: 'rgba(255,145,59,0.4)' // 100% 处的颜色
      //         },
      //         {
      //           offset: 0.5,
      //           color: 'rgba(255,145,59,1)' // 100% 处的颜色
      //         },
      //         {
      //           offset: 0.6,
      //           color: 'rgba(255,145,59,1)' // 100% 处的颜色
      //         },
      //         {
      //           offset: 0.8,
      //           color: 'rgba(255,145,59,1)' // 100% 处的颜色
      //         },
      //         {
      //           offset: 0.99,
      //           color: 'rgba(255,145,59,0)' // 100% 处的颜色
      //         }
      //       ],
      //       global: false // 缺省为 false
      //     },
      //     shadowColor: 'rgba(255,145,59,1)',
      //     shadowBlur: 20 * window.$rem,
      //     shadowOffsetY: 1,
      //     width: 3 * window.$rem
      //   },
      //   itemStyle: {
      //     normal: {
      //       color: 'rgba(255,145,59,1)',
      //       shadowBlur: 10 * window.$rem,
      //       shadowColor: 'rgba(255,145,59,1)'
      //     }
      //   }
      // },
      {
        name: '床位',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        showSymbol: false,
        animation: true,
        lineWidth: 0.5,
        hoverAnimation: true,
        data: sData03,
        z: 12,
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            colorStops: [
              {
                offset: 0.01,
                color: 'rgba(44,165,255,0)' // 0% 处的颜色
              },
              {
                offset: 0.1,
                color: 'rgba(44,165,255,0.4)' // 100% 处的颜色
              },
              {
                offset: 0.5,
                color: 'rgba(44,165,255,1)' // 100% 处的颜色
              },
              {
                offset: 0.6,
                color: 'rgba(44,165,255,1)' // 100% 处的颜色
              },
              {
                offset: 0.9,
                color: 'rgba(44,165,255,1)' // 100% 处的颜色
              },
              {
                offset: 0.99,
                color: 'rgba(44,165,255,0)' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          shadowColor: 'rgba(255,145,59,1)',
          shadowBlur: 20 * window.$rem,
          shadowOffsetY: 1,
          width: 3 * window.$rem
        },
        itemStyle: {
          normal: {
            color: 'rgba(44,165,255,1)',
            shadowBlur: 10 * window.$rem,
            shadowColor: 'rgba(44,165,255,1)'
          }
        }
      }
    ]
  }
  return options
}
export default returnData
