const progress = (max, min) => {
  return {
    xAxis: {
      max: max,
      splitLine: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    grid: {
      left: 1 * window.$rem,
      top: 0,
      right: 1 * window.$rem,
      bottom: 0
    },
    yAxis: [{
      type: 'category',
      inverse: false,
      data: [min],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      }
    }],
    series: [
      {
        type: 'pictorialBar',
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: 1 * window.$rem,
        symbol: 'rect',
        symbolSize: [3 * window.$rem, 14 * window.$rem],
        itemStyle: {
          normal: {
            color: '#4A729D'
          }
        },
        data: [max],
        z: 0
      },
      {
        // 分隔
        type: 'pictorialBar',
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1 * window.$rem,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: '#07EAFB' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#378DF2' // 100% 处的颜色
            }
            ]
          }
        },
        symbolRepeat: 'fixed',
        symbolMargin: 1 * window.$rem,
        symbol: 'rect',
        symbolClip: true,
        symbolSize: [3 * window.$rem, 14 * window.$rem],
        symbolPosition: 'start',
        data: [min],
        z: 2
      }
    ]
  }
}
export {
  progress
}
