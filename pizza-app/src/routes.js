import Home from './component/home.vue';
import Menu from './component/menu.vue';
import Admin from './component/admin.vue';
import About from './component/about/about.vue';
import login from './component/login.vue';
import register from './component/register.vue';

//二级路由
import Contact from './component/about/contact.vue';
import Delivery from './component/about/delivery.vue';
import History from './component/about/history.vue';
import OrderGide from './component/about/orderGide.vue';


//三级路由
import personName from './component/about/contact/personName.vue';
import phoneNumber from './component/about/contact/phoneNumber.vue';
export const routes = [
  {path: '/', name: 'homeLink', components: {
    default: Home,
    'orderGide': OrderGide,
    'delivery': Delivery,
    'history': History
  }},
  {path: '/menu', name: 'menuLink', component: Menu},
  {path: '/Admin',  name: 'adminLink', component: Admin,
    //beforeEnter: (to, from , next) => {
    //  路由独享守卫
    // next(false);
    // if(to.path == '/login' || to.path == '/register') {
    //   next();
    // }else{
    //   alert('你还未登录，请登录');
    //   next('/login');
    // }
    //}
  },
  {path: '/About', name: 'aboutLink', redirect: 'About/Contact', component: About,children: [
    {path: '/About/Contact', name: 'contactLink', redirect: '/personName', component: Contact,children:[
      {path: '/personName', name: 'personNameLink', component: personName},
      {path: '/phoneNumber', name: 'phoneNumberLink', component: phoneNumber}
    ]},
    {path: '/Delivery', name: 'deliveryLink', component: Delivery},
    {path: '/History', name: 'historyLink', component: History},
    {path: '/OrderGide', name: 'orderGideLink', component: OrderGide}
  ]},
  {path: '/login', name: 'loginLink', component: login},
  {path: '/register', name: 'registerLink', component: register},
  {path: '*', redirect: '/'}
];
