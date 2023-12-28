/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-10 10:27:37
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-19 11:56:52
 */
let option = {
  tooltip: {
    trigger: 'axis',
    // axisPointer: {
    //   type: 'cross',
    //   crossStyle: {
    //     color: '#999'
    //   },
    //   label: {
    //     fontSize: 14 * window.$rem
    //   }
    // },
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: [10, 20],
    textStyle: {
      fontSize: 17 * window.$rem
    },
    formatter: function (data) {
      let str = ''
      if (data.length > 0) {
        for (let i of data) {
          switch (i.seriesIndex) {
            case 0:
              str += `${i.seriesName} :${i.value} 起<br>`
              break

            case 1:
              let unit = i.seriesName === '伤亡数量' ? '人' : '万元'
              str += `${i.seriesName} :${i.value} ${unit}<br>`
              break
            default:
              str += ''
          }
        }
      }
      return str
    }
  },
  color: [
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0, color: '#E55711' // 0% 处的颜色
      }, {
        offset: 1, color: '#FA7D3F' // 100% 处的颜色
      }],
      globalCoord: false // 缺省为 false
    }, {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0, color: '#FFD200' // 0% 处的颜色
      }, {
        offset: 1, color: '#F2D85D' // 100% 处的颜色
      }],
      globalCoord: false // 缺省为 false
    }, {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0, color: '#007EFB' // 0% 处的颜色
      }, {
        offset: 1, color: '#00B6E3' // 100% 处的颜色
      }],
      globalCoord: false // 缺省为 false
    },
    {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0, color: '#52BAF2' // 0% 处的颜色
      }, {
        offset: 1, color: '#00B6E3' // 100% 处的颜色
      }],
      globalCoord: false // 缺省为 false
    }, {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [{
        offset: 0, color: '#52BAF2' // 0% 处的颜色
      }, {
        offset: 1, color: '#00B6E3' // 100% 处的颜色
      }],
      globalCoord: false // 缺省为 false
    }
  ],
  grid: {
    top: '20%',
    bottom: '20%'
  },
  legend: {
    show: true,
    data: ['事件数量', '经济损失'],
    //  icon: 'rect',
    textStyle: {
      color: '#fff',
      fontSize: 17 * window.$rem
    }
  },
  xAxis: [
    {
      type: 'category',
      data: ['汛灾', '内涝', '森林火灾', '流感', '爆炸'],
      axisPointer: {
        type: 'shadow'
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        fontSize: 16 * window.$rem,
        color: '#fff',
        padding: [5 * window.$rem, 0 * window.$rem, 2 * window.$rem, 0 * window.$rem]
      },
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '(起)',
      splitNumber: 5,
      nameLocation: 'end',
      nameTextStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem,
        align: 'right',
        padding: [0, 0, 8 * window.$rem, 0]
      },
      axisLabel: {
        // formatter: '{value}',
        fontSize: 16 * window.$rem,
        color: '#fff',
        formatter: function (params) {
          var val = ''
          if (params.length > 4) {
            val = params.substr(0, 4) + '...'
            return val
          } else {
            return params
          }
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      },
      splitLine: {
        show: false
      }
    },
    {
      type: 'value',
      name: '(万)',
      splitNumber: 5,
      nameLocation: 'end',
      nameTextStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem,
        align: 'left',
        padding: [0, 0, 8 * window.$rem, 0]
      },
      axisLabel: {
        // formatter: '{value}',
        fontSize: 16 * window.$rem,
        color: '#fff',
        formatter: function (params) {
          var val = ''
          if (params.length > 4) {
            val = params.substr(0, 4) + '...'
            return val
          } else {
            return params
          }
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(102, 243, 255, 0.5)',
          type: 'dotted'
        }
      }
    }
  ],
  series: [
    {
      name: '事件数量',
      type: 'bar',
      barWidth: 21 * window.$rem,
      data: [
        {
          value: 3.4,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#E55711' // 0% 处的颜色
              }, {
                offset: 1, color: '#FA7D3F' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        },
        {
          value: 8.4,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#FFD200' // 0% 处的颜色
              }, {
                offset: 1, color: '#F2D85D' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        },
        {
          value: 18.4,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#007EFB' // 0% 处的颜色
              }, {
                offset: 1, color: '#00B6E3' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        },
        {
          value: 6.4,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#52BAF2' // 0% 处的颜色
              }, {
                offset: 1, color: '#00B6E3' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        },

        {
          value: 2.4,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#52BAF2' // 0% 处的颜色
              }, {
                offset: 1, color: '#00B6E3' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        }
      ]
    },
    {
      name: '经济损失',
      type: 'line',
      yAxisIndex: 1,
      showSymbol: false,
      smooth: true,
      symbol: 'circle',
      itemStyle: {
        color: '#2EE2B1'
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3]
    }
  ]
}
export default option
