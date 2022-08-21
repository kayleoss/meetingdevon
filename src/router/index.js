import { createRouter, createWebHistory } from 'vue-router'
import Scene1 from "../scenes/Scene1.vue"
import Scene2 from "../scenes/Scene2.vue"
import Scene3 from "../scenes/Scene3.vue"
import Credits from "../scenes/Credits.vue"

const routes = [
  {
    path: '/',
    name: 'Scene1',
    component: Scene1
  },
  {
    path: '/chapter2',
    name: 'Scene2',
    component: Scene2
  },
  {
    path: '/chapter3',
    name: 'Scene3',
    component: Scene3
  },
  {
    path: '/credits',
    name: 'Credits',
    component: Credits
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router