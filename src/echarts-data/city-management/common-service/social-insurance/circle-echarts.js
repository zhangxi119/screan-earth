/*
 * @Descripttion:
 * @Author: luoxi
 * @Date: 2020-03-17 14:18:32
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-14 21:12:08
 */
import echarts from 'echarts'
function setData (data) {
  console.log(data)
  let option = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    series: [{
      type: 'gauge',
      // name: '倒计时',
      radius: '62%',
      min: 0, // 最小刻度
      max: 100, // 最大刻度
      startAngle: '215',
      endAngle: '-35',
      splitNumber: '30',
      pointer: {
        show: false
      },
      data: [{
        value: data,
        lineStyle: {
          color: '#FFE600'
        }
        // name: '倒计时'
      }],
      detail: {
        show: true,
        offsetCenter: [1 * window.$rem, 2 * window.$rem],
        color: '#ccc',
        formatter: function (value) {
          return value + '%'
        },
        textStyle: {
          fontSize: 44 * window.$rem,
          color: '#FFE600',
          fontWeight: 500
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 19 * window.$rem,
          color: [
            [0.2, new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#40DB2B'
            },
            {
              offset: 1,
              color: '#40DB2B'
            }
            ])],
            [0.5, new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#40DB2B'
            },
            {
              offset: 1,
              color: '#FFFC14'
            }
            ])],
            [0.7, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#FFFC14'
            },
            {
              offset: 1,
              color: '#FE443B'
            }
            ])],
            [1, new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#FE443B'
            },
            {
              offset: 1,
              color: '#FE443B'
            }
            ])]
          ],
          shadowBlur: 15 * window.$rem,
          shadowColor: '#fff',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        length: 19 * window.$rem,
        lineStyle: {
          color: '#133923',
          width: 3 * window.$rem,
          type: 'solid',
          shadowBlur: 19 * window.$rem,
          shadowOffsetX: 10 * window.$rem,
          shadowOffsetY: 10 * window.$rem
        }
      },
      axisLabel: {
        show: false
      }
    }]
  }
  return option
}
export default setData
