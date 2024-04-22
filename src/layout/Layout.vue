<template>
    <div>
        <div class="menu">
            <div class="logo">Lara PortFolio</div>
            <ul class="ul_menu">   
                <li v-scroll-to="'#shop'">Resfual Api</li>
                <li v-scroll-to="'#webdesign'">WebDesign</li>
            </ul>
        </div>
         <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

</script>