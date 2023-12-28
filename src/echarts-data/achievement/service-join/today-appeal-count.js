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
  console.log(param)
  let sData = param
  let options = {
    color: ['#2E70E4', '#FCE62F', '#00E1FC', '#0AD192', '#E55711'],
    legend: {
      orient: 'horizontal',
      left: 45 * window.$rem,
      bottom: 0,
      width: '80%',
      itemGap: 15 * window.$rem,
      itemWidth: 13 * window.$rem,
      itemHeight: 10 * window.$rem,
      formatter: function (name) {
        let target = 0
        // let total = 0
        for (var i = 0, l = sData.length; i < l; i++) {
          // total += sData[i].value
          if (sData[i].name === name) {
            target = sData[i].value
          }
        }
        // let p = (target / total * 100).toFixed(2)
        var arr = [
          '{b|' + name + '}   {a|' + target + '}'
        ]
        return arr.join(',')
      },
      textStyle: {
        color: '#FFFFFF',
        fontSize: 12 * window.$rem,
        rich: {
          a: {
            fontSize: 12 * window.$rem,
            color: '#FFE600'
          },
          b: {
            fontSize: 12 * window.$rem
          }
        }
      }
    },
    series: [
      {
        name: '诉求类型',
        type: 'pie',
        radius: ['40%', '50%'],
        center: ['50%', '42%'],
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
