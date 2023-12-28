/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-06
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-19 17:11:06
 */
function returnData (data) {
  let sData = []
  // let total = 0
  data.forEach(item => {
    // total += item.zt04004
    if (item.zt04003 === 1) { // 企业
      sData.push({value: item.zt04004, name: '企业'})
    } else if (item.zt04003 === 2) { // 个体工商
      sData.push({value: item.zt04004, name: '个体'})
    } else if (item.zt04003 === 3) { // 农专合作社
      sData.push({value: item.zt04004, name: '农专'})
    }
  })
  let options = {
    color: ['#4BAEDD', '#5FC372', '#EF8432'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    // title: [
    //   {
    //     text: total,
    //     x: '35%',
    //     y: '36%',
    //     textStyle: {
    //       color: 'rgba(250,252,255,1)',
    //       textShadowColor: 'rgba(149,229,252,0.28)',
    //       textShadowOffsetX: 0,
    //       textShadowOffsetY: 1,
    //       textShadowBlur: 10 * window.$rem,
    //       fontSize: 24 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 400,
    //       fontFamily: 'Impact'
    //     }
    //   },
    //   {
    //     text: '新增',
    //     x: '30%',
    //     y: '46%',
    //     textStyle: {
    //       color: 'rgba(223,226,251,1)',
    //       fontSize: 19 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 'bold'
    //     }
    //   },
    //   {
    //     text: '(户)',
    //     x: '40%',
    //     y: '47%',
    //     textStyle: {
    //       color: 'rgba(223,226,251,0.72)',
    //       fontSize: 15 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 400
    //     }
    //   }
    // ],
    legend: {
      orient: 'vertical',
      right: 40 * window.$rem,
      // bottom: 30 * window.$rem,
      top: '30%',
      itemGap: 20 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      formatter: function (name) {
        var target
        for (var i = 0, l = sData.length; i < l; i++) {
          if (sData[i].name === name) {
            target = sData[i].value
          }
        }
        console.log(target)
        var arr = [
          // '{b|' + name + '}{a|' + ' ' + target + '户}'
          '{b|' + name + '}'
        ]
        return arr.join('\n')
      },
      textStyle: {
        color: '#FFFFFF',
        fontSize: 16 * window.$rem,
        padding: [0, 0, 0, 6 * window.$rem],
        rich: {
          a: {
            fontSize: 17 * window.$rem,
            verticalAlign: 'top',
            align: 'right'
          },
          b: {
            fontSize: 17 * window.$rem,
            // width: 75 * window.$rem,
            align: 'left'
          }
        }
      },
      data: ['企业', '个体', '农专']
    },
    series: [
      {
        name: '新增主体数量',
        type: 'pie',
        center: ['40%', '45%'],
        radius: [60 * window.$rem, 80 * window.$rem],
        // nameTextStyle: {
        //   color: ''
        // },
        // roseType: 'area',
        label: {
          normal: {
            show: false,
            position: 'outside',
            color: '#FFFFFF',
            textStyle: {
              fontSize: 18 * window.$rem,
              fontWeight: 'bold'
            },
            formatter (params) {
              return params.percent + '%'
            }
          },
          emphasis: {
            show: false,
            textStyle: {
              fontSize: 25 * window.$rem,
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            length: 5 * window.$rem,
            length2: 2 * window.$rem
          }
        },
        data: sData
      }
    ]
  }
  return options
}
// let data = [
//   {value: 1500, name: '个体商户'},
//   {value: 730, name: '内资企业'},
//   {value: 820, name: '私营企业'}
// ]
export default returnData
