/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-05 16:47:34
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-21 20:51:20
 */
function returnData (data) {
  console.log(data)
  let xData = data.xAxis
  let seriesData = []
  let legendData = []
  // eslint-disable-next-line standard/array-bracket-even-spacing
  let seriesName = data.marks
  let color = ['#C36C18', '#F8E659', '#82CFB6', '#53AABC', '#7F54BC', '#60bdf9']
  data.data.forEach((item, index) => {
    if (seriesName[index] === '一氧化碳') {
      seriesData.push({
        name: seriesName[index],
        type: 'bar',
        showSymbol: true,
        yAxisIndex: 1,
        barWidth: 15 * window.$rem,
        itemStyle: {
          normal: {
            textStyle: {
              color: 'white'
            },
            borderColor: color[index],
            lineStyle: {
              width: 1.5 * window.$rem,
              color: color[index]
            }
          }
        },
        data: item
      })
    } else {
      seriesData.push({
        name: seriesName[index],
        type: 'line',
        symbol: 'circle',
        showSymbol: true,
        yAxisIndex: 0,
        symbolSize: 5 * window.$rem, // 设定实心点的大小
        itemStyle: {
          normal: {
            textStyle: {
              color: 'white'
            },
            borderColor: color[index],
            lineStyle: {
              width: 1.5 * window.$rem,
              color: color[index]
            }
          }
        },
        data: item
      })
    }
  })
  data.marks.forEach((item, index) => {
    legendData.push(
      {name: item, color: color[index]}
    )
  })
  let option = {
    title: {
      text: '折线图堆叠',
      show: false
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: function (param) {
        let str = `<div>${param[0].name}</div>`
        for (var i = 0; i < param.length; i++) {
          if (param[i].seriesName === '一氧化碳') {
            str += `<div>${param[i].seriesName}: ${param[i].value}mg/m³</div>`
          } else {
            str += `<div>${param[i].seriesName}: ${param[i].value}μg/m³</div>`
          }
        }
        return str
      }
    },
    color: ['#C36C18', '#F8E659', '#82CFB6', '#53AABC', '#7F54BC', '#60bdf9'],
    legend: {
      data: legendData,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16 * window.$rem
      },
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      itemGap: 10 * window.$rem,
      right: '10%',
      top: '3%',
      formatter: function (name) {
        if (name === 'PM2.5' || name === 'PM10' || name === '二氧化氮' || name === '二氧化硫') {
          return name + '(μg/m³)'
        } else if (name === '一氧化碳') {
          return name + '(mg/m³)'
        } else {
          return name
        }
      }
    },
    grid: {
      left: '1%',
      top: '20%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: false
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisLine: {
        lineStyle: {
          color: '#8CF0FC',
          width: 2 * window.$rem
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 15 * window.$rem,
          lineHeight: 30 * window.$rem
        }
      }
    },
    yAxis: [{
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#8CF0FC',
          width: 2 * window.$rem
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(140,240,252,0.3)',
          width: 1 * window.$rem,
          height: 1 * window.$rem,
          type: 'dashed'
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 15 * window.$rem
      },
      name: '(μg/m³)',
      nameLocation: 'end',
      nameGap: 5 * window.$rem,
      nameTextStyle: {
        color: '#fff',
        align: 'center',
        fontSize: 14 * window.$rem,
        padding: [4 * window.$rem, 4 * window.$rem, 5 * window.$rem, 10 * window.$rem]
      }
    }, {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#8CF0FC',
          width: 2 * window.$rem
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(140,240,252,0.3)',
          width: 1 * window.$rem,
          height: 1 * window.$rem,
          type: 'dashed'
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 15 * window.$rem
      },
      name: '(mg/m³)',
      nameLocation: 'end',
      nameGap: 5 * window.$rem,
      nameTextStyle: {
        color: '#fff',
        align: 'center',
        fontSize: 14 * window.$rem,
        padding: [4 * window.$rem, 4 * window.$rem, 5 * window.$rem, 10 * window.$rem]
      }
    }],
    series: seriesData
  }
  return option
}
export default returnData
