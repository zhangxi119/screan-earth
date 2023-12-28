/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-09 17:05:19
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-03-19 10:41:32
 */
function returnData (param) {
  // let sData = []
  // param.forEach(item => {
  //   sData.push({value: item.appealNum, name: item.appealChannel})
  // })
  let sData = param
  console.log(param)
  // sData.forEach((item, index) => {
  //   if (index !== 0) {
  //     item.label = {show: false}
  //     item.labelLine = {show: false}
  //   } else {
  //     item.label = {show: true}
  //     item.labelLine = {show: true}
  //   }
  // })
  console.log(sData)
  let options = {
    title: {
      text: '超时办理事件类型占比',
      left: 18 * window.$rem,
      textStyle: {
        fontSize: 18 * window.$rem,
        color: 'white'
      }
    },
    color: ['#006FEC', '#0291FF', '#00D9F4', '#07EA62', '#FCE62F', '#F17A06', '#F01100', '#C200F3'],
    legend: {
      orient: 'vertical',
      right: 25 * window.$rem,
      top: 'center',
      width: '100%',
      itemGap: 15 * window.$rem,
      itemWidth: 13 * window.$rem,
      itemHeight: 13 * window.$rem,
      formatter: function (name) {
        let target = 0
        let total = 0
        for (var i = 0, l = sData.length; i < l; i++) {
          total += sData[i].value
          if (sData[i].name === name) {
            target = sData[i].value
          }
        }
        let p = (target / total * 100).toFixed(2)
        var arr = [
          '{b|' + name + '}   {a|' + p + '%' + '}'
        ]
        return arr.join(',')
      },
      textStyle: {
        color: '#FFFFFF',
        fontSize: 12 * window.$rem,
        rich: {
          a: {
            fontSize: 12 * window.$rem,
            color: '#FFE600',
            width: 30 * window.$rem
          },
          b: {
            fontSize: 12 * window.$rem,
            width: 30 * window.$rem
          }
        }
      }
    },
    series: [
      {
        name: '诉求类型',
        type: 'pie',
        radius: ['35%', '45%'],
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
            length: 20 * window.$rem,
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
