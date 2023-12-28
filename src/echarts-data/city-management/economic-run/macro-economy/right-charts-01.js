/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-03 09:35:08
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-20 14:35:43
 */

// import echarts from 'echarts'
function returnData (param) {
  let xData = []
  let sData01 = [] // 农村居民可支配收入(元)
  let sData02 = [] // 城镇居民可支配收入(元)
  let sData03 = [] // 居民消费价格涨跌幅度
  let sData04 = [] // 农村居民可支配收入增速%
  let sData05 = [] // 城市居民可支配收入增速%
  param.forEach(item => {
    xData.push(item.hg08001)
    sData01.push(item.hg08004)
    sData02.push(item.hg08002)
    sData03.push(item.hg08006)
    sData04.push(item.hg08005)
    sData05.push(item.hg08003)
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
          if (param[i].seriesName === '农村居民可支配收入' || param[i].seriesName === '城镇居民可支配收入') {
            str += `<div>${param[i].seriesName}: ${param[i].value}元</div>`
          } else {
            str += `<div>${param[i].seriesName}: ${param[i].value}%</div>`
          }
        }
        return str
      }
    },
    grid: {
      top: '35%',
      left: '10%',
      right: '10%',
      bottom: '10%',
      containLabel: true
    },
    legend: {
      top: 30 * window.$rem,
      left: 50 * window.$rem,
      itemHeight: 10 * window.$rem,
      itemGap: 10 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 12 * window.$rem
      }
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
        name: '（元）',
        nameTextStyle: {
          color: '#FFFFFF',
          align: 'right',
          fontSize: 14 * window.$rem
        },
        nameGap: 15 * window.$rem,
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: param => {
            return (param / 10000).toFixed(1)
          },
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
      },
      {
        type: 'value',
        name: '（%）',
        nameTextStyle: {
          color: '#FFFFFF',
          fontSize: 14 * window.$rem
        },
        nameGap: 15 * window.$rem,
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
        name: '农村居民可支配收入',
        type: 'bar',
        barWidth: 20 * window.$rem,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            color: '#006FEC'
          }
        },
        data: sData01
      },
      {
        name: '城镇居民可支配收入',
        type: 'bar',
        barWidth: 20 * window.$rem,
        symbolSize: 8 * window.$rem,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            color: '#FBE62F'
          }
        },
        data: sData02
      },
      {
        name: '居民消费价格涨跌幅度',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8 * window.$rem,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#734DFF'
          }
        },
        smooth: true,
        lineStyle: {
          width: 2 * window.$rem
        },
        data: sData03
      },
      {
        name: '农村居民可支配收入增速',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8 * window.$rem,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#2EE2B1'
          }
        },
        smooth: true,
        lineStyle: {
          width: 2 * window.$rem
        },
        data: sData04
      },
      {
        name: '城市居民可支配收入增速',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8 * window.$rem,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#E55711'
          }
        },
        smooth: true,
        lineStyle: {
          width: 2 * window.$rem
        },
        data: sData05
      }
    ]
  }
  return options
}
export default returnData
