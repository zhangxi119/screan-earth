/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-08
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 17:06:13
 */
import echarts from 'echarts'
function returnData (data) {
  let options = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '10%',
      top: '18%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: data.xAxis,
        axisTick: {
          show: false,
          alignWithLabel: false
        },
        offset: 10 * window.$rem,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        axisLabel: {
          fontSize: 15 * window.$rem,
          interval: 0,
          color: '#FFFFFF'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(处)',
        nameTextStyle: {
          color: '#fff',
          padding: [0, 0, 10 * window.$rem, 0],
          fontSize: 14 * window.$rem,
          align: 'right'
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
            color: '#8CF0FC'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '安全生产潜在隐患区',
        type: 'bar',
        barWidth: 20 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#4EB4DE'
            }, {
              offset: 1,
              color: '#307FF3'
            }])
          }
        },
        data: data.data
      }
    ]
  }
  return options
}
export default returnData
