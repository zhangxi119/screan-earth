/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-06 14:00:52
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-21 21:05:21
 */
function returnData (data) {
  let colorIndex = ['#98E05F', '#FF887C', '#66E3F8', '#F9E659', '#e55711']
  let colorStopIndex = ['#0DE3AC', '#B6325F', '#307FF3', '#F2B84E', '#fa7d3f']
  let xData = data.xAxis
  let seriesData = []
  let nameData = data.marks
  console.log(data)
  data.data.forEach((item, index) => {
    seriesData.push({
      name: nameData[index],
      type: 'bar',
      barWidth: 10 * window.$rem,
      barGap: 0,
      data: item,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [{
            offset: 0, color: colorIndex[index] // 0% 处的颜色
          }, {
            offset: 1, color: colorStopIndex[index] // 100% 处的颜色
          }]
        },
        global: false // 缺省为 false
      }
    })
  })
  let option = {
    legend: {
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      textStyle: {
        color: '#fff',
        fontSize: 16 * window.$rem
      },
      left: 500 * window.$rem,
      top: 10 * window.$rem,
      itemGap: 20 * window.$rem
    },
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
          str += `<div>${param[i].seriesName}: ${param[i].value} 天</div>`
        }
        return str
      }
    },
    grid: {
      bottom: 60 * window.$rem,
      top: 40 * window.$rem
    },
    // dataset: {
    //   source: [
    //     ['类型', '黄色预警', '绿色预警', '红色预警', '蓝色预警'],
    //     ['2016', 43.3, 85.8, 93.7, 93.7],
    //     ['2017', 83.1, 73.4, 55.1, 93.7],
    //     ['2018', 86.4, 65.2, 82.5, 93.7],
    //     ['2019', 72.4, 53.9, 39.1, 93.7],
    //     ['2020', 72.4, 53.9, 39.1, 93.7],
    //     ['2021', 72.4, 53.9, 39.1, 93.7]
    //   ]
    // },
    xAxis: {
      axisLine: {
        lineStyle: {
          color: '#8CF0FC'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        type: 'category',
        textStyle: {
          color: '#fff',
          fontSize: 17 * window.$rem,
          lineHeight: 30 * window.$rem
        },
        axisLine: {
          lineStyle: {
            color: '#8CF0FC'
          }
        }
      },
      data: xData
    },
    yAxis: {
      name: '(天)',
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
          color: 'rgba(140,240,252,1)'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 17 * window.$rem
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(140,240,252,0.3)',
          width: 1 * window.$rem,
          type: 'dashed'
        }
      }
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: seriesData
  }
  return option
}

export default returnData
