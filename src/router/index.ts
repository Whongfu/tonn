import { App } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
const routes = [
    { 
        path: '/', 
        name: 'layout', // 配置组件
        component: ()=>import('@/layouts/index.vue'),
        meta: {
            title: '首页', // 菜单标题
        },
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue')
            }
        ]
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export const setupRouter =(app: App<Element>) => {
    app.use(router)
}