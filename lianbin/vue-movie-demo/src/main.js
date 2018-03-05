// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入bootstrap样式文件
import BootCss from './bootstrap/css/bootstrap.css'
Vue.config.productionTip = false
// 把接口地址设置为全局变量
global.ApiUrl = 'http://www.tuling123.com/openapi/api'
global.key = '588881add9714a46af72d77349dde62e'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
