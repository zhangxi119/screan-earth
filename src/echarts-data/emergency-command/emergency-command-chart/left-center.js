/*
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-11
 * @LastEditors: leizq
 * @LastEditTime: 2020-04-29 09:35:50
 */
let emphasisStyle = {
  itemStyle: {
    barBorderWidth: 1 * window.$rem,
    shadowBlur: 10 * window.$rem,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0,0,0,0.5)'
  }
}

let options = (data) => {
  let data1 = [] // 应急队伍数量
  let data2 = [] // 储备场所数量
  let xAxis = []
  data.map((re) => {
    xAxis.push(re.zh02001)
    data1.push(re.zh02002)
    data2.push(re.zh02003)
  })
  return {
    legend: {
      data: ['应急队伍', '储备场所'],
      right: '10%',
      // itemHeight: 14 * window.$rem,
      // itemWidth: 14 * window.$rem,
      // icon: 'roundRect',
      itemGap: 30 * window.$rem,
      textStyle: {
        color: '#FFF',
        fontSize: 16 * window.$rem,
        padding: 10 * window.$rem
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: 10 * window.$rem,
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: function (params) { // 改鼠标悬浮提示值格式
        var relVal = params[0].name + '<br/>'
        if (params[0].seriesName === '应急队伍') {
          let marker = "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:linear-gradient(0deg,rgba(0,182,227,1),rgba(10,222,165,1))'></span>"
          relVal += marker + params[0].seriesName + ' : ' + params[0].value + '支<br/>'
        } else {
          relVal += params[0].marker + params[0].seriesName + ' : ' + params[0].value + '个<br/>'
        }
        if (params[1]) {
          relVal += params[1].marker + params[1].seriesName + ' : ' + (params[1].value) + '个<br/>'
        }

        return relVal
      }
    },
    xAxis: {
      type: 'category',
      data: xAxis,
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      },
      axisTick: {
        show: false,
        alignWithLabel: false
      },
      axisLabel: {
        fontSize: 15 * window.$rem,
        interval: 0,
        rotate: 20,
        color: '#fff',
        align: 'center',
        margin: 23 * window.$rem
      }
    },
    yAxis: [
      {
        name: '(支)',
        nameTextStyle: {
          verticalAlign: 'bottom',
          color: '#DFE2FD',
          fontSize: 14 * window.$rem,
          align: 'right'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: 'rgba(102, 243, 255, .1)'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
        }
      },
      {
        name: '(个)',
        nameTextStyle: {
          color: '#DFE2FD',
          fontSize: 14 * window.$rem,
          align: 'left'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: 'rgba(102, 243, 255, .1)'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
        }
      }
    ],
    grid: {
      left: '12%',
      right: '10%',
      bottom: '24%',
      top: '23%'
    },
    series: [
      {
        name: '应急队伍',
        type: 'bar',
        barWidth: 15 * window.$rem,
        itemStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#0ADEA5'
              }, {
                offset: 1, color: '#00B6E3'
              }],
              global: false
            }
          }
        },
        emphasis: emphasisStyle,
        data: data1
      },
      {
        name: '储备场所',
        type: 'line',
        yAxisIndex: 1,
        barWidth: 15 * window.$rem,
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: '#00ABFB'
          }
        },
        emphasis: emphasisStyle,
        data: data2
      }
    ]
  }
}
export default options
