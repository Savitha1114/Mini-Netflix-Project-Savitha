import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import MovieDetails from './pages/MovieDetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/movie/details/:id', component: MovieDetails } // ✅ FIXED
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
