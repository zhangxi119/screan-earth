/*
 * @Author: zhangxi
 * @Date: 2020-03-03 18:03:55
 * @Last Modified by: zhangxi
 * @Last Modified time: 2020-03-04 14:53:28
 */
var mColor = [
  '#F3D0FB', '#b1f6e4', '#cd9d74', '4169E1'
]
var colors = [
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#F3D0FB'
    }, {
      offset: 1,
      color: '#CB5AA1'
    }]
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#b1f6e4'
    }, {
      offset: 0.5,
      color: '#d3fef0'
    }, {
      offset: 0.6,
      color: '#a2d7c5'
    }, {
      offset: 1,
      color: '#8cc4b1'
    }]
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#cd9d74'
    }, {
      offset: 0.5,
      color: '#fce363'
    }, {
      offset: 0.6,
      color: '#e9b748'
    }, {
      offset: 1,
      color: '#d2b075'
    } ]
  }, {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#4169E1'
    }, {
      offset: 0.5,
      color: '#6495ED'
    }, {
      offset: 0.6,
      color: '#1E90FF'
    }, {
      offset: 1,
      color: '#4169E1'
    } ]
  }
]

var barWidth = 18 * window.$rem
function createOptions (data) {
  return {
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        let str = '<p>' + params[0].name + '</p>'
        let _params = []
        params.forEach(d => {
          if (d.componentSubType === 'bar') {
            _params.push(d)
          }
        })
        _params.forEach((d, i) => {
          str += '<p>' + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + mColor[i] + ';"></span>' + d.seriesName + '：' + d.value + '</p>'
        })
        return str
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }

    },
    legend: {
      textStyle: {
        rich: {
          a: {
            color: '#ffffff',
            fontSize: 16 * window.$rem,
            width: 160 * window.$rem
          }
        }
        // lineHeight: 32 * window.$rem
      },
      top: '5%',
      left: '20%',
      itemWidth: 12 * window.$rem,
      itemHeight: 12 * window.$rem,
      height: 30 * window.$rem,
      icon: 'roundRect',
      selectedMode: false,
      data: ['合格家次', '发现违法违规家次', '完成整改家次', '立案查处家次'],
      formatter: function (name) {
        return `{a|${name}}`
      }
    },
    grid: {
      top: '20%',
      left: '10%',
      right: '5%',
      bottom: '23%'
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
        margin: 16 * window.$rem,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          fontSize: 16 * window.$rem,
          color: '#ffffff'
        }
      },
      data: ['日常检查', '专项检查']
    },
    yAxis: [
      {
        name: '(家次)',
        nameLocation: 'end',
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'right',
          padding: [0, 0, 8 * window.$rem, 0]
        },
        axisLine: {
          lineStyle: {
            color: '#c5dae7'
          }
        },
        splitLine: {
          show: false
        },
        axisLabel: {
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
        name: '合格家次',
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        data: data[0].data,
        itemStyle: {
          normal: {
            color: colors[0]
          }
        }
      }, {
        z: 3,
        name: '合格家次',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: data[0].data,
        symbol: 'diamond',
        symbolOffset: ['-195%', '-50%'],
        symbolSize: [barWidth, 10 * window.$rem * (barWidth - 4 * window.$rem) / barWidth],
        itemStyle: {
          normal: {
            borderColor: '#CB5AA1',
            borderWidth: 1,
            color: '#CB5AA1'
          }
        }
      },
      {
        name: '发现违法违规家次',
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        data: data[1].data,
        itemStyle: {
          normal: {
            color: colors[1]
          }
        }
      }, {
        z: 3,
        name: '发现违法违规家次',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: data[1].data,
        symbol: 'diamond',
        symbolOffset: ['-90%', '-50%'],
        symbolSize: [barWidth - 4 * window.$rem, 10 * window.$rem * (barWidth - 4 * window.$rem) / barWidth],
        itemStyle: {
          normal: {
            borderColor: '#97ebd1',
            borderWidth: 1,
            color: '#97ebd1'
          }
        }

      },
      {
        name: '完成整改家次',
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        data: data[2].data,
        itemStyle: {
          normal: {
            color: colors[2]
          }
        }
      }, {
        z: 3,
        name: '完成整改家次',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: data[2].data,
        symbol: 'diamond',
        symbolOffset: ['95%', '-50%'],
        symbolSize: [barWidth - 4 * window.$rem, 10 * window.$rem * (barWidth - 4 * window.$rem) / barWidth],
        itemStyle: {
          normal: {
            borderColor: '#e0b755',
            borderWidth: 2,
            color: '#e0b755'
          }
        }
      },
      {
        name: '立案查处家次',
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        data: data[3].data,
        itemStyle: {
          normal: {
            color: colors[3]
          }
        }
      }, {
        z: 3,
        name: '立案查处家次',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: data[3].data,
        symbol: 'diamond',
        symbolOffset: ['250%', '-50%'],
        symbolSize: [barWidth - 4 * window.$rem, 10 * window.$rem * (barWidth - 4 * window.$rem) / barWidth],
        itemStyle: {
          normal: {
            borderColor: '#44A0DE',
            borderWidth: 2 * window.$rem,
            color: '#44A0DE'
          }
        }
      }
    ]
  }
}

export default createOptions
