/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-09 18:58:52
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 19:13:50
 */
import echarts from 'echarts'
function returnData (data) {
  console.log(data)
  let xData = []
  let sData = []
  data.forEach((item, index) => {
    xData.push(item.name)
    if (index === 0) {
      sData.push({
        value: item.value,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#FA7D3F'
            }, {
              offset: 1,
              color: '#E55711'
            }])
          }
        }
      })
    } else if (index === 1) {
      sData.push({
        value: item.value,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#F2D85D'
            }, {
              offset: 1,
              color: '#FFD200'
            }])
          }
        }})
    } else {
      sData.push(item.value)
    }
  })
  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    color: ['#007EFB', '#0AD192', '#FCE62F'],
    legend: {
      right: 10 * window.$rem,
      textStyle: {
        color: '#FFFFFF'
      }
    },
    grid: {
      left: '10%',
      top: '20%',
      right: '4%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          rotate: 25,
          margin: 15 * window.$rem,
          color: '#FFFFFF',
          fontSize: 13 * window.$rem
        },
        splitLine: {
          show: false
        },
        data: xData
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(%)',
        nameGap: 25 * window.$rem,
        nameTextStyle: {
          color: '#FFFFFF',
          align: 'right',
          fontSize: 14 * window.$rem
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#FFFFFF',
          margin: 12 * window.$rem,
          fontSize: 13 * window.$rem
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        type: 'bar',
        barWidth: 16 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#00B6E3'
            }, {
              offset: 1,
              color: '#007EFB'
            }])
          }
        },
        data: sData
      }
    ]
  }
  return options
}
export default returnData
