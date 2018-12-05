import Vue from 'vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';
import App from './App.vue';

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

import mavonEditor from 'mavon-editor'
Vue.use(mavonEditor)

import { Layout, Navbar, FormInput, Button } from 'bootstrap-vue/es/components';
Vue.use(Layout);
Vue.use(Navbar);
Vue.use(FormInput);
Vue.use(Button);

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 设置请求的根路径
Vue.http.options.root = 'http://localhost';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
// Vue.http.options.emulateJSON = true;

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
