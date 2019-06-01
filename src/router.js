import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
import signUp from './views/signUp.vue'
import Index from './components/index.vue'
const routes = [
  {
    path:'/',
    component:Index,
    redirect: '/sign',
    children:[
      {
        path: '/sign',
        name: 'signUp',
        component: signUp,
        meta: {
          title:'注册'
        }
      }
    ]
  },
];
const router = new Router({
  routes: routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
})
export default router
