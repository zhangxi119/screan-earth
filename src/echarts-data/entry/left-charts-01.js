/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-06 14:46:01
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-23 16:26:43
 */
import echarts from 'echarts'
function creatOptions (xdata, data) {
  return {
    color: ['rgba(45,179,249,1)'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false
      },
      formatter: '{b}<br />{a}  {c} %',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      right: 0,
      icon: 'rect',
      itemHeight: 5,
      textStyle: {
        padding: [0, 0, 0, 6 * window.$rem],
        color: '#FFFFFF',
        fontSize: 17 * window.$rem
      },
      data: ['常住人口城镇化率趋势']
    },
    grid: {
      left: '5%',
      top: '20%',
      right: '5%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      offset: 10,
      axisLine: {
        show: false
      },
      axisLabel: {
        color: '#FFFFFF',
        fontSize: 15 * window.$rem

      },
      axisTick: {
        show: false
      },
      data: xdata
    },
    yAxis: {
      type: 'value',
      name: '占比（%）',
      nameTextStyle: {
        color: '#FFFFFF',
        align: 'center',
        padding: [0, 0, 10 * window.$rem, 0],
        fontSize: 14 * window.$rem
      },
      min: 0,
      max: 100,
      interval: 25,
      offset: 10,
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
    },
    series: [{
      name: '常住人口城镇化率趋势',
      data: data,
      type: 'line',
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(45,179,249,1)'
        }, {
          offset: 1,
          color: 'rgba(90,177,244,0.3)'
        }])
      }
    }]
  }
}

export default creatOptions
