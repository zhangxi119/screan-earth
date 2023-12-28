function returnOption (data) {
  console.log(data)
  let xData = data.xAxis
  let seriesData = data.data
  let option = {
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
      formatter: '{b}<br />全市用电量: {c}千瓦时'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xData,
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
        fontSize: 15 * window.$rem,
        rotate: 40,
        margin: 10 * window.$rem
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      name: '（亿千瓦时）',
      nameTextStyle: {
        color: '#fff',
        align: 'right',
        fontSize: 14 * window.$rem
      },
      nameGap: 15 * window.$rem,
      splitLine: {
        show: false
      },
      offset: 10,
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#66F3FF'
        }
      },
      axisLabel: {
        color: '#FFFFFF',
        fontSize: 15 * window.$rem
      }
    },
    grid: {
      bottom: '15%',
      left: '17%'
    },
    series: [{
      data: seriesData,
      type: 'line',
      lineStyle: {
        color: '#83C7FC',
        width: 3
      },
      itemStyle: {
        color: '#0090DC',
        opacity: 0.8 // 为0不会绘制图形拐点消失
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#00AAE8' // 0% 处的颜色
            },
            {
              offset: 0.5,
              color: '#00AAE8' // 100% 处的颜色
            },
            {
              offset: 0.8,
              color: '#0086F8' // 100% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        }
      }
    }]
  }
  return option
}
export default returnOption
