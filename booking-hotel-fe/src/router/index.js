import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import RoomList from '../pages/RoomList.vue'

const routes = [
  { path: '/', component: RoomList },
  { path: '/login', component: LoginPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
