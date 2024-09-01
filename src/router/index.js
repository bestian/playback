import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'Statues',
    component: () => import('../views/Statues.vue')
  },
  {
    path: '/one_to_one',
    name: 'OneToOne',
    component: () => import('../views/OneToOne.vue')
  },
  {
    path: '/pages',
    name: 'Pages',
    component: () => import('../views/Pages.vue')
  },
  {
    path: '/4elems',
    name: '4Elems',
    component: () => import('../views/4Elems.vue')
  },
  {
    path: '/free',
    name: 'Free',
    component: () => import('../views/Free.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/Courses.vue')
  },
  {
    path: '/core',
    name: 'Core',
    component: () => import('../courses/Core.vue')
  },
  {
    path: '/lev1',
    name: 'Lev1',
    component: () => import('../courses/Lev1.vue')
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/Book.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('../components/Cards.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
