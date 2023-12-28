/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-01-20 10:18:51
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-26 14:15:44
 */
const files = require.context('./', false, /\.js$/)
let routers = []
files.keys().forEach((key) => {
  if (key === './index.js' || key === 'city-management.js' || key === 'emergency-command.js') return
  routers.push(...files(key).default)
})
export default routers
