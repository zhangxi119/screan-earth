function returnData (data) {
  console.log(data)
  let xData = data.xAxis
  let seriesData = data.data
  console.log(seriesData)
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: function (param) {
        var str = `<div>${param[0].name}</div>`
        for (var i = 0; i < param.length; i++) {
          if (param[i].seriesName === 'PM2.5浓度' || param[i].seriesName === 'PM10浓度') {
            str += `<div>${param[i].seriesName}: ${param[i].value}μg/m³</div>`
          } else {
            str += `<div>${param[i].seriesName}: ${param[i].value}%</div>`
          }
        }
        return str
      }
    },
    legend: [{
      right: 80 * window.$rem,
      top: 40 * window.$rem,
      itemHeight: 15 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemGap: 15 * window.$rem,
      textStyle: {
        color: 'white',
        fontSize: 17 * window.$rem
      }
    }],
    xAxis: {
      data: xData,
      type: 'category',
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
      name: '(μg/m³)',
      nameLocation: 'end',
      nameGap: 5 * window.$rem,
      nameTextStyle: {
        color: '#fff',
        align: 'center',
        fontSize: 14 * window.$rem,
        padding: [4 * window.$rem, 4 * window.$rem, 15 * window.$rem, 10 * window.$rem]
      },
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
        show: false,
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
      }
    }],
    grid: {
      left: '1%',
      right: '4%',
      bottom: '3%',
      top: '30%',
      containLabel: true,
      show: false
    },
    series: [
      {
        name: 'PM2.5浓度',
        type: 'bar',
        barWidth: 10 * window.$rem,
        color: '#DB3C25',
        data: seriesData[0],
        showSymbol: true,
        symbolSize: 5 * window.$rem,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 1.5 * window.$rem
            }
          }
        }
      },
      {
        name: 'PM10浓度',
        type: 'bar',
        color: '#307FF3',
        barWidth: 10 * window.$rem,
        data: seriesData[2],
        showSymbol: true,
        symbolSize: 5 * window.$rem,
        itemStyle: {
          normal: {
            lineStyle: {
              width: 1.5 * window.$rem
            }
          }
        }
      }]
  }
  return option
}

export default returnData
