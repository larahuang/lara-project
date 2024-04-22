import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
export const useNavbarStore = defineStore('navbar', () => {
    const menuLists = ref([
        { id: '001', name: 'Patform', href: '' },
        {id:'002',name:'Company',href:''}
    ])
    const langLists = ref([
        { id: '001', name: 'Patform', href: '' },
        {id:'002',name:'Company',href:''}
    ])
    const handleCommand = (command: string | number | object) => {
    ElMessage(`click on item ${command}`)
    }
    return {
       menuLists,handleCommand,langLists
    }
 })