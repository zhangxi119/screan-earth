/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-08
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-19 20:14:57
 */
// let data = [
//   {value: 182, name: '水位'},
//   {value: 119, name: '气象'},
//   {value: 89, name: '地灾'},
//   {value: 82, name: '内涝'},
//   {value: 35, name: '检测点位'}
// ]
function returnData (params) {
  let data = []
  let datas = []
  params.forEach(item => {
    if (item.typeName) {
      data.push(item.typeName)
      datas.push({
        name: item.typeName,
        value: item.counts
      })
    }
  })
  let options = {
    color: ['#409BE8', '#73FBFD', '#6BE573', '#F9E659', '#F58634', '#DA5CD4', '#4F5BF3'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}个 ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    title: {
      text: '风险点监测',
      left: '23%',
      top: 'center',
      textStyle: {
        color: 'rgba(255,255,255,.8)',
        fontSize: 20 * window.$rem
      }
    },
    legend: {
      orient: 'vertical',
      // right: 120 * window.$rem,
      // bottom: 90 * window.$rem,
      y: 'center',
      left: '45%',
      itemGap: 16 * window.$rem,
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      icon: 'circle',
      formatter: function (name) {
        var target
        var total = 0
        for (var i = 0, l = datas.length; i < l; i++) {
          total += datas[i].value
          if (datas[i].name === name) {
            target = datas[i].value
          }
        }
        var d = ((target / total) * 100)
        var arr = [
          '{b|' + name + '}{a|' + target + '个}{c|' + d.toFixed(1) + '%}'
        ]
        return arr.join('\n')
      },
      textStyle: {
        type: 'circle',
        color: '#FFFFFF',
        fontSize: 20 * window.$rem,
        rich: {
          a: {
            fontSize: 20 * window.$rem,
            verticalAlign: 'top',
            color: '#FCE62F',
            align: 'right'
          },
          b: {
            fontSize: 20 * window.$rem,
            width: 180 * window.$rem
          },
          c: {
            fontSize: 20 * window.$rem,
            width: 80 * window.$rem,
            color: '#FCE62F',
            align: 'left'
          }
        }
      },
      data: data
    },
    series: [
      {
        name: '风险点监测',
        type: 'pie',
        center: ['30%', '48%'],
        radius: [70 * window.$rem, 90 * window.$rem],
        // roseType: 'area',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: datas
      }
    ]
  }
  return options
}
export default returnData
