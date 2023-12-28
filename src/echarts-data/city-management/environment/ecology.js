/*
 * @Descripttion: 生态环境
 * @Author: chenqy
 * @Date: 2020-03-05
 * @LastEditors: chenqy
 * @LastEditTime: 2020-03-05
 */
const img = require('@/assets/city-management/economic-run/three-base/point.png')
// 空气质量实时状况
const airQuelity = (data, color) => (
  {
    legend: {
      show: false,
      itemGap: 20 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 17 * window.$rem
      }
    },
    series: [
      {
        type: 'pie',
        radius: ['70%', '84%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center',
            fontSize: 14 * window.$rem
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          color: color
        },
        data: [
          {
            value: 335,
            name: '直接访问',
            label: {
              show: true,
              position: 'center',
              color: '#fff',
              fontSize: 38 * window.$rem,
              fontWeight: 'bold',
              formatter: data
            }
          }
        ]
      }
    ]
  }
)
// 优良天数完成情况
const goodDays = {
  title: {
    top: '40%',
    left: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 18 * window.$rem
    }
  },
  'series': [{
    'type': 'pie',
    'center': ['50%', '50%'],
    'radius': ['70%', '85%'],
    'hoverAnimation': false,
    'data': [{
      'name': '',
      'value': 40,
      'itemStyle': {
        'normal': {
          'color': {
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
      },
      label: {
        'show': true,
        'position': 'center',
        'color': '#fff',
        'fontSize': 38 * window.$rem,
        'fontWeight': 'bold',
        'formatter': '80'
      },
      labelLine: {
        show: false,
        emphasis: {
          show: false
        }
      }
    },
    { // 画中间的图标
      'name': '',
      'value': 0,
      'label': {
        position: 'inside',
        backgroundColor: {
          image: img
        },
        width: 10 * window.$rem,
        height: 10 * window.$rem,
        borderRadius: 10 * window.$rem,
        padding: 15 * window.$rem
      }
    }, { // 画剩余的刻度圆环
      'name': '',
      'value': 50 - 40,
      'label': {
        show: false
      },
      labelLine: {
        show: false,
        emphasis: {
          show: false
        }
      }
    }
    ]
  }]
}
// PM2.5目标完成情况
// 国省考断面水质年达标情况
const yearRates = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: 10 * window.$rem,
    textStyle: {
      fontSize: 17 * window.$rem
    },
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    },
    formatter: '{b}<br />达标情况：{c}%'
  },
  grid: {
    top: '20%',
    left: '1.5%',
    right: '4%',
    bottom: 0,
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['总部经济区', '五通桥基地', '犍为基地', '夹江基地'],
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
        margin: 10 * window.$rem
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '(%)',
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
      name: '国考断面水质达标情况',
      type: 'bar',
      barWidth: 20 * window.$rem,
      data: [10, 52, 200, 334]
    }
  ]
}
// 国/省考断面水质达标情况
const waterRates = {
  color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: 10 * window.$rem,
    textStyle: {
      fontSize: 17 * window.$rem
    },
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    },
    formatter: '{b}<br />达标情况：{c}%'
  },
  grid: {
    top: '20%',
    left: '1.5%',
    right: '4%',
    bottom: 0,
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['总部经济区', '五通桥基地', '犍为基地', '夹江基地'],
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
        margin: 10
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: '#fff',
        fontSize: 15 * window.$rem
      },
      name: '(%)',
      nameTextStyle: {
        color: '#DFE2FD',
        fontSize: 14 * window.$rem,
        align: 'right'
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
      name: '省考断面水质达标情况',
      type: 'bar',
      barWidth: 20 * window.$rem,
      data: [10, 52, 200, 334]
    }
  ]
}
// 疑似污染块年趋
const pollution = (data) => {
  return {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: '污染块数量<br /><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#00A2B1"></span>{b0}年：{c0}个',
      padding: 10 * window.$rem
    },
    grid: {
      top: '12%',
      left: '10%',
      right: '10%',
      bottom: '17%'
    },
    xAxis: {
      data: data.xAxis,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        fontSize: 15 * window.$rem,
        margin: 23 * window.$rem,
        interval: 0,
        color: '#fff'
      }
    },
    yAxis: {
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    series: [
      {
        type: 'pictorialBar',
        symbolSize: [30 * window.$rem, 6 * window.$rem],
        symbolOffset: [0, -4 * window.$rem],
        z: 12,
        itemStyle: {
          normal: {
            color: '#09FEE5'
          }
        },
        data: [{
          value: data.data[0],
          symbolPosition: 'end'
        }, {
          value: data.data[1],
          symbolPosition: 'end'
        }, {
          value: data.data[2],
          symbolPosition: 'end'
        }],
        emphasis: {
          itemStyle: {
            color: '#FFCFA8'
          }
        }
      }, {
        type: 'pictorialBar',
        symbolSize: [30 * window.$rem, 9 * window.$rem],
        symbolOffset: [0, 4 * window.$rem],
        z: 12,
        itemStyle: {
          normal: {
            color: '#09FEE5'
          }
        },
        emphasis: {
          itemStyle: {
            color: '#FFCFA8'
          }
        },
        data: data.data
      }, {
        type: 'bar',
        itemStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: '#06FEED'
              }, {
                offset: 0.5, color: 'rgba(2,216,199,.2)'
              }, {
                offset: 1, color: '#06FEED'
              }]
            },
            borderWidth: 2 * window.$rem,
            borderColor: '#09FEE5'
          }
        },
        barWidth: 30 * window.$rem,
        emphasis: {
          itemStyle: {
            borderColor: 'rgba(255,207,168,0.8)',
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: '#FF923D'
              }, {
                offset: 0.5, color: 'rgba(255,144,64,.2)'
              }, {
                offset: 1, color: '#FF923D'
              }]
            }
          },
          label: {
            color: 'rgba(255,207,168,0.8)'
          }
        },
        label: {
          show: true,
          position: 'top',
          color: '#fff',
          fontSize: 20 * window.$rem
        },
        data: data.data
      }]

  }
}
// 功能区声环境达标情
const voice = (data) => {
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
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (param) {
        let str = `<div>${param[0].name}</div>`
        for (var i = 0; i < param.length; i++) {
          str += `<div>${param[i].seriesName}：${param[i].value}%</div>`
        }
        return str
      }
    },
    legend: {
      left: '70%',
      top: '0',
      data: data.marks,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 17 * window.$rem,
        padding: 10 * window.$rem
      },
      itemGap: 15 * window.$rem
    },
    grid: {
      top: '20%',
      left: '1.5%',
      right: '4%',
      bottom: 0,
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
          margin: 10 * window.$rem
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: '#fff',
          fontSize: 15 * window.$rem
        },
        name: '(%)',
        nameTextStyle: {
          color: '#DFE2FD',
          fontSize: 14 * window.$rem,
          align: 'right'
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
        name: data.marks[0],
        type: 'bar',
        barWidth: 20 * window.$rem,
        data: data.data[0]
      },
      {
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#42EC99'
            }, {
              offset: 1, color: '#46EC92'
            }]
          }
        },
        name: data.marks[1],
        type: 'bar',
        barWidth: 20 * window.$rem,
        data: data.data[1]
      }
    ]
  }
}
// 污染源
const progress = (max, min) => {
  return {
    xAxis: {
      max: max,
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    },
    yAxis: [{
      type: 'category',
      inverse: false,
      data: [min],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      }
    }],
    series: [
      {
        type: 'pictorialBar',
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: 2 * window.$rem,
        symbol: 'rect',
        symbolSize: [6 * window.$rem, 14 * window.$rem],
        itemStyle: {
          normal: {
            color: '#4A729D'
          }
        },
        data: [max],
        z: 0
      },
      {
        // 分隔
        type: 'pictorialBar',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: '#07EAFB' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#378DF2' // 100% 处的颜色
            }
            ]
          }
        },
        symbolRepeat: 'fixed',
        symbolMargin: 2 * window.$rem,
        symbol: 'rect',
        symbolClip: true,
        symbolSize: [6 * window.$rem, 14 * window.$rem],
        symbolPosition: 'start',
        data: [min],
        z: 2
      }
    ]
  }
}
// 重点污染源企业
const companys = (data) => {
  return {
    color: ['#0291FF', '#07EA62', '#F3E509', '#09FEE5'],
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10 * window.$rem,
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal',
      left: '48%',
      top: '20%',
      itemGap: 15 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 16 * window.$rem,
        padding: [0, 15 * window.$rem]
      },
      formatter: function (name) {
        console.log(name)
        let names = ''
        if (name === '土壤环境排污') {
          names = name + ': ' + data.zy10004
        } else if (name === '水环境排污') {
          names = name + ': ' + data.zy10003
        } else if (name === '大气环境排污') {
          names = name + ': ' + data.zy10002
        } else {
          names = name + ': ' + data.zy10006
        }
        return names
      },
      data: ['土壤环境排污', '水环境排污', '大气环境排污', '其他排污']
    },
    series: [
      {
        name: '',
        type: 'pie',
        center: ['25%', '50%'],
        radius: ['55%', '70%'],
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
        data: [
          {value: data.zy10004, name: '土壤环境排污'},
          {value: data.zy10003, name: '水环境排污'},
          {value: data.zy10002, name: '大气环境排污'},
          {value: data.zy10006, name: '其他排污'}
        ]
      }
    ]
  }
}
// 危险废物处置情况
const dangerous = (data) => {
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
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: function (param) {
        let str = `<div>${param[0].name}</div>`
        for (var i = 0; i < param.length; i++) {
          str += `<div>${param[i].seriesName}: ${param[i].value}吨</div>`
        }
        return str
      }
    },
    grid: {
      top: '27%',
      left: '1%',
      right: '4%',
      bottom: '5%',
      containLabel: true
    },
    legend: {
      top: '8%',
      data: data.marks,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 16 * window.$rem,
        padding: [0, 10 * window.$rem]
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
          margin: 10 * window.$rem
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(吨)',
        nameGap: 20 * window.$rem,
        nameTextStyle: {
          color: '#DFE2FD',
          fontSize: 14 * window.$rem,
          align: 'right',
          margin: [-3 * window.$rem]
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
              offset: 0, color: '#7500F8'
            }, {
              offset: 1, color: '#6570FF'
            }]
          }
        },
        name: data.marks[0],
        type: 'bar',
        barWidth: 20 * window.$rem,
        stack: 1,
        data: data.data[0]
      },
      {
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
        name: data.marks[1],
        type: 'bar',
        barWidth: 20 * window.$rem,
        stack: 1,
        data: data.data[1]
      },
      {
        itemStyle: {
          color: '#6EDEB4'
        },
        name: data.marks[2],
        type: 'bar',
        barWidth: 20 * window.$rem,
        stack: 1,
        data: data.data[2]
      }
    ]
  }
}
// 行政执法
const enforceNum = {
  legend: {
    show: false,
    itemGap: 20 * window.$rem,
    textStyle: {
      color: '#fff',
      fontSize: 17 * window.$rem
    }
  },
  series: [
    {
      type: 'pie',
      center: ['40%', '50%'],
      radius: ['70%', '85%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center',
          fontSize: 15 * window.$rem
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#292398'
          }, {
            offset: 1, color: '#01B4FF'
          }]
        }
      },
      data: [
        {value: 335, name: '直接访问'}
      ]
    }
  ]
}
// 年度趋势
const enforceLaw = (data) => {
  return {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10,
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: function (param) {
        let html = param[0].axisValue + '<br />'
        param.map((re, index) => {
          let unit = index === 0 ? '件' : '万元'
          html += `${re.seriesName} : <span style="color: #FCE62F">${re.value}</span>${unit}<br />`
        })
        return html
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: data.marks,
      left: 'right',
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 16 * window.$rem,
        padding: 10 * window.$rem
      }
    },
    grid: {
      top: '25%',
      left: '1.5%',
      right: '4%',
      bottom: 0,
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
          lineHeight: 20 * window.$rem
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(件)',
        nameGap: 20 * window.$rem,
        nameTextStyle: {
          color: '#DFE2FD',
          fontSize: 14 * window.$rem,
          align: 'right',
          margin: [-3 * window.$rem]
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
      }, {
        type: 'value',
        name: '(万元)',
        nameGap: 20 * window.$rem,
        nameTextStyle: {
          color: '#DFE2FD',
          align: 'left',
          fontSize: 14 * window.$rem,
          margin: [-3 * window.$rem, 0]
        },
        axisLabel: {
          color: '#fff',
          fontSize: 15 * window.$rem
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
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
              offset: 0, color: '#007EFB'
            }, {
              offset: 1, color: '#00B6E3'
            }]
          }
        },
        name: data.marks[0],
        type: 'bar',
        barWidth: 20 * window.$rem,
        data: data.data[0]
      },
      {
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#42EC99'
            }, {
              offset: 1, color: '#46EC92'
            }]
          }
        },
        name: data.marks[1],
        type: 'line',
        symbolSize: 8 * window.$rem,
        symbol: 'circle',
        barWidth: 20 * window.$rem,
        yAxisIndex: 1,
        data: data.data[1]
      }
    ]
  }
}
export {
  airQuelity,
  yearRates,
  waterRates,
  pollution,
  voice,
  dangerous,
  enforceLaw,
  companys,
  progress,
  enforceNum,
  goodDays
}
