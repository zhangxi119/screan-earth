/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2019-08-29 21:37:35
 * @LastEditors: hangzhang
 * @LastEditTime: 2019-08-29 21:37:49
 */
const files = require.context('./', false, /\.js$/)
const modules = {}
files.keys().forEach((key) => {
  if (key === './index.js') return
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
export default modules
