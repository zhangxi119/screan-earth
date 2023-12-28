/*
 * @Author: zhangxi
 * @Date: 2020-03-02 16:28:51
 * @Last Modified by: nixy
 * @Last Modified time: 2020-03-09 19:12:07
 */

function creatOptions (data) {
  return {
    title: {
      text: '',
      x: 'center'
    },
    color: ['#EF8432', '#5FC372', '#F7C744', '#44A0DE', 'rgba(0,0,0,0)'],
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      y: 'top',
      right: '20%',
      top: '20%',
      // width: '40%',
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        rich: {
          a: {
            color: 'rgba(255,255,255,1)',
            fontSize: 16 * window.$rem,
            lineHeight: 17 * window.$rem,
            width: 100 * window.$rem,
            margin: [0, 0, 0, 5 * window.$rem]
          }
        }
      },
      icon: 'roundRect',
      orient: 'horizontal',
      formatter: function (name) {
        return `      {a|${name}}      `
      },
      data: data
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
        name: '2019年药品经营检查情况',
        type: 'pie',
        startAngle: 0,
        center: ['45%', '45%'],
        radius: ['20%', '80%'],
        max: 500,
        label: {
          show: true,
          textStyle: {
            color: '#ffffff',
            fontSize: 16 * window.$rem
          },
          formatter: function (param) {
            return param.value
          }
        },
        labelLine: {
          show: true,
          length: 0,
          length2: 2

        },
        roseType: 'radius',
        data: data
      }
    ]
  }
}
export default creatOptions
