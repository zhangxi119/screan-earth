import echarts from 'echarts'
function returnData (param) {
  console.log(param)
  let xData = []
  let sData01 = []
  let xData2 = []
  xData = param.xAxis
  xData.forEach(item => {
    xData2.push(item.slice(0, 4) + ' ' + item.slice(4))
  })
  console.log(xData2)
  sData01 = param.data
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
      formatter: '{b}<br />{a}: {c}亿元'
    },
    legend: {
      top: 10 * window.$rem,
      right: 50 * window.$rem,
      itemHeight: 10 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16 * window.$rem
      },
      data: ['旅游综合收入']
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
        data: xData2.map(str => { return str.replace(' ', '\n') }),
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
      }
    ]
  }
  return options
}
export default returnData
