/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-17 16:12:21
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-28 21:48:17
 */

function getOption (data) {
  return {
    color: ['#00B0E2', '#23C768', '#E55711', '#FCE62F', '#7EFFDB'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}人 ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      orient: 'vertical',
      right: 20 * window.$rem,
      bottom: '25%',
      itemGap: 14 * window.$rem,
      itemWidth: 14 * window.$rem,
      icon: 'circle',
      // icon: 'rect',
      textStyle: {
        type: 'circle',
        color: '#FFFFFF',
        fontSize: 20 * window.$rem,
        rich: {
          a: {
            fontSize: 20 * window.$rem,
            // verticalAlign: 'top',
            color: '#FCE62F',
            align: 'left',
            width: 120 * window.$rem,
            lineHeight: 1.4 * 20 * window.$rem
          },
          b: {
            fontSize: 20 * window.$rem,
            width: 160 * window.$rem,
            align: 'left',
            overflow: 'hidden',
            lineHeight: 1.2 * 20 * window.$rem

          },
          c: {
            fontSize: 20 * window.$rem,
            width: 100 * window.$rem,
            color: '#FCE62F',
            align: 'center',
            lineHeight: 1.2 * 20 * window.$rem
          }
        }
      },
      formatter: function (name) {
        var target
        // var total = 0
        for (var i = 0, l = data.length; i < l; i++) {
          // total += data[i].value
          if (data[i].name === name) {
            target = data[i].value
          }
        }
        // var d = ((target / total) * 100)
        var arr = [
        //  '{b|' + name + '}{a|' + target + '个}{c|' + d.toFixed(1) + '%}'
          '{b|' + name + '}{c|' + target + '人}'
        ]
        return arr.join('\n')
      },
      data: data // ['学者', '护士', '专家', '医生', '其他'] // arr1
    },
    series: [
      {
        name: '人员构成',
        type: 'pie',
        center: ['30%', '54%'],
        radius: [80 * window.$rem, 100 * window.$rem],
        label: {
          normal: {
            show: false,
            textStyle: {
              color: '#ffffff',
              fontSize: 18 * window.$rem
            }
            // distanceToLabelLine: 5
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: true,
            lineStyle: {
              color: '#fff'
            },
            distanceToLabelLine: 3,
            length: '.5%'
          }
        },
        data: data
      }
    ]
  }
}
export default getOption
