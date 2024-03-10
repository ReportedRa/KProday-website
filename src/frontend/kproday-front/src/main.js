import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const pinia = createPinia()

const app = createApp(App).use(router).use(pinia)
app.config.globalProperties.$axios = axios;
app.mount('#app')

