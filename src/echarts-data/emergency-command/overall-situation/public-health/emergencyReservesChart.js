/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-17 15:33:06
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-19 15:14:26
 */
import echarts from 'echarts'
function returnOption (data, type) {
  let xData = []
  let sData01 = []
  let sData02 = []
  data.hospitalList && data.hospitalList.forEach((item, index) => {
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
      show: true,
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(7,69,182,0.3)'
        }
      },
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
                str += `${i.seriesName} :${i.value} 张<br>`
                break

              case 1:
                str += `${i.seriesName} :${i.value}%<br>`
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
      left: '8%',
      right: '5%',
      top: '20%',
      bottom: '25%'
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
          padding: [0, 0, 8 * window.$rem, -23 * window.$rem],
          fontSize: 12 * window.$rem
        },
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
          padding: [0, 0, 8 * window.$rem, 23 * window.$rem],
          fontSize: 12 * window.$rem
        },
        min: 0,
        max: 120,
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
        color: '#48AAF4',
        name: '空床率',
        type: 'line',
        yAxisIndex: 1,
        smooth: false,
        // showAllSymbol: false,
        symbol: 'circle',
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
