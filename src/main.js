import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useStore } from './folders/Store'
import './style.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')

