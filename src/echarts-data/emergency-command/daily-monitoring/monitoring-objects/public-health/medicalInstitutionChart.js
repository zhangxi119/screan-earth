/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-11 09:59:18
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-21 10:05:43
 */
let option = {
  // color: ['#3398DB'],
  tooltip: {
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    },
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: [10 * window.$rem, 20 * window.$rem],
    textStyle: {
      fontSize: 17 * window.$rem
    },
    formatter: '{b}: {c}(家)'
  },
  grid: {
    left: '1%',
    right: '1%',
    bottom: '1%',
    top: '18%',
    containLabel: true
  },
  xAxis: [
    {
      offset: 10 * window.$rem,
      type: 'category',
      data: ['2017年', '2018年', '2019年', '2020年', '2021', '2022'],
      axisLine: {
        lineStyle: {
          color: '#8CF0FC'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 17 * window.$rem
        },
        rotate: '30'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '(家)',
      nameLocation: 'end',
      splitNumber: 3,
      nameTextStyle: {
        padding: [30 * window.$rem, 0, 10 * window.$rem, -30 * window.$rem],
        color: '#fff',
        align: 'right',
        fontSize: 14 * window.$rem
      },
      axisLine: {
        lineStyle: {
          color: '#8CF0FC'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontSize: 17 * window.$rem
        }
      },
      'splitLine': {
        lineStyle: {
          color: 'rgba(102, 243, 255, 0.5)',
          type: 'dotted'
        }
      }
    }
  ],
  series: [
    {
      name: '直接访问',
      type: 'bar',
      barWidth: 20 * window.$rem,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0, color: '#4EB4DE' // 0% 处的颜色
          }, {
            offset: 1, color: '#307FF3' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        }
      },
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
}

export default option
