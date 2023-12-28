/*
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-16 9:12:20
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-25 12:03:23
 */
// let data = [
//   {
//     value: 100,
//     name: '执业(助理)医师'
//   },
//   {
//     value: 30,
//     name: '执业医师'
//   },
//   {
//     value: 100,
//     name: '注册护士'
//   },
//   {
//     value: 30,
//     name: '药师(士)'
//   },
//   {
//     value: 100,
//     name: '技师(士)'
//   },
//   {
//     value: 30,
//     name: '其他'
//   }
// ]
function retrunData (param) {
  let lData = []
  let total = 0
  let sData = []
  param.forEach(item => {
    lData.push(item.cardType)
    total += item.num
    sData.push({name: item.cardType, value: item.num})
  })
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {
      show: false,
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    // xAxis: {
    //   axisLabel: {
    //     fontSize: 14 * window.$rem
    //   }
    // },
    title: [
      {
        text: total,
        subtext: '医疗人员(人)',
        textStyle: {
          fontSize: 26 * window.$rem,
          color: 'rgba(119,208,250,1)',
          textShadow: '0px 1px 10px rgba(147,229,252,0.28)'
        },
        subtextStyle: {
          fontSize: 14 * window.$rem,
          color: '#DFE2FB'
        },
        textAlign: 'center',
        x: '48%',
        y: '28%'
      }
    ],
    legend: {
      show: false,
      bottom: 0 * window.$rem,
      left: 10 * window.$rem,
      right: 10 * window.$rem,
      data: lData,
      itemHeight: 15 * window.$rem,
      itemWidth: 15 * window.$rem,
      borderRadius: 2,
      padding: 5 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 17 * window.$rem
      }
    },
    calculable: true,
    color: [
      '#2266E4',
      '#64DEF8',
      '#6BE673',
      '#F9E659',
      '#E38031',
      '#4A1FE9'
    ],
    series: [
      {
        name: '卫生人员',
        type: 'pie',
        radius: [68 * window.$rem, 80 * window.$rem],
        center: ['48%', '36%'],
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: true,
            color: '#FFF',
            formatter: '{b}\n{d}%',
            fontSize: 18 * window.$rem
          },
          labelLine: {
            show: true,
            length: 20 * window.$rem,
            length2: 5 * window.$rem
          }
        },
        data: sData
      }
    ]
  }
  return option
}
export default retrunData
