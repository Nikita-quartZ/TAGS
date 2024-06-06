import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// @ts-ignore
import VueSelect from "vue-select";

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component("v-select", VueSelect)
app.use(createPinia())
app.use(router)

app.mount('#app')
