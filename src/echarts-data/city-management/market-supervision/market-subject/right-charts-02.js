/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-06 16:17:57
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-26 21:54:46
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-19 11:44:51
 */

import echarts from 'echarts'
function returnData (data) {
  let xData = []
  // 柱状图数据
  let sData01 = [] // 企业
  let sData02 = [] // 个体工商
  let sData03 = [] // 农专合作社
  // 折线
  let sData01a = []
  let sData02a = []
  let sData03a = []
  let xTypeData = {}
  data.forEach(item => {
    if (xTypeData.hasOwnProperty(item.zt01001)) {
      xTypeData[item.zt01001].push(item)
    } else {
      xTypeData[item.zt01001] = []
      xTypeData[item.zt01001].push(item)
    }
  })
  for (let key in xTypeData) {
    xData.push(key)
    xTypeData[key].forEach(item => {
      if (item.zt01002 === 1) { // 企业
        sData01.push(item.zt01003)
        sData01a.push(item.zt01004)
      } else if (item.zt01002 === 2) { // 个体工商
        sData02.push(item.zt01003)
        sData02a.push(item.zt01004)
      } else if (item.zt01002 === 3) { // 农专合作社
        sData03.push(item.zt01003)
        sData03a.push(item.zt01004)
      }
    })
  }
  let options = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      // formatter: '{b0}年:<br>{a0}:{c0}户 <br> {a1}:{c1}户 <br>{a2}:{c2}户 <br>{a3}:{c3}% <br>{a4}:{c4}% <br>{a5}:{c5}%'
      formatter: function (data) {
        let str = ''
        if (data.length > 0) {
          for (let i of data) {
            switch (i.seriesIndex) {
              case 0:
                str += `${i.seriesName} :${i.value} 户 <br>`
                break
              case 1:
                str += `${i.seriesName} :${i.value} 户  <br>`
                break
              case 2:
                str += `${i.seriesName} :${i.value} 户 <br>`
                break
              case 3:
                str += `${i.seriesName} :${i.value} % <br>`
                break
              case 4:
                str += `${i.seriesName} :${i.value} % <br>`
                break
              case 5:
                str += `${i.seriesName} :${i.value} % <br>`
                break
              default:
                str += ''
            }
          }
        }
        return str
      }
    },
    grid: {
      top: '39%',
      left: '1%',
      right: '1%',
      bottom: '5%',
      containLabel: true
    },
    legend: {
      top: 30 * window.$rem,
      right: 0,
      itemGap: 10 * window.$rem,
      itemWidth: 10 * window.$rem,
      itemHeight: 10 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16 * window.$rem,
        padding: [0, 0, 0, 3 * window.$rem]
      },
      data: [{name: '企业'},
        {name: '个体工商户'},
        {name: '农专合作社'}, '\n',
        {name: '企业增幅'},
        {name: '个体增幅'},
        {name: '农专增幅'}]
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        offset: 10,
        rotate: 20,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          color: '#FFFFFF',
          margin: 10 * window.$rem,
          fontSize: 15 * window.$rem

        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        name: '(户)',
        nameLocation: 'end',
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'right',
          padding: [0, 0, 8 * window.$rem, 0]
        },
        type: 'value',
        min: 0,
        // max: 30000,
        interval: 50000,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted'
          }
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
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisTick: {
          show: false
        }
      },
      {
        type: 'value',
        // min: -0.2,
        // // max: 3.0,
        // // interval: 0.5,
        name: '(%)',
        nameLocation: 'end',
        nameTextStyle: {
          color: '#FFF',
          fontSize: 14 * window.$rem,
          align: 'left',
          padding: [0, 0, 0, 0]
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: function (value, index) {
            return value.toFixed(1)
          },
          color: '#FFFFFF',
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
        }
      }
    ],
    series: [
      {
        name: '企业',
        stack: 'stack',
        type: 'bar',
        yAxisIndex: 0,
        barWidth: 20 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#6473F6'
            }, {
              offset: 1,
              color: '#6824EE'
            }])
          }
        },
        data: sData01
      },
      {
        name: '个体工商户',
        stack: 'stack',
        type: 'bar',
        yAxisIndex: 0,
        barWidth: 20 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#F9E659'
            }, {
              offset: 1,
              color: '#F2B84E'
            }])
          }
        },
        data: sData02
      },
      {
        name: '农专合作社',
        stack: 'stack',
        type: 'bar',
        yAxisIndex: 0,
        barWidth: 20 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#66afeb'
            }, {
              offset: 1,
              color: '#7bd0f0'
            }])
          }
        },
        data: sData03
      },
      {
        name: '企业增幅',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8 * window.$rem,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#307FF3'
          }
        },
        data: sData01a
      },
      {
        name: '个体增幅',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8 * window.$rem,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#6EDEB4'
          }
        },
        data: sData02a
      },
      {
        name: '农专增幅',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8 * window.$rem,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#E8632A'
          }
        },
        data: sData03a
      }
    ]
  }
  return options
}
export default returnData
