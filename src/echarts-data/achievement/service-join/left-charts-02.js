/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-09 17:05:19
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-03-19 10:42:16
 */
// let data = [
//   {value: 3350, name: '咨询'},
//   {value: 310, name: '投诉'},
//   {value: 234, name: '建议'},
//   {value: 135, name: '表扬'},
//   {value: 154, name: '举报'},
//   {value: 234, name: '求助'},
//   {value: 135, name: '意见'},
//   {value: 154, name: '其他'}
// ]
function returnData (param) {
  console.log(param)
  param = param.sort((b, a) => { return a.appealNum - b.appealNum })
  let sData = []
  let colorIndex = ['#006FEC', '#0291FF', '#00D9F4', '#07EA62', '#FCE62F', '#F17A06', '#F01100', '#C200F3']
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
      right: 30 * window.$rem,
      top: 'center',
      itemGap: 6 * window.$rem,
      width: 20 * window.$rem,
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
          '{b|' + name + '}： {a|' + target + '(件)' + '}'
        ]
        return arr.join('')
      },
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16 * window.$rem,
        rich: {
          a: {
            fontSize: 16 * window.$rem,
            verticalAlign: 'top',
            align: 'right',
            color: '#FFE600'
          },
          b: {
            fontSize: 16 * window.$rem,
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
            length: 5 * window.$rem,
            length2: 30 * window.$rem
          }
        },
        data: sData
      }
    ]
  }
  return options
}
export default returnData
