function returnData (data) {
  let xData = []
  let seriesData = []
  data.forEach(item => {
    xData.push(item.month)
    seriesData.push(item.num)
  })
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: '部门预警: {c}(次)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    grid: {
      top: 20 * window.$rem,
      bottom: 50 * window.$rem
    },
    xAxis: [{
      type: 'category',
      axisTick: {show: false},
      data: xData,
      axisLabel: {
        rotate: 40,
        margin: 10 * window.$rem,
        textStyle: {
          color: '#EFF8FE', // 坐标的字体颜色
          fontSize: 16 * window.$rem
        }
      },
      axisLine: {
        lineStyle: {
          color: '#8CF0FC'// 更改坐标轴颜色
        }
      }
    }],
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
            color: '#8CF0FC'// 坐标轴的颜色
          }
        }
      }
    ],
    series: [{
      data: seriesData,
      type: 'bar',
      barWidth: 11.3 * window.$rem,
      itemStyle: {
        color: '#4FB4DE'
      },
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.8)'
      }
    }]
  }
  return option
}

export default returnData
