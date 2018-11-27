import VueRouter from 'vue-router'

import ArticlesContainer from './components/ArticlesContainer.vue'
import AboutContainer from './components/AboutContainer.vue'
import LinksContainer from './components/LinksContainer.vue'
import ArticleDetailContainer from './components/ArticleDetailContainer.vue'
import ArchivesContainer from './components/ArchivesContainer.vue'
 

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: "/",component: ArticlesContainer},
    { path: "/articles",component: ArticlesContainer},
    { path: "/about",component: AboutContainer},
    { path: "/links",component: LinksContainer},
    { path: "/articledetail/:id",component: ArticleDetailContainer},
    { path: "/archives",component: ArchivesContainer},
  ]
})

// 把路由对象暴露出去
export default router