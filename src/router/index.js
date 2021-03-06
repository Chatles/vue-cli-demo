import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/home';
import Login from '@/components/login';
import Code from '@/components/02-text-javascript'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/code',
      name: 'code',
      component: Code,
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('@/components/tree'),
    }
  ],
});
