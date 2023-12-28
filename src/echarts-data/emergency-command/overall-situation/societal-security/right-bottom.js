/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-10 10:56:01
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-07 14:52:17
 */
let option = {
  tooltip: {
    trigger: 'axis',
    // axisPointer: {
    //   type: 'cross'
    // },
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: [10, 20],
    textStyle: {
      fontSize: 17 * window.$rem
    }
  },
  // legend: {
  //   data: ['社会安全事件', '直接经济损失'],
  //   textStyle: {
  //     color: '#fff'
  //   }
  // },
  grid: {
    top: '20%',
    bottom: '20%'
  },
  xAxis: [
    {
      type: 'category',
      data: ['入室盗窃', '抢劫', '遗失', '诈骗', '遗弃'],
      axisPointer: {
        type: 'shadow',
        showStyle: {
          shadowColor: '#00357E'
        }
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        fontSize: 16 * window.$rem,
        color: '#fff',
        interval: 0,
        padding: [5 * window.$rem, 0 * window.$rem, 2 * window.$rem, 0 * window.$rem]
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
      name: '(起)',
      minInterval: 1,
      nameLocation: 'end',
      nameTextStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem,
        align: 'right',
        padding: [0, 0, 8 * window.$rem, 0]
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
      name: '',
      type: 'bar',
      // yAxisIndex: 0,
      showSymbol: false,
      barWidth: 21 * window.$rem,
      smooth: true,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#007EFB' // 0% 处的颜色
          }, {
            offset: 1, color: '#00B6E3' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        }
      },
      data: [115, 100, 80, 60, 50]
    }
  ]
}

export default option
