/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-02 17:36:04
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-20 14:35:29
 */
function returnData (param) {
  let xData = []
  let sData01 = [] // 进口额
  let sData02 = [] // 出口额
  // let sData03 = [] // 消费品零售总额
  // let sData04 = []// 固投总额
  param.forEach(item => {
    xData.push(item.hg11001)
    sData01.push(item.hg11002)
    sData02.push(item.hg11003)
    // sData03.push(item.hg11006)
    // sData04.push(item.hg11008)
  })
  console.log('a=bar', xData, sData01, sData02)
  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // type: 'cross',
        crossStyle: {
          color: '#999'
        }
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: function (param) {
        let str = `<div>${param[0].name}</div>`
        for (var i = 0; i < param.length; i++) {
          str += `<div>${param[i].seriesName}: ${param[i].value}亿美元</div>`
        }
        return str
      }
    },
    grid: {
      left: '8%',
      right: '7%',
      bottom: '5%',
      top: '25%',
      containLabel: true
    },
    legend: {
      top: 5 * window.$rem,
      left: 70 * window.$rem,
      itemHeight: 10 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16 * window.$rem
      }
      // data: ['进口金额', '出口金额', '消费品零售总额', '固投总额']
      // data: ['进口金额', '出口金额']
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        offset: 10,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          color: '#FFFFFF',
          fontSize: 15 * window.$rem

        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        min: 0,
        name: '（亿美元）',
        nameTextStyle: {
          align: 'right',
          color: '#fff',
          fontSize: 14 * window.$rem
        },
        nameGap: 10 * window.$rem,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: '#57617B'
          }
        },
        axisLabel: {
          formatter: '{value}',
          color: '#FFFFFF',
          fontSize: 15 * window.$rem,
          padding: [0, 10 * window.$rem, 0, 0]
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
      // {
      //   type: 'value',
      //   name: '（亿元）',
      //   nameTextStyle: {
      //     align: 'left',
      //     color: '#fff',
      //     fontSize: 14 * window.$rem
      //   },
      //   nameGap: 15 * window.$rem,
      //   splitLine: {
      //     show: true,
      //     lineStyle: {
      //       type: 'dotted',
      //       color: '#57617B'
      //     }
      //   },
      //   axisLabel: {
      //     formatter: '{value}',
      //     color: '#FFFFFF',
      //     fontSize: 15 * window.$rem
      //   },
      //   axisPointer: {
      //     type: 'shadow'
      //   },
      //   axisLine: {
      //     lineStyle: {
      //       color: '#66F3FF'
      //     }
      //   },
      //   axisTick: {
      //     show: false
      //   }
      // }
    ],
    series: [
      {
        name: '进口金额',
        type: 'bar',
        barWidth: 20 * window.$rem,
        itemStyle: {
          normal: {
            color: '#FBE62F'
          }
        },
        data: sData01
      },
      {
        name: '出口金额',
        type: 'bar',
        barWidth: 20 * window.$rem,
        itemStyle: {
          normal: {
            color: '#007EFB'
          }
        },
        data: sData02
      }
      // {
      //   name: '消费品零售总额',
      //   type: 'bar',
      //   barWidth: 20 * window.$rem,
      //   itemStyle: {
      //     normal: {
      //       color: '#E55711'
      //     }
      //   },
      //   data: sData03
      // },
      // {
      //   name: '固投总额',
      //   type: 'bar',
      //   barWidth: 20 * window.$rem,
      //   itemStyle: {
      //     normal: {
      //       color: '#2EE2B1'
      //     }
      //   },
      //   data: sData04
      // }
    ]
  }
  console.log(options.series)
  return options
}
export default returnData
