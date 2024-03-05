import { createWebHistory, createRouter } from "vue-router";
import SiteMain from './components/SiteMain.vue'
import GamePage from './components/GamePage.vue'

const routes = [
    { path: '/', name: 'main', component: SiteMain},
    { path: '/game/:id', name: 'game', component: GamePage},
]

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
})

export default router;