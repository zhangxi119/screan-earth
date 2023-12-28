/*
 * @Author: zhangxi
 * @Date: 2020-02-27 17:06:20
 * @Last Modified by: nixy
 * @Last Modified time: 2020-03-09 14:06:52
 */
function createOptions (data) {
  return {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#2266E4', '#6BE673', '#F9E659'],
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
    legend: {
      right: '10%',
      orient: 'vertical',
      y: 'center',
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: 16 * window.$rem,
        rich: {
          a: {
            color: 'rgba(255,255,255,1)',
            fontSize: 16 * window.$rem,
            lineHeight: 27 * window.$rem,
            margin: 5 * window.$rem
          }
        }
      },
      icon: 'roundRect',
      formatter: function (name) {
        // let total = 0
        let target = ''
        for (var i = 0, l = data.length; i < l; i++) {
          // total += data[i].value
          if (data[i].name === name) {
            target = data[i].value
          }
        }
        target = '  ' + name + '  ' + target + '(户)'
        return `{a|${target}}`
      }
    },
    calculable: true,
    series: [
      {
        name: '餐饮服务量化分级评定',
        type: 'pie',
        radius: [65 * window.$rem, 80 * window.$rem],
        center: ['30%', '50%'],
        label: {
          show: false
        },
        data: data
      }
    ]
  }
}
export default createOptions
