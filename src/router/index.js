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
    path: '/co_organize',
    name: 'CoOrganize',
    component: () => import('../views/Co_Organize.vue')
  },
  {
    path: '/act_history',
    name: 'Act_History',
    component: () => import('../views/Act_History.vue')
  },
  {
    path: '/statues',
    name: 'Statues',
    component: () => import('../views/Statues.vue')
  },
  {
    path: '/hand_by_hand',
    name: 'HandByHand',
    component: () => import('../forms/HandByHand.vue')
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
    path: '/about_me',
    name: 'About_Me',
    component: () => import('../views/About.vue')
  },
  {
    path: '/core',
    name: 'Core',
    component: () => import('../courses/Core.vue')
  },
  {
    path: '/lev3',
    name: 'Lev3',
    component: () => import('../courses/Lev3_template.vue')
  },
  {
    path: '/lev2',
    name: 'Lev2',
    component: () => import('../courses/Lev2_template.vue')
  },
  {
    path: '/lev1',
    name: 'Lev1',
    component: () => import('../courses/Lev1_template.vue')
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
