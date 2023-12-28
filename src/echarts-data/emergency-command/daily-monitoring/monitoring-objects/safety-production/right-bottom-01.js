/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-06
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-11 14:10:19
 */
// import echarts from 'echarts'
function returnData (data) {
  let options = {
    color: ['#F7D455', '#5FC372', '#F26D2D'],
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
        // type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    grid: {
      left: '8%',
      right: '1%',
      top: '28%',
      bottom: 30 * window.$rem,
      containLabel: true
    },
    legend: {
      top: 45 * window.$rem,
      left: 50 * window.$rem,
      itemGap: 8 * window.$rem,
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      textStyle: {
        fontSize: 14 * window.$rem,
        padding: [0, 0, 0, 4 * window.$rem],
        color: '#FFFFFF'
      },
      data: data.marks
    },
    xAxis: [
      {
        type: 'category',
        data: data.xAxis,
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
        name: '(处)',
        nameTextStyle: {
          color: '#fff',
          padding: [0, 0, 10 * window.$rem, 0],
          fontSize: 14 * window.$rem,
          align: 'right'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: 'rgba(115, 77, 255, .2)'
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
      }
    ],
    series: [
      {
        name: data.marks[0],
        stack: 'stack',
        type: 'bar',
        barWidth: 20 * window.$rem,
        data: data.data[0]
      },
      {
        name: data.marks[1],
        stack: 'stack',
        type: 'bar',
        barWidth: 20 * window.$rem,
        data: data.data[1]
      },
      {
        name: data.marks[2],
        stack: 'stack',
        type: 'bar',
        barWidth: 20 * window.$rem,
        data: data.data[2]
      }
    ]
  }
  return options
}
export default returnData
