
function creatOptions (data) {
  return {
    series: [
      {
        type: 'gauge',
        radius: '70%',
        center: ['50%', '70%'],
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        detail: {
          show: false
        },
        title: {
          show: false
        },
        pointer: {
          width: 2 * window.$rem,
          length: '100%',
          shadowColor: '#fff', // 默认透明
          shadowBlur: 5
        },
        itemStyle: {
          color: '#00DEFF'
        },
        data: [
          {value: data
          }
        ]
      }
    ]
  }
}
export default creatOptions
