/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-04-25 17:57:05
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-07 17:29:37
 */

function foamterThoand (val) {
  return val.toString().replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
}
function rentruenData (data) {
  console.log(data.dataList)
  //   let colorArr = ['#2367E4', '#6BE573', '#F9E559', '#DB349F', '#4B25E9']
  let sData = []
  let nData = []
  data.dataList.forEach(item => {
    nData.push(item.name)
    sData.push({value: item.value, name: item.name})
  })
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    title: [
      {
        text: foamterThoand(data.total),
        x: 'center',
        y: '31.5%',
        textStyle: {
          color: '#78D0FA',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
          textShadowBlur: 10,
          fontSize: 28 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: '学生总数',
        x: 'center',
        // x: 'center',
        y: '23%',
        textStyle: {
          color: 'rgba(223,226,251,1)',
          fontSize: 17 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: '(人)',
        x: 'center',
        y: '43.5%',
        textStyle: {
          color: 'rgba(223,226,251,0.72)',
          fontSize: 14 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      }
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} 人 ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    color: ['#0291FF', '#00E1FC', '#07EA62', '#FCE62F'],
    legend: {
      x: 'center',
      y: '65%',
      show: true,
      // width: '95%',
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: 14 * window.$rem,
        rich: {
          a: {
            color: '#fbfcff',
            fontSize: 14 * window.$rem,
            padding: [0, 0, 0, 5 * window.$rem],
            lineHeight: 20 * window.$rem
          },
          b: {
            fontSize: 14 * window.$rem,
            color: '#F2D5A9',
            lineHeight: 20 * window.$rem
          }
        }
      },
      icon: 'roundRect',
      // orient: 'vertical',
      formatter: function (name) {
        let value = ''
        let per = ''
        console.log(name)
        data.dataList.forEach(item => {
          if (name === item.name) {
            value = item.value
            per = (item.value / data.total * 100).toFixed(1)
          }
        })
        return `{a|${name} } {b| ${value}人 ${per}%}`
      }
    //   data: nData
    },
    calculable: true,
    series: [
      {
        name: '学生情况',
        type: 'pie',
        radius: [60 * window.$rem, 75 * window.$rem],
        center: ['center', '33%'],
        label: {
          show: false
        },
        data: sData
      }
    ]
  }
  return option
}
export default rentruenData
