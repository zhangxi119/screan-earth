import echarts from 'echarts'
function setData (data) {
  // let xAxisData = []
  // let seriesDataCZ = []
  // let seriesDataBK = []
  // data.forEach((item, index) => {
  //   xAxisData.push(item.district)
  //   seriesDataCZ.push(item.peoNum)
  //   seriesDataBK.push(item.cardPeoNum)
  // })
  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#57617B'
        }
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      itemGap: 30 * window.$rem,
      data: ['办理点数量'],
      top: 25 * window.$rem,
      right: '3%',
      textStyle: {
        padding: [0, 0, 0, 6 * window.$rem],
        fontSize: 17 * window.$rem,
        color: '#F1F1F3'
      }
    },
    grid: {
      left: '3%',
      top: '30%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      // boundaryGap: false,
      axisLabel: {
        rotate: 20,
        color: '#FFFFFF',
        margin: 15 * window.$rem,
        textStyle: {
          fontSize: 15 * window.$rem
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#C6DDF5',
          width: 2 * window.$rem
        }
      },
      axisLine: {
        show: false
      },
      data: data.districtList
    }],
    yAxis: [{
      type: 'value',
      name: '（家）',
      nameTextStyle: {
        padding: [0, 0, 10 * window.$rem, -35 * window.$rem],
        fontSize: 14 * window.$rem,
        color: '#fff',
        align: 'right'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#57617B'
        }
      },
      axisLabel: {
        color: '#FFFFFF',
        margin: 10 * window.$rem,
        textStyle: {
          fontSize: 14 * window.$rem
        }
      },
      splitLine: {
        show: false
      }
    }],
    series: [{
      name: '办理点数量',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5 * window.$rem,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1 * window.$rem
        }
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 1,
            color: 'rgba(252, 243, 105, .5)'
          }, {
            offset: 0,
            color: 'rgba(185, 144, 0, 0)'
          }], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10 * window.$rem
        }
      },
      itemStyle: {
        normal: {
          color: '#FFE600',
          borderColor: '#FFE600',
          borderWidth: 12 * window.$rem
        }
      },
      data: data.numList
    }]
  }
  return options
}
export default setData
