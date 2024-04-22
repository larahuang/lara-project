<template>
    <div>
        <div class="about_me">
        <h1>Hi! 我是黃瑄惠
            <ul class="info">
                <li v-for="(item, index) in me" :key="index" >
                    <div>{{ item }}</div>  
                </li>  
            </ul>
        </h1>
        <div class="skill">
            <div><b>前端技術</b></div>
            <ul class="front_skill">
                <li v-for="(item,index) in front_skill" :key="index" >  
                    <img :src="item.img ">
                    <div>{{ item.skill }}</div>
                </li>
            </ul>
            <div><b>後端技術</b></div>
                <ul class="back_skill">
                    <li v-for="(item, index) in back_skill" :key="index" >
                        <img :src="item.img">
                    </li>
                </ul>

            <div><b>工具</b></div>  
                <ul class="tool">
                    <li v-for="(item, index) in tools" :key="index">
                    <a :href="item.url"> <img :src="item.img"></a>
                    </li>
                </ul>  

            <a class="blog" href="https://blog-lara.vercel.app/" target="_blank">部落格筆記本</a>      
        </div>
            
        </div>
       
        <ResfulApi id="shop"/>
        <Web  id="webdesign" />

    </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import Web from '../components/Web.vue';
import ResfulApi from '../components/resfulApi.vue';
//引入storeToRefs => 宣告store = useAboutmeStore() =>解構store,數據取出counter, cardLists
import { storeToRefs } from 'pinia';
//引入Store 
import { useAboutmeStore } from '../stores/aboutme';
//宣告store = useAboutmeStore()
const store = useAboutmeStore();
//解構store,數據取出counter, cardLists
const { me, front_skill, back_skill,tools } = storeToRefs(store);
//const { fetchApi, addCount } = store;

</script>