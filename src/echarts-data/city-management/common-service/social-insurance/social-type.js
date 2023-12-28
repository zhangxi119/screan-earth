/*
 * @Descripttion:参数人数类型弹框
 * @Author: wangting
 * @Date: 2020-04-13 16:25:09
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-17 11:38:35
 */
export default function typeBar (data) {
  console.log('data', data)
  var option = {
    color: ['#0AD192'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
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
      left: '13%',
      right: '14%',
      bottom: '13%',
      top: '3%'
    },
    xAxis: {
      type: 'value',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#66F3FF'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: '#FFFFFF',
        textStyle: {
          fontSize: 17 * window.$rem,
          fontWeight: 'bold'
        }
      }
    },
    yAxis: {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#FFFFFF',
        textStyle: {
          fontSize: 17 * window.$rem
        },
        formatter: function (params) {
          var newParamsName = ''
          var paramsNameNumber = params.length
          var provideNumber = 4 // 一行显示几个字
          var rowNumber = Math.ceil(paramsNameNumber / provideNumber)
          if (paramsNameNumber > provideNumber) {
            for (var p = 0; p < rowNumber; p++) {
              var tempStr = ''
              var start = p * provideNumber
              var end = start + provideNumber
              if (p === rowNumber - 1) {
                tempStr = params.substring(start, paramsNameNumber)
              } else {
                tempStr = params.substring(start, end) + '\n'
              }
              newParamsName += tempStr
            }
          } else {
            newParamsName = params
          }
          return newParamsName
        }
      },
      splitLine: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#66F3FF'
        }
      },
      data: data.typeList
    },
    series: [
      {
        name: '',
        type: 'bar',
        data: data.numList,
        barWidth: 16 * window.$rem
      }
    ]
  }
  return option
}
