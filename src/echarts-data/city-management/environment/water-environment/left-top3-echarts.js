// import echarts from 'echarts'
function returnData (data) {
  console.log(data)
  // 处理x轴格式数据为2019-02
  let xData = []
  data.xAxis.forEach((item) => {
    let arr = item.split('')
    let str = ''
    arr.forEach((item2, i) => {
      if (i === 4) {
        str += '-'
      }
      str += item2
    })
    xData.push(str)
  })
  let legendData = data.marks
  let colorIndex = ['#2E70E4', '#66DEF8', '#6BE673', '#F1E44D', '#E28031', '#DC3421']
  let seriesData = []
  data.data.forEach((item, index) => {
    seriesData.push({
      name: legendData[index],
      type: 'bar',
      stack: '总量',
      data: item,
      barWidth: 26 * window.$rem,
      itemStyle: {
        color: colorIndex[index],
        fontSize: 16 * window.$rem
      }
    })
  })
  console.log(seriesData)
  let option = {
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
      },
      formatter: function (param) {
        var str = `<div>${param[0].name}</div>`
        for (var i = 0; i < param.length; i++) {
          str += `<div>${param[i].seriesName}: ${param[i].value} 个</div>`
        }
        return str
      }
    },
    legend: {
      textStyle: {
        color: 'white',
        fontSize: 16 * window.$rem
      },
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      right: 20 * window.$rem,
      // eslint-disable-next-line standard/array-bracket-even-spacing
      data: legendData,
      itemGap: 30 * window.$rem
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: xData,
        axisLabel: {
          rotate: 20,
          textStyle: {
            color: '#EFF8FE', // 坐标的字体颜色
            fontSize: 16 * window.$rem,
            padding: [10 * window.$rem, 0, 0, 0]
          }
        },
        axisLine: {
          lineStyle: {
            color: '#8DF0FC'// 更改坐标轴颜色
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(个)',
        nameGap: 25 * window.$rem,
        nameTextStyle: {
          color: 'rgba(255,255,255,0.6)',
          fontSize: 14 * window.$rem,
          align: 'right'
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: ['#ccc'],
            opacity: 0.5
          }
        },
        axisLabel: {
          textStyle: {
            color: '#EFF8FE', // 坐标的字体颜色
            fontSize: 16 * window.$rem
          }
        },
        axisLine: {
          lineStyle: {
            color: '#8DF0FC'// 坐标轴的颜色
          }
        },
        // eslint-disable-next-line no-dupe-keys
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            opacity: 0.2
          }
        }
      }
    ],
    series: seriesData,
    grid: {
      x: 40 * window.$rem,
      y: 40 * window.$rem,
      x2: 30 * window.$rem,
      y2: 40 * window.$rem,
      borderWidth: 10 * window.$rem
    }
  }
  return option
}
export default returnData
