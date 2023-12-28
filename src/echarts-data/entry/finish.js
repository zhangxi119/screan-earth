/*
 * @Descripttion:
 * @Author: wangting
 * @Date: 2020-04-22 20:37:49
 * @LastEditors: wangting
 * @LastEditTime: 2020-05-09 14:30:50
 */
export default function finish (data) {
  let total = data[4].total
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
      formatter: '{a} <br/>{b}: {c} 亿元 ({d}%)',
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
      left: '50%',
      bottom: '40%',
      itemGap: 30 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      formatter: function (name) {
        if (name === '完成投资金额') {
          return '{title|' + name + '}{value|' + (data[4].value / total * 100).toFixed(0) + '%}'
        } else {
          return '{title|' + name + '}{value|' + ((total - data[4].value) / total * 100).toFixed(0) + '%}'
        }
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
      data: ['完成投资金额', '未完成投资金额']
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
            value: data[4].value,
            name: '完成投资金额',
            labelLine: {
              show: true,
              length: 25 * window.$rem,
              color: '#008CF5'
            },
            label: {
              show: true,
              position: 'outside',
              // formatter: '{b}{c}亿元<br/>{d}%',
              normal: {
                formatter: function (params, ticket, callback) {
                  let percent = ((params.value / total) * 100).toFixed(0)
                  return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '亿元' + '}{yellow|' + percent + '%}'
                },
                rich: rich
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
            value: total - data[4].value,
            name: '未完成投资金额',
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#FCE62F' // 0% 处的颜色
                }, {
                  offset: 1, color: '#FCB62F' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
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
