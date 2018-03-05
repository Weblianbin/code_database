import Vue from 'vue'
import Router from 'vue-router'
// 主页
import Main from '@/components/Main'
import Index from '@/components/Main/index'
// 2018.1.31
import JSchangeStyle from '@/components/Main/v-html渲染/JSchangeStyle'
import Video from '@/components/Main/video/video.vue'
import betterScroll from '@/components/Main/better-scroll/betterScroll.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: JSchangeStyle
    // },
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Index
        },
        {
          path: 'home',
          component: Index
        },
        {
          path: 'JSchangeStyle',
          component: JSchangeStyle
        },
        {
          path: 'video',
          component: Video
        },
        {
          path: 'betterScroll',
          component: betterScroll
        }
      ]
    }
  ]
})
