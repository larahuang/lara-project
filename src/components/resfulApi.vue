<template>
<div class="restfulApi">
      <div class="restful_title"><b>ResfulApi</b></div>
    <ul class="restful-content">
        <li v-for="(item, index) in  resfulApi" :key="index">
            <a class="box" :href="item.url" target="_blank">
            
            <img :src="item.img">
            <div class="name">{{ item.name }}</div>
            
            </a>
            <a :href="item.weburl" target="_blank" v-show="item.weburl !=''">
                <div class="webimg" ><img :class="{hidden: item.web != '' }" v-show="item.web != ''" :src="item.web"></div>
            </a>
         
             <div v-if="item.title != ''" class="skill_title">前端{{item.title}}</div>
            <div class="not_title">筆記本</div>
            <div class="notBook"  v-if="item.notBook?.length != 0">
                <div class="list" v-for="(opt,index) in item.notBook" :key="index">
                         <a :href="opt.href" target="_blank">{{ opt.name }}</a> 
                </div>
            </div>
        </li>
    </ul>

</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useWebStore } from '../stores/webDesign';
const store = useWebStore();
const { resfulApi } = storeToRefs(store);

</script>

<style></style>