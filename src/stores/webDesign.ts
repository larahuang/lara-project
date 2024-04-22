import { defineStore } from 'pinia';
//引入vue Composition API
import { ref, computed } from 'vue';
export const useWebStore = defineStore('web', () => { 
    const webDesign = ref([
        {
            name: '動物園教學網站',
            href: 'https://zoo-eosin.vercel.app/',
            url: 'https://lara-portfolio-all.vercel.app/img/web/web-zoo.png',
             notBook: [
                 { name: 'Vite fullcalendar安裝與事件', href: "https://blog-lara.vercel.app/2022/12/15/vitecalendar/" },
                 { name: 'Vite', href: "https://blog-lara.vercel.app/vue/index.html" },
                {name:'Pinia Composition API',href:"https://blog-lara.vercel.app/2022/12/19/pinia/"}
            ]
        },
        {
            name: '享麵購物車',
            href: 'https://portfolio-gamma-puce-70.vercel.app/noodle/#/index',
            url: 'https://lara-portfolio-all.vercel.app/img/web/web-shop.png',
            notBook: [
                { name: 'Vite', href: "https://blog-lara.vercel.app/vue/index.html" },
                { name: 'Vue Google Sheet Api', href: "https://blog-lara.vercel.app/2022/12/01/googlesheet/" },
                  {name:'Pinia Composition API',href:"https://blog-lara.vercel.app/2022/12/19/pinia/"}
            ]
        },
        {
            name: '聊天室', href: 'https://portfolio-gamma-puce-70.vercel.app/chatroom/#/', url: 'https://lara-portfolio-all.vercel.app/img/web/web-chart.jpg',
            notBook: [
                 {name:'Vue & Firebase Realtime',href:"https://blog-lara.vercel.app/2022/12/02/firebasevue/"}
            ]
        },
        { name: '設備檢測',href:'https://portfolio-gamma-puce-70.vercel.app/device/#/', url: 'https://lara-portfolio-all.vercel.app/img/web/web-develop.png' },
        { name: '天氣Api響應式網站', href: 'https://portfolio-gamma-puce-70.vercel.app/weather/#/', url: 'https://lara-portfolio-all.vercel.app/img/web/web-weather.png',
            notBook: [
                 {name:'Vue 天氣Api',href:"https://blog-lara.vercel.app/2022/12/01/weather/"}
            ] },
        { name: '智慧足部掃描系統', href: 'https://system-footer.vercel.app', url: 'https://lara-portfolio-all.vercel.app/img/web/web-footer.png' },
        {
            name: '發那科官網', href: 'https://www.fanuctaiwan.com.tw', url: 'https://lara-portfolio-all.vercel.app/img/web/web-fanuc.png',
    notBook: [
                 {name:'Vite',href:"https://blog-lara.vercel.app/vue/index.html"}
            ]     },
        { name: 'Php購物網站', href: 'https://www.kycfashions.com', url: 'https://lara-portfolio-all.vercel.app/img/web/web-kyc.png' },
        //   { name: '保田久富官網',href:'https://mybuild.vercel.app', url: 'https://lara-portfolio-all.vercel.app/img/web/web-build.png' },
    ]);
    const resfulApi = ref([
        {
            name: 'Node MongoDB Evaluate Resful Api',
            img: 'https://lara-portfolio-all.vercel.app/img/skill/Mongodb.png',
            url: 'https://api-quiz-project.vercel.app/swagger/',
            web: 'https://i.imgur.com/liusfop.png',
            weburl: 'https://quiz-web-lara.vercel.app', 
            title:'Vite',
            notBook: [
                { name: 'Node', href: "https://blog-lara.vercel.app/2022/12/02/node/" },
                { name: 'Vite', href: "https://blog-lara.vercel.app/vue/index.html" },
                {name:'Pinia Composition API',href:"https://blog-lara.vercel.app/2022/12/19/pinia/"} 
            ]
        },
        {
            name: 'Node MongoDB Games Cart Resful Api',
            img: 'https://lara-portfolio-all.vercel.app/img/skill/Mongodb.png',
            url: 'https://api-game-project.vercel.app/swagger/',
            web: '',
            weburl: 'https://game-web-sage.vercel.app', 
            title:'',
            notBook: [
                { name: 'Node', href: "https://blog-lara.vercel.app/2022/12/02/node/" },
                { name: 'Vite', href: "https://blog-lara.vercel.app/vue/index.html" },
                {name:'Pinia Composition API',href:"https://blog-lara.vercel.app/2022/12/19/pinia/"} 
            ]
        }
    ])
    return {
        webDesign,resfulApi
    }
})
