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

// import 'iview/dist/styles/iview.css';
// import { Page,Icon,Time } from 'iview';
// Vue.component('Page', Page);
// Vue.component('Icon', Icon);
// Vue.component('Time', Time);

import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

import { Layout, Navbar, FormInput, Button } from 'bootstrap-vue/es/components';
Vue.use(Layout);
Vue.use(Navbar);
Vue.use(FormInput);
Vue.use(Button);

// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue);

// 设置请求的根路径
Vue.http.options.root = 'http://localhost';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
// Vue.http.options.emulateJSON = true;

new Vue({
  el: '#app',
  render: h => h(App),
  router,

});
