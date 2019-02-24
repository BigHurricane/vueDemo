import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
Vue.use(VueRouter);


const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    // return { x: 0, y: 100 }
    // return {selector: '.btn'};
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

//全局守卫
/*router.beforeEach((to, from, next) => {
  if(to.path == '/login' || to.path == '/register') {
      next();
  }else{
    alert('你还未登录，请登录');
    next('/login');
  }
});*/

//后置钩子   不常用
/*router.afterEach((to, from) => {
  alert('还未登录，请先登录！')
});*/


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
