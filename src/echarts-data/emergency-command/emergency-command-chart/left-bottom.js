/*
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-11
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 17:06:22
 */
import echarts from 'echarts'
let options = (data) => {
  let data1 = []
  let xAxis = []
  data.map(re => {
    xAxis.push(re.zh03001)
    data1.push(re.zh03002)
  })
  return {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10 * window.$rem,
      textStyle: {
        fontSize: 17 * window.$rem
      },
      axisPointer: {
        type: 'shadow'
      },
      formatter: '{b0}<br/>{a0}：{c0}人'
    },
    grid: {
      top: '17%',
      left: '10%',
      right: '10%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xAxis,
        offset: 25 * window.$rem,
        axisTick: {
          show: false,
          alignWithLabel: false
        },
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          fontSize: 13 * window.$rem,
          rotate: 30,
          formatter: function (value) {
            let j = value.split('')
            for (let i = 3; i < j.length; i += 4) {
              j.splice(i, 0, '\n')
            }
            return j.join('')
          },
          interval: 0,
          color: '#FFFFFF',
          align: 'center'
        },
        zlevel: 2
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(人)',
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'right'
        },
        axisLabel: {
          formatter: '{value}',
          color: '#DFE2FB',
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
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: 'rgba(102, 243, 255, .1)'
          }
        }
      }
    ],
    series: [
      {
        name: '转移安置能力',
        type: 'bar',
        barWidth: 16 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#033BFF'
            }, {
              offset: 1,
              color: '#01B1FF'
            }])
          }
        },
        data: data1
      }
    ]
  }
}
export default options
