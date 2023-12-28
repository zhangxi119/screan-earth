/*
 * @Descripttion:
 * @Author: luoxi
 * @Date: 2020-03-02 11:41:56
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-28 17:55:30
 */
import echarts from 'echarts'
function setData (data) {
  let xAxisData = []
  let seriesDataIncrease = []
  let seriesDataNum = []
  data.forEach((item) => {
    // xAxisData.push(item.dateTime)
    let arr = item.dateTime.split('')
    let str = ''
    arr.forEach((item, index) => {
      if (index === 4) {
        str += '-'
      }
      str += item
    })
    xAxisData.push(str)
    seriesDataIncrease.push(item.yearIncrease)
    seriesDataNum.push(item.peoNum)
  })
  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // type: 'cross',
        crossStyle: {
          color: '#999'
        }
      },
      formatter: '{b}</br>{a}:{c}(人)</br>{a1}:{c1}(%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    grid: {
      left: '5%',
      right: '1%',
      top: '20%',
      bottom: '1%',
      containLabel: true
    },
    legend: {
      top: 10 * window.$rem,
      right: 60 * window.$rem,
      itemHeight: 10 * window.$rem,
      itemGap: 30 * window.$rem,
      textStyle: {
        padding: [0, 0, 0, 6 * window.$rem],
        color: '#FFFFFF',
        fontSize: 17 * window.$rem
      },
      // data: ['支出人数', '同比增减']
      data: [{
        name: '支出人数',
        icon: 'roundRect'
      }, {
        name: '同比增减'
      }]
    },
    xAxis: [
      {
        type: 'category',
        data: xAxisData,
        offset: 5,
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
          rotate: 20,
          margin: 10 * window.$rem,
          fontSize: 15 * window.$rem

        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        name: '(人)',
        nameTextStyle: {
          padding: [0, 0, 10 * window.$rem, -35 * window.$rem],
          fontSize: 14 * window.$rem,
          color: '#fff',
          align: 'right'
        },
        type: 'value',
        min: 0,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#333'
          }
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
        nameTextStyle: {
          padding: [0, 0, 10 * window.$rem, -35 * window.$rem],
          fontSize: 14 * window.$rem,
          color: '#fff',
          align: 'right'
        },
        type: 'value',
        // min: 0,
        // max: 100,
        splitLine: {
          show: false
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
      }
    ],
    series: [
      {
        name: '支出人数',
        type: 'bar',
        barWidth: 20 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 1, color: '#00B6E3' },
                { offset: 0, color: '#007EFB' }
              ]
            )
          }
        },
        data: seriesDataNum
      },
      {
        name: '同比增减',
        type: 'line',
        yAxisIndex: 1,
        symbol: 'circle',
        symbolSize: 5 * window.$rem,
        itemStyle: {
          normal: {
            color: '#2EE2B1'
          }
        },
        data: seriesDataIncrease
      }
    ]
  }
  return options
}

export default setData
