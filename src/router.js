import VueRouter from 'vue-router'

import HomeContainer from './components/HomeContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: "/",component: HomeContainer},
    { path: "/home",component: HomeContainer},
  ]
})

// 把路由对象暴露出去
export default router