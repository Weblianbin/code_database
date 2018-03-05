import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '../components/Home'
import TuringRobot from '../components/TuringRobot'
import About from '../components/About'
// 引入axios
import axios from 'axios'
// 全局配置axios 然后在vue组件中可以使用this.$axios使用该插件
Vue.prototype.$axios = axios
Vue.use(VueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 重定向
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/robot',
      component:TuringRobot
    },
    {
      path:'/about',
      component:About
    }
  ]
})
