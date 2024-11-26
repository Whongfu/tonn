import { defineStore } from "pinia";

/**
 * 全局loading： true开启，false关闭
 * @methods setLoading 设置
 */
const key: string = 'loading'
export const storeLoading = defineStore(key, {
    state: () => ({
        loading: false
    }),
    actions: {
        setLoading(v: boolean) {
            sessionStorage.setItem(key, v.toString())
            this.loading = v
        },
	},
    // 开启数据缓存, 默认：sessionStorage
    persist: {
        enabled: true, // 开启持久化
        strategies: [{
            // key: 'user', // 存储到 localStorage 的键名
            // storage: localStorage, // 使用 localStorage
            paths:[key], // 指定持久化数据       
        }]
    }
})
