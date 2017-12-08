// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueResource from 'vue-resource';
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import './common/style/style.css';
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.config.productionTip = false;






new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
// router.push('/staffManage');
// router.push('/userlogin');