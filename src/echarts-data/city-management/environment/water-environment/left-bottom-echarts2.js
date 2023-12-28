import echarts from 'echarts'
function returnData (data) {
  let xData = data.xAxis
  let seriesData = (data.data)[1]
  console.log(seriesData)
  const option = {
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
    xAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: xData,
        axisLabel: {
          textStyle: {
            color: '#EFF8FE', // 坐标的字体颜色
            fontSize: 16 * window.$rem,
            lineHeight: 20 * window.$rem
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
    series: {
      type: 'bar',
      barGap: 0,
      data: seriesData,
      barWidth: 20 * window.$rem,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#EF8432'}, {offset: 1, color: '#F6C46B'}])
      }
    },
    grid: {
      x: 40 * window.$rem,
      y: 40 * window.$rem,
      x2: 30 * window.$rem,
      y2: 30 * window.$rem,
      borderWidth: 10 * window.$rem
    }
  }
  return option
}
export default returnData
