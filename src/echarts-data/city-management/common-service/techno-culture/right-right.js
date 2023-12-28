/*
 * @Author: yangpk
 * @Date: 2020-03-03 18:03:55
 * @Last Modified by: yangpk
 * @Last Modified time: 2020-03-04 14:33:54
 */
function returnData (data) {
  var colors = [
    {
      type: 'linear',
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#5293f3'
      }, {
        offset: 0.5,
        color: '#88d6ff'
      }, {
        offset: 0.6,
        color: '#4289f1'
      }, {
        offset: 1,
        color: '#4289f1'
      }]
    }
  ]
  var barWidth = 18 * window.$rem
  let xData = []
  let seriesData = []
  data.forEach((item, index) => {
    xData.push(item.district)
    seriesData.push(item.num)
  })
  let option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255,255,255,0)',
      formatter (parmas) {
        console.log(parmas)
        return `<div class="tool-tip" style="background:rgba(0,18,55,0.4); font-size: 0.16rem; border:2px solid rgba(72,170,244);border-radius: 2px;padding: 0.12rem 0.16rem;">
        <p><span style="font-size: 0.17rem;">${parmas.seriesName} ：</span><span style="font-size: 0.17rem;">${parmas.value} 家</span></p>
        </div>`
      }
    },
    title: [
      {
        text: '(家)',
        left: '8%',
        top: '15%',
        backgroundColor: 'rgba(0,53,126,0.74)',
        borderColor: '#44aaf4',
        borderWidth: 2 * window.$rem,
        padding: [10, 20],
        textStyle: {
          fontSize: 17 * window.$rem
        }
      }
    ],
    legend: {
      itemWidth: 16 * window.$rem,
      itemHeight: 16 * window.$rem,
      textStyle: {
        color: '#ffffff',
        fontSize: 16 * window.$rem
      },
      right: '4%',
      top: '4%'
    },
    grid: {
      top: '23%',
      right: '5%',
      bottom: '20%'
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#c5dae7'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        rotate: 40,
        margin: 20 * window.$rem,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          fontSize: 16 * window.$rem,
          color: '#ffffff'
        }
      },
      data: xData
    },
    yAxis: [
      {
        axisLine: {
          lineStyle: {
            color: '#c5dae7'
          }
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          margin: 20 * window.$rem,
          textStyle: {
            fontFamily: 'Microsoft YaHei',
            fontSize: 16 * window.$rem,
            color: '#ffffff'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '定期检验合格',
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        data: seriesData,
        itemStyle: {
          normal: {
            color: colors[0]
          }
        }
      }, {
        z: 3,
        name: '定期检验合格',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: seriesData,
        symbol: 'diamond',
        symbolOffset: ['0', '-50%'],
        symbolSize: [barWidth - 4, 10 * (barWidth - 4) / barWidth],
        itemStyle: {
          normal: {
            borderColor: '#6ab7ff',
            borderWidth: 2,
            color: '#6ab7ff'
          }
        }
      }
    ]
  }
  return option
}

export default returnData
