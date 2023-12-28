import echarts from 'echarts'
function returnData (param) {
  console.log(param)
  let xData = []
  let sData01 = []
  let sData02 = []
  xData = param.xAxis
  sData01 = param.data
  sData02 = param.percentage
  console.log(sData02)
  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: false
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: function (param) {
        let str = `<div>${param[0].name}<div>`
        for (var i = 0; i < param.length; i++) {
          if (param[i].seriesName === '旅游综合收入') {
            str += `<div>${param[i].seriesName}: ${param[i].value}亿元</div>`
          } else {
            str += `<div>${param[i].seriesName}: ${param[i].value}%</div>`
          }
        }
        return str
      }
    },
    legend: {
      top: 10 * window.$rem,
      right: 50 * window.$rem,
      itemHeight: 10 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16 * window.$rem
      },
      data: ['旅游综合收入', '累计同比增减']
    },
    grid: {
      left: '4%',
      right: '8%',
      top: '20%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        position: 'bottom',
        offset: 0,
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
          fontSize: 15 * window.$rem
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '（亿元）',
        nameTextStyle: {
          color: '#fff',
          align: 'right',
          fontSize: 14 * window.$rem,
          padding: [0, 0, 0, 0]
        },
        nameGap: 15 * window.$rem,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: '#57617B'
          }
        },
        axisLabel: {
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
        name: '（%）',
        nameTextStyle: {
          color: '#fff',
          align: 'left',
          fontSize: 14 * window.$rem
        },
        nameGap: 15 * window.$rem,
        splitLine: {
          show: false,
          lineStyle: {
            type: 'dotted'
          }
        },
        axisLabel: {
          formatter: '{value}',
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
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
        name: '旅游综合收入',
        type: 'bar',
        stack: 'bar01',
        barWidth: 20 * window.$rem,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#0DC492'
            }, {
              offset: 1,
              color: '#60F4CC'
            }])
          }
        },
        data: sData01
      },
      {
        name: '累计同比增减',
        type: 'line',
        symbolSize: 10,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#FBE62F'
          }
        },
        lineStyle: {
          width: 3 * window.$rem
        },
        data: sData02
      }
    ]
  }
  return options
}
export default returnData
