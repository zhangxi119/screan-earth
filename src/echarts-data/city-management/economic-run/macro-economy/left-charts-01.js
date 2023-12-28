/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-02 11:41:56
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-20 14:34:53
 */
import echarts from 'echarts'
function returnData (data) {
  let xData = []
  let sData01 = []
  let sData02 = [] // 乐山增速
  let sData03 = [] // 成都增速
  let sData04 = [] // 四川增速
  data.data.forEach(item => {
    xData.push(item.hg01001)
    sData01.push(item.hg01002)
    sData02.push(item.hg01003)
    sData03.push(item.hg01004)
    sData04.push(item.hg01005)
  })
  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // type: 'cross',
        crossStyle: {
          color: '#999'
        }
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: function (param) {
        let str = `<div>${param[0].name}</div>`
        for (var i = 0; i < param.length; i++) {
          if (param[i].seriesName === '乐山生产总值') {
            str += `<div>${param[i].seriesName}: ${param[i].value}亿元</div>`
          } else {
            str += `<div>${param[i].seriesName}: ${param[i].value}%</div>`
          }
        }
        return str
      }
    },
    grid: {
      left: '5%',
      right: '5%',
      top: '25%',
      bottom: '10%',
      containLabel: true
    },
    legend: {
      top: 10 * window.$rem,
      right: 40 * window.$rem,
      itemHeight: 10 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 15 * window.$rem
      },
      data: ['乐山生产总值', '乐山GDP增速', '中国GDP增速', '四川GDP增速']
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
        name: '（亿元）',
        nameTextStyle: {
          fontSize: 14 * window.$rem,
          color: '#fff',
          align: 'right'
        },
        nameGap: 15 * window.$rem,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: '#57617B'
          }
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
        name: '（%）',
        nameTextStyle: {
          color: '#fff',
          align: 'left',
          fontSize: 14 * window.$rem
        },
        nameGap: 15 * window.$rem,
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
      }
    ],
    series: [
      {
        name: '乐山生产总值',
        type: 'bar',
        barWidth: 18 * window.$rem,
        yAxisIndex: 0,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 1, color: '#00B6E3'},
                {offset: 0, color: '#007EFB'}
              ]
            )
          }
        },
        data: sData01
      },
      {
        name: '乐山GDP增速',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#FBE62F'
          }
        },
        smooth: true,
        lineStyle: {
          width: 2 * window.$rem
        },
        data: sData02
      },
      {
        name: '中国GDP增速',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        yAxisIndex: 1,
        smooth: true,
        itemStyle: {
          normal: {
            color: '#2EE2B1'
          }
        },
        lineStyle: {
          width: 2 * window.$rem
        },
        data: sData03
      },
      {
        name: '四川GDP增速',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        yAxisIndex: 1,
        smooth: true,
        itemStyle: {
          normal: {
            color: '#F95800'
          }
        },
        lineStyle: {
          width: 2 * window.$rem
        },
        data: sData04
      }
    ]
  }
  return options
}
export default returnData
