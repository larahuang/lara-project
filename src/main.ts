import { createApp } from 'vue'
import { createPinia } from 'pinia'//引入pinia
//import ElementPlus from 'element-plus'/**/
import 'element-plus/dist/index.css'/**/
import '@/assets/scss/styles.scss';
import router from './router' //引入router
import App from './App.vue'
import VueScrollTo from 'vue-scrollto';
import HoverCss from 'hover.css';
const pinia = createPinia()//pinia
const app = createApp(App)
    app.use(pinia)
    app.use(router) //使用router
    app.use(VueScrollTo)
       // app.use(HoverCss)
   // app.use(ElementPlus)/**/
.mount('#app')
