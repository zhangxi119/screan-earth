/*
 * @Author: zhangxi
 * @Date: 2020-03-03 18:03:55
 * @Last Modified by: nixy
 * @Last Modified time: 2020-03-09 14:53:28
 */
var mColor = [
  '#F3D0FB', '#b1f6e4', '#cd9d74'
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
    }]
  }
]

var barWidth = 18 * window.$rem
function createOptions (xdata, data) {
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
          str += '<p>' + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + mColor[i] + ';"></span>' + d.seriesName + '：' + d.value + '家次' + '</p>'
        })
        return str
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      textStyle: {
        fontSize: 17 * window.$rem
      }

    },
    legend: {
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: '#ffffff',
        fontSize: 16 * window.$rem,
        padding: [2 * window.$rem, 4 * window.$rem, 2 * window.$rem, 5 * window.$rem]
      },
      top: '5%',
      right: '9%',
      selectedMode: false,
      data: ['检查经营主体家次', '完成整改主体家次', '发现违法违规经营主体家次'],
      formatter (name) {
        return `${name}`
      }
    },
    grid: {
      top: '25%',
      left: '15%',
      right: '5%',
      bottom: '18%'
    },
    xAxis: {
      type: 'category',
      offset: 2 * window.$rem,
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
        margin: 10 * window.$rem,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          fontSize: 16 * window.$rem,
          color: '#ffffff'
        }
      },
      data: xdata
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
        name: '检查经营主体家次',
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        data: data[0].data,
        itemStyle: {
          normal: {
            color: colors[0]
          }
        }
      },
      {
        z: 3,
        name: '检查经营主体家次',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: data[0].data,
        symbol: 'diamond',
        symbolOffset: ['-130%', '-50%'],
        symbolSize: [barWidth, 10 * (barWidth - 4) / barWidth],
        itemStyle: {
          normal: {
            borderColor: '#CB5AA1',
            borderWidth: 1,
            color: '#CB5AA1'
          }
        }
      },
      {
        name: '完成整改主体家次',
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
        name: '完成整改主体家次',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: data[1].data,
        symbol: 'diamond',
        symbolOffset: ['0%', '-50%'],
        symbolSize: [barWidth - 4, 10 * (barWidth - 4) / barWidth],
        itemStyle: {
          normal: {
            borderColor: '#97ebd1',
            borderWidth: 1,
            color: '#97ebd1'
          }
        }

      },
      {
        name: '发现违法违规经营主体家次',
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
        name: '发现违法违规经营主体家次',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: data[2].data,
        symbol: 'diamond',
        symbolOffset: ['160%', '-50%'],
        symbolSize: [barWidth - 4, 10 * (barWidth - 4) / barWidth],
        itemStyle: {
          normal: {
            borderColor: '#e0b755',
            borderWidth: 2 * window.$rem,
            color: '#e0b755'
          }
        }
      }
    ]
  }
}
export default createOptions
