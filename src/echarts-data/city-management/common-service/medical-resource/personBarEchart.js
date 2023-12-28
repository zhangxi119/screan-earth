/*
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-16 09:59:38
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 20:19:13
 */
import echarts from 'echarts'
function retrunData (param) {
  let xData = []
  let sData = []
  param.forEach(item => {
    xData.push(item.schoolType)
    sData.push(item.num)
  })
  let option = {
    title: {
      subText: '(人次)'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: '{a} <br/>{b}: {c}',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    grid: {
      left: '1%',
      right: '4%',
      bottom: '0',
      top: '20%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        offset: 10,
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        axisLabel: {
          rotate: 40,
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
        },
        data: xData
      }
    ],
    yAxis: [
      {
        name: '(人)',
        nameGap: 10 * window.$rem,
        nameTextStyle: { // y轴上方单位的颜色
          color: '#fff',
          align: 'right',
          padding: [0, 0, 8 * window.$rem, -25 * window.$rem],
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
          fontSize: 15 * window.$rem
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255,255,255,0.6)'
          }
        }
      }
    ],
    series: [
      {
        name: '医疗人员',
        type: 'bar',
        stack: 'stack',
        barWidth: 15 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 1, color: '#4EB4DE'},
                {offset: 0, color: '#307FF3'}
              ]
            )
          }
        },
        data: sData
      }

    ]
  }
  return option
}
export default retrunData
