/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-16 11:48:34
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-30 09:49:33
 */

let barWidth = 29 * window.$rem
// let dataval = [
//   {value: 500},
//   {value: 800},
//   {value: 700},
//   {value: 1500},
//   {value: 1200},
//   {value: 100},
//   {value: 300},
//   {value: 800},
//   {value: 900},
//   {value: 1600}
// ]

function returnData (data) {
  let xData = []
  let sData01 = []
  let sData02 = []
  let emptyData = []
  data.yearDataList.forEach(item => {
    xData.push(item.yearMonth)
    sData01.push(item.peoNum)
    sData02.push(item.increaseRate)
    emptyData.push(1000)
  })
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        axis: 'x',
        lineStyle: {
          color: 'rgba(255,160,109,1)',
          width: 2,
          type: 'solid'
        }
      },
      show: true,
      formatter: function (params) {
        let str = `<div class="g-echarts-tip" style="padding:0.1rem 0.3rem 0.1rem 0.1rem;background: rgba(5,33,66,.3);overflow:hidden;">
                  <p style="margin:0;padding:0;margin-bottom:0.05rem;color: #96E2F7;font-size:0.18rem;line-height: 0.25rem;">领取人数：${params[1].data} 人</p>
                  <p style="margin:0;padding:0;color: #96E2F7;font-size:0.18rem;line-height: 0.25rem;">增幅：${params[4].data} %<span style="font-size:0.13rem;"></span></p>
              </div>`
        return str
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      show: true,
      top: 0,
      right: '20%',
      itemGap: 22 * window.$rem,
      textStyle: {
        padding: [0, 0, 0, 6 * window.$rem],
        color: 'rgba(255,255,255,1)',
        fontSize: 16 * window.$rem
      },
      itemWidth: 10 * window.$rem,
      itemHeight: 10 * window.$rem,
      // data: ['领取人数', '增幅']
      data: [{
        name: '领取人数',
        icon: 'roundRect'
      }, {
        name: '增幅'
      }]
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        axisTick: {
          show: false
        },
        // position: 'bottom',
        // offset: 50 * window.$rem,
        axisLine: {
          show: false,
          lineStyle: {
            color: '#00ffee'
          }
        },
        axisLabel: {
          margin: 25 * window.$rem,
          interval: 0,
          rotate: 25,
          show: true,
          textStyle: {
            color: 'rgba(255,255,255,1)',
            fontSize: 17 * window.$rem
          }
        }
      }
    ],
    yAxis: [
      {
        name: '（人）',
        nameTextStyle: {
          color: '#fff',
          align: 'right',
          fontSize: 14 * window.$rem,
          padding: [0, 0, 5 * window.$rem, -30 * window.$rem]
        },
        // offset: 50 * window.$rem,
        type: 'value',
        splitNumber: 4,
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#4e515c',
            type: 'dashed'
          }
        },
        axisLabel: {
          textStyle: {
            color: '#feffff',
            fontSize: 17 * window.$rem
          }
        },
        axisLine: {
          lineStyle: {
            color: '#acdeff'
          }
        }
      },
      {
        name: '（%）',
        nameTextStyle: {
          color: 'rgba(255,255,255,1)',
          fontSize: 14 * window.$rem,
          padding: [0, 0, 5 * window.$rem, 30 * window.$rem]
        },
        type: 'value',
        splitNumber: 4,
        axisTick: {
          show: false
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: '#4e515c',
            type: 'dashed'
          }
        },
        axisLabel: {
          textStyle: {
            color: '#feffff',
            fontSize: 17 * window.$rem
          }
        },
        axisLine: {
          lineStyle: {
            color: '#acdeff'
          }
        }
      }
    ],
    grid: {
      top: '13%',
      bottom: '32%'
    },
    series: [
      // {
      //   type: 'pictorialBar',
      //   name: '数据',
      //   barGap: 18,
      //   barWidth: 10,
      //   data: dataval,
      //   symbolOffset: [10, 0],
      //   z: 10
      // },
      {
        name: '领取人数',
        type: 'pictorialBar',
        symbolSize: [barWidth, 5 * window.$rem],
        symbolOffset: [0, -16 * window.$rem],
        z: 10,
        yAxisIndex: 0,
        symbolPosition: 'end',
        itemStyle: {
          normal: {
            color: '#78EAFF'
          }
        },
        emphasis: {
          itemStyle: {
            color: 'rgba(255,160,109,1)'
          }
        },
        data: sData01

      },
      {
        name: '领取人数',
        type: 'pictorialBar',
        yAxisIndex: 0,
        symbolSize: [barWidth, 3 * window.$rem],
        symbolOffset: [0, -12 * window.$rem],
        z: 12,
        symbolPosition: 'start',
        itemStyle: {
          normal: {
            color: '#78EAFF'
          }
        },
        emphasis: {
          itemStyle: {
            color: 'rgba(255,160,109,1)'
          }
        },
        data: sData01
      },
      {
        type: 'bar',
        stack: 'bar01',
        barWidth: barWidth,
        color: 'rgba(0,0,0,0)',
        data: emptyData
      },
      {
        type: 'bar',
        name: '领取人数',
        stack: 'bar01',
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: 'rgba(120,234,255,1)' // 0% 处的颜色
              },
              {
                offset: 0.5, color: 'rgba(120,234,255,.1)' // 0% 处的颜色
              },
              {
                offset: 1, color: 'rgba(120,234,255,1)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }

          }
        },
        barWidth: barWidth,
        emphasis: {
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: 'rgba(255,160,109,0.8)' // 0% 处的颜色
              },
              {
                offset: 0.5, color: 'rgba(255,160,109,.1)' // 0% 处的颜色
              },
              {
                offset: 1, color: 'rgba(255,160,109,1)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        },
        data: sData01
      },
      {
        symbol: 'circle',
        showSymbol: false, // 隐藏symbol只有鼠标移入时显示
        hoverAnimation: true,
        symbolSize: 5 * window.$rem,
        color: 'rgba(255,208,168,1)',
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0.02, color: 'rgba(255,208,168,0)' // 0% 处的颜色
              },
              {
                offset: 0.1, color: 'rgba(255,208,168,1)' // 100% 处的颜色
              },
              {
                offset: 0.5, color: 'rgba(255,208,168,1)' // 100% 处的颜色
              },
              {
                offset: 0.6, color: 'rgba(255,208,168,1)' // 100% 处的颜色
              },
              {
                offset: 0.7, color: 'rgba(255,208,168,1)' // 100% 处的颜色
              },
              {
                offset: 0.98, color: 'rgba(255,208,168,0)' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          width: 2 * window.$rem
        },
        emphasis: {
          itemStyle: {
            color: '#fff',
            borderColor: '#fe955e',
            borderWidth: 2 * window.$rem
          }
        },
        markLine: {
          emphasis: {
            lineStyle: {
              width: 5 * window.$rem
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#2EE2B1'
          }
        },
        data: sData02,
        type: 'line',
        name: '增幅',
        yAxisIndex: 1,
        smooth: true
      }
    ]
  }
  return option
}
export default returnData
