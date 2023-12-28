/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-02 16:28:51
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-28 20:23:19
 */
function returnData (data) {
  let sData = []
  let colorArr = ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea']
  data.forEach((item, index) => {
    sData.push({value: item.teacherNum, name: item.schoolType, per: item.teacherRate})
  })
  let option = {
    title: {
      text: '',
      x: 'center'
    },
    color: colorArr,
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
    legend: {
      x: '52%',
      y: '0',
      itemGap: 5,
      textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: 14 * window.$rem,
        rich: {
          a: {
            color: '#fbfcff',
            fontSize: 15 * window.$rem,
            lineHeight: 22 * window.$rem,
            padding: [0, 0, 22 * window.$rem, 15 * window.$rem]
          },
          b: {
            fontSize: 15 * window.$rem,
            color: '#75E3FB',
            lineHeight: 22 * window.$rem,
            padding: [0, 0, 22 * window.$rem, 11 * window.$rem]
          }
        }
      },
      icon: 'rect',
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      orient: 'vertical',
      // formatter: function (name) {
      //   return `{a|${name} } \n{b| 113个 36.9%}`
      // },
      formatter: function (name) {
        let value = ''
        let per = ''
        data.forEach(item => {
          if (name === item.schoolType) {
            value = item.teacherNum
            per = item.teacherRate
          }
        })
        return `{a|${name} } \n{b| ${value}人 ${per}%}`
      }
    },
    toolbox: {
      show: false,
      feature: {
        mark: {show: true},
        dataView: {show: true, readOnly: false},
        magicType: {
          show: true,
          type: ['pie', 'funnel']
        },
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    calculable: true,
    series: [
      {
        name: '各学段教师情况',
        type: 'pie',
        center: ['26%', '45%'],
        radius: [55 * window.$rem, 95 * window.$rem],
        label: {
          show: false
        },
        roseType: 'area',
        data: sData
      }
    ]
  }
  return option
}
export default returnData
