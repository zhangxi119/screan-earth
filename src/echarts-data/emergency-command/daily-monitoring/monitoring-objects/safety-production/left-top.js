/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-08
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-28 14:41:47
 */
import goal from '../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/goal.png'
import chemicals from '../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/chemicals.png'
import coal from '../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/coal.png'
import trade from '../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/trade.png'
import fireworks from '../../../../../assets/emergency-command/daily-monitoring/monitoring-objects/safety-production/fireworks.png'
function returnData (params) {
  let data = []
  params.forEach(item => {
    data.push({
      name: item.industryName,
      value: item.counts
    })
  })
  let options = {
    color: ['#4BAEDD', '#5FC372', '#EF8432', '#9FFCDD', '#F9E659'],
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      formatter: '{a}<br/>{b}:  {c}家',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      orient: 'vertical',
      right: 120 * window.$rem,
      bottom: 35 * window.$rem,
      itemGap: 5 * window.$rem,
      itemWidth: 30 * window.$rem,
      itemHeight: 30 * window.$rem,
      formatter: function (name) {
        var target
        for (var i = 0, l = data.length; i < l; i++) {
          if (data[i].name === name) {
            target = data[i].value
          }
        }
        var arr = [
          '{b|' + name + '}{a|' + target + '家}'
        ]
        return arr.join('\n')
      },
      textStyle: {
        color: '#FFFFFF',
        fontSize: 17 * window.$rem,
        rich: {
          a: {
            fontSize: 17 * window.$rem,
            verticalAlign: 'top',
            align: 'right'
          },
          b: {
            fontSize: 17 * window.$rem,
            width: 130 * window.$rem,
            align: 'left'
          }
        }
      },
      data: [
        {
          name: '煤矿行业',
          icon: `image://${goal}`// 格式为'image://+icon文件地址'，其中image::后的//不能省略
        },
        {
          name: '危险化学品行业',
          icon: `image://${chemicals}`
        },
        {
          name: '非煤矿山行业',
          icon: `image://${coal}`
        },
        {
          name: '工贸行业',
          icon: `image://${trade}`
        },
        {
          name: '烟花爆竹行业',
          icon: `image://${fireworks}`
        }
      ]
    },
    series: [
      {
        name: '安全生产企业分布',
        type: 'pie',
        center: ['35%', '50%'],
        radius: [30 * window.$rem, 80 * window.$rem],
        roseType: 'area',
        label: {
          normal: {
            show: true,
            position: 'outside',
            color: '#FFFFFF',
            textStyle: {
              fontSize: 16 * window.$rem,
              fontWeight: 'bold'
            },
            formatter (params) {
              return params.percent + '%'
            }
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: 25 * window.$rem,
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            length: 5 * window.$rem,
            length2: 0
          }
        },
        data: data
      }
    ]
  }
  return options
}
export default returnData
