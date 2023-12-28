/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-03 09:35:08
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-26 20:34:11
 */

// import echarts from 'echarts'
function returnData (data) {
  console.log(data)
  let xData = []
  let sData01 = []
  let sData02 = []
  data.forEach(item => {
    xData.push(item.zy08003)
    sData01.push(item.zy08004)
    let money = (item.zy08005)
    sData02.push(money)
  })
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
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
        let str = `<div>${data[0].name}</div>`
        if (data.length > 0) {
          for (let i of data) {
            switch (i.seriesIndex) {
              case 0:
                str += `${i.seriesName}: ${i.value} 件<br>`
                break

              case 1:
                str += `${i.seriesName}: ${i.value} 万元<br>`
                break
              default:
                str += ''
            }
          }
        }
        return str
      }
    },
    grid: {
      left: '1%',
      top: '25%',
      right: '1%',
      bottom: '8%',
      containLabel: true
    },
    legend: {
      top: 30 * window.$rem,
      right: 100 * window.$rem,
      itemHeight: 10 * window.$rem,
      itemWidth: 10 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 17 * window.$rem
      },
      data: ['案件数量', '处罚金额']
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        offset: 10 * window.$rem,
        // offset: 10,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#eee'
          }
        },
        axisLabel: {
          color: '#FFFFFF',
          fontSize: 15 * window.$rem,
          // interval: 0,
          rotate: 30
        },
        axisTick: {
          show: true
        }
      }
    ],
    yAxis: [
      {
        name: '(件)',
        type: 'value',
        min: 0,
        // max: 100,
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value}',
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
        },
        nameLocation: 'end',
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'right',
          padding: [0, 0, 8 * window.$rem, 0]
        },
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#DFE2FB'
          },
          show: true
        },
        axisTick: {
          show: false
        }
      },
      {
        name: '(万元)',
        type: 'value',
        min: 0,
        max: 100,
        splitLine: {
          show: false
        },
        nameLocation: 'end',
        nameTextStyle: {
          color: '#FFF',
          fontSize: 14 * window.$rem,
          align: 'left',
          padding: [0, 0, 8 * window.$rem, 0]
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
            color: '#DFE2FB'
          },
          show: true
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '案件数量',
        type: 'bar',
        barWidth: 15 * window.$rem,
        symbolSize: 8 * window.$rem,
        itemStyle: {
          normal: {
            color: '#9BF6D7'
          }
        },
        data: sData01
      },
      {
        name: '处罚金额',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8 * window.$rem,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#EC5236'
          }
        },
        data: sData02
      }
    ]
  }
  // console.log('option', option)
  return option
}
export default returnData
