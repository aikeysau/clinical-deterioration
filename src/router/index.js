import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHashHistory(), // ✅ hash mode works on GitHub Pages
  routes,
})

export default router
