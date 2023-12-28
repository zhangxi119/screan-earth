/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-02 16:35:04
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 19:17:04
 */
// function randomData () {
//   now = new Date(+now + oneDay)
//   value = value + Math.random() * 21 - 10
//   value2 = value2 + Math.random() * 21 - 10
//   return [
//     {
//       name: now.toString(),
//       value: [
//         [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'), Math.round(value)

//       ]
//     },
//     {
//       name: now.toString(),
//       value: [
//         [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'), Math.round(value2)

//       ]
//     }
//   ]
// }

// var data = []
// var data2 = []
// var now = new Date(2015, 1, 1)
// var oneDay = 24 * 3600 * 1000
// var value = Math.random() * 1500
// var value2 = Math.random() * 1500
// for (let i = 0; i < 800; i++) {
//   data.push(randomData()[0])
//   data2.push(randomData()[1])
// }

function returnData (param) {
  let xData = []
  let sData01 = [] // 税收收入
  let sData02 = [] // 非税收收入
  let sData03 = [] // 财政支出
  let sData04 = [] // 财政支出增速
  let sData05 = [] // 财政收入增速
  param.forEach(item => {
    xData.push(item.hg03001)
    sData01.push(item.hg03006)
    sData02.push(item.hg03007)
    sData03.push(item.hg03003)
    sData04.push(item.hg03005)
    sData05.push(item.hg03004)
  })
  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false
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
          if (param[i].seriesName === '税收收入' || param[i].seriesName === '非税收收入' || param[i].seriesName === '财政支出') {
            str += `<div>${param[i].seriesName}: ${param[i].value}亿元</div>`
          } else {
            str += `<div>${param[i].seriesName}: ${param[i].value}%</div>`
          }
        }
        return str
      }
    },
    legend: {
      top: 10 * window.$rem,
      right: 50 * window.$rem,
      itemHeight: 10 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16 * window.$rem
      },
      data: ['税收收入', '非税收收入', '财政支出', '\n', '财政支出增速', '财政收入增速']
    },
    grid: {
      left: '4%',
      right: '6%',
      top: '20%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        position: 'bottom',
        offset: 0,
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
        name: '（亿元）',
        nameTextStyle: {
          color: '#fff',
          align: 'right',
          fontSize: 14 * window.$rem,
          padding: [0, 0, 0, 0]
        },
        nameGap: 15 * window.$rem,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: '#57617B'
          }
        },
        axisLabel: {
          // formatter: param => {
          //   return (param / 10000).toFixed(2)
          // },
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
        type: 'value',
        name: '（%）',
        nameTextStyle: {
          color: '#fff',
          align: 'left',
          fontSize: 14 * window.$rem
        },
        nameGap: 15 * window.$rem,
        splitLine: {
          show: false,
          lineStyle: {
            type: 'dotted'
          }
        },
        axisLabel: {
          formatter: '{value}',
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
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
        name: '税收收入',
        type: 'bar',
        stack: 'bar01',
        barWidth: 20 * window.$rem,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            color: '#007EFB'
          }
        },
        data: sData01
      }, {
        name: '非税收收入',
        type: 'bar',
        stack: 'bar01',
        yAxisIndex: 0,
        barWidth: 20 * window.$rem,
        itemStyle: {
          normal: {
            color: '#FBE62F'
          }
        },
        data: sData02
      }, {
        name: '财政支出',
        type: 'bar',
        barGap: 0,
        barWidth: 20 * window.$rem,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            color: '#E55711'
          }
        },
        data: sData03
      },
      {
        name: '财政支出增速',
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#2EE2B1'
          }
        },
        lineStyle: {
          width: 3 * window.$rem
        },
        data: sData04
      },
      {
        name: '财政收入增速',
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#805DFF'
          }
        },
        lineStyle: {
          width: 3 * window.$rem
        },
        data: sData05
      }
    ]
  }
  return options
}
export default returnData
