/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-10 10:49:46
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-19 12:00:45
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
    formatter: function (data) {
      let str = ''
      if (data.length > 0) {
        for (let i of data) {
          switch (i.seriesIndex) {
            case 0:
              str += `${i.seriesName} :${i.value} 起<br>`
              break

            case 1:
              let unit = i.seriesName === '伤亡数量' ? '人' : '万元'
              str += `${i.seriesName} :${i.value} ${unit}<br>`
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
    show: true,
    // icon: 'rect',
    data: ['事件数量', '经济损失'],
    top: '5%',
    textStyle: {
      color: '#fff',
      fontSize: 17 * window.$rem
    }
  },
  grid: {
    top: '22%',
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
        formatter: '{value}年',
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
      name: '(万)',
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
      barWidth: 20 * window.$rem,
      // yAxisIndex: 0,
      showSymbol: false,
      smooth: true,
      itemStyle: {
        color: '#00ABFB'
      },
      data: [12.0, 22.2, 33.3, 24.5, 16.3]
    },
    {
      name: '经济损失',
      type: 'line',
      yAxisIndex: 1,
      symbol: 'circle',
      showSymbol: false,
      smooth: true,
      itemStyle: {
        color: '#FFD200'
      },
      data: [2.0, 22.2, 34.3, 4.5, 6.3]
    }
  ]
}

export default option
