import echarts from 'echarts'
// 行政权力事项分类情况
const power = (legend, data) => (
  {
    color: ['#006FEC', '#0291FF', '#00E1FC', '#07EA62', '#F3E509', '#F17A06', '#F01100', '#EE00A2', '#C200F3', '#5600F3'],
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10,
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      left: '45%',
      top: '5%',
      width: 250 * window.$rem,
      itemGap: 0 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      orient: 'horizontal',
      textStyle: {
        color: '#fff',
        fontSize: 15 * window.$rem,
        padding: 10 * window.$rem
      },
      data: legend
    },
    series: [
      {
        name: '行政权力事项分类情况',
        type: 'pie',
        center: ['20%', '50%'],
        radius: ['60%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: data
      }
    ]
  }
)
// 事项办理深度情况
// const things = (data) => {
//   return {
//     tooltip: {
//       trigger: 'axis',
//       backgroundColor: 'rgba(0,53,126,0.74)',
//       borderColor: '#44aaf4',
//       borderWidth: 2 * window.$rem,
//       padding: 10,
//       textStyle: {
//         fontSize: 17 * window.$rem
//       },
//       formatter: '{b1}: {c1}项'
//     },
//     grid: {
//       top: '13%',
//       left: '12%',
//       right: '12%',
//       bottom: '25%'
//     },
//     xAxis: {
//       data: data.xAxis,
//       offset: 25 * window.$rem,
//       axisTick: {
//         show: false
//       },
//       axisLine: {
//         show: false
//       },
//       axisLabel: {
//         show: true,
//         fontSize: 15 * window.$rem,
//         interval: 0,
//         color: '#fff'
//       }
//     },
//     yAxis: {
//       splitLine: {
//         show: false
//       },
//       axisTick: {
//         show: false
//       },
//       axisLine: {
//         show: false
//       },
//       axisLabel: {
//         show: false
//       }
//     },
//     series: [{
//       name: '模拟数据',
//       type: 'pictorialBar',
//       symbolSize: [30 * window.$rem, 6 * window.$rem],
//       symbolOffset: [0, -4 * window.$rem],
//       z: 12,
//       itemStyle: {
//         normal: {
//           color: '#09FEE5'
//         }
//       },
//       data: [{
//         value: data.data[0],
//         symbolPosition: 'end'
//       }, {
//         value: data.data[1],
//         symbolPosition: 'end'
//       }, {
//         value: data.data[2],
//         symbolPosition: 'end'
//       }],
//       emphasis: {
//         itemStyle: {
//           color: '#FFCFA8'
//         }
//       }
//     }, {
//       type: 'pictorialBar',
//       symbolSize: [30 * window.$rem, 9 * window.$rem],
//       symbolOffset: [0, 4 * window.$rem],
//       z: 12,
//       itemStyle: {
//         normal: {
//           color: '#09FEE5'
//         }
//       },
//       emphasis: {
//         itemStyle: {
//           color: '#FFCFA8'
//         }
//       },
//       data: data.data
//     }, {
//       type: 'bar',
//       itemStyle: {
//         normal: {
//           color: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 1,
//             y2: 0,
//             colorStops: [{
//               offset: 0, color: '#06FEED'
//             }, {
//               offset: 0.5, color: 'rgba(2,216,199,.2)'
//             }, {
//               offset: 1, color: '#06FEED'
//             }]
//           },
//           borderWidth: 2,
//           borderColor: '#09FEE5'
//         }
//       },
//       barWidth: 30 * window.$rem,
//       emphasis: {
//         itemStyle: {
//           borderColor: 'rgba(255,207,168,0.8)',
//           color: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 1,
//             y2: 0,
//             colorStops: [{
//               offset: 0, color: '#FF923D'
//             }, {
//               offset: 0.5, color: 'rgba(255,144,64,.2)'
//             }, {
//               offset: 1, color: '#FF923D'
//             }]
//           }
//         },
//         label: {
//           color: 'rgba(255,207,168,0.8)'
//         }
//       },
//       label: {
//         show: true,
//         position: 'top',
//         color: '#fff',
//         fontSize: 20 * window.$rem
//       },
//       data: data.data
//     }]
//   }
// }
// const things = (data) => {
//   let option = {
//     tooltip: {
//       trigger: 'item',
//       formatter: '{b} : {c} ({d}%)'
//     },
//     series: [{
//       name: '事项办理深度情况',
//       type: 'pie',
//       radius: '60%',
//       center: ['50%', '50%'],
//       color: ['#74CDFB', '#fce62f'], // '#FBFE27','rgb(11,228,96)','#FE5050'
//       data: data,
//       roseType: 'radius',

