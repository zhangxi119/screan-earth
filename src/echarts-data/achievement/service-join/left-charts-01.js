/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-09 17:05:19
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-03-19 10:41:32
 */
function returnData (param) {
  let sData = []
  let colorIndex = ['#006FEC', '#0AD192', '#FCE62F', '#E55711', '#00E1FC', '#09A5FF']
  param.forEach((item, index) => {
    sData.push({value: item.appealNum, name: item.appealChannel, itemStyle: {color: colorIndex[index]}})
  })
  var arr = []
  for (var i = 0; i < sData.length; i++) {
    if (sData[i].name === '其他') {
      arr = sData.splice(i, 1)
    }
  }
  sData.push(arr[0])
  let options = {
    legend: {
      orient: 'vertical',
      left: '60%',
      top: 'center',
      itemGap: 10 * window.$rem,
      width: 10 * window.$rem,
      itemWidth: 13 * window.$rem,
      itemHeight: 13 * window.$rem,
      formatter: function (name) {
        var target
        for (var i = 0, l = sData.length; i < l; i++) {
          if (sData[i].name === name) {
            target = sData[i].value
          }
        }
        var arr = [
          '{b|' + name + '}：{a|' + target + '(件)' + '}          '
        ]
        return arr.join('\n')
      },
      textStyle: {
        color: '#FFFFFF',
        fontSize: 15 * window.$rem,
        rich: {
          a: {
            fontSize: 15 * window.$rem,
            verticalAlign: 'top',
            align: 'left',
            color: '#FFE600'
          },
          b: {
            fontSize: 15 * window.$rem,
            align: 'left'
          }
        }
      }
    },
    series: [
      {
        name: '诉求类型',
        type: 'pie',
        radius: ['40%', '50%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'outside',
            distanceToLabelLine: -48,
            width: 60 * window.$rem,
            height: 40 * window.$rem,
            formatter (params) {
              return `{a|${params.data.name}} \n {b|${params.data.value}}`
            },
            rich: {
              a: {
                fontSize: 15 * window.$rem,
                verticalAlign: 'top',
                align: 'right',
                color: '#FFFFFF'
              },
              b: {
                fontSize: 18 * window.$rem,
                padding: [5, 0, 10, 0],
                verticalAlign: 'top',
                align: 'center',
                color: '#FCE62F',
                fontWeight: 'bolder'
              }
            }
          },
          emphasis: {
            show: true
          }
        },
        labelLine: {
          normal: {
            show: true,
            length: 10 * window.$rem,
            length2: 50 * window.$rem
          }
        },
        data: sData
      }
    ]
  }
  return options
}
export default returnData
