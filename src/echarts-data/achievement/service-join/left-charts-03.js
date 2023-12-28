/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-09 18:58:52
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-03-19 11:45:34
 */
function returnData (data) {
  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    color: ['#007EFB', '#0AD192', '#FCE62F'],
    legend: {
      right: 10 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16 * window.$rem
      },
      data: ['来电', '来信', '其他']
    },
    grid: {
      left: '0%',
      top: '10%',
      right: '4%',
      bottom: '3%',
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
          fontSize: 14 * window.$rem
        },
        splitLine: {
          show: false
        },
        data: data.dataList
      }
    ],
    yAxis: [
      {
        type: 'value',
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
          margin: 15 * window.$rem,
          fontSize: 14 * window.$rem
        },
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '来电',
        type: 'bar',
        barWidth: 16 * window.$rem,
        stack: '诉求趋势',
        data: data.callList
      },
      {
        name: '来信',
        type: 'bar',
        stack: '诉求趋势',
        data: data.letterList
      },
      {
        name: '其他',
        type: 'bar',
        stack: '诉求趋势',
        data: data.otherList
      }
    ]
  }
  return options
}
export default returnData
