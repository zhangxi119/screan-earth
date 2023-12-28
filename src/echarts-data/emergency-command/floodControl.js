/*
 * @Descripttion:
 * @Author: chenqy
 * @Date: 2020-04.26
 * @LastEditors: chenqy
 * @LastEditTime: 2020-04.26
 */
// 点位降水统计
const water = (data) => {
  let xdata = []
  let sdata = []
  for (let i = 0; i < 10; i++) {
    xdata.push(data[i].jc02003)
    sdata.push(data[i].jc04004)
  }
  return {
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
      }
    },
    grid: {
      top: '20%',
      left: '2%',
      right: '4%',
      bottom: '-10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xdata,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#4396A5'
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 15 * window.$rem,
          margin: 30 * window.$rem,
          interval: 0,
          rotate: 25,
          align: 'center',
          formatter: function (name) {
            let j = name.split('')
            j.splice(4, 0, '\n')
            return j.join('')
          }
        }
      }
    ],
    yAxis: [
      {
        name: '(mm)',
        nameGap: 20 * window.$rem,
        nameTextStyle: {
          color: '#DFE2FD',
          fontSize: 14 * window.$rem,
          align: 'left'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#fff',
          fontSize: 15 * window.$rem,
          margin: 15 * window.$rem
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#274A53'
          }
        },
        type: 'value'
      }
    ],
    series: [
      {
        name: '降水量',
        type: 'bar',
        barWidth: 20 * window.$rem,
        itemStyle: {
          color: '#79F5D3'
        },
        data: sdata
      }
    ]
  }
}
// 转移安置点
const move = (data) => {
  let data1 = []
  let xAxis = []
  data.map(re => {
    xAxis.push(re.zh03001)
    data1.push(re.zh03002)
  })
  return {
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
      left: '5%',
      right: '5%',
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
          fontSize: 14 * window.$rem,
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
            color: '#30BDFF'
          }
        },
        data: data1
      }
    ]
  }
}
// 主要河流水位情况
const mainWater = (data) => {
  let xdata = []
  let sdata = []
  let jj = []
  let bz = []
  let min = 999
  let max = data[0] ? data[0].fx05009 : 0
  data.reverse()
  data.map(re => {
    xdata.push(re.sj)
    sdata.push(re.sw)
    min = min < (+re.sw) ? min : +re.sw
    jj.push(re.fx05006)
    bz.push(re.fx05009)
  })
  return {
    color: ['', '#FCE62F', '#EA1A1A'],
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
      }
    },
    legend: {
      left: '70%',
      icon: 'rect',
      itemWidth: 15 * window.$rem,
      itemHeight: 5 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 15 * window.$rem,
        padding: 8 * window.$rem
      },
      data: ['保证线', '警戒线']
    },
    grid: {
      left: '0',
      right: '5%',
      bottom: '7%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xdata,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#4396A5'
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 15 * window.$rem,
          margin: 15 * window.$rem,
          interval: 0,
          align: 'center',
          formatter: function (name) {
            return name.replace(' ', '\n')
          }
        },
        boundaryGap: false
      }
    ],
    yAxis: [
      {
        name: '(m)',
        min: min - 1.5,
        max: ~~((+max) + 3),
        nameGap: 5 * window.$rem,
        nameTextStyle: {
          color: '#DFE2FD',
          fontSize: 14 * window.$rem,
          align: 'right'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#fff',
          fontSize: 15 * window.$rem,
          margin: 15 * window.$rem
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#274A53'
          }
        },
        type: 'value'
      }
    ],
    series: [
      {
        name: '水位线',
        type: 'line',
        showSymbol: false,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#37BFFF' // 0% 处的颜色
            }, {
              offset: 1, color: 'transparent' // 100% 处的颜色
            }]
          }
        },
        lineStyle: {
          width: 3 * window.$rem,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'transparent'
            }, {
              offset: 0.2, color: '#36BFFE'
            }, {
              offset: 0.9, color: '#36BFFE'
            }, {
              offset: 1, color: 'transparent'
            }]
          }
        },
        data: sdata
      },
      {
        name: '警戒线',
        type: 'line',
        showSymbol: false,
        lineStyle: {
          color: '#FCE62F',
          width: 1 * window.$rem
        },
        data: jj
      },
      {
        name: '保证线',
        type: 'line',
        showSymbol: false,
        lineStyle: {
          color: '#EA1A1A',
          width: 1 * window.$rem
        },
        data: bz
      }
    ]
  }
}
export {
  water,
  move,
  mainWater
}
