
/*
 * @Descripttion:
 * @Author: fujifeng
 * @Date: 2020-05-18 21:22:49
 * @LastEditors: fujifeng
 * @LastEditTime: 2020-05-18 21:22:49
 */
export default function run (runData) {
  let data = runData.data
  let rich = {
    yellow: {
      color: '#ffc72b',
      fontSize: 17 * window.$rem,
      padding: [5 * window.$rem, 8 * window.$rem],
      align: 'center'
    },
    total: {
      color: '#ffc72b',
      fontSize: 40 * window.$rem,
      align: 'center'
    },
    white: {
      color: '#fff',
      align: 'center',
      fontSize: 17 * window.$rem,
      padding: [5 * window.$rem, 0]
    },
    hr: {
      borderColor: '#008CF5',
      width: '100%',
      borderWidth: 1,
      height: 0
    }
  }
  return {
    color: [],
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}人 ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [5 * window.$rem, 10 * window.$rem],
      textStyle: {
        fontSize: 15 * window.$rem
      },
      position: 'right',
      confine: false
    },
    legend: {
      orient: 'vertical',
      right: '1%',
      top: '15%',
      itemGap: 30 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      formatter: function (name) {
        let value = 0
        data.forEach(function (item) {
          if (item.name === name) {
            value = item.value
          }
        })
        return '{title|' + name + '}{value|' + value + '人}'
        // if (name === '完成投资金额') {
        //   return '{title|' + name + '}{value|' + (data[4].value / total * 100).toFixed(0) + '%}'
        // } else {
        //   return '{title|' + name + '}{value|' + ((total - data[4].value) / total * 100).toFixed(0) + '%}'
        // }
      },
      textStyle: {
        rich: {
          title: {
            fontSize: 17 * window.$rem,
            color: '#fff'
          },
          value: {
            fontSize: 17 * window.$rem,
            color: '#FCE62F',
            padding: [0, 0, 0, 10 * window.$rem]
          }
        }
      },
      data: ['省内游客', '省外游客', '境外游客']
    },
    series: [
      {
        name: '',
        type: 'pie',
        center: ['25%', '45%'],
        radius: ['50%', '60%'],
        avoidLabelOverlap: false,
        data: [
          {
            value: data[0].value,
            name: '省内游客',
            labelLine: {
              normal: {
                show: false
              }
              // show: true
              // length: 10 * window.$rem,
              // color: '#008CF5'
            },
            label: {
              show: true,
              position: 'outside',
              // formatter: '{b}{c}亿元<br/>{d}%',
              normal: {
                formatter: function (params, ticket, callback) {
                  return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '人' + '}'
                },
                rich: rich,
                position: 'inner',
                show: false
              },
              textStyle: {
                color: '#fff',
                fontSize: 16 * window.$rem
              }
            },
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#00B6E3' // 0% 处的颜色
                }, {
                  offset: 1, color: '#007EFB' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          },
          {
            value: data[1].value,
            name: '省外游客',
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              color: '#6BE573'
            },
            emphasis: {
              labelLine: {show: false}
            }
          },
          {
            value: data[2].value,
            name: '境外游客',
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              color: '#FCE62F'
            },
            emphasis: {
              labelLine: {show: false}
            }
          }
        ]
      }
    ]
  }
}

