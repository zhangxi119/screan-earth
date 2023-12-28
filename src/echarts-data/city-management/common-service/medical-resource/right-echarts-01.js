/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-02-27 17:17:55
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-28 20:20:09
 */
import echarts from 'echarts'
function createOptions (xdata, data) {
  return {
    tooltip: {
      trigger: 'axis',
      // axisPointer: {
      //   type: 'cross'
      // },
      formatter: '{b} <br/>{a0}: {c0} 户 <br/>{a1}: {c1} 户<br/>{a2}: {c2} %',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    grid: {
      right: '1%',
      left: '1%',
      bottom: '5%',
      containLabel: true
    },
    legend: {
      itemGap: 30 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      right: 60 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        padding: [0, 0, 0, 8 * window.$rem],
        fontSize: 17 * window.$rem
      },
      data: ['应监督户数', '已监督户数', '监督覆盖率']
    },
    xAxis: [
      {
        type: 'category',
        offset: 10,
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        axisLabel: {
          rotate: 20,
          color: '#FFFFFF',
          margin: 20 * window.$rem,
          fontSize: 17 * window.$rem
        },
        data: xdata
      }
    ],
    yAxis: [
      {
        name: '（户）',
        nameTextStyle: {
          align: 'right',
          padding: [30 * window.$rem, 0, 5 * window.$rem, -30 * window.$rem],
          fontSize: 14 * window.$rem,
          color: '#fff'
        },
        type: 'value',
        position: 'left',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#FFFFFF',
          fontSize: 17 * window.$rem
        },
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: '#222'
          }
        }
      },
      {
        name: '（%）',
        nameTextStyle: {
          padding: [0, -30 * window.$rem, 5 * window.$rem, 0],
          fontSize: 14 * window.$rem,
          color: '#fff',
          align: 'left'
        },
        type: 'value',
        min: 0,
        max: 100,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#FFFFFF',
          fontSize: 17 * window.$rem
        }
      }
    ],
    series: [
      {
        name: '应监督户数',
        type: 'bar',
        barWidth: 15 * window.$rem,
        barGap: '30%',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 1, color: '#D5602C'},
                {offset: 0, color: '#DB3C25'}
              ]
            )
          }
        },
        data: data[0].data
      },
      {
        name: '已监督户数',
        type: 'bar',
        barWidth: 15 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 1, color: '#66E3F8'},
                {offset: 0, color: '#307FF3'}
              ]
            )
          }
        },
        data: data[1].data
      },
      {
        name: '监督覆盖率',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: '#F9E659'
          }
        },
        data: data[2].data
      }
    ]
  }
}
export default createOptions
