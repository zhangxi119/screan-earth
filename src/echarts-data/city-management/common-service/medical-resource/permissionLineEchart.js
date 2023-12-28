/*
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-16 10:26:38
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-25 12:31:05
 */
import echarts from 'echarts'
function returnData (data) {
  let xData = []
  let sData = []
  let myColorStr = 'rgba(237,214,174'
  data.forEach(item => {
    xData.push(item.adminDate.slice(0, 4) + item.adminDate.slice(4))
    sData.push(item.num)
  })
  let options = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255,255,255,0)',
      axisPointer: {
        type: 'none'
      },
      formatter: function (params) {
        return ''
      }

    },
    grid: {
      top: '12%',
      left: 62 * window.$rem,
      right: 20 * window.$rem,
      bottom: 65 * window.$rem
    },
    xAxis: [
      {
        type: 'category',
        offset: 10,
        data: xData,
        axisTick: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.8)'
          }
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          interval: 0,
          rotate: 25,
          margin: 25 * window.$rem,
          align: 'center',
          fontSize: 15 * window.$rem,
          show: true,
          color: '#FFFFFF'
        }
      }
    ],
    yAxis: [
      {
        name: '(件)',
        nameTextStyle: {
          color: '#fff',
          align: 'right',
          padding: [0, 0, 5 * window.$rem, -30 * window.$rem],
          fontSize: 14 * window.$rem,
          fontStyle: 'italic'
        },
        type: 'value',
        offset: 0,
        min: 0,
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
      }
    ],
    series: [
      {
        name: '行政许可',
        type: 'line',
        showSymbol: false,
        animation: true,
        lineWidth: 0.2,
        smooth: true,
        hoverAnimation: true,
        data: sData,
        z: 12,
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(112,0,255)' // 100% 处的颜色
              },
              {
                offset: 0.5,
                color: 'rgba(210,92,194)' // 100% 处的颜色
              },
              {
                offset: 0.6,
                color: 'rgba(255,135,33)' // 100% 处的颜色
              },
              {
                offset: 0.8,
                color: 'rgba(255,233,47)' // 100% 处的颜色
              },
              {
                offset: 0.99,
                color: 'rgba(255,246,174)' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          },
          shadowColor: 'rgba(255,145,59,1)',
          shadowBlur: 20 * window.$rem,
          shadowOffsetY: 1,
          width: 2 * window.$rem
        },
        areaStyle: { // 区域填充样式
          normal: {
            // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: myColorStr + ', 0.2)'}, {offset: 1, color: myColorStr + ', 0)'}
            ], false),

            shadowColor: myColorStr + ', 0.2)', // 阴影颜色
            shadowBlur: 20 * window.$rem // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
          }
        },
        itemStyle: {
          normal: {
            label: {
              show: true,
              fontSize: 25 * window.$rem
            },
            color: '#F1F4F7',
            shadowBlur: 10 * window.$rem,
            shadowColor: 'rgba(255,145,59,1)'
          }
        }
      }
    ]
  }
  return options
}
export default returnData
