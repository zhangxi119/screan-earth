/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-10 10:49:46
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-19 15:23:38
 */
let option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // type: 'cross',
      crossStyle: {
        color: '#999'
      }
    },
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: [10 * window.$rem, 20 * window.$rem],
    textStyle: {
      fontSize: 17 * window.$rem
    }
  },
  grid: {
    left: '10%',
    right: '10%',
    top: 30 * window.$rem,
    bottom: 40 * window.$rem,
    containLabel: true
  },
  legend: {
    show: true,
    right: 46,
    data: ['异常（次）', '预警（次）'],
    textStyle: {
      color: '#fff'
    }
  },
  xAxis: [
    {
      type: 'category',
      data: [2.18, 2.19, 2.20, 2.21, 2.22, 2.23, 2.24],
      boundaryGap: true,
      axisPointer: {
        type: 'shadow'
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: 16 * window.$rem,
        color: '#fff'
      },
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 50,
      interval: 10,
      nameTextStyle: {
        color: '#fff',
        align: 'right',
        fontSize: 14 * window.$rem
      },
      axisLabel: {
        formatter: '{value}',
        fontSize: 16 * window.$rem,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      },
      splitLine: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '异常（次）',
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#00ABFB'
      },
      data: [12.0, 22.2, 33.3, 24.5, 16.3, 12.0, 22.2]
    },
    {
      name: '预警（次）',
      type: 'line',
      smooth: true,
      itemStyle: {
        color: '#FFD200'
      },
      data: [2.0, 22.2, 34.3, 4.5, 6.3, 2.0, 22.2]
    }
  ]
}

export default option
