// 入口文件
console.log('OK')

import Vue from 'vue';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router.js';
import App from './App.vue';


// 设置请求的根路径
Vue.http.options.root = 'http://localhost';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
// Vue.http.options.emulateJSON = true;

new Vue({
  el: '#app',
  render: h => h(App),
  router
});