/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-06
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-17 16:46:01
 */
// import img1 from '@/assets/emergency-command/daily-monitoring/major-hazards/img/形状 1646@2x.png'
// import img2 from '@/assets/emergency-command/daily-monitoring/major-hazards/img/形状 1645@2x.png'
// import img3 from '@/assets/emergency-command/daily-monitoring/major-hazards/img/形状 1644@2x.png'
// import img4 from '@/assets/emergency-command/daily-monitoring/major-hazards/img/形状 1643@2x.png'
// import img5 from '@/assets/emergency-command/daily-monitoring/major-hazards/img/形状 1642@2x.png'

function setData (data) {
  let newData = []
  data.forEach((item, index) => {
    newData.push({
      name: item.industryName,
      value: item.counts
    })
  })
  let options = {
    color: ['#4BAEDD', '#5FC372', '#EF8432', '#9FFCDD', '#F9E659'],
    tooltip: {
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
    // legend: {
    //   orient: 'vertical',
    //   // selectedMode: false,
    //   right: '15%',
    //   top: '10%',
    //   itemGap: 5,
    //   // itemWidth: 30,
    //   // itemHeight: 30,
    //   textStyle: {
    //     color: '#FFFFFF',
    //     fontSize: 17,
    //     rich: {
    //       a: {
    //         fontSize: 17,
    //         verticalAlign: 'top',
    //         align: 'right'
    //       },
    //       b: {
    //         fontSize: 17,
    //         width: 100,
    //         align: 'left'
    //       }
    //     }
    //   }
    // },
    series: [
      {
        name: '危险源企业',
        type: 'pie',
        center: ['31%', '53%'],
        radius: [40 * window.$rem, 90 * window.$rem],
        roseType: 'area',
        label: {
          normal: {
            show: true,
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
            show: true,
            textStyle: {
              fontSize: 25 * window.$rem,
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            length: 1 * window.$rem, // 改变标示线的长度
            lineStyle: {
            }
          }
        },
        data: newData
      }
    ]
  }
  return options
}
export default setData
