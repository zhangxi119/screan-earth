/*
 * @Author: zhangxi
 * @Date: 2020-03-03 11:11:47
 * @Last Modified by: nixy
 * @Last Modified time: 2020-03-09 15:42:47
 */
import echarts from 'echarts'
function createOptions (xdata, data) {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      show: false
    },
    grid: {
      top: '10%',
      right: '5%',
      left: '7%',
      bottom: '22%'
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#acdeff'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        rotate: 25,
        margin: 20,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          fontSize: 14 * window.$rem,
          color: '#ffffff'
        }
      },
      data: xdata
    },
    yAxis: {
      name: '(件)',
      nameLocation: 'end',
      nameTextStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem,
        align: 'right',
        padding: [0, 0, 8 * window.$rem, 0]
      },
      type: 'value',
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
      axisLine: {
        lineStyle: {
          color: '#acdeff'
        }
      },
      axisLabel: {
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          fontSize: 14 * window.$rem,
          color: '#ffffff'
        }
      }
    },
    series: [
      {
        name: '药品许可',
        data: data,
        type: 'bar',
        barWidth: 15.8 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#59acee'
            }, {
              offset: 1,
              color: '#0249f2'
            }])
          }
        }
      }
    ]
  }
}

export default createOptions
