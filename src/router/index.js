import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import UnAuth from '../containers/UnAuth.vue'
import Auth from '../containers/Auth.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    redirect: () => {
      const currentUser = store.getters.currentUser;
      if (currentUser) {
        return '/chats'
      }
      return '/users'
    }
  },
  {
    path: '',
    name: 'UnAuth',
    component: UnAuth,
    children: [
      {
        path: 'register',
        name: 'Register',
        component: Register,
        meta: {
          guest: true
        }
      },
      {
        path: 'login',
        name: 'Login',
        component: Login,
        meta: {
          guest: true
        }
      },
    ],
    meta: {
      guest: true
    }
  },
  {
    path: '',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: 'chats',
        name: 'Chats',
        component: () => import('../views/Chats.vue'),
        meta: {
          requiresUser: true
        },
      },
      {
        path: 'chat/:id',
        name: 'Chat',
        component: () => import('../views/Chat.vue'),
        meta: {
          requiresUser: true
        },
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, _, next) => {
  if (to.meta?.requiresUser) {
    if (store.getters.currentUser) {
      next();
      return;
    }
    next('/');
    return;
  }
  if (to.meta?.guest) {
    if (!store.getters.currentUser) {
      next();
      return;
    }
    next('/chats');
    return;
  }
  next();
});

export default router
