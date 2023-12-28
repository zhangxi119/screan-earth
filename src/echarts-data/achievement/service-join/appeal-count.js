/*
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-16 10:26:38
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 16:47:20
 */
import echarts from 'echarts'
function returnData (data) {
  let xData = []
  let sData = []
  data.forEach(item => {
    xData.push(item.name)
    sData.push(item.value)
  })
  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: function (params) {
        return ''
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
      left: 80 * window.$rem,
      right: 20 * window.$rem,
      bottom: 60 * window.$rem
    },
    xAxis: [
      {
        type: 'category',
        offset: 10,
        data: xData,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          interval: 0,
          margin: 20 * window.$rem,
          align: 'center',
          fontSize: 15 * window.$rem,
          show: true,
          color: '#FFFFFF'
        }
      }
    ],
    yAxis: [
      {
        name: '(件)',
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          fontStyle: 'italic'
        },
        type: 'value',
        offset: 0,
        min: 0,
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
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '行政许可',
        type: 'line',
        showSymbol: false,
        animation: true,
        lineWidth: 0.5,
        smooth: true,
        hoverAnimation: true,
        data: sData,
        z: 12,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(126,0,255,0.5)'
          }, {
            offset: 1,
            color: 'rgba(227,80,199,0.1)'
          }])
        },
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(112,0,255)' // 100% 处的颜色
              },
              {
                offset: 0.5,
                color: 'rgba(210,92,194)' // 100% 处的颜色
              },
              {
                offset: 0.6,
                color: 'rgba(255,135,33)' // 100% 处的颜色
              },
              {
                offset: 0.8,
                color: 'rgba(255,233,47)' // 100% 处的颜色
              },
              {
                offset: 0.99,
                color: 'rgba(255,246,174)' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          shadowColor: 'rgba(255,145,59,1)',
          shadowBlur: 20 * window.$rem,
          shadowOffsetY: 1,
          width: 5 * window.$rem
        },
        itemStyle: {
          normal: {
            label: {
              show: true,
              fontSize: 25 * window.$rem
            },
            color: '#F1F4F7',
            shadowBlur: 10 * window.$rem,
            shadowColor: 'rgba(255,145,59,1)'
          }
        }
      }
    ]
  }
  return options
}
export default returnData
