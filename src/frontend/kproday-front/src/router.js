import { createWebHistory, createRouter } from "vue-router";
import SiteMain from './components/SiteMain.vue'
import GamePage from './components/GamePage.vue'
import UserProfile from './components/UserProfile.vue'
import LoginPage from "./components/LoginPage.vue";

const routes = [
    { path: '/', name: 'main', component: SiteMain},
    { path: '/game/:id', name: 'game', component: GamePage},
    { path: '/game/:id/:category', name: 'category', component: GamePage}, 
    { path: '/user/:id', name: 'profile', component: UserProfile},
    { path: '/user/login', name: 'login', component: LoginPage}
]

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
})

export default router;