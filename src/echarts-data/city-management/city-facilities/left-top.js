/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-06
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-23 10:08:54
 */
function returnData (data) {
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      position: ['25%', '50%']
    },
    legend: {
      left: 0,
      bottom: 10 * window.$rem,
      itemGap: 5 * window.$rem,
      itemWidth: 12 * window.$rem,
      textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: 15 * window.$rem
      },
      formatter (name) {
        return name
      }
    },
    series: [
      {
        name: '城市设施',
        type: 'pie',
        radius: [60 * window.$rem, 80 * window.$rem],
        center: ['35%', '42%'],
        data: [{
          value: data.publicSum,
          name: `公共设施 ${data.publicSum}个`,
          itemStyle: {
            color: '#2266E4'
          },
          label: {
            color: 'rgba(255,255,255,1)',
            fontSize: 18 * window.$rem,
            show: false,
            formatter: `{a|${data.publicSum}个}\n公共设施`,
            rich: {
              a: {
                color: '#F9E659',
                fontSize: 18 * window.$rem,
                lineHeight: 30 * window.$rem
              }
            }
          },
          labelLine: {
            length: 30 * window.$rem,
            show: false
          },
          emphasis: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        {
          value: data.roadSum,
          name: `道路交通 ${data.roadSum}个`,
          itemStyle: {
            color: '#EF8432'
          },
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          emphasis: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        {
          value: data.envSum,
          name: `市容环境 ${data.envSum}个`,
          itemStyle: {
            color: '#F9E659'
          },
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          emphasis: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        {
          value: data.greenSum,
          name: `园林绿化 ${data.greenSum}个`,
          itemStyle: {
            color: '#6BE673'
          },
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          emphasis: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        },
        {
          value: data.otherSum,
          name: `其他设施 ${data.otherSum}个`,
          itemStyle: {
            color: '#36D6FE'
          },
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          emphasis: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        }
        ]
      }
    ]
  }
  return option
}

export default returnData
