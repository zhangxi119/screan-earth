/*
 * @Author: zhangxi
 * @Date: 2020-03-02 16:28:51
 * @Last Modified by: nixy
 * @Last Modified time: 2020-03-09 19:12:07
 */

function createOptions (data) {
  return {
    title: {
      text: '',
      x: 'center'
    },
    color: ['#3B91F7', '#5FC372', '#EF8432', '#9FFCDD'],
    tooltip: {
      show: true,
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
      y: 'center',
      right: '10%',
      top: '38%',
      width: '40%',
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
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
      orient: 'horizontal',
      formatter: function (name) {
      //  let total = 0
        let target = ''
        for (var i = 0, l = data.length; i < l; i++) {
        //  total += data[i].value
          if (data[i].name === name) {
            target = data[i].value
          }
        }
        target = '  ' + name + '  ' + target + '(户)'
        return `{a|${target}}`
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
        name: '食品主体构成',
        type: 'pie',
        center: ['27%', '60%'],
        startAngle: 45,
        radius: [80 * window.$rem, 100 * window.$rem],
        label: {
          show: false,
          textStyle: {
            color: '#ffffff',
            fontSize: 16 * window.$rem
          }
        },
        labelLine: {
          show: false,
          length2: 0,
          lineStyle: {
            color: '#ffffff'
          }
        },
        // roseType: 'radius',
        data: data
      }
    ]
  }
}

export default createOptions
