/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-02 11:41:56
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-23 10:02:50
 */
function returnData (data) {
  console.log(data)
  let xData = []
  let sData01 = [] // 第一产业
  let sData02 = [] // 第二产业
  let sData03 = [] // 第三产业
  let sData01a = []
  let sData02a = []
  let sData03a = []
  data.data.forEach(item => {
    xData.push(item.hg02001)
    sData01.push({value: item.hg02003, per: item.hg02006})
    sData02.push({value: item.hg02004, per: item.hg02007})
    sData03.push({value: item.hg02005, per: item.hg02008})
    sData01a.push({value: item.hg02006})
    sData02a.push({value: item.hg02007})
    sData03a.push({value: item.hg02008})
  })
  let options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#FFFFFF'
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
          str += `<div>${param[i].seriesName}: ${param[i].value}%</div>`
        }
        return str
      }
    },
    grid: {
      left: '1%',
      right: '2%',
      bottom: '10%',
      top: '30%',
      containLabel: true
    },
    legend: {
      top: 15 * window.$rem,
      itemGap: 10 * window.$rem,
      right: 20 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16 * window.$rem
      },
      data: [{name: '第一产业占比', icon: 'rect', itemStyle: {itemWidth: 10 * window.$rem, itemHeight: 5 * window.$rem}},
        {name: '第二产业占比', icon: 'rect', itemStyle: {itemWidth: 10 * window.$rem, itemHeight: 5 * window.$rem}},
        {name: '第三产业占比', icon: 'rect', itemStyle: {itemWidth: 10 * window.$rem, itemHeight: 5 * window.$rem}}, '\n',
        {name: '第一产业增速', itemStyle: {itemWidth: 10 * window.$rem, itemHeight: 2 * window.$rem}},
        {name: '第二产业增速', itemStyle: {itemWidth: 10 * window.$rem, itemHeight: 2 * window.$rem}},
        {name: '第三产业增速', itemStyle: {itemWidth: 10 * window.$rem, itemHeight: 2 * window.$rem}}]
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        offset: 10,
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
        name: '（%）',
        nameTextStyle: {
          color: '#fff',
          align: 'right',
          fontSize: 14 * window.$rem
        },
        nameGap: 15 * window.$rem,
        min: 0,
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
          show: false,
          lineStyle: {
            type: 'dotted'
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
      }
    ],
    series: [
      {
        name: '第一产业占比',
        type: 'bar',
        stack: 'stack',
        barWidth: 20 * window.$rem,
        itemStyle: {
          normal: {
            color: '#2EE2B1'
          }
        },
        data: sData01
      },
      {
        name: '第二产业占比',
        type: 'bar',
        stack: 'stack',
        itemStyle: {
          normal: {
            color: '#FBE62F'
          }
        },
        data: sData02
      },
      {
        name: '第三产业占比',
        type: 'bar',
        stack: 'stack',
        itemStyle: {
          normal: {
            color: '#007EFB'
          }
        },
        data: sData03
      },
      {
        name: '第一产业增速',
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#734DFF'
          }
        },
        smooth: true,
        lineStyle: {
          width: 2 * window.$rem
        },
        data: sData01a
      },
      {
        name: '第二产业增速',
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#F95800'
          }
        },
        smooth: true,
        lineStyle: {
          width: 2 * window.$rem
        },
        data: sData02a
      },
      {
        name: '第三产业增速',
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#2FDCFB'
          }
        },
        smooth: true,
        lineStyle: {
          width: 2 * window.$rem
        },
        data: sData03a
      }
    ]
  }
  return options
}
export default returnData
