import store from '@/store';
import router from './index';

const whiteList = [{name: 'login'}];
router.beforeEach((to, from, next) => {
  if (store.getters.user.id) {
    if (to.path === '/login') {
      next({ name: 'home' });
    } else {
      next();
    }
  } else if(whiteList.findIndex((i) => i.name === to.name) > -1) {
    next();
  } else {
    next({name: 'login'});
    // store.dispatch('GET_CURRENT_USER_INFO').then(() => {
    //   next();
    // });
  }
});
