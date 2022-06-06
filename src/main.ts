import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

const app = createApp(App)

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
app.use(router)
app.mount('#app')