<template>
    <div class="oneArea">
        <div class="wave-wrap"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
.oneArea {
    position: relative;
    align-items: center;
    min-height: 100vh;
    background-color: rgb(65, 80, 86);
    overflow: hidden;
 
    &:before, &:after {
        content: "";
        position: absolute;
        left: 50%;
        min-width: 120vw;
        min-height: 120vw;
       // background-color: #fff;
       background-color: #FF3CAC;
        background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
 
    &:before {
        bottom: 15vh;
        border-radius: 35%;
        animation-duration: 10s;
    }
 
    &:after {
        bottom: 12vh;
        opacity: .1;
        min-width: 150vw;
        min-height: 120vw;
        background-color: #ffff;
        border-radius: 47%;
        animation-duration: 10s;
    }
}
 
@keyframes rotate {
    0% {
        transform: translate(-50%, 0) rotateZ(90deg);
        opacity: 0.5;
    }
    50% {
        transform: translate(-50%, -2%) rotateZ(180deg);
         opacity: 0.7;
    }
    100% {
        transform: translate(-50%, 0%) rotateZ(360deg);
        opacity: 1;
    }
}
.wave-wrap {
    position: relative;
    align-items: center;
    width:30px;
    height:300px;
    margin-left: 150px;
    &:before, &:after {
        content: "";
        position: absolute;
        left: 80%;
        min-width: 200vw;
        min-height: 200vw;
        background-color: #333;
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    &:before {
        bottom: 12%;
        border-radius: 45%;
        animation-duration: 10s;
    }
    &:after {
        bottom: 8%;
        opacity: .5;
        border-radius: 47%;
        animation-duration: 10s;
    }
}

@keyframes rotate {
    0% {
        transform: translate(-50%, 0) rotateZ(90deg);
    }
    50% {
        transform: translate(-50%, -2%) rotateZ(180deg);
    }
    100% {
        transform: translate(-50%, 0%) rotateZ(360deg);
    }
} 

h2 {
    position: relative;
    color: #333;
    z-index: 30;
    text-align: center;
    height: 300px;
    line-height: 60px;
    font-size: 40px;
    text-shadow: 3px 3px 2px #999;
}
</style>