import './assets/main.css'

import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiExternalLink } from "oh-vue-icons/icons";

addIcons(HiExternalLink);
const app = createApp(App)
app.component("v-icon", OhVueIcon);

app.use(router).use(MotionPlugin)

app.mount('#app')
