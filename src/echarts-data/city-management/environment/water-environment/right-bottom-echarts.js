import echarts from 'echarts'
function returnData (data) {
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
  let seriesData = data.data
  let option = {
    color: ['#499EF8'],
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
      formatter: '{b}<br />达标情况：{c}%'
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {show: false},
        data: xData,
        axisLabel: {
          rotate: 40,
          textStyle: {
            color: '#EFF8FE', // 坐标的字体颜色
            padding: [10 * window.$rem, 0, 0, 0],
            fontSize: 16 * window.$rem,
            lineHeight: 30 * window.$rem
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
        name: '(%)',
        nameGap: 15 * window.$rem,
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
    series: [
      {
        type: 'bar',
        barGap: 0,
        data: seriesData,
        barWidth: 22.4 * window.$rem,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              {offset: 0, color: '#E28031'},
              {offset: 1, color: '#F8E659'}
            ]
          )
        }
      }
    ],
    grid: {
      x: 40 * window.$rem,
      y: 30 * window.$rem,
      x2: 30 * window.$rem,
      y2: 60 * window.$rem,
      borderWidth: 10 * window.$rem
    }
  }
  return option
}
export default returnData
