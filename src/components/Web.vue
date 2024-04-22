<template>
    <div class="web">
        <div class="web_title">Web Design</div>

        <div class="web-content">
            <ul class="in">
                <li v-for="(item,index) in  webDesign" :key="index">
                  <a :href="item.href" target="_blank">  
                    <img :src="item.url">
                  </a>
                  <div class="name">{{ item.name }}</div>
                  <div class="note_title">筆記本</div>
                  <ul class="notBook">
                    <li v-for="(opt,index) in item.notBook" :key="index">
                     <a :href="opt.href" target="_blank">{{ opt.name }}</a> 
                    </li>
                  </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useWebStore } from '../stores/webDesign';
const store = useWebStore();
const {  webDesign } = storeToRefs(store);

</script>