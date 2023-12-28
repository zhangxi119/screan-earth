/*
 * @Descripttion: 一总部三基地
 * @Author: chenqy
 * @Date: 2020-03-05
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 19:23:15
 */
// 各区域规划面积
const qArea = (data, unit) => {
  let max = 0
  let y2 = []
  data.data.map(re => {
    max = max < re ? re : max
    y2.push(re + unit)
  })
  return {
    grid: {
      top: '10%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        show: false,
        type: 'value'
      }
    ],
    yAxis: [
      {
        type: 'category',
        data: data.xAxis,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#fff',
          fontSize: 17 * window.$rem
        }
      },
      {
        type: 'category',
        data: y2,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#F1D5A9',
          fontSize: 17 * window.$rem,
          margin: -20
        }
      }
    ],
    series: [
      {
        itemStyle: {
          barBorderRadius: 5 * window.$rem,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#5DD3F4'
            }, {
              offset: 1, color: '#4EB0F1 '
            }]
          }
        },
        z: 2,
        type: 'bar',
        barWidth: 10 * window.$rem,
        data: data.data
      },
      {
        itemStyle: {
          color: '#1C4458',
          barBorderRadius: 5 * window.$rem
        },
        barGap: '-100%',
        type: 'bar',
        barWidth: 10 * window.$rem,
        data: [max * 1.3, max * 1.3, max * 1.3, max * 1.3],
        z: 0
      }
    ]
  }
}
// 各区域规划面积占比
const qAreaRadio = (xdata, sdata, name, unit) => {
  return {
    color: ['#00B0E2', '#7EFFDB', '#FF7E00', '#23C768'],
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10 * window.$rem,
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: '{a} <br/>{b} : {c}' + unit + ' ({d}%)'
    },
    legend: {
      left: '70%',
      top: 'center',
      orient: 'vertical',
      itemGap: 20 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 17 * window.$rem
      },
      data: xdata.xAxis
    },
    series: [
      {
        name: name,
        type: 'pie',
        labelLine: {
          length: 10 * window.$rem,
          length2: 0
        },
        label: {
          show: false,
          formatter: '{d}%',
          color: '#fff',
          fontSize: 16 * window.$rem
        },
        radius: ['65%', '80%'],
        center: ['30%', '55%'],
        data: sdata
      }
    ]
  }
}
// 近一年规划面积情况
const yArea = (data, title, xname, flag) => {
  let p = []
  if (flag) {
    p = [0, 0, 0, 20 * window.$rem]
  } else {
    p = 0
  }
  return {
    title: {
      text: title,
      textStyle: {
        color: '#FCE62F',
        fontSize: 17 * window.$rem
      },
      top: 10 * window.$rem,
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10,
      textStyle: {
        fontSize: 17 * window.$rem
      },
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: '27%',
      left: '1.5%',
      right: '4%',
      bottom: '12%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: data.xAxis,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 15 * window.$rem,
          margin: 15 * window.$rem
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: xname,
        nameGap: 20 * window.$rem,
        nameTextStyle: {
          color: '#DFE2FD',
          fontSize: 14 * window.$rem,
          padding: p,
          margin: -7 * window.$rem
        },
        axisLabel: {
          color: '#fff',
          fontSize: 15 * window.$rem
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#2B2E3D',
            type: 'dashed'
          }
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#66F3FF'
          }
        }
      }
    ],
    series: [
      {
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#FF7E00'
            }, {
              offset: 1, color: '#FFC259'
            }]
          }
        },
        name: title,
        type: 'bar',
        barWidth: 20 * window.$rem,
        data: data.data
      }
    ]
  }
}
export {
  qArea,
  qAreaRadio,
  yArea
}
