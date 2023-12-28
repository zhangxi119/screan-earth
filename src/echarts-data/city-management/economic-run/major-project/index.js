// 项目类型情况 --- 项目数
const projectType = (data, name, unit) => {
  console.log(data)
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: '{b}<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#006FEC"></span>{a}: {c}个',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10 * window.$rem,
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    grid: {
      top: '15%',
      left: '1%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: data.xAxis,
        offset: 10 * window.$rem,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 15 * window.$rem,
          formatter: function (value) {
            let j = value.split('')
            for (let i = 4; i < j.length; i += 5) {
              j.splice(i, 0, '\n')
            }
            return j.join('')
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(个)',
        nameTextStyle: {
          color: '#DFE2FD',
          fontSize: 14 * window.$rem,
          align: 'right'
        },
        max: data.yMax,
        axisLabel: {
          color: '#fff',
          fontSize: 12 * window.$rem
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
              offset: 0, color: '#007EFB'
            }, {
              offset: 1, color: '#00B6E3'
            }]
          }
        },
        name: '项目数',
        type: 'bar',
        barWidth: 20 * window.$rem,
        data: data.number
      }
    ]
  }
}
// 项目类型情况 --- 总投金额
const projectTypeMoney = (data, name) => {
  let series = []
  let color = {money1: '#007EFB', money2: '#FBE62F', money3: '#07EA62', percentage1: '#F95800', percentage2: '#805DFF'}
  let names = {money1: '总投资金额', money2: '2020计划投资', money3: '2020完成投资', percentage1: '计划投资占比', percentage2: '完成投资占比'}
  for (let k in data) {
    if (k !== 'xAxis') {
      if (k.indexOf('money') !== -1) {
        series.push({
          itemStyle: {
            color: color[k]
          },
          name: names[k],
          type: 'bar',
          barWidth: 10 * window.$rem,
          data: data[k],
          userData: '万元'
        })
      } else {
        series.push({
          itemStyle: {
            color: color[k]
          },
          yAxisIndex: 1,
          symbolSize: 8 * window.$rem,
          name: names[k],
          type: 'line',
          symbol: 'circle',
          data: data[k],
          userData: '%'
        })
      }
    }
  }
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (param) {
        let html = param[0].axisValue + '<br />'
        for (let i = 0; i < param.length; i++) {
          let unit = (param[i].componentSubType === 'line' ? '%' : '万元')
          let mk = '<span style="display:inline-block;margin-right:0.05rem;border-radius:0.1rem;width:0.1rem;height:0.1rem;background-color:' + param[i].color + '"></span>'
          html += '<div>' + mk + ' ' + param[i].seriesName + ': ' + '<span style="color: #FCE62F;">' + param[i].data + '</span>' + unit + '</div>'
        }
        return html
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10 * window.$rem,
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    grid: {
      top: '17%',
      left: '1%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: data.xAxis,
        offset: 10 * window.$rem,
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          interval: 0,
          color: '#fff',
          fontSize: 15 * window.$rem,
          formatter: function (value) {
            let j = value.split('')
            for (let i = 4; i < j.length; i += 5) {
              j.splice(i, 0, '\n')
            }
            return j.join('')
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(万元)',
        nameTextStyle: {
          color: '#DFE2FD',
          fontSize: 14 * window.$rem,
          align: 'right'
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
          lineStyle: {
            color: '#66F3FF'
          }
        }
      },
      {
        type: 'value',
        name: '(%)',
        nameTextStyle: {
          color: '#DFE2FD',
          fontSize: 14 * window.$rem,
          align: 'left'
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
          lineStyle: {
            color: '#66F3FF'
          }
        }
      }
    ],
    series: series
  }
}
// 建设批次
const working = (data) => {
  let all = 0
  data.data.map(re => {
    all += re
  })
  return {
    tooltip: {
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10 * window.$rem,
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: '{b}: {c}个'
    },
    color: ['#00B0E2', '#0AD192', '#FCE62F'],
    // title: [{
    //   text: '建设批次',
    //   textStyle: {
    //     color: '#fff',
    //     fontSize: 20 * window.$rem
    //   },
    //   top: '45%',
    //   left: '20%'
    // }, {
    //   text: all,
    //   textStyle: {
    //     color: '#fff',
    //     fontSize: 20 * window.$rem
    //   },
    //   top: '35%',
    //   left: '25%'
    // }, {
    //   text: '项',
    //   textStyle: {
    //     color: '#fff',
    //     fontSize: 20 * window.$rem
    //   },
    //   top: '58%',
    //   left: '26%'
    // }],
    legend: {
      left: '60%',
      top: 'center',
      data: data.xAxis,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 17 * window.$rem,
        padding: 10 * window.$rem
      },
      orient: 'vertical',
      itemGap: 20 * window.$rem,
      formatter: function (name) {
        let names = ''
        if (name === '加快前期') {
          names = name + ': ' + (data.data[0] / all * 100).toFixed(0) + '%'
        } else if (name === '新开工') {
          names = name + ': ' + (data.data[1] / all * 100).toFixed(0) + '%'
        } else {
          names = name + ': ' + (data.data[2] / all * 100).toFixed(0) + '%'
        }
        return names
      }
    },
    series: [
      {
        name: '建设批次',
        type: 'pie',
        radius: ['50%', '63%'],
        center: ['30%', '50%'],
        label: {
          show: false
        },
        // emphasis: {
        //   label: {
        //     show: true,
        //     formatter: '{d}%',
        //     textStyle: {
        //       color: '#fff',
        //       fontSize: 16.5 * window.$rem
        //     }
        //   }
        // },
        data: [
          {value: data.data[0],
            name: data.xAxis[0],
            id: data.xAxisId[0],
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#005DFF' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#00FFE7' // 100% 处的颜色
                  }]
                }
              }
            }},
          {value: data.data[1],
            name: data.xAxis[1],
            id: data.xAxisId[1],
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#23C768' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#7BFB6E' // 100% 处的颜色
                  }]
                }
              }
            }},
          {value: data.data[2],
            name: data.xAxis[2],
            id: data.xAxisId[2],
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: '#FCB62F' // 0% 处的颜色
                  }, {
                    offset: 1, color: '#FCE62F' // 100% 处的颜色
                  }]
                }
              }
            }}
        ]
      }
    ]
  }
}
// 月度计划完成情况
const monthPlanBar = (data, xaxis) => {
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
      formatter: '{b}<br/>{a}: {c}个'
    },
    grid: {
      top: '15%',
      left: '1.5%',
      right: '4%',
      bottom: '20%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xaxis,
        offset: 20 * window.$rem,
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
          interval: 0,
          formatter: function (value) {
            let j = value.split('')
            for (let i = 4; i < j.length; i += 5) {
              j.splice(i, 0, '\n')
            }
            return j.join('')
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: '#DFE2FD',
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
        name: 'title',
        type: 'bar',
        barWidth: 20 * window.$rem,
        data: data
      }
    ]
  }
}
const monthPlanPie1 = (data) => {
  return {
    tooltip: {
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10 * window.$rem,
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: '{b}金额: {c}万元'
    },
    legend: {
      left: '50%',
      top: '35%',
      data: ['完成投资金额', '未完成投资金额'],
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 17 * window.$rem,
        padding: [0, 5 * window.$rem]
      },
      orient: 'vertical',
      itemGap: 30 * window.$rem,
      formatter: function (name) {
        let num = 0
        if (name === '完成投资金额') {
          num = (data.value / data.total * 100).toFixed(0)
        } else {
          num = ((data.total - data.value) / data.total * 100).toFixed(0)
        }
        return name + ': ' + num + '%'
      }
    },
    'series': [{
      'type': 'pie',
      'center': ['23%', '55%'],
      'radius': ['65%', '80%'],
      label: {
        show: false
      },
      'data': [{
        'name': '完成投资金额',
        'value': data.value,
        'itemStyle': {
          'normal': {
            'color': {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#007EFB' // 0% 处的颜色
              }, {
                offset: 1, color: '#00B6E3' // 100% 处的颜色
              }]
            }
          }
        }
      }, {
        name: '未完成投资金额',
        value: data.total - data.value,
        label: {
          show: false
        },
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#FCB62F'
            }, {
              offset: 1, color: '#FCE62F'
            }]
          }
        },
        labelLine: {
          show: false
        }
      }
      ]
    }]
  }
}
// 项目详情echart图
const projectMove = (data) => {
  let seriesData = []
  let xAxis = []
  data.map(re => {
    seriesData.push({value: re.value, userData: re.proportion})
    xAxis.push(re.name)
  })
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
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
      left: '25%',
      right: '10%',
      bottom: '10%',
      top: '2%'
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        color: '#fff',
        fontSize: 15 * window.$rem,
        margin: 15 * window.$rem
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
        lineStyle: {
          color: 'rgba(10,209,146,.2)',
          type: 'dashed'
        }
      }
    },
    yAxis: {
      type: 'category',
      axisLabel: {
        color: '#fff',
        fontSize: 15 * window.$rem,
        interval: 0,
        formatter: function (name) {
          let n = name.split('')
          if (n.length > 7) {
            n.splice(6, 0, '\n')
          }
          return n.join('')
        }
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
        lineStyle: {
          color: '#2B2E3D',
          type: 'dashed'
        }
      },
      data: xAxis
    },
    series: [
      {
        type: 'bar',
        itemStyle: {
          color: '#0AD192'
        },
        label: {
          show: true,
          position: 'right',
          fontSize: 15 * window.$rem,
          color: '#fff',
          formatter: function (param) {
            return param.value + '个'
          }
        },
        barWidth: 15 * window.$rem,
        data: seriesData
      }
    ]
  }
}
export {
  projectType,
  working,
  monthPlanBar,
  monthPlanPie1,
  projectTypeMoney,
  projectMove
}
