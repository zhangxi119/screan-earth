/*
 * @Descripttion:
 * @Author: chenqy
 * @Date: 2020-05-18
 * @LastEditors: chenqy
 * @LastEditTime: 2020-05-18
 */
const cahrtLine = (data) => {
  let xdata = []
  let series = []
  data.map(re => {
    xdata.push(re.time)
    series.push(re.num)
  })
  return {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10 * window.$rem,
      textStyle: {
        fontSize: 17 * window.$rem
      },
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: '{a} <br/>{b} : {c}人'
    },
    xAxis: {
      type: 'category',
      splitLine: {show: false},
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 15 * window.$rem
      },
      data: xdata
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '0',
      top: '16%',
      containLabel: true
    },
    yAxis: {
      name: '(人)',
      nameTextStyle: {
        color: '#DFE2FD',
        fontSize: 14 * window.$rem,
        align: 'right',
        padding: 10 * window.$rem
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#fff',
        fontSize: 15 * window.$rem
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(96,189,249, .2)',
          type: 'dashed'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      }
    },
    series: [
      {
        name: '接待游客人数',
        type: 'line',
        showSymbol: false,
        itemStyle: {
          color: '#60BDF9'
        },
        data: series
      }
    ]
  }
}
export default cahrtLine
