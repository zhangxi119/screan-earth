/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-10 10:56:01
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-30 09:45:09
 */
let option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // //type: 'cross',
      // crossStyle: {
      //   color: '#999'
      // }
    },
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: [10, 20],
    textStyle: {
      fontSize: 17 * window.$rem
    },
    formatter: function (data) {
      let str = ''
      if (data.length > 0) {
        for (let i of data) {
          switch (i.seriesIndex) {
            case 0:
              str += `${i.seriesName} :${i.value} 起<br>`
              break

            case 1:
              str += `${i.seriesName} :${i.value} 万元<br>`
              break
            default:
              str += ''
          }
        }
      }
      return str
    }
  },
  legend: {
    data: ['安全生产事件', '直接经济损失'],
    // icon: 'rect',
    textStyle: {
      color: '#fff',
      fontSize: 17 * window.$rem
    },
    // left: 80 * window.$rem,
    top: 5 * window.$rem
  },
  grid: {
    top: '18%',
    bottom: '20%'
  },
  xAxis: [
    {
      type: 'category',
      data: [2016, 2017, 2018, 2019, 2020],
      axisPointer: {
        type: 'shadow'
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        fontSize: 16 * window.$rem,
        color: '#fff',
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
        show: true
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
      name: '安全生产事件',
      type: 'bar',
      // yAxisIndex: 0,
      showSymbol: true,
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
      data: [12.0, 22.2, 33.3, 24.5, 16.3]
    },
    {
      name: '直接经济损失',
      type: 'line',
      yAxisIndex: 1,
      showSymbol: false,
      symbol: 'circle',
      smooth: true,
      itemStyle: {
        color: '#00ABFB'
      },
      data: [2.0, 22.2, 34.3, 4.5, 6.3]
    }
  ]
}

export default option
