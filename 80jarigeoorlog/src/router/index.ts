import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from "@/views/TestView.vue";
import OpstandView from "@/views/OpstandView.vue";
import VredeView from "@/views/VredeView.vue";
import NederlandeView from "@/views/NederlandeView.vue";
import CatFactView from "@/views/CatFactView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/opstand',
    name: 'opstand',
    component: OpstandView
  },
  {
    path: '/Nederlanden',
    name: 'Nederlanden',
    component: NederlandeView
  },
  {
    path: '/vrede',
    name: 'vrede',
    component: VredeView
  },
  {
    path: '/cats',
    name: '/cats',
    component: CatFactView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
