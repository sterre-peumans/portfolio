import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/cww',
      name: 'cww',
      component: () => import('../views/CookingView.vue')
    },
    {
      path: '/teotb',
      name: 'teotb',
      component: () => import('../views/EyeBeholder.vue')
    },
    {
      path: '/dd',
      name: 'dd',
      component: () => import('../views/DrawingDataView.vue')
    },
    {
      path: '/tswne',
      name: 'tswne',
      component: () => import('../views/NakedEyesView.vue')
    },
    {
      path: '/uv',
      name: 'uv',
      component: () => import('../views/UneditedViewsView.vue')
    },
    {
      path: '/mc',
      name: 'mc',
      component: () => import('../views/MassConnectionsView.vue')
    },
    {
      path: '/vq',
      name: 'vq',
      component: () => import('../views/VisualQuestView.vue')
    },
    {
      path: '/j',
      name: 'j',
      component: () => import('../views/JoinedView.vue')
    },
    {
      path: '/otg',
      name: 'otg',
      component: () => import('../views/OnTheGridView.vue')
    },
    {
      path: '/cc',
      name: 'cc',
      component: () => import('../views/CollectionsView.vue')
    },
    {
      path: '/df',
      name: 'df',
      component: () => import('../views/DesignFictionView.vue')
    },
    {
      path: '/eos',
      name: 'eos',
      component: () => import('../views/SolarView.vue')
    },
    {
      path: '/tcd',
      name: 'tcd',
      component: () => import('../views/CosmicDanceView.vue')
    },
    {
      path: '/td',
      name: 'td',
      component: () => import('../views/TouchDesignerView.vue')
    },
    {
      path: '/cd',
      name: 'cd',
      component: () => import('../views/CollectiveData.vue')
    },
    {
      path: '/c',
      name: 'c',
      component: () => import('../views/Connect.vue')
    },
    {
      path: '/ep',
      name: 'ep',
      component: () => import('../views/ExtinctPlants.vue')
    },
    {
      path: '/ttbl',
      name: 'ttbl',
      component: () => import('../views/TwiceBurnedLibrary.vue')
    },
    {
      path: '/sp',
      name: 'sp',
      component: () => import('../views/StudioPhi.vue')
    }
  ],
  scrollBehavior() {
    // Always scroll to the top of the page
    return {left: 0, top: 0};
  },
})

export default router
