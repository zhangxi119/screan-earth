/*
 * @Author: zhangxi
 * @Date: 2020-02-27 17:44:53
 * @Last Modified by: zhangxi
 * @Last Modified time: 2020-03-10 11:41:52
 */
let barWidth = 10
let dataval = [
  {value: 500},
  {value: 800},
  {value: 700},
  {value: 1500},
  {value: 1200},
  {value: 100},
  {value: 300},
  {value: 800},
  {value: 900},
  {value: 1600}
]
let options = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      axis: 'x',
      lineStyle: {
        color: 'rgba(255,160,109,1)',
        width: 2,
        type: 'solid'
      }
    },
    show: true,
    formatter: function (params) {
      let str = `<div class="g-echarts-tip" style="padding:10px 30px 10px 10px;background: rgba(5,33,66,.3);overflow:hidden;">
                <p style="margin:0;padding:0;margin-bottom:5px;">${params[1].name}</p>
                <p style="margin:0;padding:0;color: #96E2F7;font-sze:18px">${params[1].data}<span style="font-size:13px">人</span></p>
            </div>`
      return str
    }
  },
  xAxis: [
    {
      type: 'category',
      data: ['201903', '201903', '201903', '201903', '201903', '201903', '201903', '201903', '201903', '201903'],
      axisTick: {
        show: false
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: '#00ffee'
        }
      },
      axisLabel: {
        margin: 35,
        interval: 0,
        rotate: 25,
        show: true,
        textStyle: {
          color: 'rgba(255,255,255,1)',
          fontSize: 17
        }
      }
    }
  ],
  yAxis: [
    {
      show: false
    }
  ],
  grid: {
    top: '0',
    bottom: '40%'
  },
  series: [
    // {
    //   type: 'pictorialBar',
    //   name: '数据',
    //   barGap: 18,
    //   barWidth: 10,
    //   data: dataval,
    //   symbolOffset: [10, 0],
    //   z: 10
    // },
    {
      name: '',
      type: 'pictorialBar',
      symbolSize: [barWidth, 3],
      symbolOffset: [0, -2],
      z: 12,
      symbolPosition: 'end',
      itemStyle: {
        normal: {
          color: '#78EAFF'
        }
      },
      emphasis: {
        itemStyle: {
          color: '#1dffe7'
        }
      },
      data: dataval

    },
    {
      name: '',
      type: 'pictorialBar',
      symbolSize: [barWidth, 3],
      symbolOffset: [0, 0],
      z: 12,
      symbolPosition: 'start',
      itemStyle: {
        normal: {
          color: '#78EAFF'
        }
      },
      emphasis: {
        itemStyle: {
          color: 'rgba(255,160,109,1)'
        }
      },
      data: dataval
    },
    {
      type: 'bar',
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0, color: 'rgba(120,234,255,0.8)' // 0% 处的颜色
            }, {
              offset: 0.3, color: 'rgba(120,234,255,0.1)' // 0% 处的颜色
            },
            {
              offset: 0.5, color: 'rgba(120,234,255,0.03)' // 0% 处的颜色
            }, {
              offset: 0.7, color: 'rgba(120,234,255,0.1)' // 0% 处的颜色
            },
            {
              offset: 1, color: 'rgba(120,234,255,0.8)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }

        }
      },
      barWidth: barWidth,
      emphasis: {
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0, color: 'rgba(255,160,109,0.8)' // 0% 处的颜色
            }, {
              offset: 0.3, color: 'rgba(255,160,109,0.1)' // 0% 处的颜色
            },
            {
              offset: 0.5, color: 'rgba(255,160,109,0.03)' // 0% 处的颜色
            }, {
              offset: 0.7, color: 'rgba(255,160,109,0.1)' // 0% 处的颜色
            },
            {
              offset: 1, color: 'rgba(255,160,109,0.8)' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }
        }
      },
      data: dataval
    },
    {
      symbol: 'circle',
      showSymbol: false, // 隐藏symbol只有鼠标移入时显示
      hoverAnimation: true,
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0.02, color: 'rgba(255,208,168,0)' // 0% 处的颜色
            },
            {
              offset: 0.1, color: 'rgba(255,208,168,1)' // 100% 处的颜色
            },
            {
              offset: 0.5, color: 'rgba(255,208,168,1)' // 100% 处的颜色
            },
            {
              offset: 0.6, color: 'rgba(255,208,168,1)' // 100% 处的颜色
            },
            {
              offset: 0.7, color: 'rgba(255,208,168,1)' // 100% 处的颜色
            },
            {
              offset: 0.98, color: 'rgba(255,208,168,0)' // 100% 处的颜色
            }
          ],
          global: false // 缺省为 false
        },
        width: 2
      },
      emphasis: {
        itemStyle: {
          color: '#fff',
          borderColor: '#fe955e',
          borderWidth: 2
        }
      },
      markLine: {
        emphasis: {
          lineStyle: {
            width: 5
          }
        }
      },
      data: dataval,
      type: 'line',
      smooth: true
    }
  ]
}
export default options
