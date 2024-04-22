<template>
    <header>
        <div class="navbar flex">
            <div class="logo">
                <img src="https://getbootstrap.com/docs/4.6/assets/img/favicons/safari-pinned-tab.svg" />
            </div>
            <div class="menuLists flex">
            <router-link :to="item.href" v-for="(item,index,id) in menuLists" :key="id">{{ item.name }}</router-link>
            </div>
            <div class="lang flex">
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
    <i class="fa-light fa-globe"></i>
                    English
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item v-for="(item,index) in langLists" :key="item.id" :command="index+1">{{ item.name }}</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
        
         
    </header>
     <router-view></router-view>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useNavbarStore } from '../stores/header';
const store = useNavbarStore();
const { menuLists, langLists } = storeToRefs(store);
const { handleCommand } = store;
</script>

<style lang="scss" scoped>
.flex{
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
}
$bg:#333;
$menuLists-color:#851cc2;
:focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
}
header{
    background-color: $bg;
    width: 100%;
    max-width: 100%;
    margin: auto;
    .navbar{
        width: 80%;
        max-width: 80%;
        margin: auto;
        .logo img{
            width: 80px;
        }
    }
    .menuLists{
        width: 50%;
        max-width: 50%;
        a{
            color:$menuLists-color;
            margin: auto 15px;
            &:hover,&:focus{
               color:#ffff; 
            }
        }      
    }
    .lang{
        // width: 200px;
        // height: 40px;
        // background-color: #fff;
        // border: 1px solid #ddd;
        // border-radius: 5px;
        .el-dropdown{
            background-color: #ffff;
            justify-content: center;
            vertical-align: middle;
            padding: 8px 15px;
            border-radius: 10px;
            .el-tooltip__trigger{
                i{
                    color:red
                }
            }
            
        }
      
    }
}

</style>