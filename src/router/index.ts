import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/Layout.vue';
import Layout2 from '../layout/Layout2.vue';
//RouterRecordRaw路由組件對象
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/index',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import('../views/Home.vue'),
                name: 'Home'
            }, 
            
        ]
    },
     {
                path: '/test',
                component: () => import('../views/Test.vue'),
                name: 'Test'
            }, 
    //**404頁面
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('../views/errorPage/404.vue'),
        meta: {title: '404'},
    }
]


// RouterOptions是路由選項類型
const options: RouterOptions = {
 history: createWebHashHistory(),
 routes,
}

// Router是路由對象類型
const router: Router = createRouter(options);
//輸出router
export default router