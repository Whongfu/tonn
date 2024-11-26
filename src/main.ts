import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import '@/theme/index.scss' // 主题样式
import { setupElplus } from './element-plus'
import { setupRouter } from './router'
import { setupPinia } from './stores'
import ghooks from '@/hooks/globalhooks'

const setupApp = () => {
    const app = createApp(App)

    // 注入 element-plus
    setupElplus(app)

    // 注入 router
    setupRouter(app)

    // 注入 pinia
    setupPinia(app)

    // 注入全局hooks
    app.use(ghooks)

    app.mount('#app')
}

setupApp()
