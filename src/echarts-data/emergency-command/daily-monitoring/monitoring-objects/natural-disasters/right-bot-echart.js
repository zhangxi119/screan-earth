/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-15 14:01:36
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-27 15:00:51
 */

import echarts from 'echarts'
function returnData (data) {
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
      }
    },
    grid: {
      left: '5%',
      right: '8%',
      bottom: '6%',
      top: '20%',
      containLabel: true
    },
    legend: {
      top: 10 * window.$rem,
      left: '30%',
      itemWidth: 14 * window.$rem,
      textStyle: {
        color: '#FFFFFF'
      },
      show: false,
      data: ['地质灾害监测']
    },
    xAxis: [
      {
        type: 'category',
        data: data.xAxis,
        offset: 10 * window.$rem,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#b8defd'
          }
        },
        axisLabel: {
          rotate: 20,
          interval: 0,
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
        // min: 0,
        // max: 30000,
        // interval: 5000,
        name: '处',
        nameTextStyle: {
          fontSize: 14 * window.$rem,
          align: 'right',
          color: '#fff',
          padding: [0, 0, 5 * window.$rem, 0]
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: 'rgba(102, 243, 255, .1)'
          }
        },
        axisLabel: {
          formatter: '{value}',
          color: '#FFFFFF',
          //   margin: 15,
          fontSize: 15 * window.$rem
        },
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#b8defd'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '地质灾害监测',
        type: 'bar',
        barWidth: 10 * window.$rem,
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
