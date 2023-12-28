/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-06 15:15:42
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-21 20:51:02
 */
function returnData (data) {
  let xData = data.xAxis
  let seriesData = data.data
  let option = {
    color: ['#3398DB'],
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
      },
      formatter: 'PM2.5年分析<br />{b}: {c}μg/m³'
    },
    grid: {
      left: '6%',
      right: '4%',
      bottom: '10%',
      top: '15%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        axisLine: {
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 17 * window.$rem,
            lineHeight: 30 * window.$rem
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(μg/m³)',
        nameLocation: 'end',
        nameGap: 5 * window.$rem,
        nameTextStyle: {
          color: '#fff',
          align: 'center',
          fontSize: 14 * window.$rem,
          padding: [4 * window.$rem, 4 * window.$rem, 15 * window.$rem, 10 * window.$rem]
        },
        axisLine: {
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#fff',
            fontSize: 17 * window.$rem
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(140,240,252,0.3)',
            width: 1 * window.$rem,
            height: 1 * window.$rem,
            type: 'dashed'
          }
        }
      }
    ],
    series: [
      {
        type: 'bar',
        barWidth: 20 * window.$rem,
        data: seriesData
      }
    ]
  }
  return option
}

export default returnData
