import { defineStore } from 'pinia';
//引入vue Composition API
import { ref,computed } from 'vue';
//改為Function 寫法與Composition API
export const useAboutmeStore = defineStore('aboutme', ()=>
{
    const me = ref(['通訊地址：台中市西區','銘傳大學商品設計學系畢','行動電話：0918 329245']);
    const front_skill = ref(
        [
            { skill: 'Vite', img: 'https://lara-portfolio-all.vercel.app/img/skill/vite.png' },
            { skill: 'Pinina', img: 'https://lara-portfolio-all.vercel.app/img/skill/pinina.svg' },
         { skill: 'Vue', img:'https://lara-portfolio-all.vercel.app/img/skill/vuelogo.png'},
            { skill: 'Nuxt', img: 'https://lara-portfolio-all.vercel.app/img/skill/nuxt.png' },
            { skill: 'JavaScript', img: 'https://lara-portfolio-all.vercel.app/img/skill/js.png' },
            { skill: 'Jquery', img: 'https://lara-portfolio-all.vercel.app/img/skill/jquery.png' },
            { skill: 'TypeScript', img: 'https://lara-portfolio-all.vercel.app/img/skill/Typescript.svg' },
            {skill:'Scss',img:'https://lara-portfolio-all.vercel.app/img/skill/scss.png'}
        ]);
    const back_skill = ref([
        { skill: 'Node', img: 'https://lara-portfolio-all.vercel.app/img/skill/node.png' },
        { skill: 'Firebase', img: 'https://lara-portfolio-all.vercel.app/img/skill/firebase.png' },
        { skill: 'Mongodb', img: 'https://lara-portfolio-all.vercel.app/img/skill/Mongodb.png' },
    ])
    const tools = ref([
        {
            url: 'https://codepen.io/lara1105huang/pens/public',
            img: 'https://lara-portfolio-all.vercel.app/img/tool/codepel-logo.png'
        },
        {
            url: '',
            img: 'https://lara-portfolio-all.vercel.app/img/tool/git-logo.png'
        },
        {
            url: '',
            img: 'https://lara-portfolio-all.vercel.app/img/tool/posman.png'
        },
        {
            url: '',
            img: 'https://lara-portfolio-all.vercel.app/img/tool/vs-code-logo.png'
        }
    ])
    //必須 return
    return {
        me,front_skill,back_skill,tools
    }
})