//       label: {
//         normal: {
//           formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
//           rich: {
//             c: {
//               color: '#fff',
//               fontSize: 15 * window.$rem,
//               fontWeight: 'bold'
//             },
//             b: {
//               color: '#fff',
//               fontSize: 15 * window.$rem
//             }
//           }
//         }
//       },
//       labelLine: {
//         normal: {
//           lineStyle: {
//             color: 'rgb(98,137,169)'
//           },
//           smooth: 0.2,
//           length: 10,
//           length2: 20

//         }
//       },
//       itemStyle: {
//         normal: {
//           shadowColor: 'rgba(0, 0, 0, 0.8)',
//           shadowBlur: 50
//         }
//       }
//     }]
//   }
//   return option
// }
// 电子监察
const monitor = (data) => {
  // 构造数据
  return {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10,
      formatter: '{b0}:<br>{a0}:{c0} 件<br>{a1}:{c1}件 <br>{a2}:{c2}件 ',
      textStyle: {
        fontSize: 17 * window.$rem
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '18%',
      left: '10%',
      right: '2%',
      bottom: '28%'
    },
    legend: {
      data: data.marks,
      itemGap: 20 * window.$rem,
      // top: 0,
      // left: 'right',
      itemWidth: 17 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 17 * window.$rem,
        padding: 10 * window.$rem
      }
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
          rotate: 25,
          interval: 0,
          margin: 30 * window.$rem,
          align: 'center'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(件)',
        nameTextStyle: {
          color: '#fff',
          algin: 'left',
          fontSize: 17 * window.$rem
        },
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
          fontSize: 15 * window.$rem
        },
        splitLine: {
          lineStyle: {
            color: '#2B2E3D',
            type: 'dashed'
          }
        }
      }
    ],
    series: [
      {
        name: data.marks[0],
        type: 'bar',
        barGap: 0,
        data: data.data[0],
        barWidth: 10 * window.$rem,
        itemStyle: {
          color: '#007EFB'
          // color: {
          //   type: 'linear',
          //   x: 0,
          //   y: 0,
          //   x2: 0,
          //   y2: 1,
          //   colorStops: [{
          //     offset: 0, color: '#FCB62F'
          //   }, {
          //     offset: 1, color: '#FCE62F'
          //   }]
          // }
        }
      },
      {
        name: data.marks[1],
        type: 'bar',
        data: data.data[1],
        barWidth: 10 * window.$rem,
        itemStyle: {
          color: '#FBE62F'
          // color: {
          //   type: 'linear',
          //   x: 0,
          //   y: 0,
          //   x2: 0,
          //   y2: 1,
          //   colorStops: [{
          //     offset: 0, color: '#7500F8'
          //   }, {
          //     offset: 1, color: '#6570FF'
          //   }]
          // }
        }
      },
      {
        name: data.marks[2],
        type: 'bar',
        data: data.data[2],
        barWidth: 10 * window.$rem,
        itemStyle: {
          color: '#07EA62'
          // color: {
          //   type: 'linear',
          //   x: 0,
          //   y: 0,
          //   x2: 0,
          //   y2: 1,
          //   colorStops: [{
          //     offset: 0, color: '#007EFB'
          //   }, {
          //     offset: 1, color: '#00E6FB'
          //   }]
          // }
        }
      },
      {
        name: data.marks[3],
        type: 'bar',
        data: data.data[3],
        barWidth: 10 * window.$rem,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#ED2409'
            }, {
              offset: 1, color: '#E55711'
            }]
          }
        }
      }
    ]
  }
}
// 事件情况--权力分类
const eventPower = (data) => {
  return {
    color: ['#006FEC', '#FBE62F', '#07EA62'],
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
        type: 'none'
      }
    },
    legend: {
      data: data.marks,
      icon: 'rect',
      top: '0',
      textStyle: {
        color: '#fff',
        fontSize: 17 * window.$rem,
        padding: [0, 5 * window.$rem]
      },
      itemWidth: 17 * window.$rem,
      itemHeight: 15 * window.$rem,
      itemGap: 15 * window.$rem
    },
    grid: {
      top: '18%',
      left: '8%',
      right: '2%',
      bottom: '18%'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: data.xAxis,
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#fff',
        fontSize: 15 * window.$rem,
        rotate: 15,
        margin: 15 * window.$rem
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      name: '(件)',
      nameTextStyle: {
        align: 'right',
        color: '#fff',
        fontSize: 15 * window.$rem
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
        color: '#fff',
        fontSize: 15 * window.$rem
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: data.marks[0],
        type: 'line',

        symbolSize: 8 * window.$rem,
        data: data.data[0]
      },
      {
        name: data.marks[1],
        type: 'line',
        symbolSize: 8 * window.$rem,
        data: data.data[1]
      },
      {
        name: data.marks[2],
        type: 'line',
        symbolSize: 8 * window.$rem,
        data: data.data[2]
      }
    ]
  }
}
// 事项办理深度情况
const eventDeep = (data) => {
  // let stock = 0
  // data.data[0].map(re => {
  //   stock += (re || 0)
  // })
  let indicator = []
  data.indicator.map(re => {
    indicator.push({
      name: re,
      max: 50000
    })
  })
  return {
    color: ['#007EFB', '#FBE62F'],
    tooltip: {
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10 * window.$rem,
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      right: '10%',
      top: '35%',
      width: 15 * window.$rem,
      itemWidth: 17 * window.$rem,
      itemHeight: 15 * window.$rem,
      itemGap: 30 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 15 * window.$rem,
        padding: [0, 10 * window.$rem]
      },
      data: [
        {name: data.marks[0], textStyle: {color: '#007EFB', fontSize: 20 * window.$rem}},
        {name: data.marks[1], textStyle: {color: '#FBE62F', fontSize: 20 * window.$rem}}
      ]
    },
    radar: {
      splitNumber: 3,
      radius: '60%',
      center: ['35%', '60%'],
      name: {
        textStyle: {
          color: '#fff',
          fontSize: 15 * window.$rem,
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      splitArea: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#45ACDA',
          type: 'dashed'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#45ACDA',
          type: 'dashed'
        }
      },
      indicator: indicator
    },
    series: [{
      name: '事项办理深度情况',
      type: 'radar',
      data: [
        {
          value: data.data[0],
          symbol: 'none',
          areaStyle: {
            color: 'rgba(86,173,227,.7)'
          },
          name: data.marks[0]
        },
        {
          value: data.data[1],
          symbol: 'none',
          areaStyle: {
            color: 'rgba(211,229,109,.7)'
          },
          name: data.marks[1]
        },
        {
          value: [50000, 50000, 50000, 50000, 50000],
          symbolSize: 8 * window.$rem
        }
      ]
    }]
  }
}
// 鼠标移入地图的某个区域显示饼图
const areaShow = (data, count) => {
  console.log(data)
  let option = {
    color: ['#FCE62F', '#0AD192', '#00B0E2'],
    tooltip: {
      show: false,
      trigger: 'item',
      backgroundColor: 'transparent',
      textStyle: {
        fontSize: 15 * window.$rem
      },
      formatter: '{c}件'
    },
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    legend: {
      orient: 'vertical',
      right: 10 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 17 * window.$rem,
        fontWeight: 'bold',
        rich: {
          percent: {
            color: '#FCE62F',
            fontSize: 17 * window.$rem
          }
        }
      },
      top: 'center',
      icon: 'rect',
      itemGap: 25 * window.$rem,
      formatter: function (name) {
        let str = ''
        data.forEach(function (item, index) {
          if (name === item.name) {
            let percent = (item.value / count * 100).toFixed(2) + '%'
            str += name + ':' + '(' + parseFloat(+item.value).toLocaleString() + '件' + ')' + '  ' + '{percent|' + percent + '}'
          }
        })
        return str
      },
      data: ['办结量', '受理量', '申请量']
    },
    series: [
      {
        name: '总体情况',
        type: 'pie',
        radius: '65%',
        center: ['25%', 'center'],
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: data
      }
    ]
  }
  return option
}
let blueOpt = {
  tooltip: {
    trigger: 'axis',
    // axisPointer: {
    //   type: 'cross'
    // },
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: [10, 20],
    textStyle: {
      fontSize: 17 * window.$rem
    },
    formatter: '{b}: <br/>{c}'
  },
  // legend: {
  //   data: ['社会安全事件', '直接经济损失'],
  //   textStyle: {
  //     color: '#fff'
  //   }
  // },
  grid: {
    top: '20%',
    bottom: '20%',
    right: '2%'
  },
  xAxis: [
    {
      type: 'category',
      data: ['入室盗窃', '抢劫', '遗失', '诈骗', '遗弃'],
      axisPointer: {
        type: 'shadow',
        showStyle: {
          shadowColor: '#00357E'
        }
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        fontSize: 16 * window.$rem,
        color: '#fff',
        interval: 0,
        rotate: 40,
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
      name: '(万起)',
      nameLocation: 'end',
      nameTextStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem,
        align: 'right',
        padding: [0, 0, 8 * window.$rem, 0]
      },
      axisLabel: {
        formatter: '{value}',
        fontSize: 16 * window.$rem,
        color: '#fff'
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
    }
  ],
  series: [
    {
      name: '',
      type: 'bar',
      // yAxisIndex: 0,
      showSymbol: false,
      barWidth: 21 * window.$rem,
      smooth: true,
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
      },
      data: [115, 100, 80, 60, 50]
    }
  ]
}
let rainbowOpt = {
  tooltip: {
    trigger: 'axis',
    // axisPointer: {
    //   type: 'cross'
    // },
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: [10, 20],
    textStyle: {
      fontSize: 17 * window.$rem
    }
  },
  // legend: {
  //   data: ['社会安全事件', '直接经济损失'],
  //   textStyle: {
  //     color: '#fff'
  //   }
  // },
  grid: {
    top: '20%',
    bottom: '20%'
  },
  xAxis: [
    {
      type: 'category',
      data: ['入室盗窃', '抢劫', '遗失', '诈骗', '遗弃'],
      axisPointer: {
        type: 'shadow',
        showStyle: {
          shadowColor: '#00357E'
        }
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        fontSize: 16 * window.$rem,
        color: '#fff',
        interval: 0,
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
      nameLocation: 'end',
      nameTextStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem,
        align: 'right',
        padding: [0, 0, 8 * window.$rem, 0]
      },
      axisLabel: {
        formatter: '{value}',
        fontSize: 16 * window.$rem,
        color: '#fff'
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
    }
  ],
  series: [
    {
      name: '',
      type: 'bar',
      // yAxisIndex: 0,
      showSymbol: false,
      barWidth: 21 * window.$rem,
      smooth: true,
      itemStyle: {
        color: function (params) {
          var colorList = [
            ['#EC2D0B', '#F56B38'],
            ['#FCE12F', '#FBEE81'],
            ['#00C285', '#51E8C6'],
            ['#007EFB', '#00E6FB']
          ]
          var index = 0
          if (params.dataIndex >= 3) {
            index = 3
          } else {
            index = params.dataIndex
          }
          return new echarts.graphic.LinearGradient(0, 0, 0, 1,
            [{
              offset: 0,
              color: colorList[index][0]
            },
            {
              offset: 1,
              color: colorList[index][1]
            }
            ])
        }
      },
      data: [115, 100, 80, 60, 50]
    }
  ]
}
export {
  power,
  monitor,
  eventPower,
  eventDeep,
  areaShow,
  blueOpt,
  rainbowOpt
}
