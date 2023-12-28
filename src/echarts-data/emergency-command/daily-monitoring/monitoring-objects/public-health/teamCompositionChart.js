/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-11 10:53:06
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-13 15:59:38
 */
let option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
    backgroundColor: 'rgba(0,53,126,0.74)',
    borderColor: '#44aaf4',
    borderWidth: 2 * window.$rem,
    padding: [10 * window.$rem, 20 * window.$rem],
    textStyle: {
      fontSize: 17 * window.$rem
    }
  },
  legend: {
    orient: 'vertical',
    left: '55%',
    top: '20%',
    itemGap: 20 * window.$rem,
    itemHeight: 20 * window.$rem,
    itemWidth: 35 * window.$rem,
    data: ['疾控医生', '专家', '护士', '学者', '其他'],
    textStyle: {
      color: '#fff',
      // width: '120',
      padding: [0, 0, 0, 5 * window.$rem],
      rich: {
        a: {
          fontSize: 17 * window.$rem
          // width: 40 * window.$rem
        }
      }
    },
    formatter (name) {
      return `{a|${name}}`
    }
  },
  color: ['#2266E4', '#67DAEA', '#7BFAA7', '#F5C262', '#E76044'],
  series: [
    {
      name: '医护队伍人员构成',
      type: 'pie',
      radius: ['65%', '80%'],
      avoidLabelOverlap: false,
      // left: '0',
      center: ['30%', '48%'],
      label: {
        normal: {
          show: false,
          position: 'center',
          textStyle: {
            fontSize: 24 * window.$rem,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#77D0FA'
          },
          formatter: '{b}:{c}' // '{b}:{c}({d}%)'
        },
        emphasis: {
          show: false,
          textStyle: {
            fontSize: 24 * window.$rem,
            fontWeight: 'bold',
            fontStyle: 'italic'
          }
          // formatter: '{b}:{c}({d}%)' // '{b}:{c}({d}%)'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 335, name: '疾控医生'},
        {value: 310, name: '专家'},
        {value: 234, name: '护士'},
        {value: 135, name: '学者'},
        {value: 1548, name: '其他'}
      ]
    }
  ]
}
export default option
