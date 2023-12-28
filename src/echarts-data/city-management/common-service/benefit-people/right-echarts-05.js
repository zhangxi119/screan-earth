/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-09 18:58:52
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 19:13:13
 */
import echarts from 'echarts'
function returnData (data) {
  console.log(data)
  data = data.slice(0, 5)
  let xData = []
  let sData = []
  data.forEach((item, index) => {
    xData.push(item.NAME)
    if (index === 0) {
      sData.push({
        value: item.num,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#D5602C'
            }, {
              offset: 1,
              color: '#EB834E'
            }])
          }
        }
      })
    } else if (index === 1) {
      sData.push({
        value: item.num,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#F9D247'
            }, {
              offset: 1,
              color: '#EED771'
            }])
          }
        }})
    } else if (index === 2) {
      sData.push({
        value: item.num,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#3180F3'
            }, {
              offset: 1,
              color: '#4FB4DE'
            }])
          }
        }})
    } else {
      sData.push({
        value: item.num,
        itemStyle: {
          normal: {
            color: '#6DB9ED'
          }
        }
      })
    }
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
    color: ['#007EFB', '#0AD192', '#FCE62F'],
    grid: {
      left: '10%',
      top: '20%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          margin: 9 * window.$rem,
          color: '#FFFFFF',
          fontSize: 13 * window.$rem
        },
        splitLine: {
          show: false
        },
        data: xData
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(起)',
        nameGap: 15 * window.$rem,
        nameTextStyle: {
          color: 'rgba(255,255,255,0.6)',
          fontSize: 14 * window.$rem,
          align: 'right'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#FFFFFF',
          margin: 12 * window.$rem,
          fontSize: 13 * window.$rem
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(49,128,243,0.2)',
            type: 'dashed'
          }
        }
      }
    ],
    series: [
      {
        type: 'bar',
        barWidth: 16 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#00B6E3'
            }, {
              offset: 1,
              color: '#007EFB'
            }])
          }
        },
        data: sData
        // markLine: {
        //   symbol: 'none', // 去掉警戒线最后面的箭头
        //   label: {
        //     position: 'end', // 将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
        //     formatter: '警戒线',
        //     fontSize: 12 * window.$rem
        //   },
        //   data: [{
        //     silent: false, // 鼠标悬停事件  true没有，false有
        //     lineStyle: { // 警戒线的样式  ，虚实  颜色
        //       type: 'dashed',
        //       color: 'rgba(238, 99, 99)'
        //     },
        //     name: '警戒线',
        //     yAxis: 85
        //   }]
        // }
      }
    ]
  }
  return options
}
export default returnData
