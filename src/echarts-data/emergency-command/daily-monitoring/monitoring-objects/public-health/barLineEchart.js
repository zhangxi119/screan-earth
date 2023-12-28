/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-05-09 17:13:10
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-19 21:40:21
 */

import echarts from 'echarts'
function returnOption (data, type) {
  console.log(data)
  let xData = []
  let sData01 = []
  let sData02 = []
  data.hospitalList.forEach((item, index) => {
    xData.push(item)
  })
  if (type === 1) {
    data.specialBedSumList.forEach((item, index) => {
      sData01.push(item)
    })
    data.specialBedRateList.forEach(item => {
      sData02.push(item * 100)
    })
  } else if (type === 2) {
    data.negPreBedRateList.forEach((item, index) => {
      sData02.push(item * 100)
    })
    data.negPreBedSumList.forEach(item => {
      sData01.push(item)
    })
  }
  let option = {
    legend: {
      show: true,
      top: 'top',
      left: 'center',
      // icon: 'react',
      itemWidth: 12 * window.$rem,
      itemHeight: 12 * window.$rem,
      itemGap: 12 * window.$rem,
      bottom: 10 * window.$rem,
      textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: 16 * window.$rem
      },
      data: ['床位', '空床率']
    },
    tooltip: {
      trigger: 'axis',
      // axisPointer: {
      //   type: 'line',
      //   axis: 'x',
      //   lineStyle: {
      //     color: 'rgba(255,160,109,1)',
      //     width: 2,
      //     type: 'solid'
      //   }
      // },
      show: true,
      formatter: function (params) {
        console.log(params)
        let str = `<div class="g-echarts-tip" style="padding:0.1rem 0.3rem 0.1rem 0.1rem;background: rgba(5,33,66,.3);overflow:hidden;">
                  <p style="margin:0;padding:0;margin-bottom:0.05rem;color: #96E2F7;font-size:0.18rem;line-height: 0.25rem;">床位：${params[0].data} 张</p>
                  <p style="margin:0;padding:0;color: #96E2F7;font-size:0.18rem;line-height: 0.25rem;">空床率：${params[1].data} %<span style="font-size:0.13rem;"></span></p>
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
    grid: {
      left: '8%',
      right: '5%',
      top: '18%',
      bottom: '22%'
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#8CF0FC'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        rotate: 28,
        textStyle: {
          color: '#ffffff',
          fontFamily: 'Microsoft YaHei',
          fontSize: 13 * window.$rem
        }
      },
      data: xData
    },
    yAxis: [
      {
        name: '（张）',
        type: 'value',
        nameTextStyle: {
          color: '#ffffff',
          padding: [0, 0, 3 * window.$rem, -23 * window.$rem],
          fontSize: 12 * window.$rem
        },
        splitNumber: 5,
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
          fontSize: 13 * window.$rem,
          color: '#ffffff'
        },
        axisLine: {
          lineStyle: {
            color: '#8CF0FC'
          }
        }
      },
      {
        name: '（%）',
        type: 'value',
        nameTextStyle: {
          color: '#ffffff',
          padding: [0, 0, 3 * window.$rem, 23 * window.$rem],
          fontSize: 12 * window.$rem
        },
        // min: 0,
        // max: 120,
        splitNumber: 5,
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
          fontSize: 13 * window.$rem,
          color: '#ffffff'
        },
        axisLine: {
          lineStyle: {
            color: '#8CF0FC'
          }
        }
      }
    ],
    series: [
      {
        name: '床位',
        yAxisIndex: 0,
        data: sData01,
        type: 'bar',
        barWidth: 12 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#65DAA9'
            }, {
              offset: 1,
              color: '#4EB4DE'
            }])
          }
        }
      },
      {
        name: '空床率',
        type: 'line',
        yAxisIndex: 1,
        smooth: false,
        // showAllSymbol: false,
        symbol: 'circle',
        color: '#48AAF4',
        symbolSize: 0,
        lineStyle: {
          width: 3 * window.$rem,
          color: '#48AAF4'
        },
        data: sData02
      }
    ]
  }
  if (type === 2) {
    option.series.pop()
  }
  return option
}
export default returnOption
