/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-17 14:48:02
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-19 14:33:59
 */
let option = {
  // color: ['#3398DB'],
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
          str += `${i.seriesName} :${i.value} 家<br>`
        }
      }
      return str
    }
  },
  grid: {
    left: '8%',
    right: '5%',
    top: '20%',
    bottom: '0%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      offset: 10 * window.$rem,
      data: ['峨边', '马边', '夹江', '市中区', '犍为县', '峨眉山'],
      axisLine: {
        lineStyle: {
          color: '#8CF0FC'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#4fa5bd'
        }
      },
      axisLabel: {
        textStyle: {
          fontSize: 16 * window.$rem,
          color: '#fff',
          padding: [5 * window.$rem, 0 * window.$rem, 2 * window.$rem, 0 * window.$rem]
        },
        rotate: 30
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '(家)',
      nameLocation: 'end',
      nameTextStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem,
        align: 'right',
        padding: [0, 0, 8 * window.$rem, 0]
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
        'lineStyle': {
          color: 'rgba(102, 243, 255, 0.5)'
        }
      }
    }
  ],
  series: [
    {
      name: '医疗机构数量',
      type: 'bar',
      barWidth: 24 * window.$rem,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0, color: '#007EFB' // 0% 处的颜色
          }, {
            offset: 1, color: '#307FF3' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        }
      },
      data: [10, 52, 200, 334, 390, 330, 220, 70]
    }
  ]
}

export default option
