import echarts from 'echarts'
function setData (data) {
  let legendData = data.typeList
  let xAxisData = []
  let seriesData = []
  let level1 = []
  let level2 = []
  let level3 = []
  let areaStyleList = [
    {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(102,210,229,0.5)'
        }, {
          offset: 1,
          color: 'rgba(102,210,229,0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10 * window.$rem
      }
    }, {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(105,213,159, 0.5)'
        }, {
          offset: 0.8,
          color: 'rgba(105,213,159, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10 * window.$rem
      }
    },
    {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(105,213,159, 0.5)'
        }, {
          offset: 0.8,
          color: 'rgba(105,213,159, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10 * window.$rem
      }
    }
  ]
  data.yearTypeNumList.forEach((item, index) => {
    xAxisData.push(item.year)
    item.moneyNumList.forEach((nItem, newIndex) => {
      let newItem = nItem
      switch (newIndex) {
        case 0:
          level1.push(newItem)
          break
        case 1:
          level2.push(newItem)
          break
        case 2:
          level3.push(newItem)
          break
      }
    })
  })
  let seriesArr = [level1, level2, level3]
  legendData.forEach((item, index) => {
    seriesData.push(
      {
        name: item,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5 * window.$rem,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: index === 0 ? '#26D5E8' : '#2AD99A',
            width: 1 * window.$rem
          }
        },
        areaStyle: areaStyleList[index],
        itemStyle: {
          normal: {
            // color: 'rgba(102,210,229,1)',
            // borderColor: 'rgba(102,210,229,1)',
            // borderWidth: 12 * window.$rem

          }
        },
        data: seriesArr[index]
      }
    )
  })

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
    color: ['#26D5E8', '#2AD99A'],
    legend: {
      itemGap: 13 * window.$rem,
      data: legendData,
      top: 16 * window.$rem,
      left: 'center',
      textStyle: {
        padding: [0, 0, 0, 6 * window.$rem],
        fontSize: 17 * window.$rem,
        color: '#F1F1F3'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      top: '15%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      // boundaryGap: false,
      axisLabel: {
        color: '#FFFFFF',
        margin: 10 * window.$rem,
        textStyle: {
          fontSize: 14 * window.$rem
        }
      },
      axisLine: {
        lineStyle: {
          color: '#85E4FF'
        }
      },
      data: xAxisData
    }],
    yAxis: [{
      type: 'value',
      name: '（万元）',
      nameTextStyle: {
        padding: [0, 0, 10 * window.$rem, -40 * window.$rem],
        fontSize: 14 * window.$rem,
        align: 'right',
        color: '#fff'
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
        lineStyle: {
          color: 'rgba(102, 243, 255, .1)'
        }
      }
    }],
    series: seriesData
  }
  return options
}

export default setData
