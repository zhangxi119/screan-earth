/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-14 11:41:40
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 16:55:29
 */

import echarts from 'echarts'
function returnData (data) {
  let xData = data.districtList
  let sData01 = [] // 公租房房源
  let sData02 = [] // 老旧小区涉及户数
  data.districtHouseChangeList.forEach(item => {
    sData01.push(item.changeList[0].houseNum || 0)
    sData02.push(item.changeList[1].houseNum || 0)
  })
  let option = {
    legend: {
      show: true,
      top: 20 * window.$rem,
      right: '5%',
      itemGap: 22 * window.$rem,
      textStyle: {
        padding: [0, 0, 0, 6 * window.$rem],
        color: 'rgba(255,255,255,1)',
        fontSize: 16 * window.$rem
      },
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      data: ['公租房房源', '老旧小区涉及房屋套数']
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        show: false,
        axis: 'x',
        lineStyle: {
          color: 'rgba(255,160,109,0)',
          width: 2,
          type: 'solid'
        }
      },
      show: true,
      formatter: function (params) {
        let str = `<div class="g-echarts-tip" style="padding:0.1rem 0.3rem 0.1rem 0.1rem;background: rgba(5,33,66,.3);overflow:hidden;">
                  <p style="margin:0;padding:0;margin-bottom:0.05rem;color: #96E2F7;font-size:0.18rem;">公租房房源：${params[0].data} </p>
                  <p style="margin:0;padding:0;color: #96E2F7;font-size:0.18rem;">老旧小区涉及房屋套数：${params[1].data} <span style="font-size:0.13rem;"></span></p>
              </div>`
        return str
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    grid: {
      top: '25%',
      right: '7%',
      left: '7%',
      bottom: '18%'
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#acdeff'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        margin: 18 * window.$rem,
        interval: 0,
        rotate: 25,
        textStyle: {
          color: '#feffff',
          fontSize: 17 * window.$rem,
          fontFamily: 'Source Han Sans CN'
        }
      },
      data: xData
    },
    yAxis: {
      name: '（套）',
      nameTextStyle: {
        color: '#fff',
        align: 'right',
        fontSize: 14 * window.$rem,
        padding: [0, 0, 10 * window.$rem, -30 * window.$rem]
      },
      type: 'value',
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#4e515c',
          type: 'dashed'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#feffff',
          fontSize: 17 * window.$rem
        }
      },
      axisLine: {
        lineStyle: {
          color: '#acdeff'
        }
      }
    },
    series: [
      {
        name: '公租房房源',
        type: 'bar',
        barWidth: 20 * window.$rem,
        barGap: 0,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#f2ba54'
            }, {
              offset: 1,
              color: '#f9dd57'
            }])
          }
        },
        data: sData01
      },
      {
        name: '老旧小区涉及房屋套数',
        data: sData02,
        type: 'bar',
        barWidth: 20 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#672fe1'
            }, {
              offset: 1,
              color: '#6766f6'
            }])
          }
        }
      }
    ]
  }
  return option
}
export default returnData
