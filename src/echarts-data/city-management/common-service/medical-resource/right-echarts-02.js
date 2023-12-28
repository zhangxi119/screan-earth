/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-02-28 13:59:38
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 16:51:49
 */
import echarts from 'echarts'
function returnData (data) {
  let xData = []
  let sData01 = []
  let sData02 = []
  data.forEach(item => {
    xData.push(item.district)
    sData01.push(item.districtNumList[0].num)
    sData02.push(item.districtNumList[1].num)
  })
  let options = {
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
      }
    },
    legend: {
      itemGap: 40 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      icon: 'roundRect',
      right: '7%',
      textStyle: {
        color: '#FFFFFF',
        padding: [0, 0, 0, 8 * window.$rem],
        fontSize: 14 * window.$rem
      },
      data: ['当场处罚', '一般程序']
    },
    grid: {
      left: '1%',
      top: '10%',
      right: '7%',
      bottom: 0,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          margin: 8 * window.$rem,
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        axisLabel: {
          rotate: 60,
          margin: 17 * window.$rem,
          color: '#FFFFFF',
          fontSize: 17 * window.$rem,
          interval: 0
        },
        data: xData
      }
    ],
    yAxis: [
      {
        name: '(件)',
        nameGap: 10 * window.$rem,
        nameTextStyle: { // y轴上方单位的颜色
          color: '#fff',
          align: 'right',
          padding: [0, 0, 8 * window.$rem, -30 * window.$rem],
          fontSize: 14 * window.$rem
        },
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#FFFFFF',
          margin: 10 * window.$rem,
          fontSize: 17 * window.$rem
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255,255,255,0.5)'
          }
        }
      }
    ],
    series: [
      {
        name: '一般程序',
        type: 'bar',
        stack: 'stack',
        barWidth: 15 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 1, color: '#6473F6'},
                {offset: 0, color: '#6824EE'}
              ]
            )
          }
        },
        data: sData02
      },
      {
        name: '当场处罚',
        type: 'bar',
        stack: 'stack',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 1, color: '#F9E659'},
                {offset: 0, color: '#F2B84E'}
              ]
            )
          }
        },
        data: sData01

      }

    ]
  }
  return options
}
export default returnData
