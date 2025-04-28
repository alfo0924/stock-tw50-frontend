import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import StockDetail from '../pages/StockDetail.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/stock/:stockId', name: 'StockDetail', component: StockDetail }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
