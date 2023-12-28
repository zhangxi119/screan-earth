/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-16 11:12:49
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-29 20:33:28
 */
export default [
  {
    name: '应急指挥调度',
    children: [
      {
        name: '监测预警',
        route: 'naturalDisasters'
        // children: [
        //   {
        //     name: '安全生产',
        //     route: 'safetyProduction'
        //   },
        //   {
        //     name: '重大危险源',
        //     route: 'majorHazards'
        //   }, {
        //     name: '自然灾害',
        //     route: 'naturalDisasters'
        //   }, {
        //     name: '公共卫生',
        //     route: 'publicHealth'
        //   }
        // ]
      },
      {
        name: '应急指挥一张图',
        route: 'emergencyCommandChart'
      },
      {
        name: '安全态势',
        route: 'naturalHazard'
        // children: [
        //   {
        //     name: '安全生产',
        //     route: 'securitySituation'
        //   },
        //   {
        //     name: '社会安全',
        //     route: 'societalSecurity'
        //   }, {
        //     name: '自然灾害',
        //     route: 'naturalHazard'
        //   }, {
        //     name: '公共卫生',
        //     route: 'publicHygiene'
        //   }
        // ]
      },
      {
        name: '防洪应急专题',
        route: 'floodControl'
      },
      {
        name: '重大活动保障',
        route: 'majorGuarantee'
      }
    ]
  },
  {
    name: '心连心<br />服务',
    route: 'serviceJoin'
  },
  {
    name: '城市综合管理',
    children: [
      {
        name: '经济运行',
        children: [
          {
            name: '宏观经济',
            route: 'macroEconomy'
          },
          {
            name: '挂图作战',
            route: 'majorProject'
          },
          {
            name: '一总部三基地',
            route: 'threeBase'
          },
          {
            name: '数字经济',
            route: 'digitalEconomy'
          }
        ]
      }, {
        name: '市场监管',
        children: [
          {
            name: '市场监管一张图',
            route: 'marketSupervision'
          },
          {
            name: '市场主体监管',
            route: 'marketSubject'
          },
          {
            name: '食品药品监管',
            route: 'foodAndDrug'
          },
          {
            name: '质量技术监管',
            route: 'massTechnology'
          }
        ]
      }, {
        name: '生态环境',
        children: [
          {
            name: '生态环境一张图',
            route: 'ecology'
          },
          {
            name: '大气环境',
            route: 'atmosphericEnvironment'
          },
          {
            name: '水环境',
            route: 'waterEnvironment'
          }
        ]
      }, {
        name: '民生保障',
        children: [
          {
            name: '民生保障一张图',
            route: 'socialInsure'
          },
          {
            name: '惠民惠农',
            route: 'benefitPeople'
          },
          {
            name: '社会保险',
            route: 'socialInsurance'
          }
        ]
      }, {
        name: '卫生健康',
        route: 'medicalResource'
      }, {
        name: '教育资源',
        route: 'eductionResource'
      },
      /* {
        name: '科教文卫',
        children: [
          // {
          //   name: '科技文化',
          //   route: 'technoCulture'
          // },
          {
            name: '卫生健康',
            route: 'medicalResource'
          },
          {
            name: '教育',
            route: 'eductionResource'
          }
        ]
      }, */ {
        name: '政务服务',
        route: 'governmentService'
      }, {
        name: '城市设施',
        route: 'cityFacilities'
      }
    ]
  },
  {
    name: '智慧旅游平台',
    href: 'http://117.176.87.62:81/bd-chart-lsxlx/'
  },
  {
    name: '数字规划馆',
    href: 'http://10.10.190.132/video/0518.mp4'
  }
  // {
  //   name: '数字规<br />划馆',
  //   route: 'digitalEconomy'
  // }
]
