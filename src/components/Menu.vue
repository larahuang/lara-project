<template>
    <div>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="0">Lara PortFolio</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1" >Web Design</el-menu-item>

      </el-menu>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>