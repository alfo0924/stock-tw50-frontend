import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.css' // 可自行新增全域樣式

createApp(App).use(store).use(router).mount('#app')
