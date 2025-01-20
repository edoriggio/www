import { createApp } from 'vue'
import App from './App.vue'
import router from './router/main.ts'
import {createPinia} from "pinia";
import './assets/index.css'
import 'remixicon/fonts/remixicon.css'

const pinia = createPinia()


createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
