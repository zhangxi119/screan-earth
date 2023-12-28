/*
 * @Author: zhangxi
 * @Date: 2020-03-03 11:11:47
 * @Last Modified by: zhangxi
 * @Last Modified time: 2020-03-09 15:56:51
 */
import echarts from 'echarts'
function returnData (data) {
  console.log('data', data)
  let xData = []
  let sData01 = []
  let sData02 = []
  data.forEach((item) => {
    xData.push(item.zl08002)
    sData01.push(item.zl08003)
    sData02.push(item.zl08004)
  })
  let option = {
    legend: {
      show: true,
      left: '35%',
      top: '6%',
      itemWidth: 12 * window.$rem,
      itemHeight: 12 * window.$rem,
      itemGap: 14 * window.$rem,
      textStyle: {
        color: '#ffffff',
        padding: [0, 0, 0, 6 * window.$rem],
        fontSize: 16 * window.$rem
      },
      data: ['强检件数', '合格率']
    },
    grid: {
      top: '23%',
      right: '15%',
      left: '15%',
      bottom: '18%'
    },
    tooltip: {
      show: true,
      trigger: 'axis',
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
                str += `${i.seriesName} :${i.value} 件 <br>`
                break

              case 1:
                str += `${i.seriesName} :${i.value} %<br>`
                break
              default:
                str += ''
            }
          }
        }
        return str
      }
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#acdeff'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        rotate: 30,
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
        name: '(件)',
        axisLine: {
          lineStyle: {
            color: '#c5dae7'
          }
        },
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'left',
          padding: [0, 0, 8 * window.$rem, -25 * window.$rem]
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          fontSize: 15 * window.$rem,
          margin: 10 * window.$rem,
          color: '#ffffff'
        },
        axisTick: {
          show: false
        }
      },
      {
        name: '（%）',
        min: 0,
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'right',
          padding: [0, -38 * window.$rem, 8 * window.$rem, 0]
        },
        // max: 1.2,
        show: true,
        axisLine: {
          lineStyle: {
            color: '#c5dae7'
          }
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: true,
          fontSize: 15 * window.$rem,
          color: '#ffffff'
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '强检件数',
        data: sData01,
        type: 'bar',
        yAxisIndex: 0,
        barWidth: 20 * window.$rem,
        showSymbol: false,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#0249f2'
            }, {
              offset: 1,
              color: '#59acee'
            }])
          }
        }
      },
      {
        name: '合格率',
        type: 'line',
        yAxisIndex: 1,
        smooth: false,
        color: '#d7e794',
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 6 * window.$rem,
        lineStyle: {
          color: '#d7e794'
        },
        data: sData02
      }
    ]
  }
  return option
}
export default returnData
