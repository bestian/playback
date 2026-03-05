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
    path: '/forms',
    name: 'Forms',
    component: () => import('../views/Forms.vue')
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
  },
  {
    path: '/warmups',
    name: 'Warmups',
    component: () => import('../views/Warmups.vue')
  },
  {
    path: '/warmup/release',
    name: 'W01Release',
    component: () => import('../views/warmups/W01_Release.vue')
  },
  {
    path: '/warmup/sculpture',
    name: 'W02Sculpture',
    component: () => import('../views/warmups/W02_Sculpture.vue')
  },
  {
    path: '/warmup/relay',
    name: 'W03Relay',
    component: () => import('../views/warmups/W03_Relay.vue')
  },
  {
    path: '/warmup/exaggerate',
    name: 'W04Exaggerate',
    component: () => import('../views/warmups/W04_Exaggerate.vue')
  },
  {
    path: '/warmup/hypnosis',
    name: 'W05Hypnosis',
    component: () => import('../views/warmups/W05_Hypnosis.vue')
  },
  {
    path: '/warmup/chair',
    name: 'W06Chair',
    component: () => import('../views/warmups/W06_Chair.vue')
  },
  {
    path: '/warmup/drag',
    name: 'W07Drag',
    component: () => import('../views/warmups/W07_Drag.vue')
  },
  {
    path: '/warmup/harmony',
    name: 'W08Harmony',
    component: () => import('../views/warmups/W08_Harmony.vue')
  },
  {
    path: '/warmup/poetry',
    name: 'W09Poetry',
    component: () => import('../views/warmups/W09_Poetry.vue')
  },
  {
    path: '/warmup/drawing',
    name: 'W10Drawing',
    component: () => import('../views/warmups/W10_Drawing.vue')
  },
  {
    path: '/warmup/dragon',
    name: 'W11Dragon',
    component: () => import('../views/warmups/W11_Dragon.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
