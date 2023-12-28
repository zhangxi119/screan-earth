
/*
 * @Descripttion:
 * @Author: wangting
 * @Date: 2020-04-22 20:37:49
 * @LastEditors: wangting
 * @LastEditTime: 2020-05-09 15:41:34
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
      formatter: '{a} <br/>{b}: {c}个 ({d}%)',
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
      right: '15%',
      top: '30%',
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
        return '{title|' + name + '}{value|' + value + '个}'
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
      data: ['5A级', '4A级', '3A级以下']
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
            value: runData.data[0].value,
            name: '5A级',
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
                  return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '个' + '}'
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
            value: runData.data[1].value,
            name: '4A级',
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
            value: runData.data[2].value,
            name: '3A级以下',
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

