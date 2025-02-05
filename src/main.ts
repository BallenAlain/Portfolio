import './styles/main.css'

import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    HiExternalLink,
    BiCheckAll,
    FaCode,
    OiCodespaces,
    FaTools,
    AiIdeasRepec,
    MdLocationonSharp,
    AiObpSquare,
    FaAngleDoubleDown
} from "oh-vue-icons/icons";

addIcons(HiExternalLink,
    BiCheckAll,
    FaCode,
    OiCodespaces,
    FaTools,
    AiIdeasRepec,
    MdLocationonSharp,
    AiObpSquare,
    FaAngleDoubleDown);

const app = createApp(App)
app.component("v-icon", OhVueIcon);

app.use(router).use(MotionPlugin)

app.mount('#app')
