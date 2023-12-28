/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-04-08 14:21:55
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-15 11:50:51
 */
import echarts from 'echarts'
function returnData (data) {
  let xData = []
  let sData = []
  data.details.forEach(item => {
    let xArr = item.jc1002.split(' ')
    xData.push(xArr[1])
    sData.push(item.jc1001)
  })
  let option = {
    // backgroundColor: '#0E204A',
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
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(255,255,255,0)' // 0% 处的颜色
            }, {
              offset: 0.5,
              color: 'rgba(255,255,255,1)' // 100% 处的颜色
            }, {
              offset: 1,
              color: 'rgba(255,255,255,0)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }
      }

    },
    grid: {
      top: '5%',
      left: '5%',
      right: '10%',
      bottom: '20%'
      // containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      axisLine: { // 坐标轴轴线相关设置。数学上的x轴
        show: true,
        lineStyle: {
          color: '#83E4FF'
        }
      },
      axisLabel: { // 坐标轴刻度标签的相关设置
        textStyle: {
          color: '#d1e6eb',
          fontSize: 18 * window.$rem,
          margin: 10 * window.$rem
        }
      },
      axisTick: {
        show: false
      },
      data: xData
    }],
    yAxis: [{
      type: 'value',
      //   min: 0,
      // max: 140,
      //   splitNumber: 4,
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#83E4FF'
        }
      },
      axisLabel: {
        show: false,
        margin: 20,
        textStyle: {
          color: '#d1e6eb'

        }
      },
      axisTick: {
        show: false
      }
    }],
    series: [{
      name: '注册总量',
      type: 'line',
      smooth: true, // 是否平滑曲线显示
      symbol: 'none', // 默认是空心圆（中间是白色的），改成实心圆
      //   showAllSymbol: false,
      // symbol: 'image://./static/images/guang-circle.png',
      lineStyle: {
        normal: {
          color: '#53fdfe' // 线条颜色
        },
        borderColor: '#f0f'
      },
      label: {
        show: false,
        position: 'top',
        textStyle: {
          color: '#fff'
        }
      },
      itemStyle: {
        normal: {
          color: 'rgba(255,255,255,1)'
        }
      },
      tooltip: {
        show: false
      },
      areaStyle: { // 区域填充样式
        normal: {
          // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0,150,239,0.3)'
          },
          {
            offset: 1,
            color: 'rgba(0,253,252,0)'
          }
          ], false),
          shadowColor: 'rgba(53,142,215, 0.9)', // 阴影颜色
          shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        }
      },
      data: sData
    }]
  }
  return option
}
export default returnData
