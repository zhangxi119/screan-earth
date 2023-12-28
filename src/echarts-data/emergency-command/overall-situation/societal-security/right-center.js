/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-10 10:56:01
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-07 14:53:26
 */
let option = {
  tooltip: {
    trigger: 'axis',
    // axisPointer: {
    //   type: 'cross',
    //   crossStyle: {
    //     color: '#999'
    //   }
    // },
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: [10, 20],
    textStyle: {
      fontSize: 17 * window.$rem
    },
    formatter: '{b} 月:<br> {a0}:{c0}件 <br> {a1}:{c1}万元'
  },
  legend: {
    show: false,
    data: ['社会安全事件', '直接经济损失'],
    textStyle: {
      fontSize: 17 * window.$rem
    }
  },
  grid: {
    top: '20%',
    bottom: '20%'
  },
  xAxis: [
    {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisPointer: {
        type: 'shadow'
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        fontSize: 16 * window.$rem,
        color: '#fff',
        interval: 0,
        formatter: '{value}月',
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
      nameLocation: 'end',
      minInterval: 1,
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
    },
    {
      type: 'value',
      name: '(万元)',
      nameLocation: 'end',
      nameTextStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem,
        align: 'left',
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
        lineStyle: {
          color: 'rgba(102, 243, 255, 0.5)',
          type: 'dotted'
        }
      }
    }
  ],
  series: [
    {
      name: '事件数量',
      type: 'bar',
      // yAxisIndex: 0,
      showSymbol: false,
      barWidth: 10 * window.$rem,
      smooth: true,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#0ADEA5' // 0% 处的颜色
          }, {
            offset: 1, color: '#00B6E3' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        }
      },
      data: [70, 50, 23, 85, 66, 44, 55, 48, 90, 15, 65, 23]
    },
    {
      name: '经济损失',
      type: 'line',
      yAxisIndex: 1,
      showSymbol: false,
      smooth: true,
      itemStyle: {
        color: '#00ABFB'
      },
      data: [2.0, 22.2, 34.3, 4.5, 6.3, 2.0, 22.2, 34.3, 4.5, 6.3, 5.5, 6.3]
    }
  ]
}

export default option
