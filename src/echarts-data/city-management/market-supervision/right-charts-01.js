/*
 * @Descripttion:
 * @Author: luoxi
 * @Date: 2020-03-05 09:35:08
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-26 20:22:44
 */
import echarts from 'echarts'
function returnData (data) {
  let xData = []
  let sData01 = []
  let sData02 = []
  if (data.length > 0) {
    for (let item of data) {
      xData.push(item.zy01001 || '')
      sData01.push(item.zy01002 || '')
      sData02.push(item.zy01003 || '')
    }
  }
  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // type: 'cross',
        crossStyle: {
          color: '#999'
        }
      },
      formatter (data) {
        let str = ''
        if (data.length > 0) {
          for (let i of data) {
            switch (i.seriesName) {
              case '数量':
                str += `${i.seriesName} :${i.value} 户<br>`
                break

              case '增长率':
                str += `${i.seriesName} :${i.value} %<br>`
                break
            }
          }
        }
        return str
      }, // '{a0}: {c0} 户 <br> {a1} : {c1} %',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      textStyle: {
        fontSize: 17 * window.$rem
      }
      // formatter: function (param) {
      //   var str = `<div>${param[0].name}</div>`
      //   for (var i = 0; i < param.length; i++) {
      //     if (param[i].seriesName === '数量') {
      //       str += `<div>${param[i].seriesName}: ${param[i].value}户</div>`
      //     } else {
      //       str += `<div>${param[i].seriesName}: ${param[i].value}%</div>`
      //     }
      //   }
      //   return str
      // }
    },
    grid: {
      left: '1%',
      right: '1%',
      top: '25%',
      bottom: '10%',
      containLabel: true
    },
    legend: {
      top: 35 * window.$rem,
      right: 100 * window.$rem,
      itemHeight: 10 * window.$rem,
      itemWidth: 20 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16 * window.$rem
      },
      data: ['数量', '增长率']
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        offset: 10 * window.$rem,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          color: '#FFFFFF',
          fontSize: 15 * window.$rem

        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        // min: 0,
        // max: 20000,
        // interval: 000,
        name: '(户)',
        nameLocation: 'end',
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'right',
          padding: [0, 0, 8 * window.$rem, 0]
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value}',
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
        },
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisTick: {
          show: false
        }
      },
      {
        type: 'value',
        // min: 0,
        // max: 2,
        name: '(%)',
        nameLocation: 'end',
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'left',
          padding: [0, 0, 8 * window.$rem, 0]
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value} ',
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
        },
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '数量',
        type: 'bar',
        barWidth: 20 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 1, color: '#F9E659'},
                {offset: 0, color: '#F2B84E'}
              ]
            )
          }
        },
        data: sData01
      },
      {
        name: '增长率',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8 * window.$rem,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#6EDEB4'
          }
        },
        data: sData02
      }
    ]
  }
  return options
}
export default returnData
